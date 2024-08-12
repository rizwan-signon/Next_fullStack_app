import React from "react";
import Image from "next/image";
const Catagory = ({ params }) => {
  return (
    <section className="pt-[110px]">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-7xl capitalize font-bold my-5 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
          our works
        </h1>
        <h2 className="text-3xl uppercase font-bold my-5 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-600">
          {params.catagory}
        </h2>
        <div className="flex flex-col gap-24 mt-10 py-20">
          <div className="flex items-start gap-6">
            <div className="w-1/2 flex flex-col gap-6 shadow-md p-2 rounded-lg">
              <h1 className="text-3xl capitalize font-bold">
                creative portfolio
              </h1>
              <p className="text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos,
                vero nesciunt velit earum cupiditate repellat qui ab cumque?
                Obcaecati, dolorem.
              </p>
              <p className="text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                molestiae tempore mollitia nisi blanditiis explicabo eius
                aliquam. Doloribus perspiciatis dignissimos eaque dolor, magnam
                recusandae ullam eos cum odit, sunt nobis.
              </p>
              <button className="p-3 bg-blue-700 rounded-lg uppercase hover:opacity-85 w-1/4">
                see more
              </button>
            </div>
            <div className="w-1/2">
              <Image
                src="/img-3.jpg"
                alt="image"
                width={500}
                height={450}
                className="rounded-xl"
              />
            </div>
          </div>
          <div className="flex items-start gap-6">
            <div className="w-1/2">
              <Image
                src="/img-1.jpg"
                alt="image"
                width={500}
                height={450}
                className="rounded-xl"
              />
            </div>
            <div className="w-1/2 flex flex-col gap-6 shadow-md rounded-lg p-2">
              <h1 className="text-3xl capitalize font-bold">
                minimal single product
              </h1>
              <p className="text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos,
                vero nesciunt velit earum cupiditate repellat qui ab cumque?
                Obcaecati, dolorem.
              </p>
              <p className="text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                molestiae tempore mollitia nisi blanditiis explicabo eius
                aliquam. Doloribus perspiciatis dignissimos eaque dolor, magnam
                recusandae ullam eos cum odit, sunt nobis.
              </p>
              <button className="p-3 bg-blue-700 rounded-lg uppercase hover:opacity-85 w-1/4">
                see more
              </button>
            </div>
          </div>
          <div className="flex items-start gap-6">
            <div className="w-1/2 flex flex-col gap-6 shadow-md p-2 rounded-lg">
              <h1 className="text-3xl capitalize font-bold">
                creative portfolio
              </h1>
              <p className="text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos,
                vero nesciunt velit earum cupiditate repellat qui ab cumque?
                Obcaecati, dolorem.
              </p>
              <p className="text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                molestiae tempore mollitia nisi blanditiis explicabo eius
                aliquam. Doloribus perspiciatis dignissimos eaque dolor, magnam
                recusandae ullam eos cum odit, sunt nobis.
              </p>
              <button className="p-3 bg-blue-700 rounded-lg uppercase hover:opacity-85 w-1/4">
                see more
              </button>
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
        </div>
      </div>
    </section>
  );
};

export default Catagory;
