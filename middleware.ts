import createMiddleware from 'next-intl/middleware';
import {locales, localePrefix} from './navigation';
import {defaultLocale} from './i18nconfig';

export default createMiddleware({
//   defaultLocale: 'en',
//   locales: ['en', 'tw'],
  defaultLocale,
  locales,
  localePrefix,
//   localeDetection: true,
//   localePrefix: "always"
});

export const config = {
  matcher: [
    // Enable a redirect to a matching locale at the root
    '/',

    // Set a cookie to remember the previous locale for
    // all requests that have a locale prefix
    '/(tw|en)/:path*',

    // Enable redirects that add missing locales
    // (e.g. `/pathnames` -> `/en/pathnames`)
    '/((?!_next|_vercel|.*\\..*).*)'
  ]
};