export default function robots() {
    return {
        rules: {
            userAgent: '*',
            allow: ['/', '/about', '/review', '/tw/', '/en/'],
            disallow: '/private/',
        },
        sitemap: 'https://luojrshin.com/sitemap.xml',
    }
}