import { useEffect } from 'react';
import useTitle from '../../hooks/useTitle'
import Aos from 'aos';

const Banner = () => {
    useTitle('Home')
    useEffect(()=>{
        // Aos.init({duration:200})
    },[])
    return (
        <div data-aos='filp-down' className="hero min-h-screen bg-pink-100 rounded-lg my-2">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="w-1/2">
                    <img src="https://i.ibb.co/zZZrB0y/28779-4-doll-photo-thumb.png" className="w-[400px] rounded-lg shadow-2xl" />
                </div>
                <div>
                    <h1 className="text-5xl font-bold">Toy Store!</h1>
                    <p className="py-6">This Is World Famous One Of The Best Doll Collection Store. We Provide Original Collection For Doll</p>
                    <div className="space-x-2">
                        <button className="btn btn-outline btn-secondary">Get Started</button>
                        <button className="btn btn-outline btn-warning">Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;