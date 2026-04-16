import { Link, usePage } from '@inertiajs/react';

const navItems = [
    { label: 'Le Groupe', href: '/group2M' },
    { label: 'Médias', href: '/medias' },
    { label: 'Gouvernance', href: '/gouvernance' },
    { label: 'ESG', href: '/esg' },
    { label: "Appels d'Offres", href: '/offres' },
    { label: 'Carrières', href: '/carrieres' },
];

export default function Navbar() {
    const { url } = usePage();

    return (
        <header className="sticky top-0 z-50 w-full bg-beta-white shadow-sm">
            <div className="mx-auto flex h-16 max-w-7xl items-center gap-4 px-4">
                <Link href="/" className="flex shrink-0 items-center gap-2">
                    <img
                        src="/assets/logo.png"
                        alt="2M Groupe SOREAD"
                        className="h-10 w-auto shrink-0 rounded-md object-contain"
                    />
                    {/* <span className="text-sm font-extrabold tracking-wide text-alpha">
                        SOREAD 2M
                    </span> */}
                </Link>

                <nav className="hidden flex-1 items-center justify-center gap-7 lg:flex">
                    {navItems.map((item) => {
                        const isActive =
                            url === item.href ||
                            url?.startsWith(`${item.href}/`);

                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={[
                                    'text-sm font-medium transition-colors',
                                    isActive
                                        ? 'text-alpha'
                                        : 'text-so-gray hover:text-alpha',
                                ].join(' ')}
                            >
                                {item.label}
                            </Link>
                        );
                    })}
                </nav>

                <div className="ml-auto flex shrink-0 items-center gap-3">
                    <div className="hidden items-center gap-1 rounded-md bg-alpha-white p-1 shadow-sm sm:flex">
                        <button
                            type="button"
                            className="rounded px-2 py-1 text-xs font-semibold text-alpha"
                        >
                            FR
                        </button>
                        <button
                            type="button"
                            className="rounded px-2 py-1 text-xs font-semibold text-so-gray hover:text-alpha"
                        >
                            AR
                        </button>
                    </div>

                    <Link
                        href="/appels-offres"
                        className="inline-flex items-center gap-2 rounded-md bg-beta px-4 py-2 text-sm font-semibold text-beta-white shadow-sm transition hover:opacity-90"
                    >
                        <span className="inline-flex h-5 w-5 items-center justify-center rounded bg-beta-white/15">
                            <svg
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                                className="h-4 w-4"
                            >
                                <path
                                    fill="currentColor"
                                    d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Zm0 2.5L18.5 9H14ZM8 13h8v2H8Zm0 4h8v2H8Z"
                                />
                            </svg>
                        </span>
                        Appels d&apos;offres
                    </Link>
                </div>
            </div>
        </header>
    );
}
