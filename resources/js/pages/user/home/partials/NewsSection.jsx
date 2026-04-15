export default function NewsSection() {
    return (
        <section className="relative overflow-hidden bg-transparent py-14 sm:py-18">
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute -top-24 -left-28 h-72 w-72 rounded-full bg-beta-blue/60 blur-3xl" />
                <div className="absolute -right-28 -bottom-24 h-72 w-72 rounded-full bg-gold/20 blur-3xl" />
            </div>

            <div className="relative mx-auto max-w-7xl px-4">
                <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
                    <div className="max-w-2xl">
                        <div className="inline-flex items-center gap-2 rounded-full border border-alpha/10 bg-alpha-white px-3 py-1 text-[11px] font-semibold tracking-wide text-alpha">
                            <span className="inline-flex h-2 w-2 rounded-full bg-beta" />
                            Communiqués · Temps forts
                        </div>
                        <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-alpha sm:text-3xl">
                            Actualités Institutionnelles
                        </h2>
                        <p className="mt-2 text-sm leading-6 text-so-gray sm:text-base">
                            Les dernières informations, publications et annonces
                            officielles.
                        </p>
                    </div>

                    <a
                        href="/actualites"
                        className="inline-flex items-center justify-center rounded-lg bg-beta px-4 py-2.5 text-sm font-semibold text-beta-white shadow-sm ring-1 ring-beta/20 transition hover:bg-beta/90 focus-visible:ring-2 focus-visible:ring-beta focus-visible:ring-offset-2 focus-visible:ring-offset-beta-white focus-visible:outline-none"
                    >
                        Voir les actualités
                        <svg
                            viewBox="0 0 20 20"
                            aria-hidden="true"
                            className="ml-2 h-4 w-4"
                        >
                            <path
                                fill="currentColor"
                                d="M11.2 4.2a1 1 0 0 1 1.4 0l5 5a1 1 0 0 1 0 1.4l-5 5a1 1 0 1 1-1.4-1.4l3.3-3.3H3a1 1 0 1 1 0-2h11.1l-3.0-3.0a1 1 0 0 1 0-1.4Z"
                            />
                        </svg>
                    </a>
                </div>

                <div className="mt-8 grid gap-6 lg:grid-cols-3">
                    {[
                        {
                            title: 'SOREAD 2M renforce ses engagements en faveur de la diversité culturelle.',
                            category: 'Communiqué',
                            date: '2026',
                            img: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=70',
                        },
                        {
                            title: 'Lancement de la plateforme digitale “Building Morocco”.',
                            category: 'Digital',
                            date: '2026',
                            img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=70',
                        },
                        {
                            title: 'Rapport annuel 2023 : SOREAD 2M, l’action au service du public.',
                            category: 'Publication',
                            date: '2023',
                            img: 'https://images.unsplash.com/photo-1521791055366-0d553872125f?auto=format&fit=crop&w=1400&q=70',
                        },
                    ].map((news) => (
                        <a
                            key={news.title}
                            href="/actualites"
                            className="group relative overflow-hidden rounded-2xl bg-beta-white shadow-sm ring-1 ring-alpha/10 transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-so-black/10 focus-visible:ring-2 focus-visible:ring-beta focus-visible:outline-none"
                        >
                            <div className="relative h-56 overflow-hidden">
                                <img
                                    src={news.img}
                                    alt={news.title}
                                    className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-alpha/80 via-alpha/25 to-transparent" />

                                <div className="absolute top-4 left-4 inline-flex items-center gap-2 rounded-full bg-beta-white/90 px-3 py-1 text-[11px] font-semibold text-alpha ring-1 ring-alpha/10">
                                    <span className="inline-flex h-2 w-2 rounded-full bg-beta" />
                                    {news.category}
                                </div>
                            </div>

                            <div className="p-6">
                                <div className="flex items-center justify-between gap-3">
                                    <div className="text-xs font-semibold text-so-gray">
                                        {news.date}
                                    </div>
                                    <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-beta-blue/60 text-beta ring-1 ring-beta/10 transition group-hover:bg-beta-blue/80">
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

                                <div className="mt-3 text-lg leading-snug font-extrabold tracking-tight text-alpha">
                                    {news.title}
                                </div>

                                <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-beta">
                                    Lire plus
                                    <span className="transition group-hover:translate-x-0.5">
                                        →
                                    </span>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
