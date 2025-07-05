// eslint-disable-next-line react/prop-types
const Collection = ({bgImage, img1, img2, title, description, buttonText}) => {
    return (
        <div className="relative h-[30rem] bg-no-repeat bg-cover bg-center"
                style={ {backgroundImage: `url(${bgImage})`} }>
            <div className="absolute inset-0 bg-black/50 md:flex items-center justify-center">
                <div className="text-white w-full md:w-2/4 mt-4 md:mt-0">
                    <div className="w-3/4 mx-auto flex">
                        <div className="w-full">
                            <img className="" src={img1} alt="img" />
                        </div>
                        <div className="w-full">
                            <img src={img2} alt="img" />
                        </div>
                    </div>
                </div>
                <div className="text-white w-full md:w-2/4">
                    <div className="w-3/4 mx-auto">
                        <h1 className="text-2xl md:text-4xl font-semibold md:font-bold mb-4 md:mb-8">{title}</h1>
                        <p className="text-xs md:text-md mb-2 md:mb-4 text-white/75">{description}</p>
                        <button className="mt-2 md:mt-4 border-2 px-2 md:px-2 py-1 md:py-2 text-sm md:text-lg ">
                            {buttonText}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Collection;