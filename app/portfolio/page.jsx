import React from "react";
import Image from "next/image";
import Link from "next/link";
const Portfolio = () => {
  return (
    <section className="mt-[100px]">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-7xl capitalize font-bold my-10 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
          our works
        </h1>
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold capitalize">choose a gallery</h1>
          <div className="flex items-center gap-4 my-10">
            <Link href={"/portfolio/illustration"}>
              <div className="relative border-blue-700 hover:opacity-85 cursor-pointer">
                <h1 className="absolute bottom-4 left-3 uppercase font-bold text-white p-2 rounded-lg">
                  Illustrtion
                </h1>
                <Image
                  src="/image5.jpg"
                  alt="image"
                  width={400}
                  height={600}
                  className="h-[300px] w-[200px] object-cover rounded-lg border-2 border-blue-700"
                />
              </div>
            </Link>
            <Link href={"/portfolio/web_apps"}>
              <div className="relative border-blue-700 hover:opacity-85 cursor-pointer">
                <h1 className="absolute bottom-4 left-3 uppercase font-bold text-white p-2 rounded-lg">
                  web Apps
                </h1>
                <Image
                  src="/img-3.jpg"
                  alt="image"
                  width={400}
                  height={600}
                  className="h-[300px] w-[200px] object-cover rounded-lg border-2 border-blue-700"
                />
              </div>
            </Link>
            <Link href={"/portfolio/mobile_apps"}>
              <div className="relative border-blue-700 hover:opacity-85 cursor-pointer">
                <h1 className="absolute bottom-4 left-3 uppercase font-bold text-white  p-2 rounded-lg">
                  mobile_apps
                </h1>
                <Image
                  src="/travel.png"
                  alt="image"
                  width={400}
                  height={600}
                  className="h-[300px] w-[200px] object-cover rounded-lg border-2 border-blue-700"
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
