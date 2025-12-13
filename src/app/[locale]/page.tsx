import { useTranslations } from 'next-intl';
import Banner from '@/components/Banner';
import Projects from '@/components/Projects';
import Academic from '@/components/Academic';

export default function HomePage() {
    const t = useTranslations('HomePage');
    return (

        <main className="space-y-8">
            <Banner />
            <Projects />
            <Academic />
            {/* Aquí irán otras secciones */}
        </main>

    );
}