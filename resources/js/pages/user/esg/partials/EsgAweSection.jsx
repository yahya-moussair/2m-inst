function Pill({ children }) {
    return (
        <span className="inline-flex items-center rounded-full bg-beta-blue/60 px-4 py-2 text-sm font-extrabold text-alpha ring-1 ring-alpha/10">
            {children}
        </span>
    );
}

function ImageTile({ src, className = '' }) {
    return (
        <div className={['overflow-hidden rounded-2xl ring-1 ring-alpha/10', className].join(' ')}>
            <img
                src={src}
                alt=""
                loading="lazy"
                className="h-full w-full object-cover transition group-hover:scale-[1.02]"
            />
        </div>
    );
}

export default function EsgAweSection() {
    return (
        <section className="border-y border-alpha/10 bg-beta-white py-16 sm:py-20">
            <div className="mx-auto max-w-7xl px-4">
                <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
                    <div className="group order-2 grid gap-4 sm:grid-cols-2 lg:order-1">
                        <ImageTile
                            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1400&q=70"
                            className="h-64 sm:h-72"
                        />
                        <ImageTile
                            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=70"
                            className="h-48 sm:h-56"
                        />
                        <ImageTile
                            src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1400&q=70"
                            className="h-48 sm:h-56"
                        />
                        <ImageTile
                            src="https://images.unsplash.com/photo-1551836022-deb4988cc6c0?auto=format&fit=crop&w=1400&q=70"
                            className="h-64 sm:h-72"
                        />
                    </div>

                    <div className="order-1 lg:order-2">
                        <div className="text-xs font-extrabold uppercase tracking-[0.22em] text-beta">
                            Leadership féminin
                        </div>
                        <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-alpha sm:text-4xl">
                            Africa Women Experts &amp; AWE/Elles
                        </h2>
                        <p className="mt-5 text-base leading-7 text-so-gray">
                            Nous œuvrons pour briser le plafond de verre à travers le continent.
                            La plateforme Africa Women Experts (AWE) identifie et promeut les
                            compétences féminines africaines pour une meilleure visibilité dans
                            les médias.
                        </p>

                        <div className="mt-8 grid gap-4">
                            <div className="flex items-center gap-4">
                                <Pill>
                                    <span className="mr-2 inline-flex h-2.5 w-2.5 rounded-full bg-beta" />
                                    +3&nbsp;000 expertes identifiées
                                </Pill>
                            </div>
                            <div className="flex items-center gap-4">
                                <Pill>
                                    <span className="mr-2 inline-flex h-2.5 w-2.5 rounded-full bg-beta" />
                                    Réseau panafricain
                                </Pill>
                            </div>
                        </div>

                        <div className="mt-10">
                            <a
                                href="#"
                                className="inline-flex h-14 items-center justify-center rounded-xl border-2 border-alpha px-8 text-sm font-extrabold text-alpha transition hover:bg-so-gray/5 focus-visible:ring-2 focus-visible:ring-alpha focus-visible:ring-offset-2 focus-visible:outline-none"
                            >
                                En savoir plus
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

