import React from "react";
import Image from "next/image";
const PostDetails = () => {
  return (
    <section className="pt-[110px]">
      <div className="max-w-6xl mx-auto flex flex-col gap-10">
        <div className="flex items-start gap-7">
          <div className="w-1/2 text-justify flex flex-col gap-4">
            <h1>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
              eligendi dolorum amet!
            </h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet
              labore a natus, nihil facere esse dolorem iure laborum sequi totam
              minima doloribus recusandae pariatur, deserunt cum numquam libero
              vero reiciendis!
            </p>
            <div className="flex items-center gap-2">
              <h1>Rizwan Ullah</h1>
              <div className="min-w-12 min-h-12 ">
                <Image
                  src="/img-3.jpg"
                  alt="image"
                  width={20}
                  height={20}
                  className="rounded-full w-12 h-12 "
                />
              </div>
            </div>
          </div>
          <div className="w-1/2">
            <Image
              src="/img-3.jpg"
              alt="image"
              width={550}
              height={300}
              className="rounded-lg h-[300px] "
            />
          </div>
        </div>
        <div className="flex flex-col gap-5 text-justify">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            minima officia excepturi atque, suscipit, repellat dolor facilis
            dolore totam necessitatibus deserunt veniam nam consequuntur libero,
            debitis facere ab vitae rem sint veritatis. Inventore eum labore
            nostrum itaque, nobis doloribus, qui quaerat sit alias debitis
            magnam, tempora ullam. Quo praesentium earum accusamus voluptate
            nam, et debitis quis aspernatur id tenetur. Cum nam voluptatem,
            sequi recusandae quidem ea excepturi laborum repellendus illum
            fugiat provident saepe at, repellat quam molestias dolores atque ex
            sint itaque soluta nulla dolorum? At commodi neque minima magnam
            dolorum aperiam accusantium veritatis quidem, non officia
            dignissimos dicta aliquam.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis natus
            a vel tempore quos nesciunt magni qui? Veritatis, hic voluptatem!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
            quas perspiciatis perferendis id officiis fugit officia numquam
            exercitationem pariatur error illum et sed. Perspiciatis minima id
            voluptate blanditiis facilis cum repellat maxime sint fuga? Fuga,
            doloremque. Soluta, fugit voluptatibus? Praesentium.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PostDetails;
