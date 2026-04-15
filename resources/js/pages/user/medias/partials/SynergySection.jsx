export default function SynergySection() {
    return (
        <section className="relative overflow-hidden bg-alpha-blue py-16 sm:py-20">
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute inset-0 bg-linear-to-b from-alpha-blue/40 via-alpha-blue to-alpha-blue" />
                <div className="absolute -top-28 -left-28 h-80 w-80 rounded-full bg-beta/15 blur-3xl" />
                <div className="absolute -bottom-28 -right-28 h-80 w-80 rounded-full bg-gold/15 blur-3xl" />
                <div className="absolute inset-0 opacity-70 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.08)_1px,transparent_0)] bg-size-[22px_22px]" />
            </div>

            <div className="relative mx-auto max-w-7xl px-4">
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="text-3xl font-extrabold tracking-tight text-beta-white sm:text-4xl">
                        Synergie &amp; Complémentarité
                    </h2>
                    <p className="mt-4 text-sm leading-6 text-alpha-white/70 sm:text-base">
                        Une vision 360° qui permet de toucher chaque segment de
                        la population marocaine grâce à des formats adaptés.
                    </p>
                </div>

                <div className="mt-12 grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
                    <div className="space-y-10">
                        {[
                            {
                                title: 'Interconnexion des Contenus',
                                desc: 'Une émission TV majeure est déclinée en podcasts sur Radio 2M et en “snack content” sur JOOJ pour maximiser la portée.',
                                tone: 'beta',
                                icon: (
                                    <svg
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                        className="h-5 w-5"
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M16 8a3 3 0 1 0-2.83-4H11.7A3 3 0 1 0 7 7.17v2.66A3 3 0 1 0 9.83 14h4.34A3 3 0 1 0 17 9.83V8Zm-2 0v1.83a3 3 0 0 0-1.83 2.17H9.83A3 3 0 0 0 9 10.83V7.17A3 3 0 0 0 10.83 6h2.34A3 3 0 0 0 14 8Zm-7 7a1 1 0 1 1 0 2a1 1 0 0 1 0-2Zm10 0a1 1 0 1 1 0 2a1 1 0 0 1 0-2Zm-10-12a1 1 0 1 1 0 2a1 1 0 0 1 0-2Zm10 0a1 1 0 1 1 0 2a1 1 0 0 1 0-2Z"
                                        />
                                    </svg>
                                ),
                            },
                            {
                                title: 'Couverture Démographique Totale',
                                desc: 'Du grand public (2M TV) aux décideurs (Building Morocco) et à la Gen Z (JOOJ/SQUAD), aucune audience n’est délaissée.',
                                tone: 'gold',
                                icon: (
                                    <svg
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                        className="h-5 w-5"
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M16 11c1.66 0 3-1.34 3-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3Zm-8 0c1.66 0 3-1.34 3-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3Zm0 2c-2.33 0-7 1.17-7 3.5V20h14v-3.5C15 14.17 10.33 13 8 13Zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V20h7v-3.5C24 14.17 19.33 13 16 13Z"
                                        />
                                    </svg>
                                ),
                            },
                            {
                                title: 'Agilité Digitale',
                                desc: '2M.ma sert de pivot central pour l’information, relayée instantanément sur toutes nos plateformes sociales.',
                                tone: 'neutral',
                                icon: (
                                    <svg
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                        className="h-5 w-5"
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M7 7h7V5l4 3-4 3V9H7V7Zm10 10H10v2l-4-3 4-3v2h7v2Z"
                                        />
                                    </svg>
                                ),
                            },
                        ].map((item) => {
                            const toneClass =
                                item.tone === 'beta'
                                    ? 'bg-beta text-beta-white'
                                    : item.tone === 'gold'
                                      ? 'bg-gold text-beta-white'
                                      : 'bg-beta-white/10 text-beta-white';

                            return (
                                <div key={item.title} className="flex gap-5">
                                    <div
                                        className={[
                                            'mt-1 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl shadow-sm ring-1 ring-beta-white/10',
                                            toneClass,
                                        ].join(' ')}
                                    >
                                        {item.icon}
                                    </div>
                                    <div>
                                        <div className="text-lg font-extrabold tracking-tight text-beta-white">
                                            {item.title}
                                        </div>
                                        <p className="mt-2 text-sm leading-6 text-alpha-white/70">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    <div className="relative mx-auto w-full max-w-md">
                        <div className="relative aspect-square">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="h-[78%] w-[78%] rounded-full ring-2 ring-beta-white/10" />
                            </div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="h-[58%] w-[58%] rounded-full ring-2 ring-beta-white/10" />
                            </div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="h-[40%] w-[40%] rounded-full bg-linear-to-br from-beta to-beta/70 ring-2 ring-beta-white/10 shadow-2xl shadow-so-black/25" />
                            </div>

                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-center text-beta-white">
                                    <div className="text-2xl font-extrabold tracking-tight sm:text-3xl">
                                        2M 360°
                                    </div>
                                </div>
                            </div>

                            {[
                                {
                                    label: 'TV',
                                    pos: 'top-[8%] left-1/2 -translate-x-1/2',
                                },
                                {
                                    label: 'WEB',
                                    pos: 'top-1/2 left-[4%] -translate-y-1/2',
                                },
                                {
                                    label: 'RADIO',
                                    pos: 'top-1/2 right-[4%] -translate-y-1/2',
                                },
                                {
                                    label: 'DIGITAL',
                                    pos: 'bottom-[22%] right-[12%]',
                                },
                                {
                                    label: 'SOCIAL',
                                    pos: 'bottom-[8%] left-1/2 -translate-x-1/2',
                                },
                                {
                                    label: 'APP',
                                    pos: 'bottom-[22%] left-[12%]',
                                },
                            ].map((node) => (
                                <div
                                    key={node.label}
                                    className={[
                                        'absolute inline-flex items-center justify-center rounded-md bg-beta-white px-3 py-1 text-[11px] font-extrabold tracking-wide text-alpha shadow-sm ring-1 ring-alpha/10',
                                        node.pos,
                                    ].join(' ')}
                                >
                                    {node.label}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

