import Image from "next/image";
import Link from "next/link";
import heroBg from "./hero_bg.svg";
import vase from "./vase.png";
import ProductGrid from "./component/product-grid";
import blob from "./blob.svg";
import social1 from "./social/1.svg";
import social2 from "./social/2.svg";
import social3 from "./social/3.svg";
import social4 from "./social/4.svg";
import social5 from "./social/5.svg";
import social6 from "./social/6.svg";

const Header = () => (
  <header className="flex justify-between pt-[42px] items-center mx-auto max-w-6xl">
    <h1 className="text-4xl font-bold text-white">CHILLED GRAPE</h1>
    <div className="flex items-center space-x-24">
      <nav className="hidden md:flex space-x-10">
        <Link
          href="#"
          className="text-gray-700 hover:text-gray-900 font-semibold"
        >
          Home
        </Link>
        <Link
          href="#"
          className="text-gray-700 hover:text-gray-900 font-semibold"
        >
          About
        </Link>
        <Link
          href="#"
          className="text-gray-700 hover:text-gray-900 font-semibold"
        >
          Blog
        </Link>
        <Link
          href="#"
          className="text-gray-700 hover:text-gray-900 font-semibold"
        >
          Pricing
        </Link>
      </nav>
      <button className="bg-gradient-to-l from-[#5B68DF] to-[#73E0A9] text-white hover:opacity-90 w-44 h-10 rounded-full transition duration-300 text-base font-semibold">
        Login
      </button>
    </div>
  </header>
);

const Hero = () => (
  <section className="h-[700px] flex justify-center items-center">
    <Image
      src={heroBg}
      alt="Hero Background"
      width={1920}
      height={1080}
      className="absolute -top-[200px] z-[-1] overflow-visible"
    />
    <div className="md:w-5/12">
      <h2 className="text-[64px] leading-[96px] font-bold text-[#212121]">
        LOREM IPSUM
        <br />
        DOLOR SIT AMET.
      </h2>
      <button className="bg-gradient-to-r to-[#5B68DF] from-[#73E0A9] text-white w-[249px] h-[60px] rounded-full hover:opacity-90 transition duration-300 text-[22px] leading-[33px] font-semibold">
        Read More
      </button>
    </div>
  </section>
);

const Feature = () => (
  <section className="flex flex-col gap-10  md:flex-row items-center justify-between max-w-6xl mx-auto">
    <div className="md:w-7/12">
      <h2 className="font-poppins mb-[38px] text-4xl font-bold leading-[54px] text-left">
        LOREM IPSUM DOLOR SIT
        <br />
        AMET.
      </h2>
      <p className="font-poppins text-2xl font-normal leading-9 text-left mb-12">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
        dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit.
      </p>
      <button className="bg-gradient-to-r from-[#5B68DF] to-[#73E0A9] text-white w-[175px] h-[40px] rounded-full hover:opacity-90 transition duration-300 text-[16px] leading-[24px] font-semibold">
        Read More
      </button>
    </div>
    <div className="md:w-5/12 relative">
      <Image
        src={vase}
        alt="Plant"
        className="relative z-10 w-full h-full scale-125 pb-20"
      />
    </div>
  </section>
);

const Footer = () => (
  <footer className="relative h-[400px] flex items-center overflow-hidden pt-20">
    <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row gap-12 md:justify-between overflow-hidden">
      <Image
        className="absolute -bottom-[200px] left-[120px] -z-10 h-[600px]"
        src={blob}
        alt="Chilled Grape Logo"
      />
      <div className="md:w-[459px] text-white">
        <h2 className="text-[36px] leading-[54px] font-bold mb-4">
          CHILLED GRAPE
        </h2>
        <p className="text-[22px] leading-[33px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit
          amet.
        </p>
      </div>
      <div className="flex">
        <div className="w-[180px]">
          <h3 className="mb-[21px] text-[20px] leading-[30px] font-medium bg-gradient-to-r from-[#73E0A9] to-[#5B68DF] bg-clip-text text-transparent">
            Company
          </h3>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="hover:underline">
                About
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Careers
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Our Work
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-[180px]">
          <h3 className="mb-[21px] text-[20px] leading-[30px] font-medium bg-gradient-to-r from-[#73E0A9] to-[#5B68DF] bg-clip-text text-transparent">
            Products
          </h3>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="hover:underline">
                About
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Careers
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Our Work
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-[180px]">
          <h3 className="mb-[21px] text-[20px] leading-[30px] font-medium bg-gradient-to-r from-[#73E0A9] to-[#5B68DF] bg-clip-text text-transparent">
            Follow Us
          </h3>
          <div className="grid grid-cols-3 gap-x-[38px] gap-y-[23px]">
            <Image src={social1} alt="Social 1" />
            <Image src={social2} alt="Social 2" />
            <Image src={social3} alt="Social 3" />
            <Image src={social4} alt="Social 4" />
            <Image src={social5} alt="Social 5" />
            <Image src={social6} alt="Social 6" />
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default async function Component() {
  const products = await getProducts();
  console.log({ products });
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Feature />
        <ProductGrid products={products} />
      </main>
      <Footer />
    </div>
  );
}

async function getProducts() {
  const [res] = await fetch(
    "https://my-json-server.typicode.com/TomSearle/cb-devtest-api/products"
  ).then((res) => res.json());
  return res;
}
