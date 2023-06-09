import Image from "next/image";

function NavBar() {
  return (
    <nav className="px-6 py-3 flex justify-between items-center text-2xl">
      <a href="/" className="text-primary">
        <Image
          className="relative drop-shadow-[0_0_0.3rem_#00000070] dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
          src="/portfoliox-logo.svg"
          alt="Portfoliox Logo"
          width={70}
          height={75}
          priority
        />
      </a>
      <div className="hidden md:flex gap-8 items-center">
        <a href="#" className="btn-link">
          Login
        </a>
        <a href="#" className="btn-link">
          Explore
        </a>
        <a href="/create" className="btn-primary">
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
  );
}

export default NavBar;
