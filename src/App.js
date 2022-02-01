import { useEffect } from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Footer from './components/footer/Footer';
import Blog from './components/blog/Blog';
import Contact from './components/contact';
import About from './components/about';

function App() {

  useEffect(() => {
    console.log(window.location.pathname)
  }, [])

  const renderContent = () => {
    switch (window.location.pathname) {
      case '/blog':
        return <Blog />
      case '/contact':
        return <Contact />
      case '/about':
        return <About />
      default:
        return <Home />
    }
  }

  const isTrans = () => {
    switch (window.location.pathname) {
      case '/blog':
      case '/contact':
      case '/about':
        return false
      default:
        return true
    }
  }

  return (
    <div className="App">
      <Navbar trans={isTrans()} />
      {renderContent()}
      <Footer />
    </div>
  );
}

export default App;
