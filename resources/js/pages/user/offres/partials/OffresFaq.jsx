function FaqItem({ title, children, defaultOpen = false }) {
    return (
        <details
            className="group overflow-hidden rounded-xl bg-beta-white ring-1 ring-alpha/10"
            open={defaultOpen}
        >
            <summary className="flex cursor-pointer items-center justify-between gap-4 px-5 py-4">
                <div className="text-sm font-extrabold text-alpha">{title}</div>
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-beta-blue/60 text-beta ring-1 ring-alpha/10 transition group-open:rotate-180">
                    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
                        <path fill="currentColor" d="M7 10l5 5 5-5H7Z" />
                    </svg>
                </span>
            </summary>
            <div className="border-t border-alpha/10 px-5 pb-5 pt-4 text-sm leading-6 text-so-gray">
                {children}
            </div>
        </details>
    );
}

export default function OffresFaq() {
    return (
        <section className="grid gap-8 lg:grid-cols-2 lg:items-start">
            <div className="grid gap-4">
                <h2 className="text-2xl font-extrabold tracking-tight text-alpha">
                    Assistance &amp; FAQ
                </h2>

                <div className="grid gap-4">
                    <FaqItem title="Comment candidater à un appel d’offres ?" defaultOpen>
                        Consultez la fiche de l’appel d’offres, téléchargez le dossier, puis
                        suivez les instructions de dépôt (pièces, formats, délais).
                    </FaqItem>
                    <FaqItem title="Où trouver les archives des AO ?">
                        La section « Archives » regroupe les appels d’offres clôturés ainsi que
                        les consultations antérieures.
                    </FaqItem>
                    <FaqItem title="Quels sont les documents généralement demandés ?">
                        En fonction du marché : pièces administratives, références techniques,
                        offres financières et attestations exigées dans le dossier.
                    </FaqItem>
                </div>
            </div>

            <div className="rounded-2xl border-2 border-dashed border-gold/30 bg-gold/5 p-8 text-center ring-1 ring-gold/10">
                <div className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gold/15 text-gold ring-1 ring-gold/20">
                    <svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden="true">
                        <path
                            fill="currentColor"
                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm1 15h-2v-2h2v2Zm1.07-7.75-.9.92c-.53.54-.87 1.02-.87 1.83V13h-2v-.5c0-1.1.44-2.1 1.17-2.83l1.24-1.26a2 2 0 1 0-3.41-1.41H7a4 4 0 1 1 7.07 2.25Z"
                        />
                    </svg>
                </div>

                <h3 className="mt-5 text-xl font-extrabold tracking-tight text-alpha">
                    Besoin d’aide ?
                </h3>
                <p className="mt-3 text-sm leading-6 text-so-gray">
                    Contactez notre équipe achats pour toute question liée aux dossiers,
                    procédures ou accès à l’espace fournisseurs.
                </p>

                <div className="mt-8">
                    <div className="text-sm font-extrabold text-alpha">achats@soread2m.ma</div>
                    <div className="mt-2 text-sm text-alpha">+212 5XX XX XX XX</div>
                </div>
            </div>
        </section>
    );
}

