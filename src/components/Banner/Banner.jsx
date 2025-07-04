import HeroText from "../Reusable_component/HeroText";

const Banner = () => {
    return (

        <div className="mx-auto mt-[2rem] grid grid-cols-2 md:grid-cols-4 grid-rows-16 md:grid-rows-8 gap-0 gap-[3px] md:gap-4 md:w-3/4 h-[32rem]">
            {/* Main Image */}
            <div className="relative col-span-4 md:col-span-2 row-span-8 md:row-span-8">
                <div className="absolute inset-0 bg-[url('../../../../../src/assets/images/images.png')] bg-cover bg-center"></div>
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <div className="text-white w-3/4 mx-auto">
                        <h1 className="text-4xl md:text-5xl mb-3 font-semibold md:font-bold">We Are Hexashop</h1>
                        <p className="text-sm md:text-md">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        <button className="border-2 px-2 md:px-4 py-1 md:py-2 text-md md:text-lg mt-[1rem]">
                            Purchase Now
                        </button>
                    </div>
                </div>
            </div>

            {/* Women */}
            <div className="relative row-span-4 cols-pan-2">
                <div className="absolute inset-0 bg-[url('../../../../../src/assets/images/women.png')] bg-cover bg-center"></div>
                <HeroText title="Women"
                    description="Lorem Ipsum is simply dummy."
                    buttonText="Discover More"></HeroText>
            </div>

            {/* Men */}
            <div className="relative row-span-4 cols-pan-2">
                <div className="absolute inset-0 bg-[url('../../../../../src/assets/images/men.png')] bg-cover bg-center"></div>
                <HeroText title="Men"
                    description="Lorem Ipsum is simply dummy."
                    buttonText="Discover More"></HeroText>
            </div>

            {/* Kids */}
            <div className="relative row-span-4 col-start-1 md:col-start-3">
                <div className="absolute inset-0 bg-[url('../../../../../src/assets/images/kids.png')] bg-cover bg-center"></div>
                <HeroText title="Kids"
                    description="Lorem Ipsum is simply dummy."
                    buttonText="Discover More"></HeroText>
            </div>

            {/* Accessories */}
            <div className="relative row-span-4 col-start-2 md:col-start-4">
                <div className="absolute inset-0 bg-[url('../../../../../src/assets/images/accessories.png')] bg-cover bg-center"></div>
                <HeroText title="Accessories"
                    description="Lorem Ipsum is simply dummy."
                    buttonText="Discover More"></HeroText>
            </div>
        </div>


    );
};

export default Banner;