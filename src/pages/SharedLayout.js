import { Outlet, useLocation } from 'react-router-dom';

import Wrapper from '../assets/wrappers/SharedLayout';
import { NavBar } from "../components"

const SharedLayout = () => {
  const location = useLocation()
 
  return (
    <Wrapper>
  
        {(location.pathname.includes("play") || location.pathname.includes("finish")||location.pathname.includes("stats")) && <NavBar />}
        <div className='dashboard-page'>
          <Outlet />
        </div>

    </Wrapper>
  );
};
export default SharedLayout;
