import { useRouter } from 'next/router';
import { GetStaticPaths, GetStaticProps } from 'next/types';

import client from 'graphql/client';
import { PagesProps } from './interfaces/pages.props.page';
import PagesTemplate from './templates/PagesTemplate/index.page';
import { GET_PAGES_LAZY, GET_PAGE_BY_SLUG } from 'graphql/queries/pages-query';
import {
    GetPageBySlugQuery,
    GetPagesLazyQuery,
} from 'graphql/generated/graphql';

//getStaticPaths: serve para gerar urls em build time /about, /trip/belo-horizonte
//getStaticProps: serve para buscar dados da página (props) - build time - estático
//getServerSideProps: serve para buscar dados da página (props) - runtime - toda requisição (bundle fica no server)
//getInitialProps: serve para buscar dados da página (props) - runtime toda requisição (bundle vai para o client) - hidrate
export default function Page({ heading, body }: PagesProps) {
    const router = useRouter();

    if (router.isFallback) return null;

    return <PagesTemplate heading={heading} body={body} />;
}

export const getStaticPaths: GetStaticPaths = async () => {
    const { pages } = await client.request<GetPagesLazyQuery>(GET_PAGES_LAZY, {
        first: 3,
    });
    const paths = pages?.map(({ slug }) => ({ params: { slug } }));

    return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { page } = await client.request<GetPageBySlugQuery>(
        GET_PAGE_BY_SLUG,
        { slug: `${params?.slug}` }
    );

    if (!page) return { notFound: true };

    return {
        props: {
            heading: page.heading,
            body: page.body?.html,
        },
    };
};