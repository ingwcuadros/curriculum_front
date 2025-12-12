
import { useTranslations } from "next-intl";

export default function Footer() {
    const t = useTranslations("navigation");

    return (
        <footer className="bg-gray-900 text-gray-300 p-4 text-center">
            <p>&copy; 2025 - {t("home")} | {t("articles")} | {t("contact")}</p>
        </footer>
    );
}