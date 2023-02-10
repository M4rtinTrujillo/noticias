import { Outlet } from 'react-router-dom';

const Layout = (props) => {
  return (
    <div className='layout'>
      <div className='top'></div>
      <main className='mid'>
        <Outlet></Outlet>
      </main>
      <div className='bottom'></div>
    </div>
  );
};
export default Layout;
