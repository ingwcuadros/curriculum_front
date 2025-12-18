import { Filter } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function ArticleFilters(

    { categories,
        tags,
        selectedCategory,
        selectedTag,
        onCategoryChange,
        onTagChange
    }: {
        categories: any,
        tags: any,
        selectedCategory: any,
        selectedTag: any,
        onCategoryChange: any,
        onTagChange: any,
    }) {
    const t = useTranslations("articles");

    return (
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-4 lg:p-5">
            <div className="flex flex-col sm:flex-row gap-4">
                {/* Filter Icon - Desktop */}
                <div className="hidden sm:flex items-center gap-2 text-slate-500">
                    <Filter className="w-4 h-4" />
                    <span className="text-sm font-medium">Filtros</span>
                </div>

                {/* Category Filter */}
                <div className="flex-1 flex flex-col gap-1.5">
                    <label
                        htmlFor="category-filter"
                        className="text-xs font-semibold text-slate-600 uppercase tracking-wide"
                    >
                        {t('categoryLabel')}
                    </label>
                    <select
                        id="category-filter"
                        value={selectedCategory}
                        onChange={(e) => onCategoryChange(e.target.value)}
                        className="w-full px-4 py-2.5 text-sm text-slate-700 bg-slate-50 border border-slate-200 rounded-xl hover:border-[#4C9EEB]/50 focus:outline-none focus:ring-2 focus:ring-[#4C9EEB]/50 focus:border-[#4C9EEB] transition-all cursor-pointer appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%236b7280%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-[length:20px] bg-[right_12px_center] bg-no-repeat pr-10"
                    >
                        <option value="">{t('allCategories')}</option>
                        {categories.map((cat: any) => (
                            <option key={cat} value={cat}>{cat}</option>
                        ))}
                    </select>
                </div>

                {/* Tag Filter */}
                <div className="flex-1 flex flex-col gap-1.5">
                    <label
                        htmlFor="tag-filter"
                        className="text-xs font-semibold text-slate-600 uppercase tracking-wide"
                    >
                        {t('tagLabel')}
                    </label>
                    <select
                        id="tag-filter"
                        value={selectedTag}
                        onChange={(e) => onTagChange(e.target.value)}
                        className="w-full px-4 py-2.5 text-sm text-slate-700 bg-slate-50 border border-slate-200 rounded-xl hover:border-[#4C9EEB]/50 focus:outline-none focus:ring-2 focus:ring-[#4C9EEB]/50 focus:border-[#4C9EEB] transition-all cursor-pointer appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%236b7280%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-[length:20px] bg-[right_12px_center] bg-no-repeat pr-10"
                    >
                        <option value="">{t('allTags')}</option>
                        {tags.map((tag: any) => (
                            <option key={tag} value={tag}>{tag}</option>
                        ))}
                    </select>
                </div>
            </div>
        </div>
    );
}