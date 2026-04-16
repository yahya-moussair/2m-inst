import AppLayout from '@/layouts/app-layout';
import EsgHero from '@/pages/user/esg/partials/EsgHero';
import EsgStats from '@/pages/user/esg/partials/EsgStats';
import EsgPillars from '@/pages/user/esg/partials/EsgPillars';
import EsgSocialActions from '@/pages/user/esg/partials/EsgSocialActions';
import EsgAweSection from '@/pages/user/esg/partials/EsgAweSection';
import EsgInnovationSpotlight from '@/pages/user/esg/partials/EsgInnovationSpotlight';
import EsgEnvironmentRoadmap from '@/pages/user/esg/partials/EsgEnvironmentRoadmap';
import EsgResources from '@/pages/user/esg/partials/EsgResources';

export default function Index() {
    return (
        <div className="min-h-screen bg-beta-white">
            <EsgHero />

            <EsgStats />

            <EsgPillars />

            <EsgAweSection />

            <EsgInnovationSpotlight />

            <EsgSocialActions />

            <EsgEnvironmentRoadmap />

            <div className="bg-beta-white">
                <div className="pointer-events-none mx-auto max-w-7xl px-4">
                    <div className="h-px bg-linear-to-r from-transparent via-alpha/10 to-transparent" />
                </div>
                <EsgResources />
            </div>
        </div>
    );
}

Index.layout = (page) => <AppLayout>{page}</AppLayout>;

