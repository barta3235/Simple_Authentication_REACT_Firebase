import Header from './Header'
import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <div>
            <Header></Header>
            <div className='h-[82px]'>
                
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;