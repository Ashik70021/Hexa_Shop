
// eslint-disable-next-line react/prop-types
const HeroText = ({ title, description, buttonText }) => {
    return (
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <div className="text-white w-3/4 mx-auto">
                <h1 className="text-xl md:text-3xl font-semibold md:font-bold">{title}</h1>
                <p className="text-xs md:text-md text-white/75">{description}</p>
                <button className="mt-2 md:mt-4 border-2 px-1 md:px-2 py-1 md:py-0 text-sm md:text-lg ">
                    {buttonText}
                </button>
            </div>
        </div>

    );
};

export default HeroText;
