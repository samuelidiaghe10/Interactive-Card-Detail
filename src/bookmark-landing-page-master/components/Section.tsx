import { useState } from 'react';
import errorIcon from '../images/icon-error.svg'

export const Section = () => {
    const [error, setError] = useState('')
    const [email, setEmail] = useState('')

    const validRegex: RegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

    const handleSubmit = () => {
        if(email.match(validRegex)) {
            setError('')
            setEmail('')
        }

        else{
            setError("Whoops, make sure it's an email")
        }

    }

  return (
    <section className=' flex flex-col items-center py-10 gap-10 bg-Soft-Blue text-white px-5'>
        <p className='lg:tracking-[10px] tracking-widest lg:text-start text-center text-sm'>35,000+ ALREADY JOINED</p>

        <h4 className='lg:text-3xl text-2xl font-medium lg:w-4/12 text-center'>
            Stay up-to-date with what
            we're doing
        </h4>

        <div className='flex lg:flex-row flex-col items-start gap-5'>
            <div className='flex flex-col'>
                <div className='flex justify-end items-center'>
                    <input id='email'
                     type="email"
                     value={email}
                     onChange={(e) => {setEmail(e.currentTarget.value)}}
                     className={`py-3 focus:outline-Very-Dark-Blue ${error === '' ? '' : 'border-Soft-Red border-2'} text-Very-Dark-Blue  rounded-md ps-3 w-[20rem] relative`}
                     placeholder='Enter your email address' />

                    <div className={`absolute pe-3 ${error === '' ? 'hidden' : 'inline'}`}>
                        <img src={errorIcon} alt="" />
                    </div>
                </div>

                <label htmlFor="email" className='italic px-2 rounded-sm text-sm bg-Soft-Red'>
                    {error}
                </label>
            </div>

            <button onClick={() => handleSubmit()}
            className='bg-Soft-Red border-2 border-Soft-Red hover:text-Soft-Red hover:bg-white font-medium rounded-lg text-white py-3 w-full lg:px-10'>
                Contact Us
            </button>
        </div>

    </section>
  )
}
