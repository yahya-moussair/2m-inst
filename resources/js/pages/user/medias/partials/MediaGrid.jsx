import { useMemo } from 'react';
import MediaCard from '@/pages/user/medias/partials/MediaCard';
import { defaultMediaCatalog } from '@/pages/user/medias/partials/mediaCatalog';

export default function MediaGrid({ medias }) {
    const items = useMemo(() => {
        if (Array.isArray(medias) && medias.length > 0) return medias;
        return defaultMediaCatalog;
    }, [medias]);

    return (
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((media) => (
                <MediaCard key={media.id ?? media.title} media={media} />
            ))}
        </div>
    );
}

