export default function ArticleCardSkeleton() {
    return (
        <div className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm animate-pulse">
            {/* Image Skeleton */}
            <div className="aspect-video bg-slate-200" />

            {/* Content Skeleton */}
            <div className="p-5 lg:p-6 space-y-4">
                {/* Meta */}
                <div className="flex items-center gap-2">
                    <div className="h-6 w-24 bg-slate-200 rounded-full" />
                    <div className="h-4 w-20 bg-slate-200 rounded" />
                </div>

                {/* Title */}
                <div className="space-y-2">
                    <div className="h-5 w-full bg-slate-200 rounded" />
                    <div className="h-5 w-3/4 bg-slate-200 rounded" />
                </div>

                {/* Description */}
                <div className="h-4 w-5/6 bg-slate-200 rounded" />

                {/* Tags */}
                <div className="flex gap-2">
                    <div className="h-5 w-16 bg-slate-200 rounded-full" />
                    <div className="h-5 w-14 bg-slate-200 rounded-full" />
                    <div className="h-5 w-18 bg-slate-200 rounded-full" />
                </div>

                {/* CTA */}
                <div className="h-5 w-28 bg-slate-200 rounded" />
            </div>
        </div>
    );
}