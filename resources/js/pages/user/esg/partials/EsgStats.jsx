function InfoRow({ title, description, icon }) {
    return (
        <div className="flex items-start gap-4 rounded-xl bg-so-gray/5 p-4 ring-1 ring-alpha/10">
            <div className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-beta-blue/60 text-beta ring-1 ring-alpha/10">
                {icon}
            </div>
            <div className="min-w-0">
                <div className="text-sm font-extrabold tracking-tight text-alpha">{title}</div>
                <div className="mt-1 text-sm leading-6 text-so-gray">{description}</div>
            </div>
        </div>
    );
}

function KpiCard({ title, value, subtitle, tone = 'light', icon }) {
    const base = 'relative overflow-hidden rounded-2xl p-8 ring-1';
    const toneClass =
        tone === 'dark'
            ? 'bg-linear-to-br from-alpha-blue to-alpha-blue/90 text-beta-white ring-beta-white/10'
            : 'bg-beta-white text-alpha ring-alpha/10';

    return (
        <div className={[base, toneClass].join(' ')}>
            <div className="flex items-start justify-between gap-6">
                <div>
                    <div
                        className={[
                            'text-xs font-extrabold uppercase tracking-[0.22em]',
                            tone === 'dark' ? 'text-gold' : 'text-beta',
                        ].join(' ')}
                    >
                        {title}
                    </div>
                    <div className="mt-5 text-5xl font-extrabold tracking-tight">{value}</div>
                    <div
                        className={[
                            'mt-2 text-[11px] font-semibold uppercase tracking-[0.18em]',
                            tone === 'dark' ? 'text-alpha-white/70' : 'text-so-gray',
                        ].join(' ')}
                    >
                        {subtitle}
                    </div>
                </div>

                {icon ? (
                    <div
                        className={[
                            'inline-flex h-16 w-16 items-center justify-center rounded-2xl ring-1',
                            tone === 'dark'
                                ? 'bg-beta-white/10 text-beta-white ring-beta-white/10'
                                : 'bg-beta-blue/60 text-beta ring-alpha/10',
                        ].join(' ')}
                    >
                        {icon}
                    </div>
                ) : null}
            </div>

            {tone === 'dark' ? (
                <div className="mt-10 border-t border-beta-white/10 pt-6">
                    <div className="text-3xl font-extrabold tracking-tight">50/50</div>
                    <div className="mt-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-alpha-white/60">
                        Progression top management
                    </div>
                </div>
            ) : null}
        </div>
    );
}

export default function EsgStats() {
    return (
        <section className="bg-beta-white py-16 sm:py-20">
            <div className="mx-auto max-w-7xl px-4">
                <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
                    <div className="lg:col-span-6">
                        <div className="text-xs font-extrabold uppercase tracking-[0.22em] text-beta">
                            Vision stratégique
                        </div>
                        <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-alpha sm:text-4xl">
                            Une transformation positive au cœur de nos médias.
                        </h2>
                        <p className="mt-6 text-base leading-7 text-so-gray">
                            En tant que média de service public, SOREAD 2M place l&apos;humain et
                            le développement durable au sommet de ses priorités. Notre stratégie
                            repose sur des piliers concrets de transformation sociale et
                            environnementale, alignés sur les Objectifs de Développement Durable
                            (ODD).
                        </p>

                        <div className="mt-8 grid gap-4">
                            <InfoRow
                                title="Inclusion & Diversité"
                                description="Refléter la pluralité de la société marocaine à l’écran et en interne."
                                icon={
                                    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
                                        <path
                                            fill="currentColor"
                                            d="M16 11c1.66 0 3-1.34 3-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3Zm-8 0c1.66 0 3-1.34 3-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3Zm0 2c-2.33 0-7 1.17-7 3.5V20h14v-3.5C15 14.17 10.33 13 8 13Zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V20h7v-3.5C24 14.17 19.33 13 16 13Z"
                                        />
                                    </svg>
                                }
                            />
                            <InfoRow
                                title="Responsabilité écologique"
                                description="Réduire notre empreinte carbone via des productions éco‑responsables."
                                icon={
                                    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
                                        <path
                                            fill="currentColor"
                                            d="M12 2C8.13 2 5 5.13 5 9c0 4.25 3.5 8.5 7 13 3.5-4.5 7-8.75 7-13 0-3.87-3.13-7-7-7Zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5Z"
                                        />
                                    </svg>
                                }
                            />
                        </div>
                    </div>

                    <div className="lg:col-span-6">
                        <div className="grid gap-6 lg:grid-cols-2">
                            <KpiCard title="Parité F/H" value="50%" subtitle="Objectif 2026" tone="dark" />
                            <KpiCard
                                title="Programmes"
                                value="12+"
                                subtitle="Programmes dédiés"
                                icon={
                                    <svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden="true">
                                        <path
                                            fill="currentColor"
                                            d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8h5Z"
                                        />
                                    </svg>
                                }
                            />

                            <div className="lg:col-span-2">
                                <KpiCard
                                    title="Bénéficiaires"
                                    value="250K"
                                    subtitle="Impact annuel"
                                    icon={
                                        <svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden="true">
                                            <path
                                                fill="currentColor"
                                                d="M16 11c1.66 0 3-1.34 3-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3Zm-8 0c1.66 0 3-1.34 3-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3Zm0 2c-2.33 0-7 1.17-7 3.5V20h14v-3.5C15 14.17 10.33 13 8 13Zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V20h7v-3.5C24 14.17 19.33 13 16 13Z"
                                            />
                                        </svg>
                                    }
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

