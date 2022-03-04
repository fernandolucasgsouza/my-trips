import styled from 'styled-components';

export const Wrapper = styled.div`
    position: fixed;
    top: var(--medium);
    right: var(--medium);
    z-index: 1100;
    color: (--light);
    cursor: pointer;

    svg {
        transition: color 300ms ease-in-out;
    }

    &:hover {
        svg {
            color: var(--highLight);
        }
    }
`;
