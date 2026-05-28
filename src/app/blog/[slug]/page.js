import Navbar from "../../components/Navbar";
import Cta from "../../components/Cta";
import Footer from "../../components/Footer";
import { client } from "../../lib/sanity";
import { urlFor } from "../../lib/sanity";
import Image from "next/image";
import { PortableText } from "next-sanity";
import Link from "next/link";

async function getData(slug) {
  const query = `
  *[_type == "blog" && slug.current == '${slug}']
  {
    "currentSlug": slug.current,title,content,titleImage
  }[0]`;
  const data = await client.fetch(query);

  const query2 = `
*[_type == "blog"] | order(_createdAt desc) {
  title,
  category,
  smallDescription,
  titleImage,
  publishedAt,
  "currentSlug": slug.current
}`;
  const data2 = await client.fetch(query2);

  return { data, data2 };
}

export default async function BlogArticle({ params }) {
  const { slug } = await params;
  const { data, data2 } = await getData(slug);
  return (
    <div className="text-black ">
      <div className="px-5 lg:px-20 ">
        <h3 className="text-2xl">Blogi & Artukuły</h3>
        <h1 className="text-4xl my-5">{data.title}</h1>
        <div className="grid grid-cols-2 lg:grid-cols-[30%_40%_20%] gap-10">
          <div>
            <Image
              src={urlFor(data.titleImage).url()}
              width={500}
              height={300}
              alt={data.title}
              className="rounded-2xl object-cover w-full"
            />
          </div>
          <div className="min-w-0">
            <h1 className="text-5xl font-semibold mb-5">{data.title}</h1>
            <div className="prose max-w-none text-2xl">
              <PortableText value={data.content} className="" />
            </div>
          </div>
          <div className="flex gap-5 lg:flex-col justify-around h-full col-span-3 lg:col-span-1 ">
            <div> </div>
            {data2
              .filter((blog) => blog.currentSlug !== data.currentSlug)
              .map((blog) => (
                <Link
                  key={blog.currentSlug}
                  className="mb-4 bg-[#EDECE3] p-4 rounded-2xl "
                  href={`/blog/${blog.currentSlug}`}
                >
                  <h4 className="font-bold mb-5">{blog.title}</h4>
                  <div className="flex">
                    {" "}
                    <Image
                      src={urlFor(blog.titleImage).url()}
                      width={100}
                      height={60}
                      alt={blog.title}
                      className="rounded object-cover"
                    />
                    <p className="text-sm mt-2 ml-5">{blog.smallDescription}</p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
      <Cta />
      <Footer />
    </div>
  );
}
