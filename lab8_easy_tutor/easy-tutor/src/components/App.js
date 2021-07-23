import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/App.css';
import Home from '../pages/Home';
import Math from '../pages/Math';
import Chemistry from '../pages/Chemistry';
import Biology from '../pages/Biology';
import Courses from '../pages/Courses';
import HomeworkHelp from '../pages/HomeworkHelp';
import Location from '../pages/Location';
import {Route} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Navbar from 'react-bootstrap/Navbar'
import {FaGraduationCap} from 'react-icons/fa'
import { MdLanguage } from "react-icons/md";
import { I18nProvider, LOCALES } from '../i18n';
import translate from '../i18n/translate';
import Dropdown from 'react-bootstrap/Dropdown'


function App() {

  const [locale, setLocale] = useState(LOCALES.ENGLISH);

  return (
    <I18nProvider locale = { locale }>
      <div className="App">
          <Navbar id="nav" variant="dark" expand="lg">
            <Container>
              <FaGraduationCap size={50} color="white" />
              <Navbar.Brand id="orgName" href="/">EasyTutor</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <NavDropdown title={translate("Subjects")} id="basic-nav-dropdown">
                    <NavDropdown.Item href="/math">{translate("Math")}</NavDropdown.Item>
                    <NavDropdown.Item href="/chemistry">{translate("Chemistry")}</NavDropdown.Item>
                    <NavDropdown.Item href="/biology">{translate("Biology")}</NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="/courses">{translate("Courses")}</Nav.Link>
                  <Nav.Link href="/homeworkhelp">{translate("Homework Help")}</Nav.Link>
                  <Nav.Link href="/location">{translate("Location")}</Nav.Link>
                </Nav>
              </Navbar.Collapse>
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  <MdLanguage/> Language
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item onClick={() => setLocale(LOCALES.ENGLISH)}>English</Dropdown.Item>
                  <Dropdown.Item onClick={() => setLocale(LOCALES.FRENCH)}>French</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Container>
          </Navbar>

          <Route exact path="/" component={Home}/>
          <Route exact path="/math" component={Math}/>
          <Route exact path="/chemistry" component={Chemistry}/>
          <Route exact path="/biology" component={Biology}/>
          <Route exact path="/courses" component={Courses}/>
          <Route exact path="/homeworkhelp" component={HomeworkHelp}/>
          <Route exact path="/location" component={Location}/>
      </div>
    </I18nProvider>
  );
}


export default App;
