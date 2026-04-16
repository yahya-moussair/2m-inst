import AppLayout from '@/layouts/app-layout';
import OffresFaq from '@/pages/user/offres/partials/OffresFaq';
import OffresFilters from '@/pages/user/offres/partials/OffresFilters';
import OffresHero from '@/pages/user/offres/partials/OffresHero';
import OffresSupplierCta from '@/pages/user/offres/partials/OffresSupplierCta';
import OffresTenderTable from '@/pages/user/offres/partials/OffresTenderTable';

export default function Index() {
    const tenders = [
        {
            ref: 'AO-2026-014',
            object: 'Prestation de maintenance applicative (web & mobile)',
            publishedAt: '12/04/2026',
            deadline: '28/04/2026',
            status: 'open',
        },
        {
            ref: 'AO-2026-011',
            object: 'Fourniture d’équipements studio (lot 1)',
            publishedAt: '04/04/2026',
            deadline: '18/04/2026',
            status: 'closing',
        },
        {
            ref: 'AO-2026-006',
            object: 'Travaux d’aménagement – site technique',
            publishedAt: '18/03/2026',
            deadline: '02/04/2026',
            status: 'closed',
        },
        {
            ref: 'AO-2026-002',
            object: 'Services de sécurité & sûreté (multi-sites)',
            publishedAt: '01/03/2026',
            deadline: '20/03/2026',
            status: 'closed',
        },
    ];

    return (
        <div className="min-h-screen bg-so-gray/5">
            <main className="mx-auto max-w-7xl px-4 py-10 sm:py-12">
                <div className="grid gap-10 sm:gap-14">
                    <OffresHero />
                    <OffresFilters />
                    <OffresTenderTable tenders={tenders} />
                    <OffresSupplierCta />
                    <OffresFaq />
                </div>
            </main>
        </div>
    );
}

Index.layout = (page) => <AppLayout>{page}</AppLayout>;

