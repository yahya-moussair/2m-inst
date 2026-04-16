function StatusBadge({ status }) {
    const map = {
        open: {
            label: 'Ouvert',
            className: 'bg-beta-green ring-alpha-green/20 text-alpha-green',
        },
        closing: {
            label: 'Bientôt',
            className: 'bg-gold/15 ring-gold/30 text-alpha',
        },
        closed: {
            label: 'Clôturé',
            className: 'bg-so-gray/10 ring-alpha/10 text-so-gray',
        },
    };

    const config = map[status] ?? map.open;

    return (
        <span
            className={[
                'inline-flex items-center rounded-full px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-[0.18em] ring-1',
                config.className,
            ].join(' ')}
        >
            {config.label}
        </span>
    );
}

export default function OffresTenderTable({ tenders = [] }) {
    return (
        <section id="tenders" className="scroll-mt-24 grid gap-4">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                <h2 className="text-2xl font-extrabold tracking-tight text-alpha">
                    Liste des appels d&apos;offres
                </h2>
                <div className="text-sm text-so-gray">{tenders.length} résultat(s)</div>
            </div>

            <div className="overflow-hidden rounded-2xl bg-beta-white shadow-sm ring-1 ring-alpha/10">
                <div className="overflow-x-auto">
                    <table className="min-w-[980px] w-full border-collapse">
                        <thead className="bg-alpha-white">
                            <tr className="border-b border-alpha/10">
                                {[
                                    'Réf.',
                                    'Objet',
                                    'Publication',
                                    'Échéance',
                                    'Statut',
                                    'Détails',
                                ].map((label) => (
                                    <th
                                        key={label}
                                        scope="col"
                                        className={[
                                            'px-6 py-4 text-left text-[11px] font-extrabold uppercase tracking-[0.18em] text-so-gray',
                                            label === 'Détails' ? 'text-center' : '',
                                        ].join(' ')}
                                    >
                                        {label}
                                    </th>
                                ))}
                            </tr>
                        </thead>

                        <tbody>
                            {tenders.map((row) => (
                                <tr
                                    key={row.ref}
                                    className="border-t border-alpha/5 hover:bg-alpha-white/70"
                                >
                                    <td className="px-6 py-5 text-sm font-extrabold text-alpha-blue">
                                        {row.ref}
                                    </td>
                                    <td className="px-6 py-5 text-sm font-semibold text-alpha">
                                        {row.object}
                                    </td>
                                    <td className="px-6 py-5 text-sm text-alpha">{row.publishedAt}</td>
                                    <td className="px-6 py-5 text-sm font-semibold text-alpha">
                                        {row.deadline}
                                    </td>
                                    <td className="px-6 py-5">
                                        <StatusBadge status={row.status} />
                                    </td>
                                    <td className="px-6 py-5 text-center">
                                        <a
                                            href="#"
                                            className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gold/10 text-gold ring-1 ring-gold/20 transition hover:bg-gold/15 focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-beta-white focus-visible:outline-none"
                                            aria-label={`Voir ${row.ref}`}
                                        >
                                            <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
                                                <path
                                                    fill="currentColor"
                                                    d="M12 5c-7.6 0-10 7-10 7s2.4 7 10 7 10-7 10-7-2.4-7-10-7Zm0 12c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5Zm0-8a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z"
                                                />
                                            </svg>
                                        </a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="bg-alpha-white px-6 py-4">
                    <a href="#" className="inline-flex items-center gap-2 text-sm font-extrabold text-beta">
                        Voir les archives
                        <span aria-hidden="true" className="text-beta">
                            →
                        </span>
                    </a>
                </div>
            </div>
        </section>
    );
}

