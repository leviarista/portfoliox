import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className="flex flex-col justify-center items-center p-5">
        <h1 className="text-7xl">PORTFOLIOX</h1>
        <Image
          className="relative mt-4 drop-shadow-[0_0_4px_#ffffff70] dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
          src="/portfoliox-logo.svg"
          alt="Portfoliox Logo"
          width={100}
          height={107}
          priority
        />
        <div className="min-w-full mx-2 sm:min-w-[500px] -mt-12 p-14 pb-7 panel text-3xl rounded-lg">
          <p className="flex flex-col justify-center items-center leading-none">
            <span className="leading-none">
              Create a <br />
              FREE PORTFOLIO
            </span>
            <Image
              className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
              src="/ampersand.svg"
              alt="Ampersand icon"
              width={25}
              height={25}
              priority
            />
            Showcase your projects!
          </p>
          <div className="my-8 flex justify-center">
            <Image
              className="relative drop-shadow-[0_0_4_#ffffff70]"
              src="/home-screenshots.png"
              alt="Home Screenshots"
              width={313}
              height={114}
            />
          </div>
          <div className="flex flex-col-reverse sm:flex-row justify-center gap-8">
            <div className="flex flex-col gap-2">
              <p className="text-xl">{"See other's projects"}</p>
              <a href="#" className="btn-primary-outline shadow-[#FFFFFF70]">
                Explore
              </a>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-xl">{"It's free"}</p>
              <a
                href="/create"
                className="btn-primary bg-white text-primary shadow-[#FFFFFF70]"
              >
                {"Let's go!"}
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
