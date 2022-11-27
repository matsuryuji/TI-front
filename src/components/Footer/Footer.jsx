import LOGO from 'assets/greenpaper-logo.png'
import { Button } from 'components/core';

const Footer = () => {
    return(
      <div className="flex bg-[#0A2509] pt-[30px] w-[100%] px-[280px] ">
        <div className='flex flex-col pt-[48px] pb-[48px]'>
          <img src={LOGO} alt="" className='w-[150px] h-[60px]'/>
          <p className='pt-[24px] pb-[40px] text-[14px] text-[#fff] opacity-[0.7]'>Proin ipsum pharetra, senectus eget scelerisque varius pretium platea velit. Lacus, eget eu vitae nullam proin turpis etiam mi sit. Non feugiat feugiat egestas nulla nec. Arcu tempus, eget elementum dolor ullamcorper sodales ultrices eros.</p>
          <p className='pb-[5px] text-[14px] text-[#fff] font-bold'>Receba notícias todos os dias pela nossa newsletter</p>
        </div>
      </div>
    )
}

export default Footer;