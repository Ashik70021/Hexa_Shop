import Button from "./Reusable_component/Button";

const Explore = () => {
    return (
        <div className="">
            <div className="px-4 md:px-[0] pt-28 md:pt-[0] md:w-3/4 md:mx-auto md:flex items-center justify-center">
                <div className="md:w-2/4 h-[32rem] flex items-center justify-start">
                    <div className="md:w-[90%]">
                        <h1 className="mb-4 text-3xl font-bold text-black">Explore Our Products</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Ducimus doloremque temporibus iste! Magnam, numquam distinctio!
                            Quia, dolorum delectus asperiores expedita totam ex! Alias similique
                            iste delectus molestias? <br /><br /> Totam expedita eum soluta ex voluptate repudiandae
                            sunt et, omnis repellat accusantium magni quisquam dolorem aperiam non
                            laboriosam minima quasi quia dignissimos impedit culpa. Necessitatibus
                            commodi sapiente expedita repellat pariatur rerum nemo sit dolorum voluptatem
                            cum accusamus repellendus totam ipsa corrupti et ea, molestias eius rem ut
                            recusandae id optio quasi. Rem nam culpa nihil atque, facere recusandae
                            asperiores quia corporis nesciunt vero quae alias corrupti provident
                            accusantium aperiam mollitia quisquam, obcaecati ut exercitationem laudantium
                            odio? <br /><br /> Magnam officiis in repellendus unde ipsam necessitatibus explicabo
                            eligendi cumque natus ab? Assumenda quidem velit sequi mollitia reiciendis,
                            numquam ipsa at ad sit libero debitis. Fuga delectus dicta facilis impedit
                            autem dolorum molestiae explicabo animi. Nostrum deleniti excepturi architecto
                            deserunt debitis officiis vitae, rerum consequatur corporis perspiciatis.</p>
                            <Button className="mt-4" ButtonText={"Explore Now"}></Button>
                    </div>
                </div>
                <div className="w-full md:w-2/4 h-[50rem] grid grid-cols-2 pt-28 md:pt-[0] pb-4 gap-4">
                    <div className="relative bg-cover bg-center bg-[url('../../src/assets/images/Rectangle95.png')]">
                        <div className="absolute inset-0 bg-black/25 flex items-center justify-center">
                            <div>
                                <h1 className="text-2xl text-black font-bold">Leather Bags</h1>
                                <p className="text-xs">Lorem, ipsum dolor.</p>
                            </div>
                        </div>
                    </div>
                    <div className="relative bg-cover bg-center bg-[url('../../src/assets/images/Rectangle96.png')]">
                        <div className="absolute inset-0 bg-black/25"></div>
                    </div>
                    <div className="relative bg-cover bg-center bg-[url('../../src/assets/images/Rectangle97.png')]">
                        <div className="absolute inset-0 bg-black/25"></div>
                    </div>
                    <div className="relative bg-cover bg-center bg-[url('../../src/assets/images/Rectangle98.png')]">
                        <div className="absolute inset-0 bg-black/25 flex items-center justify-center">
                            <div>
                                <h1 className="text-2xl text-black font-bold">Different Types</h1>
                                <p className="text-xs">Lorem, ipsum dolor.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Explore;