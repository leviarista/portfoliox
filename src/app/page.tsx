import Image from "next/image";

export default function Home() {
  return (
    <>
      <nav className="px-6 py-3 flex justify-between items-center text-2xl">
        <Image
          className="relative drop-shadow-[0_0_0.3rem_#00000070] dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
          src="/portfoliox-logo.svg"
          alt="Portfoliox Logo"
          width={70}
          height={75}
          priority
        />
        <div className="hidden md:flex gap-8 items-center">
          <a href="#" className="text-primary">
            Login
          </a>
          <a href="#" className="text-primary">
            Explore
          </a>
          <a href="#" className="btn-primary">
            Create
          </a>
        </div>
        <div className="block md:hidden">
          <a href="#" className="menu-button">
            <Image
              className=""
              src="/menu.svg"
              alt="Menu icon"
              width={40}
              height={34}
              priority
            />
          </a>
        </div>
      </nav>
      <main className="flex flex-col justify-center items-center p-5 min-h-[calc(100vh-100px-55px)]">
        <h1 className="text-7xl">PORTFOLIOX</h1>
        <Image
          className="relative mt-4 drop-shadow-[0_0_4px_#ffffff70] dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
          src="/portfoliox-logo.svg"
          alt="Portfoliox Logo"
          width={100}
          height={107}
          priority
        />
        <div className="min-w-full mx-2 md:min-w-[500px] -mt-12 p-14 bg-primary text-white text-3xl text-center rounded-lg">
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
          <div className="flex flex-col-reverse md:flex-row justify-center gap-8">
            <div className="flex flex-col gap-2">
              <p className="text-xl">{"See other's projects"}</p>
              <a href="#" className="btn-primary-outline shadow-[#FFFFFF70]">
                Explore
              </a>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-xl">{"It's free"}</p>
              <a href="#" className="btn-primary bg-white text-primary shadow-[#FFFFFF70]">
                {"Let's go!"}
              </a>
            </div>
          </div>
        </div>
      </main>
      <footer className="px-6 py-3 bottom-0 flex flex-col md:flex-row justify-between items-center gap-4 text-primary text-xl">
        <div>
          <a
            href="https://hashnode.com/hackathons/appwrite"
            className=""
            target="_blank"
            rel="noopener noreferrer"
          >
            Hashnode + Apprwrite Hackaton
          </a>
        </div>
        <div className="flex gap-4">
          <a
            href="https://github.com/leviarista/portfoliox"
            className=""
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
          <a href="#" className="">
            About
          </a>
        </div>
      </footer>
    </>
  );
}
