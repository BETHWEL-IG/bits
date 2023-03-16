
import { useEffect } from "react";
import { Home } from "./pages/home/home";
import {
  Route, 
  createBrowserRouter, 
  createRoutesFromElements,
  RouterProvider,
  } from 'react-router-dom'
import { Homepage } from "./pages/home/homepage";
import { Services } from "./pages/services/services";
import { About } from "./pages/about/about";
import {Blog} from './pages/blog/blog'
import { Contact } from "./pages/contact/contact";
import { Project } from "./pages/projects/project";

const router= createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Home />}>
      <Route index element={<Homepage/>}/>
      <Route path="services" element={<Services/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="blogs" element={<Blog/>}/>
      <Route path="contact" element={<Contact/>}/>
      <Route path="projects" element={<Project/>}/>
    </Route>
  )
)


function App() {
  useEffect(() => {
    document.title = "Bits- Home";
  }, []);
  return (
      <RouterProvider router={router}>
      </RouterProvider>
  );
}

export default App;
