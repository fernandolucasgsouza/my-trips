import * as Styles from './styles.page';

const Main = () => (
    <Styles.Wrapper>
        <Styles.Header>
            <Styles.Logo
                src="/images/logo.png"
                alt="imagem de um átomo que representa linguagem"
            ></Styles.Logo>
            <Styles.Title>Fernando Developer</Styles.Title>
        </Styles.Header>
        <Styles.Description>
            NextJs, TypeScript, e Styled Components.
        </Styles.Description>
        <Styles.Ilustration
            src="/images/programmer-rafiki.svg"
            alt="imagem de desenvolvedor de frente para um computador"
        />
    </Styles.Wrapper>
);

export default Main;
