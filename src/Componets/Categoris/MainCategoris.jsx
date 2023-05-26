import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import BabyDolls from './BabyDolls';
import BarbeDolls from './BarbeDolls';
import AmericanGrils from './AmericanGrils';
import { useEffect } from 'react';
import Aos from 'aos';
const MainCategoris = () => {
useEffect(()=>{
    Aos.init()
},[])
    return (
        <div data-aos='flip-down'>
            <div className='bg-pink-100'>
                <h2 className='text-center text-3xl font-semibold'>Shop By Dolls Category</h2>
            </div>
            <Tabs className='bg-pink-100 px-10 sm:items-center'>
                <TabList>
                    <Tab>Baby Dolls</Tab>
                    <Tab>Barbe Dolls</Tab>
                    <Tab>American grill</Tab>
                </TabList>

                <TabPanel>
                    <BabyDolls></BabyDolls>
                </TabPanel>
                <TabPanel>
                    <div>
                        <BarbeDolls></BarbeDolls>
                    </div>
                </TabPanel>
                <TabPanel>
                    <AmericanGrils></AmericanGrils>

                </TabPanel>
            </Tabs>
        </div>
    );
};

export default MainCategoris;