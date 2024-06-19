import plus from '../assets/images/icon-plus.svg'
import minus from '../assets/images/icon-minus.svg'
import star from '../assets/images/icon-star.svg'

import { useState } from 'react'

export const BasePage = () => {
    const data = [{
        question: "What is Frontend Mentor, and how will it help me?",
        answer: "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS and JavaScript. It's suitable for all levels and ideal for portfolio building."
      },
    
      {
        question: "Is Frontend Mentor free?",
        answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, aut. Hic earum, deleniti eaque at itaque rerum praesentium non nemo, numquam dolorem dignissimos!'
      },
    
      {
        question: "Can I use Frontend Mentor projects in my portfolio?",
        answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, cupiditate.'
      },
    
      {
        question: "How can I get help if I'm stuck on a challenge?",
        answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, reiciendis deserunt eum quis laborum fugit? Fugit alias earum blanditiis animi?'
    }]

    const [toggle, setToggle] = useState<null | number>(null)

    const handleShow = (index:number) => {
        if(toggle === index) {
            return setToggle(null)
        }

        setToggle(index)
    }

  return (
    <div className='bg-white flex flex-col shadow-2xl gap-8 rounded-xl w-[23rem] md:w-[35rem] p-5 lg:p-7'>
        <div className='flex items-center gap-2'>
            <div>
                <img className='w-full' src={star} alt="" />
            </div>

            <h2 className='font-bold text-Dark-purple text-5xl'>
                FAQs
            </h2>
        </div>
        <ul className='flex flex-col divide-y-2 '>
        {data.map((data, index) =>
          <li className='flex py-3 gap-3 flex-col'>
            <div className='flex items-center justify-between'>
              <p className=' font-medium md:text-md text-sm md:font-semibold text-Dark-purple cursor-pointer hover:text-purple-800'>{data.question}</p>

              <button onClick={() => handleShow(index)}>
                <img className='w-[2rem]' src={toggle === index ? minus : plus} alt="" />
              </button>
            </div>

            <span className={`${toggle === index ? 'inline' : 'hidden'} text-Grayish-purple text-sm`}>
              {data.answer}
            </span>
          </li>
        )}
      </ul>
    </div>
  )
}
