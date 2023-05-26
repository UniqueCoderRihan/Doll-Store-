import { useEffect, useState } from "react";
import ImgViewer from "./ImgViewer";
import Aos from "aos";



const GallerySection = () => {

    const [gallery,setGallery] = useState([])
    useEffect(()=>{
        // Aos.init({duration:2000});

        fetch('https://doll-server.vercel.app/gallery')
        .then(res=>res.json())
        .then(data=>setGallery(data))
    },[])
    // console.log(gallery);

    return (
        <div  data-aos="flip-down" className='bg-pink-100 sm:items-center my-2 rounded-lg shadow-lg'>
            <h2 className='text-3xl text-center font-bold text pt-5'>Dolls Gallery</h2>
            <p className="text-1xl text-center">Our Some Collection. </p>
            {/* react-image-viewer */}
            <div className="grid mx-auto  md:grid-cols-3 lg:grid-cols-3">
                {
                    gallery.map(image=> <ImgViewer
                    key={image.id}
                    image={image}
                    ></ImgViewer> )
                }
            </div>
        </div>
    );
};

export default GallerySection;