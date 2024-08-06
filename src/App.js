import { useState } from 'react';
import { useSelector , useDispatch } from 'react-redux';
import { Home, Login, Public } from './containers/public/index';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route} from 'react-router-dom';
import path from './ultis/path';


function App() {
  const { test } = useSelector(state => state.app)
  console.log(test);
  return (
    <>
    <div className="App">
        <Routes>
            <Route path= {path.PUBLIC} element = {<Public/>} >   
                <Route path= {path.HOME} element = {<Home/>} />
                <Route path= {path.LOGIN} element = {<Login/>} />
                <Route path= {path.START} element = {<Home/>} />
            </Route>
        </Routes>
    </div>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        />
<ToastContainer />
    </>
  );
}
export default App;