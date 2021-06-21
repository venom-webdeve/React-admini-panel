import Chart from '../../components/chart/Chart';
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo';
import './style.css';
import {userData} from '../../DummyData';
import WidgetsSm from '../../components/widgetsSm/WidgetsSm';
import WidgetLg from '../../components/widgetLg/WidgetLg';

const Home =()=> {
    return (
        <div className='home'>
           <FeaturedInfo/>
           <Chart data={userData} title='User Analytics' grid  dataKey="Active User"/>
           <div className='homeWidgets'>
               <WidgetsSm/>
               <WidgetLg/>
           </div>
        </div>
    )
}

export default Home
