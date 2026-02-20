/* fetch data from directus */
import directus from "@/lib/directus";
import { notFound } from "next/navigation";
import { readItems } from "@directus/sdk";
/* import components */
import PageCom from "@/components/PageComponent";

async function getNews() {
  try {
    return await directus.request(
      readItems("news", {
        fields: ["*", "*.*", { image: ["*", "*.*"] }],
        sort: ["-sort"],
        filter: {
          _and: [
            {
              status: {
                _eq: "published",
              },
            },
          ],
        },
      }),
    );
  } catch (error) {
    notFound();
  }
}

export const metadata = {
  title: `首頁 Home | 羅智信 Luo Jr-Shin`,
  description: "羅智信的個人網站 Luo Jr-Shin's personal website",
};

export default async function Home({ params }) {
  // console.log(params.locale);
  const { locale } = await params;
  const news = await getNews();

  return (
    <>
      <PageCom news={news} locale={locale} />
    </>
  );
}
