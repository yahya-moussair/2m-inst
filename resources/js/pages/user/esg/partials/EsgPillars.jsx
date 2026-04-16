function LightCard() {
    return (
        <div className="group overflow-hidden rounded-2xl bg-beta-white shadow-sm ring-1 ring-alpha/10 transition hover:-translate-y-0.5 hover:shadow-md">
            <div className="relative h-64 overflow-hidden sm:h-72">
                <img
                    src="https://images.unsplash.com/photo-1520975958225-1c2015e8b2b2?auto=format&fit=crop&w=2000&q=70"
                    alt=""
                    loading="lazy"
                    className="h-full w-full object-cover transition group-hover:scale-[1.02]"
                />
            </div>

            <div className="p-7 sm:p-8">
                <div className="text-2xl font-extrabold tracking-tight text-alpha">
                    Le CPD : 10 ans d&apos;action
                </div>
                <p className="mt-4 text-sm leading-6 text-so-gray sm:text-base">
                    Créé en 2013, le Comité Parité et Diversité de 2M veille à la
                    promotion de l&apos;image de la femme et à la valorisation de la
                    diversité marocaine à l&apos;antenne.
                </p>

                <a
                    href="#"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-extrabold text-beta transition group-hover:gap-3"
                >
                    Découvrir la charte
                    <span className="transition group-hover:translate-x-0.5">→</span>
                </a>
            </div>
        </div>
    );
}

function DarkCard() {
    return (
        <div className="group overflow-hidden rounded-2xl bg-alpha-blue shadow-sm ring-1 ring-beta-white/10 transition hover:-translate-y-0.5 hover:shadow-md">
            <div className="relative h-64 overflow-hidden sm:h-72">
                <img
                    src="https://images.unsplash.com/photo-1519455953755-af066f52f1a6?auto=format&fit=crop&w=2000&q=70"
                    alt=""
                    loading="lazy"
                    className="h-full w-full object-cover opacity-60 transition group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-linear-to-b from-alpha-blue/20 via-alpha-blue/40 to-alpha-blue/85" />

                <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                    <div className="text-5xl font-extrabold tracking-[0.28em] text-gold sm:text-6xl">
                        TILILA
                    </div>
                    <div className="text-[10px] font-extrabold tracking-[0.35em] text-beta-white/70">
                        PRIX DE LA PUBLICITÉ
                    </div>
                </div>
            </div>

            <div className="p-7 sm:p-8">
                <div className="text-2xl font-extrabold tracking-tight text-beta-white">
                    Trophée Tilila
                </div>
                <p className="mt-4 text-sm leading-6 text-alpha-white/75 sm:text-base">
                    Le premier prix qui récompense les spots publicitaires luttant
                    contre les stéréotypes féminins et promouvant la parité au Maroc.
                </p>

                <div className="mt-6">
                    <a
                        href="#"
                        className="inline-flex h-11 items-center justify-center rounded-xl bg-gold px-6 text-sm font-extrabold text-alpha shadow-sm ring-1 ring-gold/30 transition hover:opacity-90 focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-alpha-blue focus-visible:outline-none"
                    >
                        Candidatures 2024
                    </a>
                </div>
            </div>
        </div>
    );
}

export default function EsgPillars() {
    return (
        <section className="bg-so-gray/5 py-16 sm:py-20">
            <div className="mx-auto max-w-7xl px-4">
                <div className="mx-auto max-w-3xl text-center">
                    <div className="text-xs font-extrabold uppercase tracking-[0.22em] text-beta">
                        Comité parité &amp; diversité
                    </div>
                    <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-alpha sm:text-4xl">
                        CPD &amp; Tilila
                    </h2>
                    <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-gold" />
                </div>

                <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:items-stretch">
                    <LightCard />
                    <DarkCard />
                </div>
            </div>
        </section>
    );
}
