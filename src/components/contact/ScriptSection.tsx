export default function ScriptSection() {
    return (
        <script
            src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
        ></script>
    );
}