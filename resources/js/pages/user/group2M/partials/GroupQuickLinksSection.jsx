export default function GroupQuickLinksSection() {
    return (
        <section className="bg-transparent pb-18 pt-2">
            <div className="mx-auto max-w-7xl px-4">
                <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
                    <div className="max-w-2xl">
                        <div className="inline-flex items-center gap-2 rounded-full border border-alpha/10 bg-alpha-white px-3 py-1 text-[11px] font-semibold tracking-wide text-alpha">
                            <span className="inline-flex h-2 w-2 rounded-full bg-beta" />
                            Ressources
                        </div>
                        <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-alpha sm:text-3xl">
                            Espace dédié
                        </h2>
                        <p className="mt-2 text-sm leading-6 text-so-gray sm:text-base">
                            Accédez rapidement aux rubriques les plus utiles.
                        </p>
                    </div>
                </div>

                <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {[
                        { label: 'Gouvernance', href: '/gouvernance' },
                        { label: 'ESG', href: '/esg' },
                        { label: "Appels d’offres", href: '/appels-offres' },
                        { label: 'Carrières', href: '/carrieres' },
                    ].map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            className="group rounded-2xl bg-alpha-white p-6 shadow-sm ring-1 ring-alpha/10 transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-so-black/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-beta"
                        >
                            <div className="flex items-start justify-between gap-4">
                                <div>
                                    <div className="text-base font-extrabold tracking-tight text-alpha">
                                        {item.label}
                                    </div>
                                    <div className="mt-1 text-sm leading-6 text-so-gray">
                                        Accéder à la rubrique
                                    </div>
                                </div>
                                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-beta-blue/60 text-beta ring-1 ring-beta/10 transition group-hover:bg-beta-blue/80">
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

                            <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-beta">
                                Ouvrir
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

