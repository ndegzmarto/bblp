import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

import  Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image  from 'react-bootstrap/Image';
import { Link } from 'react-scroll';


function App() {
  return (
    <div>
      <header>
    <Navbar expand="lg" className="navbar">
      <Container>
        <Navbar.Brand className="title" href="#home">BreakBoost</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Sections" id="basic-nav-dropdown">
              <NavDropdown.Item>
                <Link to="ft" smooth={true} duration={500}>
                Features
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
              <Link to="abt" smooth={true} duration={500}>
                About
                </Link>
                </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>
    <div className='introsection'>
      <h2 className='intro'>Welcome :) </h2>
      <p className='phrase'>BreakBoost is an application that serves as a pomodoro timer 
        helping you to complete daily tasks in a productive and efficient way!</p>
      <Button className="sitebutton" href="https://breakboost.vercel.app" style={{"backgroundColor": "black", "border":"2px solid black"}}>Site</Button>
    </div>

    <main>
      <h2 className='features' id="ft">Features</h2>
      <div className='gallery'>
      <Container>
        <Row className='row'>
          <Col sm={4}>
          <Image className="image" style={{"width":"100%", "height":"80" }} src="https://i.postimg.cc/sDnLrg1S/taskbar.png" />
            <div>
            <h4>Taskbar</h4>
          <p>A task bar where you set up your daily tasks</p></div>
          </Col>
          <Col sm={4}>
          <div className='set-toggle'>
          <Image style={{"width":"100%", "height":"80" }} src='https://i.postimg.cc/3rsL4cj2/settings.png' />
        
            <h4>Slider Toggle</h4>
            <p>Slider toggle to set up your timer in minutes to set break and work time</p>
            </div>
          </Col>
          <Col sm={4}>
          <Image style={{"width":"100%", "height":"80" }} src="https://i.postimg.cc/44HGRjNc/timer.png" />
          <div className='timer'>
            <h4>Timer</h4>
            <p>Circular timer clock to check the time left for your task, the clock is in red color while at work and green on break time</p>
          </div>
          </Col>
        </Row>
      </Container>
      </div>

      <div className='about' id='abt'>
        <h2 className='about-title'>About</h2>
        <p className='inspire'>The inspiration for this project came about due to the rigorous tasks that one is expected to accomplish at ALX.
          It is key that time management is observed during the program and tasks are finished on time and you are able to track which tasks are finished and pending, I saw fit to create a personal tool that could help observe that as well as emphasize the importance of taking regular breaks while working on projects.
        </p>
        <p>Link to repository: <a href="https://github.com/ndegwa007/Breakboost">github</a></p>

      </div>
    </main>
    </div>
  );
}

export default App;
