import { BrowserRouter, Routes, Route ,Navigate} from 'react-router-dom';
import Navbar from '../componentes/navbar/Navbar';
import Header from '../componentes/header/Header';
import Inicio from '../componentes/inicio/inicio';
import Culture from '../componentes/culture/Culture';
//import Layout from '../componentes/layout/Layout';
const MyRouter = () => {
  return (
    <BrowserRouter>
      <Header></Header>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Navigate to={'inicio'}></Navigate>}></Route>
        <Route path='inicio' element={<Inicio></Inicio>}></Route>
        <Route path='culture' element={<Culture></Culture>}></Route>
      </Routes>
    </BrowserRouter>
  );
};
export default MyRouter;
