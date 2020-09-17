import React, { useState, useRef, useEffect } from 'react';
import { useOnClickOutside } from './hooks';

import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './global';
import { theme } from './theme';
import Burger from './components/Burger';
import Menu from './components/Menu';
import Container from '@material-ui/core/Container';
import Home from './Home'
import About from './About'
import Projects from './Projects'
import Skills from './Skills'
import Footer from './Footer'
import Contact from './Contact'



function App() {

  const [open, setOpen] = useState(false);

  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));

  useEffect(() => {
    window.onbeforeunload = () => {
      window.scrollTo(0, 0);
    }
  }, [])

  // const refreshPage = () =>{
  //   window.onbeforeunload =  () => {
  //     window.scrollTo(0, 0);
  //   }
  // }


  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <div ref={node}>
          <Burger open={open} setOpen={setOpen} />
          <Menu open={open} setOpen={setOpen} />
        </div>
        <Home id="home" />
        <About id="about" />
        <Projects id="projects" />
        <Skills id="skills" />
        <Contact id="contact" />
        <Footer />
      </>
    </ThemeProvider>
  );
}
export default App;