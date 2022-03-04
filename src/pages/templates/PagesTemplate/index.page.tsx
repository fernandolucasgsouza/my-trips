import LinkWrapper from 'pages/components/LinkWrapper/index.page';
import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline';
import * as S from './styles.page';
import { PagesProps } from 'pages/interfaces/pages.props.page';

const PagesTemplate = ({ heading, body }: PagesProps) => {
    console.log('PagesTemplate ---', heading);

    return (
        <S.Content>
            <LinkWrapper href="/">
                <CloseOutline size={32} />
            </LinkWrapper>

            <S.Heading>{heading}</S.Heading>
            <S.Body>
                {/* TODO: trocar dangerouslySetInnerHTML por sanitaze*/}
                <div dangerouslySetInnerHTML={{ __html: body }}></div>
            </S.Body>
        </S.Content>
    );
};
export default PagesTemplate;
