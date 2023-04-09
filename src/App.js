import './App.css';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';


import About from './components/about/about';
import Hero from './components/hero/hero';
import Projects from './components/projects/projects';

import projectList from './projectList';

function App() {
  return (
    <div className="App">
  <Hero />
  <About />
<Projects projects={projectList} />
<Contact />
<Footer />
    </div>
  );
}

export default App;
