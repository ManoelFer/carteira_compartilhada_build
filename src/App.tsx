import { useContext } from 'react';

import { ToastContainer } from 'react-toastify';

import { RoutesApp } from 'routes';

import { Web3Context } from 'context';

import { Loading } from 'components/Loading';

import './App.css';
import 'sweetalert2/src/sweetalert2.scss'
import 'react-toastify/dist/ReactToastify.css';
import 'animate.css';


function App() {
  const { isLoading } = useContext(Web3Context)

  return (
    <div className="App">
      <Loading isLoading={isLoading} />
      <ToastContainer />
      <RoutesApp />
    </div>
  );
}

export default App;
