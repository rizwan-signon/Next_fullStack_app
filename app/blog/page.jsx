import React from "react";
import Image from "next/image";
import Link from "next/link";
const Blog = () => {
  return (
    <section className="py-16 ">
      <div className="max-w-6xl mx-auto flex flex-col gap-5">
        <Link href="blog/post1" className="flex items-center">
          <div className="flex items-start gap-6">
            <div className="w-1/2 flex flex-col gap-6 shadow-md">
              <h1>test </h1>
              <p>description</p>
            </div>
            <div className="w-1/2">
              <Image
                src="/img-4.jpg"
                alt="image"
                width={500}
                height={450}
                className="rounded-xl"
              />
            </div>
          </div>
        </Link>
        <Link href="blog/post1" className="flex items-center">
          <div className="flex items-start gap-6">
            <div className="w-1/2 flex flex-col gap-6 shadow-md">
              <h1>test </h1>
              <p>description</p>
            </div>
            <div className="w-1/2">
              <Image
                src="/img-4.jpg"
                alt="image"
                width={500}
                height={450}
                className="rounded-xl"
              />
            </div>
          </div>
        </Link>
        <Link href="blog/post1" className="flex items-center">
          <div className="flex items-start gap-6">
            <div className="w-1/2 flex flex-col gap-6 shadow-md">
              <h1>test </h1>
              <p>description</p>
            </div>
            <div className="w-1/2">
              <Image
                src="/img-4.jpg"
                alt="image"
                width={500}
                height={450}
                className="rounded-xl"
              />
            </div>
          </div>
        </Link>
        <Link href="blog/post1" className="flex items-center">
          <div className="flex items-start gap-6">
            <div className="w-1/2 flex flex-col gap-6 shadow-md">
              <h1>test </h1>
              <p>description</p>
            </div>
            <div className="w-1/2">
              <Image
                src="/img-4.jpg"
                alt="image"
                width={500}
                height={450}
                className="rounded-xl"
              />
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Blog;
