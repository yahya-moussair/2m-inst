function CtaCard({ title, description, tone = 'light', actionLabel }) {
    const cardClass =
        tone === 'dark'
            ? 'bg-alpha-blue text-beta-white ring-alpha/10'
            : 'bg-beta-white text-alpha ring-alpha/10';

    const buttonClass =
        tone === 'dark'
            ? 'bg-beta text-beta-white ring-beta/25 hover:bg-beta/90'
            : 'border-2 border-beta text-beta hover:bg-beta/5';

    return (
        <div className={['relative overflow-hidden rounded-2xl p-8 ring-1', cardClass].join(' ')}>
            <div className="mx-auto flex max-w-sm flex-col items-center text-center">
                <div
                    className={[
                        'inline-flex h-16 w-16 items-center justify-center rounded-full ring-1',
                        tone === 'dark'
                            ? 'bg-beta-white/10 text-gold ring-beta-white/10'
                            : 'bg-gold/10 text-gold ring-gold/20',
                    ].join(' ')}
                >
                    <svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden="true">
                        <path
                            fill="currentColor"
                            d="M12 2C8.13 2 5 5.13 5 9c0 4.25 3.5 8.5 7 13 3.5-4.5 7-8.75 7-13 0-3.87-3.13-7-7-7Zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5Z"
                        />
                    </svg>
                </div>

                <div className="mt-6 text-xl font-extrabold tracking-tight">{title}</div>
                <p className={['mt-3 text-sm leading-6', tone === 'dark' ? 'text-alpha-white/70' : 'text-so-gray'].join(' ')}>
                    {description}
                </p>

                <div className="mt-8 w-full">
                    <a
                        href="#"
                        className={[
                            'inline-flex h-12 w-full items-center justify-center rounded-xl px-6 text-sm font-extrabold ring-1 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-beta focus-visible:ring-offset-2',
                            tone === 'dark' ? 'ring-beta-white/10 focus-visible:ring-offset-alpha-blue' : 'ring-alpha/10 focus-visible:ring-offset-beta-white',
                            buttonClass,
                        ].join(' ')}
                    >
                        {actionLabel}
                    </a>
                </div>
            </div>
        </div>
    );
}

export default function OffresSupplierCta() {
    return (
        <section className="grid gap-8">
            <h2 className="text-center text-2xl font-extrabold tracking-tight text-alpha">
                Espace fournisseurs
            </h2>

            <div className="grid gap-6 lg:grid-cols-3">
                <CtaCard
                    title="Inscription"
                    description="Créez votre compte fournisseur et complétez votre profil pour participer aux consultations."
                    actionLabel="S’inscrire"
                    tone="light"
                />
                <CtaCard
                    title="Connexion"
                    description="Accédez à votre espace pour consulter, candidater et suivre vos démarches."
                    actionLabel="Se connecter"
                    tone="dark"
                />
                <CtaCard
                    title="Suivi"
                    description="Suivez l’état de vos candidatures et recevez les notifications importantes."
                    actionLabel="Suivre un dossier"
                    tone="light"
                />
            </div>
        </section>
    );
}

