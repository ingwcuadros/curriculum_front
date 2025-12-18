import { FileSearch } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

export default function EmptyState() {
    const t = useTranslations('articles');

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="col-span-full flex flex-col items-center justify-center py-16 px-6 bg-white rounded-2xl border border-slate-100 shadow-sm"
        >
            <div className="w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-[#4C9EEB]/10 to-[#7C4DFF]/10 flex items-center justify-center">
                <FileSearch className="w-8 h-8 text-[#4C9EEB]" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2 text-center">
                {t('noArticlesTitle')}
            </h3>
            <p className="text-sm text-slate-500 text-center max-w-md">
                {t('noArticlesText')}
            </p>
        </motion.div>
    );
}