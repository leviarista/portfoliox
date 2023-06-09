import Image from "next/image";

export default function Create() {
  return (
    <main className='flex flex-col gap-8 justify-center text-center p-5'>
      <h1 className='text-4xl'>Create your portfolio</h1>
      <div className='flex gap-4 justify-center items-center'>
        <a href='#' className='tab-selected'>
          My info
        </a>
        <a href='#' className='tab'>
          Projects
        </a>
      </div>
      <section>
        <h2 className='text-2xl my-2'>Personal information</h2>
        <div className='flex flex-col md:flex-row justify-center gap-4'>
          <div className='panel items-center'>
            <a href='#' className='w-40 h-40 my-5 pt-2 flex flex-col bg-white rounded-md'>
              <span className='text-primary'>Profile Picture</span>
              <div className='center flex-col flex-grow'>
                <Image
                  className='relative drop-shadow-[0_0_4_#ffffff70]'
                  src='/add.svg'
                  alt='add icon'
                  width={44}
                  height={44}
                />
              </div>
            </a>
            <input type='text' name='' className='input' placeholder='First Name*' />
            <input type='text' name='' className='input' placeholder='Last Name*' />
          </div>
          <div className='panel items-center'>
            <div className='flex flex-col sm:flex-row gap-2'>
              <input type='text' name='' className='input' placeholder='Title' />
              <input type='text' name='' className='input' placeholder='Company' />
            </div>
            <textarea
              name=''
              className='input w-full h-full'
              placeholder='Bio / Experience'
              rows={5}
            ></textarea>
          </div>
          <div className='panel items-center'>
            <input type='text' name='' className='input' placeholder='Email' />
            <input type='text' name='' className='input' placeholder='Linkedin' />
            <input type='text' name='' className='input' placeholder='Twitter' />
            <input type='text' name='' className='input' placeholder='My website' />
            <input type='text' name='' className='input' placeholder='Other' />
            <input type='text' name='' className='input' placeholder='Other' />
            <input type='text' name='' className='input' placeholder='Other' />
          </div>
        </div>
      </section>
      <section className='flex flex-col md:flex-row gap-4 justify-center mb-24'>
        <div>
          <h2 className='text-2xl my-2'>{"Technologies / Tools I've worked with"}</h2>
          <div className='panel md:max-w-[500px] justify-center flex-row items-center flex-wrap'>
            <input type='text' name='' className='input' placeholder='Technology / Tool' />
            <input type='text' name='' className='input' placeholder='Technology / Tool' />
            <input type='text' name='' className='input' placeholder='Technology / Tool' />
            <input type='text' name='' className='input' placeholder='Technology / Tool' />
            <input type='text' name='' className='input' placeholder='Technology / Tool' />
            <input type='text' name='' className='input' placeholder='Technology / Tool' />
            <input type='text' name='' className='input' placeholder='Technology / Tool' />
            <input type='text' name='' className='input' placeholder='Technology / Tool' />
            <input type='text' name='' className='input' placeholder='Technology / Tool' />
            <input type='text' name='' className='input' placeholder='Technology / Tool' />
            <a href='#' className='btn-link-white text-xl w-full'>
              Add item +
            </a>
          </div>
        </div>
        <div>
          <h2 className='text-2xl my-2'>Skills Radar (1-100 points)</h2>
          <div className='panel flex-col-reverse md:flex-row justify-center items-center md:items-start gap-4'>
            <div className='flex flex-col gap-2'>
              <div className='flex gap-2 items-center'>
                <input type='text' name='' className='input' placeholder='Field' />
                <input type='text' name='' className='input w-16 px-0' placeholder='Points' />
              </div>
              <div className='flex gap-2 items-center'>
                <input type='text' name='' className='input' placeholder='Field' />
                <input type='text' name='' className='input w-16 px-0' placeholder='Points' />
              </div>
              <div className='flex gap-2 items-center'>
                <input type='text' name='' className='input' placeholder='Field' />
                <input type='text' name='' className='input w-16 px-0' placeholder='Points' />
              </div>
              <div className='flex gap-2 items-center'>
                <input type='text' name='' className='input' placeholder='Field' />
                <input type='text' name='' className='input w-16 px-0' placeholder='Points' />
              </div>
              <div className='flex gap-2 items-center'>
                <input type='text' name='' className='input' placeholder='Field' />
                <input type='text' name='' className='input w-16 px-0' placeholder='Points' />
              </div>
              <a href='#' className='btn-link-white text-xl'>
                Add item +
              </a>
            </div>
            <div className='bg-white w-56 h-56 rounded-md'></div>
          </div>
        </div>
      </section>
      <a href='#' className='btn-success fixed bottom-7 left-[calc(50vw-(155px/2))] shadow-lg'>
        SAVE
      </a>
    </main>
  );
}
