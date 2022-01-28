import { useEffect } from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Footer from './components/footer/Footer';
import Blog from './components/blog/Blog';
import Contact from './components/contact';

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
      default:
        return <Home />
    }
  }

  return (
    <div className="App">
      <Navbar />
      {renderContent()}
      <Footer />
    </div>
  );
}

export default App;
