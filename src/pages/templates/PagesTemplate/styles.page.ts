import styled from 'styled-components';

export const Content = styled.div`
    max-width: var(--container);
    height: 100vh;
    text-align: center;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: var(--medium);
`;

export const Heading = styled.h1`
    font-size: var(--large);
    margin-bottom: var(--large);
`;

export const Body = styled.div`
    p {
        font-size: var(--small);
        line-height: 1.8rem;
    }
`;
