export const FIELD_CONFIG = {
    es: {
        name: {
            label: "Name",
            placeholder: "Tu nombre",
            type: "text",
            validate: (v) =>
                !v || v.trim().length < 2 || v.trim().length > 80
                    ? "Ingresa un nombre válido (2–80 caracteres)."
                    : null,
        },
        email: {
            label: "Email",
            placeholder: "tu@email.com",
            type: "email",
            validate: (v) =>
                !v || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)
                    ? "Ingresa un email válido."
                    : null,
        },
        message: {
            label: "Mensaje",
            placeholder: "Cuéntame brevemente tu necesidad o proyecto…",
            type: "textarea",
            validate: (v) =>
                !v || v.trim().length < 20
                    ? "El mensaje debe tener al menos 20 caracteres."
                    : null,
        }
    },
    en: {
        name: {
            label: "Name",
            placeholder: "Your name",
            type: "text",
            validate: (v) =>
                !v || v.trim().length < 2 || v.trim().length > 80
                    ? "Please enter a valid name (2–80 characters)."
                    : null,
        },
        email: {
            label: "Email",
            placeholder: "your@email.com",
            type: "email",
            validate: (v) =>
                !v || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)
                    ? "Please enter a valid email address."
                    : null,
        },
        message: {
            label: "Message",
            placeholder: "Tell me briefly about your need or project…",
            type: "textarea",
            validate: (v) =>
                !v || v.trim().length < 20
                    ? "The message must be at least 20 characters long."
                    : null,
        }
    }
};
