import LOGO from 'assets/greenpaper-logo.png'
import { Button } from 'components/core';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return(
      <div className="flex bg-[#fff] pt-[30px] w-[100%] z-[100] fixed">
        <div className='flex w-[100%] flex-row justify-between items-center mx-[280px] pb-[10px]'>
          <Link to={'/feed'}>
          <img src={LOGO} alt="" className='w-[auto] h-[60px]'/>
          </Link>
          <div>
            <Button variant="contained" className="w-[120px] " style={{backgroundColor: "#13aa48"}}><span className='font-semibold'>Login</span></Button>
          </div>
        </div>
      </div>
  )
}

export default Navbar;