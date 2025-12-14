
import Banner from '@/components/Home/Banner';
import Projects from '@/components/Home/Projects/Projects';
import Academic from '@/components/Academic';
import { getLocale } from 'next-intl/server';

export default async function HomePage() {
    const locale = await getLocale();

    const [bannerRes, projectsRes, academicRes] = await Promise.all([
        fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/banner${locale}.json`, { next: { revalidate: 3600 } }),
        fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/projects${locale}.json`, { next: { revalidate: 3600 } }),
        fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/academic${locale}.json`, { next: { revalidate: 3600 } })
    ]);

    const [bannerData, projectsData, academicData] = await Promise.all([
        bannerRes.json(),
        projectsRes.json(),
        academicRes.json()
    ]);

    return (
        <main className="bg-[#0B0F14]">
            <Banner data={bannerData} />
            <Projects data={projectsData} />

            {/* Aquí irán otras secciones */}
        </main>
    );
}