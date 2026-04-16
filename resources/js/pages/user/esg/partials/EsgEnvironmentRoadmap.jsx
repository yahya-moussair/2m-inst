function TimelineItem({ title, description, status = 'done' }) {
    const dotClass =
        status === 'done'
            ? 'bg-alpha-green ring-beta-white'
            : 'bg-alpha-white/70 ring-beta-white';

    return (
        <div className="relative border-l-2 border-alpha-green/20 pl-10">
            <div
                className={[
                    'absolute -left-[9px] top-0 h-4 w-4 rounded-full ring-4',
                    dotClass,
                ].join(' ')}
            />
            <div className="text-sm font-extrabold text-alpha">{title}</div>
            <p className="mt-1 text-sm leading-6 text-so-gray">{description}</p>
        </div>
    );
}

export default function EsgEnvironmentRoadmap() {
    return (
        <section className="border-t border-alpha/10 bg-beta-white py-16 sm:py-20">
            <div className="mx-auto max-w-7xl px-4">
                <div className="rounded-3xl bg-beta-green/60 p-8 ring-1 ring-alpha-green/15 sm:p-12 lg:p-16">
                    <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
                        <div className="order-2 lg:order-1">
                            <div className="text-xs font-extrabold uppercase tracking-[0.22em] text-alpha-green">
                                Trajectoire bas carbone
                            </div>
                            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-alpha sm:text-4xl">
                                Vers une Production Durable
                            </h2>

                            <div className="mt-10 grid gap-8">
                                <TimelineItem
                                    title="Efficacité Énergétique"
                                    description="Passage au 100% LED pour les plateaux et optimisation du refroidissement des serveurs."
                                    status="done"
                                />
                                <TimelineItem
                                    title="Zéro Déchet"
                                    description="Tri sélectif généralisé sur tous nos sites et recyclage des anciens matériels électroniques."
                                    status="done"
                                />
                                <TimelineItem
                                    title="Horizon 2030"
                                    description="Réduction de 40% des émissions directes de gaz à effet de serre."
                                    status="next"
                                />
                            </div>
                        </div>

                        <div className="order-1 lg:order-2">
                            <div className="overflow-hidden rounded-2xl bg-beta-white shadow-sm ring-1 ring-alpha/10">
                                <img
                                    src="https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=1600&q=70"
                                    alt=""
                                    loading="lazy"
                                    className="h-80 w-full object-cover sm:h-[420px]"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

