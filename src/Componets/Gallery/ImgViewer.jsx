import './img.css'
const ImgViewer = ({ image }) => {

    return (
        <div className="card w-1/2 space-y-2 sm:items-center">
            <figure><img className="galleryImg" src={image.image} alt="Shoes" /></figure>
            
        </div>
    );
};

export default ImgViewer;