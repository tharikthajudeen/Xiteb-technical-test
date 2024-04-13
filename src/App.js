import logo from './logo.svg';
import './App.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import Footer from './Components/Footer';
import News from './Components/News';
import Logo from './Components/Logo';
import Stats from './Components/Stats';
import Testimonials from './Components/Testimonials';
import Services from './Components/Services';
import Header from './Components/Header';
import Welcome from './Components/Welcome';

function App() {
  return (
    <div className="">
      <Header/>
      <Welcome/>
      <Services/>
      <Stats/>
      <Testimonials/>
      <News/>
      <Logo/>
      <Footer/>
    </div>
  );
}

export default App;
