const timelineItems = [
    {
        year: '1989',
        title: 'Création',
        icon: (
            <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
                <path
                    fill="currentColor"
                    d="M12 2 3 7v2h18V7l-9-5Zm9 9H3v7a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7ZM7 18v-5h3v5H7Zm7 0v-5h3v5h-3Z"
                />
            </svg>
        ),
        description:
            'Lancement d’une vision moderne de l’audiovisuel au service du public.',
    },
    {
        year: '2007',
        title: 'Expansion',
        icon: (
            <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
                <path
                    fill="currentColor"
                    d="M3 3h8v8H3V3Zm10 0h8v8h-8V3ZM3 13h8v8H3v-8Zm10 4h2v2h-2v-2Zm0-4h8v2h-8v-2Zm4 4h4v4h-4v-4Z"
                />
            </svg>
        ),
        description:
            'Développement de l’offre et montée en puissance des formats et des talents.',
    },
    {
        year: '2016',
        title: 'Transformation digitale',
        icon: (
            <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
                <path
                    fill="currentColor"
                    d="M7 2h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Zm5 18a1.5 1.5 0 1 0-1.5-1.5A1.5 1.5 0 0 0 12 20Z"
                />
            </svg>
        ),
        description:
            'Accélération sur le numérique, engagement communautaire et nouveaux usages.',
    },
    {
        year: '2025',
        title: 'Cap stratégique',
        icon: (
            <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
                <path
                    fill="currentColor"
                    d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2Zm4.7 7.3-5.4 8.1a1 1 0 0 1-.73.44 1 1 0 0 1-.82-.23l-2.8-2.4a1 1 0 1 1 1.3-1.5l1.9 1.6 4.6-6.9a1 1 0 1 1 1.66.92Z"
                />
            </svg>
        ),
        description:
            'Renforcer l’impact, l’accessibilité et l’innovation éditoriale multi‑plateforme.',
    },
];

export default function GroupTimelineSection() {
    return (
        <section className="relative overflow-hidden bg-transparent py-14 sm:py-18">
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute -left-28 -top-24 h-72 w-72 rounded-full bg-beta-blue/60 blur-3xl" />
                <div className="absolute -bottom-24 -right-28 h-72 w-72 rounded-full bg-gold/15 blur-3xl" />
            </div>

            <div className="mx-auto max-w-7xl px-4">
                <div className="mx-auto max-w-2xl text-center">
                    <div className="inline-flex items-center gap-2 rounded-full border border-alpha/10 bg-alpha-white px-3 py-1 text-[11px] font-semibold tracking-wide text-alpha">
                        <span className="inline-flex h-2 w-2 rounded-full bg-beta" />
                        Repères
                    </div>
                    <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-alpha sm:text-3xl">
                        Notre Histoire
                    </h2>
                    <p className="mt-2 text-sm leading-6 text-so-gray sm:text-base">
                        Les étapes clés qui ont façonné l’identité du groupe.
                    </p>
                </div>

                <div className="mx-auto mt-10 max-w-5xl">
                    <ol className="relative">
                        {/* vertical rail (mobile) */}
                        <div className="absolute left-5 top-0 hidden h-full w-px bg-alpha/10 sm:block lg:hidden" />

                        {/* center rail (lg+) */}
                        <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-linear-to-b from-beta/40 via-alpha/10 to-beta/20 lg:block" />

                        <div className="space-y-6">
                            {timelineItems.map((item, index) => {
                                const isLeft = index % 2 === 0;

                                return (
                                    <li
                                        key={item.year}
                                        className="relative"
                                    >
                                        <div className="grid gap-4 lg:grid-cols-2 lg:gap-10">
                                            <div
                                                className={[
                                                    'lg:flex',
                                                    isLeft
                                                        ? 'lg:justify-end'
                                                        : 'lg:order-2 lg:justify-start',
                                                ].join(' ')}
                                            >
                                                <div className="w-full rounded-2xl bg-beta-white p-6 shadow-sm ring-1 ring-alpha/10 transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-so-black/10">
                                                    <div className="flex items-start justify-between gap-4">
                                                        <div className="inline-flex items-center gap-2 rounded-full bg-beta-blue/60 px-3 py-1 text-[11px] font-semibold text-beta ring-1 ring-beta/10">
                                                            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-beta/15">
                                                                {item.icon}
                                                            </span>
                                                            {item.title}
                                                        </div>
                                                        <div className="text-sm font-semibold text-so-gray">
                                                            {item.year}
                                                        </div>
                                                    </div>
                                                    <div className="mt-4 text-sm leading-6 text-alpha">
                                                        {item.description}
                                                    </div>
                                                </div>
                                            </div>

                                            <div
                                                className={[
                                                    'hidden lg:block',
                                                    isLeft ? 'lg:order-2' : '',
                                                ].join(' ')}
                                            />
                                        </div>

                                        {/* dot */}
                                        <div className="absolute left-5 top-7 -ml-2 hidden h-4 w-4 rounded-full bg-beta ring-4 ring-beta-white sm:block lg:hidden" />
                                        <div className="absolute left-1/2 top-7 hidden h-4 w-4 -translate-x-1/2 rounded-full bg-beta ring-4 ring-beta-white lg:block" />
                                    </li>
                                );
                            })}
                        </div>
                    </ol>
                </div>
            </div>
        </section>
    );
}

