export default function GroupHeroSection() {
    return (
        <section className="relative h-screen overflow-hidden bg-alpha">
            <div className="pointer-events-none absolute inset-0">
                <img
                    src="https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=2400&q=70"
                    alt=""
                    className="h-full w-full object-cover opacity-20"
                    loading="lazy"
                />
                <div className="absolute inset-0 bg-linear-to-b from-beta-white/10 via-beta-blue/40 to-alpha/70" />
                <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-beta/20 blur-3xl" />
                <div className="absolute -right-24 -bottom-28 h-72 w-72 rounded-full bg-gold/20 blur-3xl" />
            </div>

            <div className="relative flex h-screen flex-col">
                <div className="mx-auto flex w-full flex-1 items-center max-w-7xl px-4 pb-24 pt-16 sm:pb-28">
                    <div className="w-full">
                        <div className="mx-auto max-w-3xl text-center">
                            <div className="inline-flex items-center gap-2 rounded-full border border-beta-white/15 bg-beta-white/5 px-3 py-1 text-[11px] font-semibold tracking-wide text-beta-white/90 shadow-sm">
                                <span className="inline-flex h-2 w-2 rounded-full bg-beta" />
                                Le Groupe · SOREAD 2M
                            </div>

                            <h1 className="mt-6 text-4xl font-extrabold leading-[1.03] tracking-tight text-beta-white sm:text-5xl lg:text-6xl">
                                Le Groupe SOREAD 2M
                            </h1>

                            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-beta-white/80 sm:text-lg">
                                Un groupe audiovisuel public au service de
                                l’information, de la culture et du
                                divertissement, accessible au Maroc et à
                                l’international.
                            </p>

                            <div className="mx-auto mt-8 flex max-w-2xl flex-wrap justify-center gap-x-6 gap-y-3 text-sm text-beta-white/75">
                                {[
                                    'Information fiable',
                                    'Culture & création',
                                    'Divertissement',
                                    'Multi‑plateforme',
                                ].map((pill) => (
                                    <div
                                        key={pill}
                                        className="inline-flex items-center gap-2"
                                    >
                                        <span className="inline-flex h-1.5 w-1.5 rounded-full bg-beta" />
                                        {pill}
                                    </div>
                                ))}
                            </div>

                            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:items-center">
                                <a
                                    href="/medias"
                                    className="inline-flex w-full items-center justify-center rounded-xl bg-beta px-6 py-3 text-sm font-semibold text-beta-white shadow-lg shadow-so-black/20 ring-1 ring-beta/25 transition hover:bg-beta/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-beta focus-visible:ring-offset-2 focus-visible:ring-offset-alpha sm:w-auto"
                                >
                                    Découvrir nos médias
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
                                <a
                                    href="/actualites"
                                    className="inline-flex w-full items-center justify-center rounded-xl border border-beta-white/15 bg-beta-white/5 px-6 py-3 text-sm font-semibold text-beta-white/95 shadow-sm ring-1 ring-beta-white/10 transition hover:bg-beta-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-beta focus-visible:ring-offset-2 focus-visible:ring-offset-alpha sm:w-auto"
                                >
                                    Voir les actualités
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <div className="absolute inset-x-0 -bottom-12">
                    <div className="mx-auto max-w-7xl px-4">
                        <div className="rounded-2xl border border-beta-white/10 bg-beta-white/95 p-4 shadow-xl shadow-so-black/15 ring-1 ring-alpha/5 backdrop-blur md:p-6">
                            <div className="grid gap-4 sm:grid-cols-3">
                                {[
                                    {
                                        label: 'Mission',
                                        value: 'Service public',
                                        hint: 'Information, culture, divertissement',
                                    },
                                    {
                                        label: 'Couverture',
                                        value: 'Maroc & monde',
                                        hint: 'TV, radio et digital',
                                    },
                                    {
                                        label: 'Disponibilité',
                                        value: '24/7',
                                        hint: 'Multi‑plateforme',
                                    },
                                ].map((stat) => (
                                    <div
                                        key={stat.label}
                                        className="rounded-xl bg-alpha-white p-5 ring-1 ring-alpha/5 transition hover:ring-beta/20"
                                    >
                                        <div className="text-center text-sm font-semibold text-so-gray">
                                            {stat.label}
                                        </div>
                                        <div className="mt-2 text-center text-xl font-extrabold text-alpha">
                                            {stat.value}
                                        </div>
                                        <div className="mt-2 text-center text-xs text-so-gray">
                                            {stat.hint}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </section>
    );
}

