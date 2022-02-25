import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Footer from './components/footer/Footer';
import Blog from './components/blog/Blog';
import Contact from './components/contact';
import BlogPage from './components/blog/page';
import { useEffect, createContext, useState, useLayoutEffect } from 'react';
import { ReactComponent as Stars } from './components/home/header/space/stars.svg'

export const PostsContext = createContext()

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    (async () => {
      setLoading(true)
      await fetch("/posts.json")
        .then((res) => res.json())
        .then((data) => setPosts(data))
        .catch((err) => console.log(err))
      setLoading(false)
    })()
  }, [])

  useLayoutEffect(() => {
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    }
  }, [])

  const renderContent = () => {
    const path = window.location.pathname;
    if (path.includes('/blog/')) return <BlogPage path={path} loading={loading} />
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
      <PostsContext.Provider value={posts}>
        <div className="space">
          <div className="space-stars">
            <Stars />
          </div>
          <div className="shooting-star shooting-star-1" />
          <div className="shooting-star shooting-star-2" />
          <div className="shooting-star shooting-star-3" />
        </div>
        <Navbar trans={isTrans()} />
        {renderContent()}
        <Footer />
      </PostsContext.Provider>
    </div>
  );
}

export default App;
