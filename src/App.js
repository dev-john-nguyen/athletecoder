import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Footer from './components/footer/Footer';
import Blog from './components/blog/Blog';
import Contact from './components/contact';
import BlogPage from './components/blog/page';
import { useEffect, createContext, useState } from 'react';

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}


export const PostsContext = createContext()

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@athletecoder")
      .then((res) => res.json())
      .then((posts) => {
        posts.items.forEach((post, i) => {
          //gen preview
          const s = post.description.indexOf("<p>");
          const e = post.description.indexOf("</p>");
          let preview = post.description.substring(s, e);
          preview = replaceAll(preview, "<strong>", "");
          preview = replaceAll(preview, "</strong>", "");




          const h4s = post.description.indexOf("<h4>");
          const h4e = post.description.indexOf("</h4>");
          const h4 = post.description.substring(h4s, h4e);

          post.description = h4 + "</h4>" + preview.slice(0, 200) + "...</p>"

          //gen id
          const r = post.guid.split("https://medium.com/p/");
          post.id = r[1];
        })

        setPosts(posts.items)
      })
      .catch((err) => console.log(err))
  }, [])

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
      <PostsContext.Provider value={posts}>
        <Navbar trans={isTrans()} />
        {renderContent()}
        <Footer />
      </PostsContext.Provider>
    </div>
  );
}

export default App;
