// fetch data from directus
import directus from "@/lib/directus";
import { notFound } from "next/navigation";
import { readItems } from "@directus/sdk";

const EXTERNAL_DATA_URL = 'https://luojrshin.com';

async function getPage() {
    try {
        const page = await directus.request(
            readItems("posts", {
                fields: [
                    "*",
                    "*.*",
                ],
                filter: {
                    _and: [
                        {
                            status: {
                                _eq: "published",
                            },
                        },
                    ],
                },
            })
        );
        return page;
    } catch (error) {
        notFound();
    }
}

export default async function sitemap() {
    const page = await getPage();
    console.log(page.slug);
    if (!page) {
        notFound();
    }
    return [
        {
            url: `${EXTERNAL_DATA_URL}`,
        },
        {
            url: `${EXTERNAL_DATA_URL}/tw`,
        },
        {
            url: `${EXTERNAL_DATA_URL}/en`,
        },
        {
            url: `${EXTERNAL_DATA_URL}/tw/about`,
        },
        {
            url: `${EXTERNAL_DATA_URL}/en/about`,
        },
        {
            url: `${EXTERNAL_DATA_URL}/tw/review`,
        },
        {
            url: `${EXTERNAL_DATA_URL}/en/review`,
        },
        ...page.map((item) => ({
            url: `${EXTERNAL_DATA_URL}/tw/${item.slug}`,
        })),
        ...page.map((item) => ({
            url: `${EXTERNAL_DATA_URL}/en/${item.slug}`,
        })),

    ]
}