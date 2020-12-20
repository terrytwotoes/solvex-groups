import Slider from 'react-slick';
import './App.css';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import CarouselComponent from './Components/Slider/Slider';
import SubNav from './Components/SubNav/SubNav';

function App() {
  return (
    <>
    <Navbar />
    {/* <CarouselComponent /> */}
    <SubNav/>
    <Footer/>
    </>
  );
}

export default App;
