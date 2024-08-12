import React from "react";
import Image from "next/image";
const About = () => {
  return (
    <section className=" mt-20">
      <div className="max-w-6xl mx-auto ">
        <div className="max-w-6xl mx-auto h-[300px] bg-green-400 relative">
          <Image
            src={"/img-3.jpg"}
            alt="image"
            width={700}
            height={300}
            className="object-cover w-full h-[300px]"
          />
          <div className=" absolute bottom-5 left-3 p-2 rounded-lg bg-blue-600 text-white uppercase">
            <h1 className="text-2xl font-bold">digital arts and stories</h1>
            <p className="font-bold">handcrafting designs fro your products</p>
          </div>
        </div>
        <div className="flex items-start gap-10 p-2 mt-10">
          <div className="flex flex-col gap-3 w-1/2 text-justify">
            <h1 className="text-3xl capitalize font-bold">who are we?</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem temporibus, vero iusto fugiat saepe obcaecati iure id
              doloribus consectetur doloremque exercitationem officiis
              dignissimos corrupti, totam porro nobis est? Magni, iste.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Reiciendis ducimus nam deleniti tempore vero iure eligendi?
              Dolore, in at. Repudiandae est aliquid fugit deleniti possimus
              eligendi eaque ducimus pariatur quia. Veritatis ratione at magni
              ad consequatur quidem qui quis repellendus!
            </p>
          </div>
          <div className="flex flex-col gap-3 w-1/2 text-justify">
            <h1 className="text-3xl capitalize font-bold">what we do?</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem temporibus, vero iusto fugiat saepe obcaecati iure id
              doloribus consectetur doloremque exercitationem officiis
              dignissimos corrupti, totam porro nobis est? Magni, iste.
            </p>
            <p>dynamic web applications</p>
            <p>creative illustration</p>
            <p>fast and handy mobile application</p>
            <button className="bg-blue-700 px-4 py-1 w-1/5 rounded-lg uppercase">
              contact
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
