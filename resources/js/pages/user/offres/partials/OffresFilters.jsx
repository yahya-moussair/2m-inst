import { useMemo, useState } from 'react';

function FieldLabel({ children }) {
    return (
        <div className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-so-gray">
            {children}
        </div>
    );
}

function TextInput({ value, onChange, placeholder }) {
    return (
        <div className="relative">
            <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-so-gray/70">
                <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
                    <path
                        fill="currentColor"
                        d="M10 4a6 6 0 1 1 0 12A6 6 0 0 1 10 4Zm0 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm9.7 14.3-4.2-4.2a1 1 0 1 0-1.4 1.4l4.2 4.2a1 1 0 0 0 1.4-1.4Z"
                    />
                </svg>
            </span>
            <input
                value={value}
                onChange={(event) => onChange(event.target.value)}
                placeholder={placeholder}
                className="h-12 w-full rounded-xl bg-alpha-white pl-11 pr-4 text-sm text-alpha ring-1 ring-alpha/10 placeholder:text-so-gray/70 focus:ring-2 focus:ring-beta focus:outline-none"
            />
        </div>
    );
}

function SelectField({ value, onChange, options }) {
    return (
        <select
            value={value}
            onChange={(event) => onChange(event.target.value)}
            className="h-12 w-full appearance-none rounded-xl bg-alpha-white px-4 text-sm text-alpha ring-1 ring-alpha/10 focus:ring-2 focus:ring-beta focus:outline-none"
        >
            {options.map((opt) => (
                <option key={opt.value} value={opt.value}>
                    {opt.label}
                </option>
            ))}
        </select>
    );
}

export default function OffresFilters({ onChange }) {
    const [query, setQuery] = useState('');
    const [category, setCategory] = useState('all');
    const [status, setStatus] = useState('all');

    const payload = useMemo(
        () => ({ query, category, status }),
        [query, category, status],
    );

    return (
        <section
            id="filters"
            className="scroll-mt-24 rounded-2xl bg-beta-white p-6 shadow-sm ring-1 ring-alpha/10 sm:p-7"
        >
            <div className="flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-beta-blue/60 text-beta ring-1 ring-alpha/10">
                    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
                        <path
                            fill="currentColor"
                            d="M3 5h18v2H3V5Zm4 6h10v2H7v-2Zm2 6h6v2H9v-2Z"
                        />
                    </svg>
                </span>
                <div className="text-sm font-extrabold uppercase tracking-[0.22em] text-alpha">
                    Recherche avancée
                </div>
            </div>

            <div className="mt-6 grid gap-4 lg:grid-cols-12 lg:items-end">
                <div className="lg:col-span-6">
                    <FieldLabel>Mots-clés</FieldLabel>
                    <div className="mt-2">
                        <TextInput
                            value={query}
                            onChange={(next) => {
                                setQuery(next);
                                onChange?.({ ...payload, query: next });
                            }}
                            placeholder="Référence, objet du marché…"
                        />
                    </div>
                </div>

                <div className="lg:col-span-3">
                    <FieldLabel>Catégorie</FieldLabel>
                    <div className="mt-2">
                        <SelectField
                            value={category}
                            onChange={(next) => {
                                setCategory(next);
                                onChange?.({ ...payload, category: next });
                            }}
                            options={[
                                { value: 'all', label: 'Toutes' },
                                { value: 'services', label: 'Services' },
                                { value: 'supplies', label: 'Fournitures' },
                                { value: 'works', label: 'Travaux' },
                            ]}
                        />
                    </div>
                </div>

                <div className="lg:col-span-3">
                    <FieldLabel>Statut</FieldLabel>
                    <div className="mt-2">
                        <SelectField
                            value={status}
                            onChange={(next) => {
                                setStatus(next);
                                onChange?.({ ...payload, status: next });
                            }}
                            options={[
                                { value: 'all', label: 'Tous' },
                                { value: 'open', label: 'Ouvert' },
                                { value: 'closing', label: 'Bientôt clôturé' },
                                { value: 'closed', label: 'Clôturé' },
                            ]}
                        />
                    </div>
                </div>

                <div className="lg:col-span-12">
                    <button
                        type="button"
                        onClick={() => onChange?.(payload)}
                        className="mt-2 inline-flex h-12 w-full items-center justify-center rounded-xl bg-alpha-blue px-6 text-sm font-extrabold text-beta-white shadow-sm ring-1 ring-alpha/10 transition hover:opacity-95 focus-visible:ring-2 focus-visible:ring-beta focus-visible:ring-offset-2 focus-visible:ring-offset-beta-white focus-visible:outline-none sm:w-auto"
                    >
                        Appliquer les filtres
                    </button>
                </div>
            </div>
        </section>
    );
}

