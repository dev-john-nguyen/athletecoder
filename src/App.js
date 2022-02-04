import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Footer from './components/footer/Footer';
import Blog from './components/blog/Blog';
import Contact from './components/contact';
import BlogPage from './components/blog/page';

function App() {

  const renderContent = () => {
    const path = window.location.pathname;
    if (path.includes('/blog/')) return <BlogPage path={path} />
    switch (path) {
      case '/blog':
        return <Blog />
      case '/contact':
        return <Contact />
      default:
        return <Home />
    }
  }

  const isTrans = () => {
    const path = window.location.pathname;
    if (path.includes('/blog/')) return false
    switch (window.location.pathname) {
      case '/blog':
      case '/contact':
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
