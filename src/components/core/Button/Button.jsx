import MuiButton from '@mui/material/Button';

const Button = ({ className, children, variant, ...props}) => {
    return(
        <MuiButton className={className} variant={variant} {...props}>{children}</MuiButton>
    )
};

export default Button; 