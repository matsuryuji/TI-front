import MuiButton from '@mui/material/Button';

const Button = ({children, variant, ...props}) => {
    return(
        <MuiButton variant={variant} {...props}>{children}</MuiButton>
    )
};

export default Button; 