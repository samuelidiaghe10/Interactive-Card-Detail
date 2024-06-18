import device from '../images/illustration-hero.svg'
import { motion } from 'framer-motion'

export const Header = ({toggle} : {toggle:boolean}) => {
    
    
  return (
    <motion.header
    
    className={`flex lg:flex-row gap-20 
        ${toggle ? '' : '-translate-y-[80vh] -z-10'} 
        flex-col-reverse items-center 
        justify-between lg:px-10 px-5`}>
        <div className='flex flex-col items-center lg:items-start gap-10'>
            <h1 className='lg:text-5xl text-3xl lg:text-start text-center lg:w-10/12 font-semibold text-Very-Dark-Blue'>
                A Simple Bookmark
                Manager
            </h1>

            <p className='text-Grayish-Blue lg:text-start text-center md:w-9/12 text-lg'>
                A clean and simple interface to organize your favorite
                websites. Open a new browser tab and see your sites load
                instantly. Try it for free.
            </p>

            <div className='flex items-center gap-5'>
                <button className='py-3 px-3 md:px-10 text-white font-semibold rounded-lg border-Soft-Blue border-2 hover:bg-white hover:text-Soft-Blue bg-Soft-Blue shadow-lg'>
                    Get it on Chrome
                </button>

                <button className='py-3 px-3 md:px-10 hover:bg-white hover:text-Very-Dark-Blue hover:border-Very-Dark-Blue text-Grayish-Blue font-semibold rounded-lg border-2 border-slate-300 bg-slate-100 shadow-lg'>
                    Get it on Fire fox
                </button>
            </div>
        </div>

        <div className='flex items-end justify-end'>
            <div className='relative'>
                <img className='w-[60rem]' src={device} alt="" />
            </div>

            <div className=' bg-Soft-Blue -z-10 md:h-[20rem] h-[10rem] w-[20rem] md:w-[30rem] rounded-s-full lg:translate-x-10 translate-x-5 absolute'></div>
        </div>
    </motion.header>
  )
}
