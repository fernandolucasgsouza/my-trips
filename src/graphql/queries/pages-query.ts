import { gql } from 'graphql-request';

export const GET_PAGES = gql`
    query getPages {
        pages {
            id
            slug
            heading
            body {
                html
                text
            }
        }
    }
`;

export const GET_PAGES_LAZY = gql`
    query getPagesLazy($first: Int) {
        pages(first: $first) {
            id
            slug
            heading
            body {
                html
                text
            }
        }
    }
`;

export const GET_PAGE_BY_SLUG = gql`
    query getPageBySlug($slug: String) {
        page(where: { slug: $slug }) {
            id
            slug
            heading
            body {
                html
                text
            }
        }
    }
`;
