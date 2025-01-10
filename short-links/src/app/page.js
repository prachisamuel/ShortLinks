import Image from "next/image";
import localFont from "next/font/local";
import Link from "next/link";

const poppins = localFont({
  src: "./fonts/Poppins-ExtraBold.ttf",
  variable: "--font-poppins",
  weight: "100 900",
});

export default function Home() {
  return (
    <main className="bg-blue-100">
      <section className="flex flex-col gap-20 md:grid md:grid-cols-2 h-[100vh]">
        <div className="flex flex-col gap-4 justify-center mt-10">
          <p className={`text-xl lg:text-3xl font-bold ${poppins.className} mx-4 md:mx-16`}>
            The Best URL Shortener in the Market
          </p>
          <p className="text-sm lg:text-base mx-4 md:mx-16">
            We are the most straightfoward URL Shortener in the world. Most of the url shorteners will track you or ask you to give your details for login. We understand your needs and hence we have created this URL shortener
          </p>
          <div className='flex gap-3 justify-start mx-4 md:mx-16'>
          <Link href="/shorten"><button className='bg-blue-500 rounded-lg shadow-lg p-3 py-1 font-bold text-white'>Try Now</button></Link>
          <Link href="/github"><button className='bg-blue-500 rounded-lg shadow-lg p-3 py-1 font-bold text-white'>GitHub</button></Link>
        </div>
        </div>
        <div className="flex justify-center items-center relative">
          <Image className="mix-blend-darken" height={800} width={800} alt="an image of a vector" src={"/img.jpg"} />
        </div>

      </section>
    </main>
  );
}