import { useNavigate } from 'react-router'
import check from '../images/icon-complete.svg'

export const Thankyou = () => {
    const navigate = useNavigate()

    const handleNav = () => {

        navigate('/')
        location.reload()
    }

  return (
    <div className='flex flex-col pb-6 items-center gap-10'>
        <div>
            <img src={check} alt="" />
        </div>

        <div className='flex flex-col items-center gap-5'>
            <h3 className='text-3xl font-semibold text-Very-dark-violet tracking-widest'>
                THANK YOU!
            </h3>

            <p className='text-lg text-Dark-grayish-violet'>
                We've added your card details
            </p>
        </div>

        <button onClick={() => handleNav()}
        className=' py-3 w-[22rem] border-2 border-Very-dark-violet hover:bg-transparent hover:text-Very-dark-violet duration-300 rounded-lg text-lg bg-Very-dark-violet text-white font-semibold tracking-wide'>
            Continue
        </button>
    </div>
  )
}
