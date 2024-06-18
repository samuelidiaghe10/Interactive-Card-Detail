import { useState } from 'react'
import { motion } from 'framer-motion'
import tab1 from '../images/illustration-features-tab-1.svg'
import tab2 from '../images/illustration-features-tab-2.svg'
import tab3 from '../images/illustration-features-tab-3.svg'
import chrome from '../images/logo-chrome.svg'
import firefox from '../images/logo-firefox.svg'
import opera from '../images/logo-opera.svg'
import dot from '../images/bg-dots.svg'



export const Main = () => {
    const [tab, setTab] = useState<number>(1)
    
    
    
  return (
    <motion.main 
     className='flex flex-col gap-40 lg:gap-56  md:px-10 px-5'>
        <div className='flex flex-col  gap-20'>
            <div className='flex flex-col items-center text-center gap-10'>
                <h3 className='text-3xl font-semibold text-Very-Dark-Blue'>
                    Features
                </h3>

                <p className='text-lg text-Grayish-Blue md:w-10/12 lg:w-5/12'>
                    Our aim is to make it quick and easy fir you to access your
                    favorite websites. Your bookmarks sunc between your devices
                    so you can access them on the go.
                </p>

                <div className='flex lg:flex-row flex-col items-center w-full lg:w-fit lg:border-t-0 border-t lg:border-b text-lg text-Very-Dark-Blue   lg:gap-20'>
                    <div className='border-b-2 lg:border-b-0 lg:w-fit lg:pt-0 w-full pt-5'>
                        <button className={`${tab === 1 ? ' text-Very-Dark-Blue border-b-4 border-Soft-Red' : ' text-Grayish-Blue'} pb-5 lg:pb-3`} onClick={() => setTab(1)}>
                            Simple Bookmarking
                        </button>
                    </div>

                    <div className='border-b-2 lg:border-b-0 lg:w-fit lg:pt-0 w-full pt-5'>
                        <button className={`${tab === 2 ? ' text-Very-Dark-Blue border-b-4 border-Soft-Red' : ' text-Grayish-Blue'} pb-5 lg:pb-3`} onClick={() => setTab(2)}>
                            Speedy Searching
                        </button>
                    </div>

                    <div className='border-b-2 lg:border-b-0 lg:w-fit lg:pt-0 w-full pt-5'>
                        <button className={`${tab === 3 ? ' text-Very-Dark-Blue border-b-4 border-Soft-Red' : ' text-Grayish-Blue'} pb-5 lg:pb-3`} onClick={() => setTab(3)}>
                            Easy Sharing
                        </button>
                    </div>

                </div>
            </div>

            <div>
                

                <div className='flex lg:flex-row flex-col gap-32 lg:gap-20 justify-between items-center'>
                    <div className='flex items-end'>
                        <div className='relative items-start'>
                            <img className='md:w-[40rem] w-[25rem] h-[15rem] md:h-[27rem]' src={tab === 1 ? tab1 : ''
                                || tab === 2 ? tab2 : '' || tab === 3 ? tab3 : ''
                            } alt="" />
                        </div>

                        <div className=' bg-Soft-Blue -z-10 translate-y-12 md:h-[20rem] 
                        md:w-[37rem] h-[13rem] w-[21rem] rounded-e-full -translate-x-5 lg:-translate-x-10 md:-translate-x-28 absolute'>

                        </div>
                    </div>

                    <div className='flex flex-col items-center lg:items-start gap-10'>
                        <h4 className='md:text-3xl text-2xl font-semibold text-Very-Dark-Blue'>
                            Bookmark in one click
                        </h4>

                        <p className='text-lg text-Grayish-Blue lg::text-start text-center
                         lg:w-[30rem]'>
                            Organize your bookmarks however you like. Our
                            simple darg-and-drop interface gives you complete
                            control over how you manage your favorite sites.
                        </p>

                        <button className='text-white border-2 border-Soft-Blue hover:bg-white
                        hover:text-Soft-Blue font-medium bg-Soft-Blue py-3 px-7 rounded-lg shadow-sm'>
                            More Info
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <div className='flex flex-col gap-20'>
            <div className='flex flex-col items-center text-center gap-5'>
                <h3 className=' text-Very-Dark-Blue text-2xl md:text-3xl font-semibold'>
                    Download the extension
                </h3>

                <p className='text-lg text-Grayish-Blue md:w-10/12 lg:w-5/12'>
                    We've got more browsers in the pipeline. Please do let us know if
                    you've got a fovorite you'd like us to prioritize.
                </p>
            </div>

            <div className='flex lg:flex-row flex-col items-center lg:items-start justify-center gap-20 lg:gap-7'>
                <div className='flex flex-col border-2 w-fit shadow-2xl rounded-xl bg-white p-5 items-center gap-10'>
                    <div>
                        <img src={chrome} alt="" />
                    </div>

                    <div className='flex flex-col gap-3 items-center'>
                        <h3 className='lg:text-2xl text-xl font-semibold text-Very-Dark-Blue'>
                            Add to Chrome
                        </h3>

                        <p className='lg:text-lg text-Grayish-Blue'>
                            Minimum version 62
                        </p>
                    </div>

                    <div className='flex flex-col gap-5'>
                        <div>
                            <img src={dot} alt="" />    
                        </div>

                        <button className='text-white border-2 border-Soft-Blue hover:bg-white hover:text-Soft-Blue bg-Soft-Blue py-3 px-10 rounded-lg font-medium'>
                            Add & Install Extension
                        </button>
                    </div>
                </div>

                <div className='flex flex-col lg:translate-y-10 shadow-2xl border-2 w-fit rounded-xl bg-white p-5 items-center gap-10'>
                    <div>
                        <img src={firefox} alt="" />
                    </div>

                    <div className='flex flex-col gap-3 items-center'>
                        <h3 className='lg:text-2xl text-xl font-semibold text-Very-Dark-Blue'>
                            Add to Firefox
                        </h3>

                        <p className='lg:text-lg text-Grayish-Blue'>
                            Minimum version 55
                        </p>
                    </div>

                    <div className='flex flex-col gap-5'>
                        <div>
                            <img src={dot} alt="" />    
                        </div>

                        <button className='text-white border-2 border-Soft-Blue hover:bg-white hover:text-Soft-Blue bg-Soft-Blue py-3 px-10 rounded-lg  font-medium'>
                            Add & Install Extension
                        </button>
                    </div>
                </div>

                <div className='flex flex-col lg:translate-y-20 shadow-2xl border-2 w-fit rounded-xl bg-white p-5 items-center gap-10'>
                    <div>
                        <img src={opera} alt="" />
                    </div>

                    <div className='flex flex-col gap-3 items-center'>
                        <h3 className='lg:text-2xl text-xl font-semibold text-Very-Dark-Blue'>
                            Add to Opera
                        </h3>

                        <p className='lg:text-lg text-Grayish-Blue'>
                            Minimum version 46
                        </p>
                    </div>

                    <div className='flex flex-col gap-5'>
                        <div>
                            <img src={dot} alt="" />    
                        </div>

                        <button className='text-white border-2 border-Soft-Blue hover:bg-white hover:text-Soft-Blue bg-Soft-Blue py-3 px-10 rounded-lg font-medium'>
                            Add & Install Extension
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </motion.main>
  )
}
