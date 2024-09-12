import Image from "next/image";
import Link from "next/link";
function Page() {
  return (
    <section className="mt-10">
      <div className="flex flex-col items-center">
        <Link href="/" className="mb-8 inline-flex items-center gap-2.5 text-2xl font-bold text-black md:text-3xl" aria-label="logo">
          <Image
            src="https://res.cloudinary.com/dju3jontk/image/upload/q_100/v1726022041/Sadwdeafsds_cwid43.webp"
            quality={100}
            width={200}
            height={200}
            alt="logo"
            sizes="100vw"
          />
        </Link>

        <p className="mb-4 text-sm font-GothicBold uppercase text-white md:text-base">That’s a 404</p>
        <h1 className="mb-2 text-center text-2xl font-GothicExtraBold text-white md:text-3xl">Page not found</h1>

        <p className="mb-12 max-w-screen-md text-center text-gray-500 md:text-lg">The page you’re looking for doesn’t exist.</p>

        <Link href="/" className="inline-block rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base">Go home</Link>
      </div>
    </section>
  );
}

export default Page;