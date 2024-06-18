import logo from '../images/logo-bookmark.svg'
import menu from '../images/icon-hamburger.svg'
import close from '../images/icon-close.svg'
import facebook from '../images/icon-facebook.svg'
import twitter from '../images/icon-twitter.svg'
import { motion } from 'framer-motion'

export const Navbar = ({toggle, handleMenu} : {toggle:boolean, handleMenu: () => void}) => {
    const lists = ['FEATURES', 'PRICING', 'CONTACT']
    
    


  return (
    <motion.nav 
    
    animate={'visible'}
    className={`flex ${toggle ? 'bg-white' :
     'bg-Very-Dark-Blue/95   h-svh '} lg:flex-row flex-col
      gap-12 lg:gap-0 lg:items-center lg:justify-between md:p-10  p-5`}>
        <div className='flex items-center justify-between'>
            <div>
                <img src={logo} className={`${toggle ? '' : 'logo'}`} alt="" />
            </div>

            <button className='lg:hidden inline' onClick={() => handleMenu()}>
                <img src={toggle ? menu : close} alt="" />
            </button>
        </div>

        <motion.div className='flex flex-col  md:gap-96 gap-56 h-0'>
            <ul className={`flex lg:flex-row flex-col ${toggle ? 'translate-y-[-300vh] h-0 lg:translate-y-0' : 'h-svh '} items-center lg:border-t-0 lg:pt-0 border-t-2   lg:gap-10 z-10`}>
                {lists.map((list, index) => 
                    <li key={index} className='border-b-2 lg:border-b-0 w-full text-center lg:py-0 py-5'>
                        <a className='hover:text-Soft-Red text-white lg:text-Very-Dark-Blue' href="">{list}</a>
                    </li>
                    
                )}

                <button className='mt-10 lg:mt-0 border-2 lg:border-Soft-Red lg:hover:bg-transparent lg:hover:text-Soft-Red hover:bg-white hover:text-Very-Dark-Blue w-full font-medium lg:bg-Soft-Red rounded-md shadow-xl text-white py-3 px-10'>
                    LOGIN
                </button>
            </ul>
            
            <div className={`flex lg:hidden justify-center  ${toggle ? 'translate-y-[-300vh] h-0 lg:translate-y-0' : 'h-svh'} items-center gap-10 z-10`}>
                <div>
                    <img className='icon' src={facebook} alt="" />
                </div>

                <div>
                    <img className='icon' src={twitter} alt="" />
                </div>
            </div>
        </motion.div>
    </motion.nav>
  )
}
