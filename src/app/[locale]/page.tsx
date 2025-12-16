
import Banner from '@/components/Home/Banner';
import Projects from '@/components/Home/Projects/Projects';
import { getLocale } from 'next-intl/server';
import Achievements from '@/components/Home/Achievements/Achievements';
import CVDownload from '@/components/Home/CV/CVDownload';
import Experience from '@/components/Home/Experience/Experience';

export default async function HomePage() {
    const locale = await getLocale();

    const [bannerRes, projectsRes, academicRes, experienceRes, cvRes] = await Promise.all([
        fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/banner${locale}.json`, { next: { revalidate: 3600 } }),
        fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/projects${locale}.json`, { next: { revalidate: 3600 } }),
        fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/academic${locale}.json`, { next: { revalidate: 3600 } }),
        fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/experience${locale}.json`, { next: { revalidate: 3600 } }),
        fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/cvdownload.json`, { next: { revalidate: 3600 } }),
    ]);

    const [bannerData, projectsData, academicData, experienceData, cvData] = await Promise.all([
        bannerRes.json(),
        projectsRes.json(),
        academicRes.json(),
        experienceRes.json(),
        cvRes.json()
    ]);

    return (
        <main className="bg-[#0B0F14]">
            <Banner data={bannerData} />
            <Projects data={projectsData} />
            <Achievements data={academicData} />
            <Experience data={experienceData} />
            <CVDownload data={cvData} />

            {/* Aquí irán otras secciones */}
        </main>
    );
}