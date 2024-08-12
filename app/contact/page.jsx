import Image from "next/image";
const Contact = () => {
  return (
    <section className="flex items-center justify-center mt-24">
      <div>
        <h1 className="text-center text-5xl capitalize font-bold mb-16 ">
          lets keep in touch
        </h1>
        <div className="max-w-6xl mx-auto flex items-start justify-between">
          <div className="w-1/2 animate-pulse">
            <Image
              src="/image5.jpg"
              alt="image"
              width={400}
              height={600}
              className="h-[400px] w-[400px] rounded-full "
            />
          </div>
          <div className="w-1/2 flex flex-col gap-3">
            <input
              type="text"
              placeholder="name"
              className="p-3 rounded-lg outline-none"
            />
            <input
              type="text"
              placeholder="email"
              className="p-3 rounded-lg outline-none"
            />
            <textarea
              id="w3review"
              name="description"
              value="hello"
              rows="4"
              cols="50"
              className="h-[250px] text-gray-500 rounded-lg p-2"
            >
              hello
            </textarea>
            <button className="w-1/5 bg-blue-700 p-3 rounded-lg">send</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
