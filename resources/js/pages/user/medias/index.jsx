import AppLayout from '@/layouts/app-layout';
import MediaHero from '@/pages/user/medias/partials/MediaHero';
import MediaSectionHeader from '@/pages/user/medias/partials/MediaSectionHeader';
import MediaGrid from '@/pages/user/medias/partials/MediaGrid';
import SynergySection from '@/pages/user/medias/partials/SynergySection';

export default function Index(props) {
    const medias = props?.medias;

    return (
        <div className="bg-beta-white">
            <MediaHero />

            <section className="relative py-10 sm:py-14">
                <div className="mx-auto max-w-7xl px-4">
                    <MediaSectionHeader />
                    <MediaGrid medias={medias} />
                </div>
            </section>

            <SynergySection />
        </div>
    );
}

Index.layout = (page) => <AppLayout>{page}</AppLayout>;
