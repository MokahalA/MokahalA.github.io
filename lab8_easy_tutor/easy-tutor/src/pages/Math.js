import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import '../styles/Math.css'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import getDay from "date-fns/getDay";


function Math() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    const handleShow = () => setShow(true); 

    const onSubmit = (e) => {
        e.preventDefault();
        handleClose();
        var x = document.getElementById("snackbar");

        // Add the "show" class to DIV
        x.className = "show";
      
        // After 3 seconds, remove the show class from DIV
        setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
    }

    const [startDate, setStartDate] = useState(setHours(setMinutes(new Date(), 0), 9));

    const isWeekday = (date) => {
        const day = getDay(date);
        return day !== 0 && day !== 6;
    };



    return (
        <div>
            <div className="mathHeader">
                <h1>Math Tutors</h1>
                <br></br>
                <h4>Book a session instantly.</h4>
            </div>     
            <div id="mathTutors" className="row text-center">
                <div class="col-lg-4">
                    <div class="team-member">
                        <img class="img-thumbnail" src="images/john-jackson.jpg" alt="" />
                        <div class="employee-name">
                            <h4>John</h4>
                            <p class="text-muted">Hourly rate: $17/hour <br></br> Teaching experience: 3 years</p>
                            <Button variant="dark" onClick={handleShow} >Book</Button>{' '}
                            <Modal
                                show={show}
                                onHide={handleClose}
                                backdrop="static"
                                keyboard={false}
                            >
                                <Form onSubmit = {onSubmit}>
                                    <Modal.Header closeButton>
                                    <Modal.Title>Booking Form</Modal.Title>
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
                                                <Col>
                                                    <Form.Control required as="select">
                                                        <option disabled selected>Select a tutor</option>
                                                        <option>John</option>
                                                        <option>Kathy</option>
                                                        <option>Christina</option>
                                                    </Form.Control>
                                                    <br></br>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col>
                                                    <Form.Group id="dateTimeBlock" className="mb-3" controlId="exampleForm.ControlInput1" hasValidation>
                                                        <Form.Label> Date & time: </Form.Label>
                                                        <DatePicker placeholderText="mm/dd/yyyy" minDate={new Date()}  dateFormat="MMMM d, yyyy @ h:mm aa" className ="calendar" selected={startDate} onChange={(date) => setStartDate(date)}  filterDate={isWeekday} showTimeSelect timeFormat="HH:mm" timeIntervals={60} timeCaption="time"  minTime={setHours(setMinutes(new Date(), 0), 9)}  maxTime={setHours(setMinutes(new Date(), 0), 15)}  />
                                                    </Form.Group>
                                                </Col>
                                            </Row>
                                            <br></br>
                                            <p>Payment information</p>
                                            <Row>
                                                <Col>
                                                    <Form.Control id="cardNum" type="text" placeholder="Card number" pattern="[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}" maxlength="19" required/>
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
                </div>
                <div class="col-lg-4">
                    <div class="team-member">
                        <img class="img-thumbnail" src="images/andrea-parker.jpg" alt="" />
                        <div class="employee-name">
                            <h4>Andrea</h4>
                            <p class="text-muted">Hourly rate: $15/hour <br></br> Teaching experience: 1 year</p>
                            <Button variant="dark" onClick={handleShow} >Book</Button>{' '}
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="team-member">
                        <img class="img-thumbnail" src="images/christina-morillo.jpg" alt="" />
                        <div className="employee-name">
                            <h4>Christina</h4>
                            <p class="text-muted">Hourly rate: $19/hour <br></br> Teaching experience: 5 years</p>
                            <Button variant="dark" onClick={handleShow} >Book</Button>{' '}
                        </div>
                    </div>
                </div>
            </div>
            <div id="snackbar">Your session has been successfully booked!</div>
        </div>
    )
}

export default Math
