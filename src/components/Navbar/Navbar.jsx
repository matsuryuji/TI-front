import LOGO from 'assets/greenpaper-logo.png'
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import { TextField } from 'components/core';
const Navbar = () => {
  return(
      <div className="flex flex-row justify-around w-[100%] bg-[#13aa48]">
        <img src={LOGO} alt="" className='w-[auto] h-[60px]'/>
        <div>
            <TextField
            id="input-with-icon-textfield"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            variant="outlined"
          />
        </div>
      </div>
  )
}

export default Navbar;