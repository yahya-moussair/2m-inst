import NewsletterCta from '@/components/NewsletterCta';
import HeroSection from './Partials/HeroSection';
import MediaSection from './Partials/MediaSection';
import QuickAccessSection from './Partials/QuickAccessSection';
import NewsSection from './Partials/NewsSection';
export default function Home() {
    return (
        <div className="min-h-screen bg-beta-white">
            <HeroSection />

            <div className="bg-so-gray/5">
                <MediaSection />
            </div>
            <div className="bg-beta-white">
                <QuickAccessSection />
            </div>
            <div className="bg-so-gray/5">
                <NewsSection />
            </div>
            <div>
                <NewsletterCta />
            </div>
        </div>
    );
}
