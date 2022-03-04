import { render, screen } from '@testing-library/react';

import Map from './index.page';

describe('<Map>', () => {
    it('should render without any marker', () => {
        render(<Map />);

        expect(
            screen.getByRole('link', {
                name: /a js library for interactive maps/i,
            })
        ).toBeInTheDocument();

        // screen.logTestingPlaygroundURL();
    });

    it('should render with the marker in correct place', () => {
        const place = {
            id: 1,
            name: 'Belo Horizonte',
            slug: 'belo-horizonte',
            location: {
                latitude: -19.9191,
                longitude: -43.9387,
            },
        };

        const placeTwo = {
            id: 2,
            name: 'Chapecó',
            slug: 'chapeco',
            location: {
                latitude: 52,
                longitude: 10,
            },
        };
        render(<Map places={[place, placeTwo]} />);

        expect(screen.getByTitle(/Belo horizonte/i)).toBeInTheDocument();
        expect(screen.getByTitle(/Chapecó/i)).toBeInTheDocument();
        // screen.logTestingPlaygroundURL();
    });
});
