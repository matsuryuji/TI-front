import LOGO from 'assets/greenpaper-logo.png'
import { Button } from 'components/core';
const Navbar = () => {
  return(
      <div className="flex flex-row justify-between items-center w-[100%] bg-[#fff] mt-[30px]">
        <img src={LOGO} alt="" className='w-[auto] h-[60px]'/>
        <div>
          <Button variant="contained" className="w-[120px]" style={{backgroundColor: "#13aa48"}}>Login</Button>
        </div>
      </div>
  )
}

export default Navbar;