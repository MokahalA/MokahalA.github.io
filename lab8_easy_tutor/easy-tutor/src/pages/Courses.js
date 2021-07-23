import React, {useState} from 'react'
import '../styles/Courses.css'
import Button from 'react-bootstrap/Button'
import "react-datepicker/dist/react-datepicker.css";
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


function Courses() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    const handleShow = () => setShow(true); 

    const onSubmit = (e) => {
        e.preventDefault();
        handleClose();
        var x = document.getElementById("courseSnackbar");

        // Add the "show" class to DIV
        x.className = "show";
      
        // After 3 seconds, remove the show class from DIV
        setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
    }

    return (
        <div className="coursesBody">

            <div className="coursesTitle">
                <h1 class="display-4">Our online course offerings</h1>
                <p class="lead" id="title-text">Getting a great score has never been easier.</p>    
            </div>

            
            <div id="courseSnackbar">Enrollment successful! Check your email for instructions to access the course online.</div>

            <div className="courseJumbotrons">
                <div className="jumbotron">
                    <h1 class="display-4">TOEFL iBT Test Prep</h1>
                        <p class="lead">The TOEFL iBT ® test has 4 sections: Reading, Listening, Speaking, and Writing.</p>
                        <p>Our course is adapted to provide students with varying levels of knowledge to achieve a high grade. The course is conducted by an experienced instructor and spans over 6 pre-recorded sessions (1.5 hours per session) and is available online only, students are also provided with 4 sample exams to ensure that they are well prepared to take the exam. </p>
                        <p class="lead">
                            <Button className="enrollBtn" variant="success" onClick={handleShow}>Enroll</Button>{' '}
                        </p>
                </div>

                <div className="jumbotron">
                    <h1 class="display-4">SAT Test Prep</h1>
                        <p class="lead">The SAT test contains 2 main sections: Evidence-Based Reading & Writing, and the Math section. It is an entrance exam used by most colleges and universities to make admissions decisions. </p>
                        <p>Its never too early to start preparing for the SAT, we recommend prospective students to complete our prep course atleast 2 months prior to the test date. Our center boasts a very high success rate among our students, the average score achieved in 2020 by our students is in the 85th percentile. The course spans 8 pre-recorded sessions (2 hours per session) and is available online only. </p>
                        <p class="lead">
                            <Button className="enrollBtn" variant="success" onClick={handleShow} >Enroll</Button>{' '}
                        </p>
                </div>

                <Modal
                                show={show}
                                onHide={handleClose}
                                backdrop="static"
                                keyboard={false}
                            >
                                <Form onSubmit = {onSubmit} >
                                    <Modal.Header closeButton>
                                    <Modal.Title>Enrollment Form</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <p>Personal information</p>
                                            <Row>
                                                <Col>
                                                <Form.Control required placeholder="First name" />
                                                </Col>
                                                <Col>
                                                <Form.Control required placeholder="Last name" />
                                                </Col>
                                            </Row>
                                            <br></br>
                                            <Row>
                                                <Col>
                                                    <Form.Control required type="email" placeholder="Enter email" />
                                                </Col>
                                            </Row>
                                            <br></br>
                                        <p>Payment information</p>
                                            <Row>
                                                <Col>
                                                    <Form.Control id="courseCardNum" type="text" placeholder="Card number" pattern="[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}" maxlength="19" required/>
                                                    <p class="input-tooltip">Format: xxxx-xxxx-xxxx-xxxx</p>
                                                </Col>
                                            </Row>
                                    </Modal.Body>
                                    <Modal.Footer>
                                    <Button variant="secondary" onClick={handleClose}>
                                        Close
                                    </Button>
                                    <Button variant="primary" type="submit" >Submit</Button>
                                    </Modal.Footer>
                                </Form>
                    </Modal>            
            </div>
        </div>
    )
}

export default Courses
