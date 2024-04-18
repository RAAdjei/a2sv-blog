import Image from 'next/image'

export default function ProfilePic() {
  return (
    <section className='w-full mx-auto'>
        <Image 
        className='border-4 border-white dark:border-slate-500 drop-shadow-xl shadow-black rounded-full mx-auto mt-8'
            src="/images/img1.jpg"
            width={200}
            height={200}
            alt="Raph"
            priority={true}
        />

    </section>
  )
}
