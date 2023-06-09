"use client";

import { usePathname } from "next/navigation";

function Footer() {
  const pathname = usePathname();

  const hideFooter = ["/create"].includes(pathname);

  return !hideFooter ? (
    <footer className='px-6 py-3 bottom-0 flex flex-col md:flex-row justify-between items-center gap-0 md:gap-4 text-xl'>
      <div>
        <a
          href='https://hashnode.com/hackathons/appwrite'
          className='btn-link'
          target='_blank'
          rel='noopener noreferrer'
        >
          Hashnode + Apprwrite Hackaton
        </a>
      </div>
      <div className='flex gap-4'>
        <a
          href='https://github.com/leviarista/portfoliox'
          className='btn-link'
          target='_blank'
          rel='noopener noreferrer'
        >
          Github
        </a>
        <a href='#' className='btn-link'>
          About
        </a>
      </div>
    </footer>
  ) : (
    <></>
  );
}

export default Footer;
