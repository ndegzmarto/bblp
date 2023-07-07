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
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Sections" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1"></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Features
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">About</NavDropdown.Item>
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
      <Button className="sitebutton" href="">Site</Button>
    </div>

    <main>
      <h2 className='features'>Features</h2>
      <div className='gallery'>
      <Container>
        <Row className='row'>
          <Col sm={4}>
          d
          <Image className="image" style={{"width":"100%", "height":"80" }} src="https://i.postimg.cc/sDnLrg1S/taskbar.png" />
         
            <h4>Taskbar</h4>
          <p>A task bar where you set up your daily tasks</p></div>
          </Col>
          <Col sm={4}>
          <div className='set-toggle'>
          <Image style={{"width":"100%", "height":"80" }} src='https://i.postimg.cc/3rsL4cj2/settings.png' />
        
            <h4>Timer Toggle</h4>
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
    </main>
    </div>
  );
}

export default App;
