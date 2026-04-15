import { usePage } from '@inertiajs/react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
// import NewsletterCta from '@/components/NewsletterCta';
import AppSidebarLayout from '@/layouts/app/app-sidebar-layout';
import type { BreadcrumbItem } from '@/types';

export default function AppLayout({
    breadcrumbs = [],
    children,
}: {
    breadcrumbs?: BreadcrumbItem[];
    children: React.ReactNode;
}) {
    const page = usePage();
    const auth = (page.props as any)?.auth;
    const role = auth?.user?.role;
    const showPublicShell = !auth?.user || role === 'user';

    if (showPublicShell) {
        return (
            <div className="min-h-screen bg-background text-foreground">
                <Navbar />
                <main className="min-h-[calc(100vh-4rem)]">{children}</main>
                {/* <NewsletterCta /> */}
                <Footer />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background text-foreground">
            <AppSidebarLayout breadcrumbs={breadcrumbs}>
                {children}
            </AppSidebarLayout>
            {/* <NewsletterCta /> */}
        </div>
    );
}
