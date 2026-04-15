export default function QuickAccessSection() {
    return (
        <section className="relative overflow-hidden bg-transparent py-14 sm:py-18">
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute -top-24 -left-28 h-72 w-72 rounded-full bg-beta-blue/60 blur-3xl" />
                <div className="absolute -right-28 -bottom-24 h-72 w-72 rounded-full bg-gold/15 blur-3xl" />
            </div>

            <div className="relative mx-auto max-w-7xl px-4">
                <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
                    <div className="max-w-2xl">
                        <div className="inline-flex items-center gap-2 rounded-full border border-alpha/10 bg-beta-white px-3 py-1 text-[11px] font-semibold tracking-wide text-alpha">
                            <span className="inline-flex h-2 w-2 rounded-full bg-beta" />
                            Liens essentiels
                        </div>
                        <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-alpha sm:text-3xl">
                            Accès Rapides
                        </h2>
                        <p className="mt-2 text-sm leading-6 text-so-gray sm:text-base">
                            Retrouvez en un clic les informations clés et les
                            démarches les plus consultées.
                        </p>
                    </div>
                </div>

                <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {[
                        {
                            label: 'Gouvernance',
                            href: '/gouvernance',
                            description:
                                'Organisation, transparence & décisions.',
                            icon: (
                                <svg
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                    className="h-5 w-5"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M12 2 3 7v2h18V7l-9-5Zm9 9H3v9a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-9Zm-11 8H7v-6h3v6Zm7 0h-3v-6h3v6Z"
                                    />
                                </svg>
                            ),
                        },
                        {
                            label: 'RSE',
                            href: '/rse',
                            description: 'Engagements, impact & initiatives.',
                            icon: (
                                <svg
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                    className="h-5 w-5"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2Zm1 17h-2v-2h2v2Zm1.07-7.75-.9.92A1.49 1.49 0 0 0 13 13.5V15h-2v-2a2.5 2.5 0 0 1 .73-1.77l1.24-1.26A1.5 1.5 0 1 0 10.5 8H8a3.5 3.5 0 1 1 6.07 3.25Z"
                                    />
                                </svg>
                            ),
                        },
                        {
                            label: 'Appels d’offres',
                            href: '/appels-offres',
                            description: 'Consultez les marchés en cours.',
                            icon: (
                                <svg
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                    className="h-5 w-5"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6Zm1 7V3.5L19.5 9H15ZM7 13h10v2H7v-2Zm0 4h10v2H7v-2Zm0-8h6v2H7V9Z"
                                    />
                                </svg>
                            ),
                        },
                        {
                            label: 'Carrières',
                            href: '/carrieres',
                            description: 'Rejoignez nos équipes.',
                            icon: (
                                <svg
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                    className="h-5 w-5"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M10 2h4a2 2 0 0 1 2 2v2h4a2 2 0 0 1 2 2v3H2V8a2 2 0 0 1 2-2h4V4a2 2 0 0 1 2-2Zm0 4h4V4h-4v2Zm12 9v5a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-5h8v1a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-1h8Z"
                                    />
                                </svg>
                            ),
                        },
                    ].map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            className="group relative rounded-2xl bg-beta-white p-6 shadow-sm ring-1 ring-alpha/10 transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-so-black/10 focus-visible:ring-2 focus-visible:ring-beta focus-visible:outline-none"
                        >
                            <div className="flex items-start gap-4">
                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-beta-blue/60 text-beta ring-1 ring-beta/10 transition group-hover:bg-beta-blue/80">
                                    {item.icon}
                                </div>

                                <div className="min-w-0">
                                    <div className="text-base font-extrabold tracking-tight text-alpha">
                                        {item.label}
                                    </div>
                                    <div className="mt-1 text-sm leading-6 text-so-gray">
                                        {item.description}
                                    </div>
                                </div>
                            </div>
                            <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-beta">
                                Accéder
                                <span className="transition group-hover:translate-x-0.5">
                                    →
                                </span>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
