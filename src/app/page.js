import Image from "next/image";
import { client } from "./lib/sanity";
import MainPage from "./views/MainPage";

async function GetData() {
  const query = `
*[_type == "blog"] | order(_createdAt desc) {
  title,
  category,
  smallDescription,
  titleImage,
  publishedAt,
  "currentSlug": slug.current
}`;
  const data = await client.fetch(query);
  return data;
}

export default async function Home() {
  const data = await GetData();
  return <MainPage blogs={data} />;
}
