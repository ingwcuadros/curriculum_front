// src/app/api/contact/route.ts
import { NextResponse } from 'next/server';


const AUTH_URL = process.env.EXTERNAL_API_AUTH_URL!;
const CONTACT_URL = process.env.EXTERNAL_API_CONTACT_URL!;
const CLIENT_ID = process.env.EXTERNAL_API_CLIENT_ID!;
const CLIENT_SECRET = process.env.EXTERNAL_API_CLIENT_SECRET!;
const RECAPTCHA_SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY!;

export async function POST(req: Request) {
    try {
        const { name, email, message, recaptchaToken } = await req.json();

        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'Faltan campos obligatorios.' },
                { status: 400 }
            );
        }


        if (!recaptchaToken) {
            return NextResponse.json(
                { error: "Falta el token de reCAPTCHA." },
                { status: 400 }
            );
        }

        const recaptchaRes = await fetch(
            "https://www.google.com/recaptcha/api/siteverify",
            {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: `secret=${RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`,
            }
        );

        const recaptchaData = await recaptchaRes.json();


        // Para v3: comprobar success y score
        if (!recaptchaData.success || (recaptchaData.score ?? 1) < 0.5) {
            return NextResponse.json(
                { error: "Falló la validación de reCAPTCHA." },
                { status: 400 }
            );
        }


        const authRes = await fetch(AUTH_URL, {

            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: CLIENT_ID,
                password: CLIENT_SECRET,
            }),
        });


        // 🔍 Log completo del response


        // 🔥 Leemos el body ANTES de validar authRes.ok
        const authText = await authRes.text();


        // Intentar parsear JSON (por si aplica)
        let authJson;
        try {
            authJson = JSON.parse(authText);
        } catch {
            console.log('[AUTH] body no es JSON');
        }

        if (!authRes.ok) {
            console.error('[AUTH] Error al autenticarse. Status:', authRes.status);
            return NextResponse.json(
                {
                    error: 'Error al autenticarse',
                    detail: authJson || authText
                },
                { status: 502 }
            );
        }

        const token = authJson?.accessToken || authJson?.token;



        if (!token) {
            return NextResponse.json(
                { error: 'El API externo no devolvió un token.' },
                { status: 502 }
            );
        }


        const contactRes = await fetch(CONTACT_URL, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, message })
        });




        if (!contactRes.ok) {
            return NextResponse.json(
                { error: 'Error enviando los datos al API externo.' },
                { status: 502 }
            );
        }

        const result = await contactRes.json().catch(() => ({}));

        return NextResponse.json(
            { ok: true, result },
            { status: 200 }
        );
    } catch (err) {
        console.error('Error al intentar enviar el formulario:', err);
        return NextResponse.json(
            { error: 'Error interno del servidor.' },
            { status: 500 }
        );
    }
}