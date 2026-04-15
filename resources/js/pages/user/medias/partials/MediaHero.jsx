import { useMemo, useState } from 'react';

const filters = [
    { id: 'all', label: 'Tous' },
    { id: 'tv', label: 'TV' },
    { id: 'radio', label: 'Radio' },
    { id: 'web', label: 'Web' },
    { id: 'digital', label: 'Digital' },
];

export default function MediaHero() {
    const [activeFilter, setActiveFilter] = useState('all');
    const [query, setQuery] = useState('');

    const filterPills = useMemo(() => filters, []);

    return (
        <section className="relative overflow-hidden bg-alpha-blue">
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute inset-0 bg-linear-to-b from-alpha-blue/40 via-alpha-blue/70 to-alpha-blue" />
                <div className="absolute -top-28 -left-28 h-80 w-80 rounded-full bg-beta/20 blur-3xl" />
                <div className="absolute -bottom-32 -right-28 h-96 w-96 rounded-full bg-gold/15 blur-3xl" />
            </div>

            <div className="relative mx-auto max-w-7xl px-4 py-14 sm:py-18">
                <div className="mx-auto max-w-3xl text-center">
                    <div className="inline-flex items-center gap-2 rounded-full bg-beta-white/10 px-4 py-1.5 text-[11px] font-semibold tracking-wide text-alpha-white ring-1 ring-beta-white/15">
                        <span className="inline-flex h-2 w-2 rounded-full bg-gold" />
                        Écosystème audiovisuel
                    </div>

                    <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-beta-white sm:text-5xl">
                        Notre Écosystème Médias
                    </h1>
                    <p className="mt-4 text-sm leading-6 text-alpha-white/80 sm:text-base">
                        Découvrez la diversité de nos contenus et services sur
                        tous vos écrans — TV, radio, web et digital.
                    </p>

                    <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center">
                        <div className="relative w-full sm:w-[520px]">
                            <div className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-alpha-white/70">
                                <svg
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                    className="h-5 w-5"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M10 2a8 8 0 1 0 4.9 14.3l4.4 4.4a1 1 0 0 0 1.4-1.4l-4.4-4.4A8 8 0 0 0 10 2Zm0 2a6 6 0 1 1 0 12a6 6 0 0 1 0-12Z"
                                    />
                                </svg>
                            </div>
                            <input
                                value={query}
                                onChange={(event) =>
                                    setQuery(event.target.value)
                                }
                                placeholder="Rechercher…"
                                className="h-12 w-full rounded-full bg-beta-white/10 pl-11 pr-4 text-sm text-beta-white placeholder:text-alpha-white/60 ring-1 ring-beta-white/15 backdrop-blur-sm transition focus:ring-2 focus:ring-beta focus:outline-none"
                            />
                        </div>

                        <button
                            type="button"
                            className="inline-flex h-12 items-center justify-center rounded-full bg-beta px-6 text-sm font-semibold text-beta-white shadow-sm ring-1 ring-beta/25 transition hover:opacity-90 focus-visible:ring-2 focus-visible:ring-beta focus-visible:ring-offset-2 focus-visible:ring-offset-alpha-blue focus-visible:outline-none"
                        >
                            Filtrer
                        </button>
                    </div>

                    <div className="mt-7 flex flex-wrap items-center justify-center gap-2">
                        {filterPills.map((pill) => {
                            const isActive = pill.id === activeFilter;

                            return (
                                <button
                                    key={pill.id}
                                    type="button"
                                    onClick={() => setActiveFilter(pill.id)}
                                    className={[
                                        'inline-flex items-center rounded-full px-4 py-2 text-xs font-semibold ring-1 transition focus-visible:ring-2 focus-visible:ring-beta focus-visible:ring-offset-2 focus-visible:ring-offset-alpha-blue focus-visible:outline-none',
                                        isActive
                                            ? 'bg-beta-white text-alpha ring-beta-white/10'
                                            : 'bg-beta-white/10 text-beta-white ring-beta-white/15 hover:bg-beta-white/15',
                                    ].join(' ')}
                                >
                                    {pill.label}
                                </button>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}

