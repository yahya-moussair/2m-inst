import EditorialModelSection from './partials/EditorialModelSection';
import GroupHeroSection from './partials/GroupHeroSection';
import GroupMissionSection from './partials/GroupMissionSection';
import GroupTimelineSection from './partials/GroupTimelineSection';
import PresenceSection from './partials/PresenceSection';
import Vision2025Section from './partials/Vision2025Section';
import GroupQuickLinksSection from './partials/GroupQuickLinksSection';

export default function Group2M() {
    return (
        <div className="min-h-screen bg-beta-white">
            <GroupHeroSection />

            <div className="bg-beta-white">
                <GroupMissionSection />
            </div>
            <div className="bg-so-gray/5">
                <GroupTimelineSection />
            </div>
            <div className="bg-beta-white">
                <PresenceSection />
            </div>
            <EditorialModelSection />
            <div className="bg-beta-white">
                <Vision2025Section />
            </div>
            <div className="bg-so-gray/5">
                <GroupQuickLinksSection />
            </div>
        </div>
    );
}
