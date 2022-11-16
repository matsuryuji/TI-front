import React from "react";
import { TextField, Button } from "components/core";

const SignIn = () => {
    return (
      <>
        <div className="flex flex-col items-center justify-center w-[100%] h-[100vh]">
          <div className="border-[#243c5a] border-[1px] flex flex-col items-center justify-center h-[400px] w-[600px]">
            <div className="mx-[20px] my-[20px]">
              <div>
                <TextField label="E-mail" fullWidth/>
              </div>
              <div className="my-[40px]">
                <TextField label="Password" type="password" fullWidth />
              </div>
                <Button variant="outlined" fullWidth>Submit</Button>
              </div> 
            </div>
          </div>
      </>
    )
};

export default SignIn;