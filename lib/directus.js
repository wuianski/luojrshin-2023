import { createDirectus, rest } from '@directus/sdk';
import { cache } from 'react'

const directusAPI = process.env.DIRECTUS_URL_DO
// console.log(directusAPI)

const directus = createDirectus(`${directusAPI}`).with(rest({
    onRequest: (options) => ({ ...options, cache: 'no-store' }),
}))

export default directus;