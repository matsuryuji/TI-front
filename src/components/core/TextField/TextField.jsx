import MuiTextField from '@mui/material/TextField';

const TextField = ({variant, label, placeholder, multiline, rows, type, ...props}) => {
    return(
        <MuiTextField variant={variant} label={label} placeholder={placeholder} multiline={multiline} rows={rows} type={type} {...props}/>
    )
};

export default TextField;