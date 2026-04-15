import { useState } from 'react';

export default function NewsletterCta() {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('idle'); // idle | success

    function handleSubmit(event) {
        event.preventDefault();
        const trimmedEmail = email.trim();
        if (!trimmedEmail) return;

        setStatus('success');
        setEmail('');
        window.setTimeout(() => setStatus('idle'), 2500);
    }

    return (
        <section className="relative overflow-hidden bg-alpha py-14 sm:py-18">
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute inset-0 bg-linear-to-b from-beta-white/10 via-beta-blue/40 to-alpha/70" />
                <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-beta/20 blur-3xl" />
                <div className="absolute -right-24 -bottom-28 h-72 w-72 rounded-full bg-gold/20 blur-3xl" />
            </div>

            <div className="relative mx-auto max-w-7xl px-4">
                <div className="mx-auto max-w-3xl text-center">
                    <div className="inline-flex items-center gap-2 rounded-full border border-beta-white/10 bg-beta-white/5 px-4 py-1.5 text-[11px] font-semibold tracking-wide text-beta-white/80">
                        <span className="inline-flex h-2 w-2 rounded-full bg-beta" />
                        Newsletter
                    </div>

                    <h2 className="mt-6 text-2xl font-extrabold tracking-tight text-beta-white sm:text-3xl">
                        Recevez nos actualités &amp; temps forts
                    </h2>
                    <p className="mt-3 text-sm leading-6 text-beta-white/75 sm:text-base">
                        Abonnez‑vous pour ne rien manquer des nouveautés du
                        groupe : programmes, événements, appels d’offres et
                        communiqués.
                    </p>

                    <form
                        onSubmit={handleSubmit}
                        className="mx-auto mt-8 flex w-full max-w-xl flex-col gap-3 sm:flex-row sm:items-center"
                    >
                        <label className="sr-only" htmlFor="newsletter-email">
                            Email
                        </label>
                        <input
                            id="newsletter-email"
                            type="email"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            placeholder="Votre email"
                            className="h-12 w-full rounded-full bg-beta-white/5 px-5 text-sm text-beta-white placeholder:text-beta-white/55 ring-1 ring-beta-white/15 backdrop-blur-sm transition focus:ring-2 focus:ring-beta focus:outline-none"
                            autoComplete="email"
                        />
                        <button
                            type="submit"
                            className="inline-flex h-12 items-center justify-center rounded-full bg-beta px-6 text-sm font-semibold text-beta-white shadow-sm ring-1 ring-beta/25 transition hover:opacity-90 focus-visible:ring-2 focus-visible:ring-beta focus-visible:ring-offset-2 focus-visible:ring-offset-alpha focus-visible:outline-none sm:shrink-0"
                        >
                            S’abonner
                        </button>
                    </form>

                    <div className="mt-4 text-xs text-beta-white/65">
                        {status === 'success' ? (
                            <span className="font-semibold text-beta-white">
                                Merci ! Votre demande a été prise en compte.
                            </span>
                        ) : (
                            <span>
                                En vous abonnant, vous acceptez de recevoir nos
                                emails. Désinscription à tout moment.
                            </span>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}

