import styled from 'styled-components';

export const Wrapper = styled.main`
    background-color: #06092b;
    color: #fff;
    width: 100%;
    padding: 5rem;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
`;
export const Header = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    margin-bottom: 2rem;
`;
export const Logo = styled.img`
    width: 4rem;
`;

export const Title = styled.h1`
    font-size: 2.5rem;
`;

export const Description = styled.h2`
    font-size: 1.5rem;
    font-weight: 400;
`;

export const Ilustration = styled.img`
    width: min(30rem, 100%);
    margin: 3rem auto;
`;
