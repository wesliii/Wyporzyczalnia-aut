import Link from "next/link";
import { urlFor } from "../lib/sanity";
import Button from "./Button";
import Image from "next/image";

export default function BlogArticle({ blogs }) {
  console.log(blogs);
  return (
    <>
      <div className="text-black mx-5  mb-8 lg:mx-40 lg:my-15">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div>
            <h3 className="text-[#868686] text-xl mb-5"> Blog & Artykuły</h3>
            <h1 className="text-5xl font-medium">
              Razem sprawmy, by Twoja podróż była wyjątkowa
            </h1>
          </div>

          <div className="mt-4 mb-5 lg:mt-auto lg:ml-auto ">
            <Button>Zobacz Wszystko</Button>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 mt-10 gap-5">
          {blogs.slice(0, 3).map((blog) => (
            <Link href={`/blog/${blog.currentSlug}`} key={blog.currentSlug}>
              <div className="group rounded-xl bg-[#f0f3ff] p-3 transition-transform duration-300 hover:scale-105 flex flex-col min-h-200">
                <Image
                  src={urlFor(blog.titleImage).url()}
                  width={500}
                  height={300}
                  alt={blog.title}
                  className="rounded-2xl object-cover h-100 w-full"
                />
                <div className="flex my-5 text-[#868686]">
                  <h4 className="pr-3">Kuba Wesołowski</h4>
                  <p>· 5 min read</p>
                </div>
                <div className="flex flex-col flex-1 justify-between">
                  <div className="my-5">
                    <h2 className="text-2xl font-semibold">{blog.title}</h2>
                    <p className="pt-5">{blog.smallDescription}</p>
                  </div>
                  <div className="flex items-center">
                    <div className="mr-5 bg-[#4676dd] text-[#c5d0e6] px-3 py-1 rounded-full">
                      <p>Poradnik</p>
                    </div>
                    <p>20 Maj 2026</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
