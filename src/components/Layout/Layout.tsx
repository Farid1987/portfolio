import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';

import './Layout.style.scss';

const Layout = () => {
  return (
    <div className="App">
      <Sidebar />
      <main className="main">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
