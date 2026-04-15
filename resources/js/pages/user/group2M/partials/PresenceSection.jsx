export default function PresenceSection() {
    return (
        <section className="bg-transparent py-14 sm:py-18">
            <div className="mx-auto max-w-7xl px-4">
                <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
                    <div className="max-w-xl">
                        <div className="inline-flex items-center gap-2 rounded-full border border-alpha/10 bg-alpha-white px-3 py-1 text-[11px] font-semibold tracking-wide text-alpha">
                            <span className="inline-flex h-2 w-2 rounded-full bg-beta" />
                            Présence & rayonnement
                        </div>
                        <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-alpha sm:text-3xl">
                            Proche du public, sur tous les écrans
                        </h2>
                        <p className="mt-3 text-sm leading-6 text-so-gray sm:text-base">
                            Nous accompagnons les audiences partout: télévision,
                            radio, web et réseaux sociaux, avec des formats
                            adaptés aux nouveaux usages.
                        </p>

                        <div className="mt-8 space-y-4">
                            {[
                                {
                                    title: 'TV & Radio',
                                    description:
                                        'Une offre de programmes diversifiée, ancrée dans l’actualité.',
                                },
                                {
                                    title: 'Digital',
                                    description:
                                        'Expériences interactives, replays, et contenus pensés mobile‑first.',
                                },
                                {
                                    title: 'Communautés',
                                    description:
                                        'Écoute, proximité et engagement sur les plateformes sociales.',
                                },
                            ].map((item) => (
                                <div
                                    key={item.title}
                                    className="rounded-2xl bg-beta-white p-5 shadow-sm ring-1 ring-alpha/10"
                                >
                                    <div className="text-sm font-extrabold text-alpha">
                                        {item.title}
                                    </div>
                                    <div className="mt-1 text-sm leading-6 text-so-gray">
                                        {item.description}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative">
                        <div className="pointer-events-none absolute -right-10 -top-10 hidden h-32 w-32 rounded-full bg-beta/15 blur-2xl lg:block" />

                        <div className="overflow-hidden rounded-2xl bg-beta-white shadow-lg shadow-so-black/10 ring-1 ring-alpha/10">
                            <div className="grid lg:grid-cols-[1fr_1.1fr]">
                                <div className="p-6 sm:p-8">
                                    <div className="text-sm font-semibold text-so-gray">
                                        Focus
                                    </div>
                                    <div className="mt-2 text-xl font-extrabold tracking-tight text-alpha">
                                        Une communication accessible
                                    </div>
                                    <p className="mt-3 text-sm leading-6 text-so-gray">
                                        Des contenus pensés pour informer,
                                        expliquer et rapprocher, avec une qualité
                                        éditoriale constante.
                                    </p>

                                    <div className="mt-6 grid grid-cols-2 gap-4">
                                        {[
                                            { label: 'Formats', value: 'Multi' },
                                            { label: 'Qualité', value: 'HD+' },
                                            { label: 'Accès', value: 'Replay' },
                                            { label: 'Support', value: '24/7' },
                                        ].map((kpi) => (
                                            <div
                                                key={kpi.label}
                                                className="rounded-xl bg-alpha-white p-4 ring-1 ring-alpha/5"
                                            >
                                                <div className="text-sm font-extrabold text-alpha">
                                                    {kpi.value}
                                                </div>
                                                <div className="mt-1 text-xs text-so-gray">
                                                    {kpi.label}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="relative min-h-64">
                                    <img
                                        src="https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1400&q=70"
                                        alt="Équipe en réunion"
                                        className="h-full w-full object-cover"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-linear-to-t from-alpha/70 via-alpha/15 to-transparent" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

