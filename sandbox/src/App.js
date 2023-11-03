// import logo from './logo.svg';
// import './App.css';
import {Route, Routes} from 'react-router-dom';
import Footer from './component/Footer/Footer';
import Header from './component/Header/Header';
import Body from './component/Body/Body';

function App() {
  return(
    <div className='bg-black'>
      <Header/>
      <div className='my-10'>
        <Body />
      </div>
      <Footer />
    </div>
  )
}

export default App;
