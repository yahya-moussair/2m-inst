export default function GroupMissionSection() {
    return (
        <section className="bg-transparent pb-12 pt-22 sm:pb-16">
            <div className="mx-auto max-w-7xl px-4">
                <div className="mx-auto max-w-2xl text-center">
                    <div className="inline-flex items-center gap-2 rounded-full border border-alpha/10 bg-alpha-white px-3 py-1 text-[11px] font-semibold tracking-wide text-alpha">
                        <span className="inline-flex h-2 w-2 rounded-full bg-beta" />
                        Mission & valeurs
                    </div>
                    <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-alpha sm:text-3xl">
                        Mission au Maroc de service public
                    </h2>
                    <p className="mt-2 text-sm leading-6 text-so-gray sm:text-base">
                        Une ambition claire: informer avec rigueur, promouvoir
                        la culture, et divertir avec des contenus accessibles et
                        inclusifs.
                    </p>
                </div>

                <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {[
                        {
                            title: 'Informer',
                            description:
                                'Une information fiable, pluraliste et proche des citoyens.',
                            icon: (
                                <svg
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                    className="h-5 w-5"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M4 4h16a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Zm1 4v2h14V8H5Zm0 4v2h10v-2H5Zm0 4v2h14v-2H5Z"
                                    />
                                </svg>
                            ),
                        },
                        {
                            title: 'Cultiver',
                            description:
                                'Mettre en valeur la création, le patrimoine et la diversité.',
                            icon: (
                                <svg
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                    className="h-5 w-5"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M12 2a7 7 0 0 0-7 7c0 2.38 1.19 4.47 3 5.74V20a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-5.26c1.81-1.27 3-3.36 3-5.74a7 7 0 0 0-7-7Zm2 18h-4v-2h4v2Zm0-4h-4v-2.1a6.9 6.9 0 0 0 4 0V16Z"
                                    />
                                </svg>
                            ),
                        },
                        {
                            title: 'Divertir',
                            description:
                                'Proposer des programmes attractifs, modernes et fédérateurs.',
                            icon: (
                                <svg
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                    className="h-5 w-5"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7v2H8v2h8v-2h-2v-2h7c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2Zm0 14H3V5h18v12Z"
                                    />
                                </svg>
                            ),
                        },
                    ].map((item) => (
                        <div
                            key={item.title}
                            className="rounded-2xl bg-beta-white p-6 shadow-sm ring-1 ring-alpha/10 transition hover:shadow-lg hover:shadow-so-black/10"
                        >
                            <div className="flex items-start gap-4">
                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-beta-blue/60 text-beta ring-1 ring-beta/10">
                                    {item.icon}
                                </div>
                                <div>
                                    <div className="text-base font-extrabold tracking-tight text-alpha">
                                        {item.title}
                                    </div>
                                    <div className="mt-1 text-sm leading-6 text-so-gray">
                                        {item.description}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

