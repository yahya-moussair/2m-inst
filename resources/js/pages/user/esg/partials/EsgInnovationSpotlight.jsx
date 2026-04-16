export default function EsgInnovationSpotlight() {
    return (
        <section className="bg-alpha-blue py-16 sm:py-20">
            <div className="mx-auto max-w-7xl px-4">
                <div className="rounded-3xl bg-beta/10 p-8 ring-1 ring-beta-white/10 sm:p-12 lg:p-14">
                    <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-12">
                        <div>
                            <div className="flex items-center gap-3">
                                <div className="h-16 w-16 overflow-hidden rounded-xl bg-beta-white ring-1 ring-beta-white/10">
                                    <img
                                        src="https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?auto=format&fit=crop&w=200&q=70"
                                        alt=""
                                        loading="lazy"
                                        className="h-full w-full object-cover"
                                    />
                                </div>
                                <div className="text-3xl font-extrabold tracking-tight text-beta-white">
                                    LionsGEEK
                                </div>
                            </div>

                            <h2 className="mt-7 text-3xl font-extrabold tracking-tight text-beta-white sm:text-4xl">
                                Le Lab de l&apos;Innovation Créative
                            </h2>

                            <p className="mt-6 text-base leading-7 text-alpha-white/80">
                                Situé à Ain Sebaâ, ce centre digital inclusif forme gratuitement
                                les jeunes talents casablancais aux métiers de la création
                                numérique, du codage et de l&apos;audiovisuel.
                            </p>

                            <div className="mt-8 grid gap-x-10 gap-y-4 sm:grid-cols-2">
                                {[
                                    'Formation gratuite',
                                    'Création numérique',
                                    'Coding & audiovisuel',
                                    'Insertion professionnelle',
                                ].map((item) => (
                                    <div key={item} className="flex items-center gap-3">
                                        <span className="inline-flex h-5 w-5 items-center justify-center text-gold">
                                            <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
                                                <path
                                                    fill="currentColor"
                                                    d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17Z"
                                                />
                                            </svg>
                                        </span>
                                        <div className="text-sm text-beta-white">{item}</div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-10">
                                <a
                                    href="#"
                                    className="inline-flex h-14 items-center justify-center rounded-2xl bg-beta-white px-8 text-sm font-extrabold text-alpha shadow-sm ring-1 ring-beta-white/10 transition hover:bg-beta-white/90 focus-visible:ring-2 focus-visible:ring-beta-white focus-visible:ring-offset-2 focus-visible:ring-offset-alpha-blue focus-visible:outline-none"
                                >
                                    Découvrir LionsGEEK
                                </a>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="overflow-hidden rounded-2xl shadow-2xl ring-1 ring-beta-white/10">
                                <img
                                    src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1800&q=70"
                                    alt=""
                                    loading="lazy"
                                    className="h-[420px] w-full object-cover sm:h-[512px]"
                                />
                            </div>

                            <div className="absolute -bottom-6 -right-6 rounded-2xl bg-gold p-6 shadow-xl ring-1 ring-gold/20">
                                <div className="text-4xl font-extrabold tracking-tight text-alpha">+500</div>
                                <div className="mt-2 text-[11px] font-extrabold uppercase tracking-[0.22em] text-alpha">
                                    Jeunes formés
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

