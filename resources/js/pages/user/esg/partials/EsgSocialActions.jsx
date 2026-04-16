function ActionCard({ title, subtitle, icon, tone = 'blue' }) {
    const toneClasses = {
        red: 'bg-beta-red text-alpha-red',
        blue: 'bg-beta-blue text-beta',
        green: 'bg-beta-green text-alpha-green',
    };

    return (
        <div className="rounded-2xl bg-beta-white p-8 shadow-sm ring-1 ring-alpha/10">
            <div className="flex items-start gap-4">
                <div
                    className={[
                        'inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full ring-1 ring-alpha/10',
                        toneClasses[tone] ?? toneClasses.blue,
                    ].join(' ')}
                >
                    {icon}
                </div>
                <div className="min-w-0">
                    <div className="text-lg font-extrabold tracking-tight text-alpha">
                        {title}
                    </div>
                    <div className="mt-3 text-sm leading-6 text-so-gray">
                        {subtitle}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function EsgSocialActions() {
    const actions = [
        {
            title: 'Solidarité',
            subtitle:
                'Programmes dédiés à l’appui des initiatives locales et à l’accompagnement des publics vulnérables.',
            tone: 'red',
            icon: (
                <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
                    <path
                        fill="currentColor"
                        d="M12 21s-7-4.35-9.33-8.36C.5 9.06 2.24 5.5 6.2 5.5c1.9 0 3.3 1 3.8 1.7.5-.7 1.9-1.7 3.8-1.7 3.96 0 5.7 3.56 3.53 7.14C19 16.65 12 21 12 21Z"
                    />
                </svg>
            ),
        },
        {
            title: 'Éducation & Culture',
            subtitle:
                'Accès renforcé aux contenus, à la formation et à la valorisation de la création.',
            tone: 'blue',
            icon: (
                <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
                    <path
                        fill="currentColor"
                        d="M12 3 1 9l11 6 9-4.91V17h2V9L12 3Zm0 9.75L5.5 9 12 5.25 18.5 9 12 12.75Z"
                    />
                </svg>
            ),
        },
        {
            title: 'Environnement',
            subtitle:
                'Actions de sensibilisation et d’optimisation de nos pratiques pour réduire l’empreinte.',
            tone: 'green',
            icon: (
                <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
                    <path
                        fill="currentColor"
                        d="M12 2C8.13 2 5 5.13 5 9c0 4.25 3.5 8.5 7 13 3.5-4.5 7-8.75 7-13 0-3.87-3.13-7-7-7Zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5Z"
                    />
                </svg>
            ),
        },
    ];

    return (
        <section id="actions" className="bg-so-gray/5 py-16 sm:py-20">
            <div className="mx-auto max-w-7xl px-4">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                    <div className="max-w-xl">
                        <div className="text-xs font-extrabold uppercase tracking-[0.22em] text-beta">
                            Solidarité
                        </div>
                        <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-alpha sm:text-4xl">
                            Solidarité &amp; Impact Social
                        </h2>
                    </div>

                    <a
                        href="#"
                        className="inline-flex items-center gap-2 text-sm font-extrabold text-beta transition hover:opacity-80"
                    >
                        Voir toutes les actions
                        <span aria-hidden="true">→</span>
                    </a>
                </div>

                <div className="mt-12 grid gap-6 lg:grid-cols-3">
                    {actions.map((action) => (
                        <ActionCard key={action.title} {...action} />
                    ))}
                </div>
            </div>
        </section>
    );
}

