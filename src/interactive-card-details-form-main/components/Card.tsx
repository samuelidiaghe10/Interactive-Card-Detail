import logo from '../images/card-logo.svg'
import cardFront from '../images/bg-card-front.png'
import cardBack from '../images/bg-card-back.png'

export const Card = ({cardName, cardNumber, cardMonth, cardYear, cardCvc} : 
    {cardName:string, cardNumber:string, cardMonth:string, cardYear:string, cardCvc:string}) => {
  return (
    <div className='flex flex-col-reverse  lg:flex-col md:gap-12'>
        <div className='flex lg:relative  absolute lg:-translate-x-0 -translate-x-3 translate-y-28 md:translate-y-36 lg:translate-y-0 z-10'>
            <div className='relative'>
                <img className='md:w-full w-[22rem]' src={cardFront} alt="" />
            </div>

            <div className='absolute w-[22rem] md:w-[28rem] lg:w-[28rem] p-5 md:p-7 gap-10 md:gap-16 text-white flex flex-col justify-between'>
                <div>
                    <img src={logo} className='lg:w-3/12 w-3/12' alt="" />
                </div>

                <div className='flex flex-col gap-3 md:gap-5'>
                    <h3 className='text-2xl  tracking-[3.7px] md:text-3xl md:tracking-widest'>
                        {cardNumber}
                    </h3>

                    <div className='flex justify-between'>
                        <span className='tracking-widest'>
                            {cardName}
                        </span>
                        <div>
                            <span>{cardMonth}</span> / <span>{cardYear}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className='flex relative lg:translate-x-0 translate-x-2 items-center md:ms-10 drop-shadow-2xl justify-end'>
            <div className='relative'>
                <img src={cardBack} className='md:w-full w-[22rem]' alt="" />
            </div>

            <span className='absolute mx-10 md:mx-20 text-lg text-white font-medium'>
                {cardCvc}
            </span>
        </div>
    </div>
  )
}
