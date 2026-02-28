
import Contact from "@/components/contact/Contact";
import { generateMetadataForLocale } from "@/lib/metadata";
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params }: { params: { locale: string; } }) {

    const resolvedParams = await params;
    const { locale } = resolvedParams;
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://tu-dominio.com';
    const t = await getTranslations({ locale, namespace: 'contactMeta' });
    return generateMetadataForLocale({ locale, baseUrl, title: t('title'), typePage: 'contact', description: t('description'), image: t('image'), slug: '' });

}


export default function ContactPage() {
    return (

        <Contact />

    );
}