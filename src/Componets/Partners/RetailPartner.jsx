import unimart from '../../assets/Partners/RetailPartner/unimart.webp';
import kids from '../../assets/Partners/RetailPartner/kids-mom.webp';
import lavander from '../../assets/Partners/RetailPartner/lavander.webp';
import shwapno from '../../assets/Partners/RetailPartner/shwapno.webp';
import well from '../../assets/Partners/RetailPartner/well-being.webp';
import './common.css'
const RetailPartner = () => {
    return (
        <div className='my-2'>
            <h3 className='text-center text-3xl font-semibold'>RETAIL PARTNERS</h3>
            <div className=' grid grid-cols-2 md:grid-cols-5 space-x-4 items-center'>
                <img src={unimart} alt="" />
                <img src={kids} alt="" />
                <img src={lavander} alt="" />
                <img src={shwapno} alt="" />
                <img src={well} alt="" />
            </div>
        </div>
    );
};

export default RetailPartner;