// eslint-disable-next-line react/prop-types
const Button = ({ButtonText,className}) => {
    return (
        <div>
            <button className={`border-2 border-black px-2 md:px-4 py-1 md:py-2 text-md md:text-lg ${className}`}>
                {ButtonText}
            </button>
        </div>
    );
};

export default Button;