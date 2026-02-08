import './Button.css'

const Button = ({
    children,
    variant = "primary",
    className = '',
    ...props
}) => {
    const classNames =  `btn-base btn-${variant} ${className}`;

    return (
        <button className= {classNames} {...props}> 
            {children}
        </button>
    )
}

export default Button;