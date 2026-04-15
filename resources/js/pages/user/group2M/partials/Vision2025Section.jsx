export default function Vision2025Section() {
    return (
        <section className="bg-transparent py-14 sm:py-18">
            <div className="mx-auto max-w-7xl px-4">
                <div className="overflow-hidden rounded-3xl bg-linear-to-br from-beta via-beta/85 to-alpha-blue shadow-xl shadow-so-black/10 ring-1 ring-beta/20">
                    <div className="grid gap-8 p-8 sm:p-10 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 rounded-full border border-beta-white/20 bg-beta-white/10 px-3 py-1 text-[11px] font-semibold tracking-wide text-beta-white/90">
                                <span className="inline-flex h-2 w-2 rounded-full bg-beta-white" />
                                Vision stratégique
                            </div>
                            <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-beta-white sm:text-3xl">
                                Vision Stratégique 2025
                            </h2>
                            <p className="mt-3 max-w-2xl text-sm leading-6 text-beta-white/80 sm:text-base">
                                Une feuille de route orientée qualité,
                                innovation, proximité et développement durable,
                                pour amplifier notre impact.
                            </p>

                            <div className="mt-6 grid gap-3 sm:grid-cols-2">
                                {[
                                    'Renforcer l’offre d’information',
                                    'Accélérer la transformation digitale',
                                    'Soutenir la création et les talents',
                                    'Développer l’accessibilité multi‑écrans',
                                ].map((item) => (
                                    <div
                                        key={item}
                                        className="flex items-start gap-3 rounded-2xl bg-beta-white/10 p-4 ring-1 ring-beta-white/15"
                                    >
                                        <div className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-beta-white/15 text-beta-white">
                                            <svg
                                                viewBox="0 0 24 24"
                                                aria-hidden="true"
                                                className="h-4 w-4"
                                            >
                                                <path
                                                    fill="currentColor"
                                                    d="M9 16.2 4.8 12l1.4-1.4L9 13.4l8.4-8.4L18.8 6.4 9 16.2Z"
                                                />
                                            </svg>
                                        </div>
                                        <div className="text-sm font-semibold text-beta-white">
                                            {item}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="rounded-2xl bg-beta-white/10 p-6 ring-1 ring-beta-white/15">
                            <div className="text-sm font-semibold text-beta-white/80">
                                Indicateurs clés
                            </div>
                            <div className="mt-5 space-y-4">
                                {[
                                    {
                                        label: 'Expérience',
                                        value: 'Omnicanal',
                                        hint: 'TV · Radio · Web · Social',
                                    },
                                    {
                                        label: 'Innovation',
                                        value: 'Formats',
                                        hint: 'Nouveaux usages & storytelling',
                                    },
                                    {
                                        label: 'Impact',
                                        value: 'Public',
                                        hint: 'Proximité & confiance',
                                    },
                                ].map((row) => (
                                    <div
                                        key={row.label}
                                        className="rounded-2xl bg-alpha/20 p-5 ring-1 ring-beta-white/10"
                                    >
                                        <div className="flex items-baseline justify-between gap-3">
                                            <div className="text-xs font-semibold text-beta-white/70">
                                                {row.label}
                                            </div>
                                            <div className="text-lg font-extrabold text-beta-white">
                                                {row.value}
                                            </div>
                                        </div>
                                        <div className="mt-2 text-xs text-beta-white/65">
                                            {row.hint}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <a
                                href="/actualites"
                                className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-beta-white px-5 py-3 text-sm font-semibold text-beta shadow-sm ring-1 ring-beta-white/20 transition hover:bg-beta-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-beta-white focus-visible:ring-offset-2 focus-visible:ring-offset-alpha-blue"
                            >
                                En savoir plus
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
                    </div>
                </div>
            </div>
        </section>
    );
}

