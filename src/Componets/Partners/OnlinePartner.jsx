import daraz from '../../assets/Partners/OnlinePartners/daraz.webp'
import lavander from '../../assets/Partners/OnlinePartners/lavander.webp'
import panda from '../../assets/Partners/OnlinePartners/panda-mart.webp'
import rokomari from '../../assets/Partners/OnlinePartners/rokomari.webp'
import togu from '../../assets/Partners/OnlinePartners/togu-mogu.webp'
import './common.css'

const OnlinePartner = () => {
    return (
        <div className='my-2'>
            <h3 className='text-center text-3xl font-semibold'>ONLINE PARTNERS</h3>
            <div className=' grid grid-cols-2 md:grid-cols-5 space-x-4 items-center'>
                <img src={daraz} alt="" />
                <img src={rokomari} alt="" />
                <img src={lavander} alt="" />
                <img src={panda} alt="" />
                <img src={togu} alt="" />
            </div>
        </div>
    );
};

export default OnlinePartner;