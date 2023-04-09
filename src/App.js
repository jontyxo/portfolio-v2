import './App.css';
import { Element } from 'react-scroll';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';


import About from './components/about/about';
import Hero from './components/hero/hero';
import Projects from './components/projects/projects';
import Topbar from './components/topbar/topbar';

import projectList from './projectList';

function App() {
  return (
    <div className="App">
    <Topbar />
  {/* <Hero />
  <About />
<Projects projects={projectList} />
<Contact />
<Footer /> */}
<Element name="home">
  <Hero />
</Element>
<Element name="about">
  <About />
</Element>
<Element name="projects">
<Projects projects={projectList} />
</Element>
<Element name="contact">
<Contact />
</Element>
    </div>
  );
}

export default App;
