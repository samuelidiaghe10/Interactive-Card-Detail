import { useState } from 'react'
import arrow from '../images/icon-arrow.svg'
import { motion } from 'framer-motion'


const data = [
    {
        question: 'What is Bookmark?',
        answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam dicta, eius itaque possimus nostrum fugit accusamus, non porro id, in magnam necessitatibus dolorum. Tempore repellendus nulla aut facilis ipsam dignissimos!'
    },

    {
        question: 'How can i request a new browser?',
        answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam dicta, eius itaque possimus nostrum fugit accusamus'
    },

    {
        question: 'Is there a mobile app?',
        answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam dicta, eius itaque possimus nostrum !'
    },

    {
        question: 'What about other Chromium browsers?',
        answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam dicta, eius itaque possimus nostrum fugit accusamus, non porro id, in magnam necessitatibus dolorum. Tempore repellendus nulla aut facilis ipsam dignissimos! dolor sit amet consectetur adipisicing elit.'
    },
]

export const Aside = () => {
    const [show, setShow] = useState<number | null>(null)

    const toggle = (i:number) => {

        if(show === i) {
            return setShow(null)
        }

        setShow(i)
    }

 


  return (
    <motion.aside 
     className='flex flex-col items-center gap-20 md:px-10 px-5 '>
        <div className="flex flex-col items-center text-center gap-7">
            <h3 className="md:text-4xl text-2xl font-semibold text-Very-Dark-Blue">
                Frequently Asked Questions
            </h3>

            <p className="text-lg text-Grayish-Blue md:w-7/12">
                Here are some of our FAQs. If you have any other questions
                you'd like answered please feel free to email us.
            </p>
        </div>
        
        <ul className='flex flex-col border-t-2 border-b-2 divide-y-2 md:w-[35rem]'>
            {data.map((item, index) =>
                <li className='flex flex-col gap-3 p-5'>
                    <div className='flex items-start  cursor-pointer hover:text-Soft-Red justify-between'>
                        <p className='lg:text-lg font-medium text-Very-Dark-Blue cursor-pointer hover:text-Soft-Red'>{item.question}</p>

                        <button onClick={() => toggle(index)}>
                            <img src={arrow}
                             className={`${show === index ? 'up rotate-180' : ''}`} alt="" />
                        </button>
                    </div>

                    <span className={`${show === index ? 'inline' : 'hidden'} lg:text-md text-sm`}>
                        {item.answer}
                    </span>
                </li>
            )}
        </ul>

        <button className='text-white border-2 font-medium border-Soft-Blue hover:bg-white
        hover:text-Soft-Blue bg-Soft-Blue py-3 px-10 rounded-lg shadow-xl'>
            More Info
        </button>
    </motion.aside>
  )
}
