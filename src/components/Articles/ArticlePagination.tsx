import { useTranslations } from 'next-intl';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function ArticlePagination({
    currentPage,
    totalPages,
    onPageChange
}: {
    currentPage: any,
    totalPages: any,
    onPageChange: any
}
) {
    const t = useTranslations('articles');

    /* const pageText = t('pageOf')
        .replace('{page}', currentPage)
        .replace('{totalPages}', totalPages);
 */
    const pageText = t('pageOf') + ' ' + currentPage + ' ' + t('of') + ' ' + totalPages
    const canGoPrev = currentPage > 1;
    const canGoNext = currentPage < totalPages;

    return (
        <nav
            className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white rounded-2xl border border-slate-100 shadow-sm p-4 lg:p-5"
            aria-label="Pagination"
        >
            {/* Page Info */}
            <p className="text-sm text-slate-600 font-medium order-2 sm:order-1">
                {pageText}
            </p>

            {/* Navigation Buttons */}
            <div className="flex items-center gap-3 order-1 sm:order-2">
                <button
                    onClick={() => onPageChange(currentPage - 1)}
                    disabled={!canGoPrev}
                    className={`inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-xl transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4C9EEB] focus-visible:ring-offset-2 ${canGoPrev
                        ? 'text-slate-700 bg-slate-100 hover:bg-slate-200 hover:text-[#4C9EEB]'
                        : 'text-slate-400 bg-slate-50 cursor-not-allowed'
                        }`}
                    aria-label={t('previous')}
                >
                    <ChevronLeft className="w-4 h-4" />
                    <span className="hidden sm:inline">{t('previous')}</span>
                </button>

                {/* Page Numbers - Desktop */}
                <div className="hidden md:flex items-center gap-1">
                    {Array.from({ length: totalPages }, (_, i) => i + 1)
                        .filter(page => {
                            // Show first, last, current, and adjacent pages
                            return page === 1 ||
                                page === totalPages ||
                                Math.abs(page - currentPage) <= 1;
                        })
                        .reduce((acc: any, page, idx, arr) => {
                            // Add ellipsis between gaps
                            if (idx > 0 && page - arr[idx - 1] > 1) {
                                acc.push('...');
                            }
                            acc.push(page);
                            return acc;
                        }, [])
                        .map((item: any, idx: any) => (
                            item === '...' ? (
                                <span key={`ellipsis-${idx}`} className="px-2 text-slate-400">...</span>
                            ) : (
                                <button
                                    key={item}
                                    onClick={() => onPageChange(item)}
                                    className={`w-10 h-10 text-sm font-semibold rounded-xl transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4C9EEB] ${currentPage === item
                                        ? 'bg-gradient-to-r from-[#4C9EEB] to-[#7C4DFF] text-white shadow-lg shadow-[#4C9EEB]/30'
                                        : 'text-slate-600 hover:bg-slate-100'
                                        }`}
                                    aria-current={currentPage === item ? 'page' : undefined}
                                >
                                    {item}
                                </button>
                            )
                        ))}
                </div>

                <button
                    onClick={() => onPageChange(currentPage + 1)}
                    disabled={!canGoNext}
                    className={`inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-xl transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4C9EEB] focus-visible:ring-offset-2 ${canGoNext
                        ? 'text-slate-700 bg-slate-100 hover:bg-slate-200 hover:text-[#4C9EEB]'
                        : 'text-slate-400 bg-slate-50 cursor-not-allowed'
                        }`}
                    aria-label={t('next')}
                >
                    <span className="hidden sm:inline">{t('next')}</span>
                    <ChevronRight className="w-4 h-4" />
                </button>
            </div>
        </nav>
    );
}
