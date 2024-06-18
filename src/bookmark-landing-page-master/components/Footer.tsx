import logo from '../images/logo-bookmark.svg'
import facebook from '../images/icon-facebook.svg'
import twitter from '../images/icon-twitter.svg'

export const Footer = () => {
    const lists = ['FEATURES', 'PRICING', 'CONTACT']

  return (
    <footer className=' bg-Very-Dark-Blue flex flex-col gap-10 lg:gap-0 lg:flex-row items-center justify-between p-10'>
        <div className='flex lg:flex-row flex-col items-center gap-20'>
            <div>
                <img className='logo' src={logo} alt="" />
            </div>

            <ul className='flex lg:flex-row flex-col items-center gap-10 '>
                {lists.map((list, index) =>
                    <li key={index}>
                        <a href="#" className='text-Grayish-Blue hover:text-Soft-Red'>
                            {list}
                        </a>
                    </li>
                )}
            </ul>
        </div>

        <div className='flex items-center gap-7'>
            <div>
                <img className='icon' src={facebook} alt="" />
            </div>

            <div>
                <img className='icon' src={twitter} alt="" />
            </div>
        </div>
    </footer>
  )
}
