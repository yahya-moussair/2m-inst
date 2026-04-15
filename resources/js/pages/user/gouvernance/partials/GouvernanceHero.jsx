import { Link } from '@inertiajs/react';

export default function GouvernanceHero() {
    return (
        <section className="relative overflow-hidden bg-alpha">
            <div className="pointer-events-none absolute inset-0">
                <img
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=2400&q=70"
                    alt=""
                    className="h-full w-full object-cover opacity-25"
                    loading="lazy"
                />
                <div className="absolute inset-0 bg-linear-to-b from-beta-white/10 via-beta-blue/40 to-alpha/70" />
                <div className="absolute -top-28 -left-28 h-80 w-80 rounded-full bg-beta/20 blur-3xl" />
                <div className="absolute -bottom-32 -right-28 h-96 w-96 rounded-full bg-gold/20 blur-3xl" />
            </div>

            <div className="relative mx-auto max-w-7xl px-4 py-14 sm:py-18">
                <div className="mx-auto max-w-3xl text-center">
                    <div className="inline-flex items-center gap-2 rounded-full border border-beta-white/10 bg-beta-white/5 px-4 py-1.5 text-[11px] font-semibold tracking-wide text-beta-white/80">
                        <span className="inline-flex h-2 w-2 rounded-full bg-beta" />
                            Gouvernance
                    </div>

                    <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-beta-white sm:text-5xl">
                        Gouvernance &amp; Transparence
                    </h1>
                    <p className="mt-4 text-sm leading-6 text-beta-white/75 sm:text-base">
                        Engagement envers la redevabilité, la transparence et la qualité
                        de la gouvernance au service de l’intérêt général et de la
                        performance.
                    </p>

                    <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center">
                        <Link
                            href="#instances"
                            className="inline-flex h-12 items-center justify-center rounded-full bg-beta px-6 text-sm font-semibold text-beta-white shadow-sm ring-1 ring-beta/25 transition hover:opacity-90 focus-visible:ring-2 focus-visible:ring-beta focus-visible:ring-offset-2 focus-visible:ring-offset-alpha focus-visible:outline-none"
                        >
                            En savoir plus
                        </Link>
                        <a
                            href="#"
                            className="inline-flex h-12 items-center justify-center rounded-full bg-beta-white/5 px-6 text-sm font-semibold text-beta-white/90 shadow-sm ring-1 ring-beta-white/15 backdrop-blur-sm transition hover:bg-beta-white/10 focus-visible:ring-2 focus-visible:ring-beta focus-visible:ring-offset-2 focus-visible:ring-offset-alpha focus-visible:outline-none"
                        >
                            Télécharger la charte
                        </a>
                    </div>

                    <div className="mt-7 flex flex-wrap items-center justify-center gap-2">
                        {['Transparence', 'Conformité', 'Contrôle', 'Éthique'].map(
                            (label) => (
                                <span
                                    key={label}
                                    className="inline-flex items-center rounded-full bg-beta-white/5 px-4 py-2 text-xs font-semibold text-beta-white/90 ring-1 ring-beta-white/15"
                                >
                                    {label}
                                </span>
                            ),
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}

