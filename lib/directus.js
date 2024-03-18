import { createDirectus, rest } from '@directus/sdk';

const directusAPI = process.env.DIRECTUS_URL_DO
// console.log(directusAPI)

const directus = createDirectus(`${directusAPI}`).with(rest({
    onRequest: (options) => ({ ...options }, { next: { revalidate: 10 } }),
}));

export default directus;