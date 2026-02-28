
import Banner from '@/components/Home/Banner';
import Projects from '@/components/Home/Projects/Projects';
import { getLocale } from 'next-intl/server';
import Achievements from '@/components/Home/Achievements/Achievements';
import CVDownload from '@/components/Home/CV/CVDownload';
import Experience from '@/components/Home/Experience/Experience';
import { BannerSchema, BannerData } from "@/schemas/banner.schema";
import { ProjectsSchema, ProjectsData } from "@/schemas/projects.schema";
import { AchievementsSchema, AchievementsData } from "@/schemas/achievements.schema";
import { ExperienceSchema, ExperienceData } from "@/schemas/experience.schema";
import { CVDownloadSchema, CVDownloadData } from "@/schemas/cvdownload.schema";
import { generateMetadataForLocale } from '@/lib/metadata';
import { getTranslations } from 'next-intl/server';


export async function generateMetadata() {
    const locale = await getLocale();
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://tu-dominio.com';
    const t = await getTranslations({ locale, namespace: 'homeMeta' });
    return generateMetadataForLocale({ locale, baseUrl, title: t('title'), typePage: 'home', description: t('description'), image: t('image') });
}

export default async function HomePage() {
    const locale = await getLocale();

    const [bannerRes, projectsRes, academicRes, experienceRes, cvRes] = await Promise.all([
        fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/v1/banners/64490ccc-fcdb-4549-80d6-2547c402f4d7/?lang=${locale}`, { next: { revalidate: 3600 } }),
        fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/v1/articles/limited?lang=${locale}`, { next: { revalidate: 3600 } }),
        fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/v1/academic-achievements/b154ba94-cf40-4733-9a69-2c81be50fac6?lang=${locale}`, { next: { revalidate: 3600 } }),
        fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/v1/experiences/19db0d33-f6e1-4c6f-8693-79806a2323a1?lang=${locale}`, { next: { revalidate: 3600 } }),
        fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/v1/pdf`, { next: { revalidate: 3600 } }),
    ]);

    const [rawBannerData, rawProjectsData, rawAchievementsData, rawExperienceData, rawCVData] = await Promise.all([
        bannerRes.json(),
        projectsRes.json(),
        academicRes.json(),
        experienceRes.json(),
        cvRes.json()
    ]);
    const bannerData: BannerData = BannerSchema.parse(rawBannerData);
    const projectsData: ProjectsData = ProjectsSchema.parse(rawProjectsData);
    const achievementsData: AchievementsData = AchievementsSchema.parse(rawAchievementsData);
    const experienceData: ExperienceData = ExperienceSchema.parse(rawExperienceData);
    const cvData: CVDownloadData = CVDownloadSchema.parse(rawCVData);
    return (
        <main className="bg-[#0B0F14]">
            <Banner data={bannerData} />
            <Projects data={projectsData} />
            <Achievements data={achievementsData} />
            <Experience data={experienceData} />
            <CVDownload data={cvData} />
        </main>
    );
}