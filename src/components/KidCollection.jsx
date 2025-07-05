import Collection from "./Reusable_component/Collection";
import bgImage from "../../src/assets/images/Rectangle109.png";
import img1 from "../../src/assets/images/Rectangle112.png";
import img2 from "../../src/assets/images/Rectangle111.png";

const KidCollection = () => {
    return (
        <div>
            <Collection
                bgImage={bgImage}
                img1={img1}
                img2={img2}
                title="Kids Collection"
                description={<>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, accusamus quam molestiae magni cupiditate dignissimos temporibus enim quidem consequuntur
                    voluptates sequi <br /><br /> veritatis tempore blanditiis facilis vel sed voluptas aspernatur qui numquam reprehenderit iusto! Architecto facere molestiae minus rem aut et odio distinctio ipsum quidem magni,
                    nesciunt quo ullam voluptates similique.</>}
                buttonText="Discover More"
            ></Collection>
        </div>
    );
};

export default KidCollection;