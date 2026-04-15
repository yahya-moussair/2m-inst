import { getToneClass } from '@/pages/user/medias/partials/uiTones';

export default function MediaCard({ media }) {
    return (
        <a
            href={media.href ?? '/medias'}
            className="group relative overflow-hidden rounded-2xl bg-beta-white shadow-sm ring-1 ring-alpha/10 transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-so-black/10 focus-visible:ring-2 focus-visible:ring-beta focus-visible:outline-none"
        >
            <div className="relative h-52 overflow-hidden">
                <img
                    src={media.image}
                    alt={media.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                    loading="lazy"
                />
                <div className="absolute inset-0 bg-linear-to-t from-alpha/80 via-alpha/25 to-transparent" />

                <div className="absolute top-4 left-4 inline-flex items-center gap-2 rounded-full bg-beta-white/90 px-3 py-1 text-[11px] font-semibold text-alpha ring-1 ring-alpha/10">
                    <span className="inline-flex h-2 w-2 rounded-full bg-beta" />
                    {media.category}
                </div>
            </div>

            <div className="p-6">
                <div className="flex items-start justify-between gap-3">
                    <div>
                        <div className="text-lg font-extrabold tracking-tight text-alpha">
                            {media.title}
                        </div>
                        <div className="mt-1 text-sm leading-6 text-so-gray">
                            {media.desc}
                        </div>
                    </div>
                    <div className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-full bg-beta-blue/60 text-beta ring-1 ring-beta/10 transition group-hover:bg-beta-blue/80">
                        <svg
                            viewBox="0 0 20 20"
                            aria-hidden="true"
                            className="h-4 w-4"
                        >
                            <path
                                fill="currentColor"
                                d="M11.2 4.2a1 1 0 0 1 1.4 0l5 5a1 1 0 0 1 0 1.4l-5 5a1 1 0 1 1-1.4-1.4l3.3-3.3H3a1 1 0 1 1 0-2h11.1l-3.0-3.0a1 1 0 0 1 0-1.4Z"
                            />
                        </svg>
                    </div>
                </div>

                <div className="mt-5 flex flex-wrap items-center gap-2">
                    {(media.actions ?? []).slice(0, 2).map((action) => (
                        <span
                            key={action.label}
                            className={[
                                'inline-flex items-center rounded-full px-3 py-1 text-[11px] font-semibold ring-1',
                                getToneClass(action.tone),
                            ].join(' ')}
                        >
                            {action.label}
                        </span>
                    ))}
                </div>

                <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-beta">
                    Voir le profil
                    <span className="transition group-hover:translate-x-0.5">
                        →
                    </span>
                </div>
            </div>
        </a>
    );
}

