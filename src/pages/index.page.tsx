import dynamic from 'next/dynamic';
import { InfoOutline } from '@styled-icons/evaicons-outline/InfoOutline';

import LinkWrapper from './components/LinkWrapper/index.page';
const Map = dynamic(() => import('./components/Map/index.page'), {
    ssr: false,
});

export default function Home() {
    return (
        <>
            <LinkWrapper href="/about">
                <InfoOutline size={32} aria-label="About" />
            </LinkWrapper>
            <Map
                places={[
                    {
                        id: 1,
                        name: 'Belo Horizonte',
                        slug: 'belo-horizonte',
                        location: {
                            latitude: -19.9191,
                            longitude: -43.9387,
                        },
                    },
                ]}
            />
        </>
    );
}
