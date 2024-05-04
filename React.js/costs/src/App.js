import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import Company from './components/pages/Company';
import NewProject from './components/pages/NewProject';
import Projects from './components/pages/Projects';

import Container from './components/layout/Container';
import NavBar from './components/layout/NavBar';
import Footer from './components/layout/Footer';

function App() {
  return (
    <Router>
        <NavBar />
        <Routes>
          <Route exact path='/' element={<Container customClass="min-height"><Home /></Container>}/>
          <Route exact path='/projects' element={<Container customClass="min-height"><Projects /></Container>}/>
          <Route exact path='/contact' element={<Container customClass="min-height"><Contact /></Container>}/>
          <Route exact path='/company' element={<Container customClass="min-height"><Company /></Container>}/>
          <Route exact path='/newproject' element={<Container customClass="min-height"><NewProject /></Container>}/>
        </Routes>
      <Footer />
    </Router>
  );
}

export default App;
