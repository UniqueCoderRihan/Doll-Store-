
import Nabvar from '../Componets/Nabvar/Nabvar';
import Footer from '../Componets/Footer/Footer';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div className='container mx-auto'>
            <Nabvar></Nabvar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;