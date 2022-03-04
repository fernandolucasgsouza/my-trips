import { render, screen } from '@testing-library/react';

import Main from './index.page';

describe('should render component <Main />', () => {
    it('should render the heading', () => {
        const { container } = render(<Main />);

        expect(
            screen.getByRole('heading', { name: /Fernando Developer/i })
        ).toBeInTheDocument();

        expect(container.firstChild).toMatchSnapshot();
    });
});
