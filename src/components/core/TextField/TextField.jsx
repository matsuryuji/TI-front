import MuiTextField from '@mui/material/TextField';

const TextField = ({variant, label, type, ...props}) => {
    return(
        <MuiTextField variant={variant} label={label} type={type} {...props}/>
    )
};

export default TextField;