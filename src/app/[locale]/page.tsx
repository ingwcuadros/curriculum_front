
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
    const t = await getTranslations({ locale, namespace: 'HomePage' });
    return generateMetadataForLocale({ locale, baseUrl, title: t('title'), description: t('description') });
}

export default async function HomePage() {
    const locale = await getLocale();

    const [bannerRes, projectsRes, academicRes, experienceRes, cvRes] = await Promise.all([
        fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/banner${locale}.json`, { next: { revalidate: 3600 } }),
        fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/projects${locale}.json`, { next: { revalidate: 3600 } }),
        fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/academic${locale}.json`, { next: { revalidate: 3600 } }),
        fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/experience${locale}.json`, { next: { revalidate: 3600 } }),
        fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/cvdownload.json`, { next: { revalidate: 3600 } }),
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