
import Banner from '../Componets/Banner/Banner';
import MainCategoris from '../Componets/Categoris/MainCategoris';
import GallerySection from '../Componets/Gallery/GallerySection';
import OnlinePartner from '../Componets/Partners/OnlinePartner';
import RetailPartner from '../Componets/Partners/RetailPartner';
import Testimonial from '../Componets/Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <GallerySection></GallerySection>
            <MainCategoris></MainCategoris>
            <RetailPartner></RetailPartner>
            <OnlinePartner></OnlinePartner>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;