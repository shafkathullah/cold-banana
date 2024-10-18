import Image from "next/image";
import Link from "next/link";

const Header = () => (
  <header className="flex justify-between items-center p-4 mx-auto max-w-6xl">
    <h1 className="text-4xl font-bold">CHILLED GRAPE</h1>
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
  <section className="text-center py-20">
    <div className="bg-black bg-opacity-50 py-20">
      <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
        LOREM IPSUM
        <br />
        DOLOR SIT AMET.
      </h2>
      <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-6 py-2 rounded-full hover:from-green-500 hover:to-blue-600 transition duration-300">
        Read More
      </button>
    </div>
  </section>
);

const Feature = () => (
  <section className="flex flex-col md:flex-row items-center justify-between py-20 px-4">
    <div className="md:w-1/2 mb-10 md:mb-0">
      <h2 className="text-3xl font-bold mb-4">LOREM IPSUM DOLOR SIT AMET.</h2>
      <p className="mb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
        dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit.
      </p>
      <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white">
        Read More
      </button>
    </div>
    <div className="md:w-1/2 relative">
      <div className="w-64 h-64 bg-gradient-to-br from-blue-400 to-green-400 rounded-full absolute -z-10"></div>
      <Image
        src="/placeholder.svg"
        alt="Plant"
        width={300}
        height={300}
        className="relative z-10"
      />
    </div>
  </section>
);

const ProductCard = ({
  image,
  title,
  price,
}: {
  image: string;
  title: string;
  price: string;
}) => (
  <div className="bg-white rounded-lg overflow-hidden shadow-lg">
    <Image
      src={image}
      alt={title}
      width={300}
      height={300}
      className="w-full h-48 object-cover"
    />
    <div className="p-4">
      <h3 className="font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{price}</p>
    </div>
  </div>
);

const ProductGrid = () => (
  <section className="py-20 px-4">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <ProductCard
        image="/placeholder.svg"
        title="CONSECTETUR ELIT"
        price="£12.99"
      />
      <ProductCard
        image="/placeholder.svg"
        title="CONSECTETUR ELIT"
        price="£12.99"
      />
      <ProductCard
        image="/placeholder.svg"
        title="CONSECTETUR ELIT"
        price="£12.99"
      />
      <ProductCard
        image="/placeholder.svg"
        title="CONSECTETUR ELIT"
        price="£12.99"
      />
      <ProductCard
        image="/placeholder.svg"
        title="CONSECTETUR ELIT"
        price="£12.99"
      />
      <ProductCard
        image="/placeholder.svg"
        title="CONSECTETUR ELIT"
        price="£12.99"
      />
    </div>
    <div className="text-center mt-12">
      <button className="border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white">
        Load More
      </button>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-gradient-to-r from-blue-500 to-green-400 text-white py-12 px-4">
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
      <div>
        <h2 className="text-2xl font-bold mb-4">CHILLED GRAPE</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div>
        <h3 className="font-bold mb-2">Company</h3>
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
        </ul>
      </div>
      <div>
        <h3 className="font-bold mb-2">Products</h3>
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
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <h3 className="font-bold mb-2">Follow Us</h3>
        <div className="flex space-x-4">
          <Link href="#" className="hover:opacity-75">
            <span className="sr-only">Facebook</span>
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
          <Link href="#" className="hover:opacity-75">
            <span className="sr-only">Instagram</span>
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
          <Link href="#" className="hover:opacity-75">
            <span className="sr-only">Twitter</span>
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  </footer>
);

export default function Component() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Feature />
        <ProductGrid />
      </main>
      <Footer />
    </div>
  );
}