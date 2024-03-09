import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Signup } from './pages/Signup'
import { Blog } from './pages/Blog'
import { Blogs } from "./pages/Blogs";
import { Publish } from './pages/Publish';
import { Signin } from './pages/Signin'
import { Landing } from './pages/Landing';
import { ThemeProvider } from './contexts/ThemeContext';

function App() {

  return (
    <>
      <BrowserRouter>
        <ThemeProvider>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/blog/:id" element={<Blog />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/publish" element={<Publish />} />
          <Route path="/signin" element={<Signin />} />
        </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </>
  )
}

export default App