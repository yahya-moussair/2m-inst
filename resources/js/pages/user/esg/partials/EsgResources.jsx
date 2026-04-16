function DownloadCard({ title, meta }) {
    return (
        <a
            href="#"
            className="group flex items-start gap-4 rounded-2xl bg-beta-white p-6 shadow-sm ring-1 ring-alpha/10 transition hover:-translate-y-0.5 hover:shadow-md"
        >
            <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-beta-red text-alpha-red ring-1 ring-alpha/10">
                <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
                    <path
                        fill="currentColor"
                        d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6Zm1 7V3.5L18.5 9H15Z"
                    />
                </svg>
            </div>
            <div className="min-w-0">
                <div className="text-sm font-extrabold tracking-tight text-alpha">{title}</div>
                <div className="mt-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-so-gray">
                    {meta}
                </div>
            </div>
        </a>
    );
}

export default function EsgResources() {
    const items = [
        { title: 'Rapport ESG 2025', meta: 'PDF · 2.1MB' },
        { title: 'Charte éthique & conformité', meta: 'PDF · 640KB' },
        { title: 'Politique environnementale', meta: 'PDF · 410KB' },
        { title: 'Synthèse KPIs & indicateurs', meta: 'PDF · 980KB' },
    ];

    return (
        <section id="resources" className="bg-so-gray/5 py-16 sm:py-20">
            <div className="mx-auto max-w-7xl px-4">
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="text-3xl font-extrabold tracking-tight text-alpha sm:text-4xl">
                        Downloads Library
                    </h2>
                    <p className="mt-4 text-base leading-7 text-so-gray">
                        Documents clés et références pour suivre notre démarche ESG.
                    </p>
                </div>

                <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {items.map((item) => (
                        <DownloadCard key={item.title} {...item} />
                    ))}
                </div>
            </div>
        </section>
    );
}

