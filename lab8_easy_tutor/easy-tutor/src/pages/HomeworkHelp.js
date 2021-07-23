import React from 'react'
import '../styles/HomeworkHelp.css'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


function HomeworkHelp() {

    const onSubmit = (e) => {
        e.preventDefault();
        var x = document.getElementById("hhSnackbar");

        document.getElementById("hhForm").reset();

        // Add the "show" class to DIV
        x.className = "show";
      
        // After 3 seconds, remove the show class from DIV
        setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
    }

    return (
        <div className="hh-body">

            <div id="hhSnackbar">Your question has been submitted. You will recieve a reply by email from one of our tutors. </div>
            <div className="hh-heading">
                <h1 id="title" class="display-4">Homework Help</h1>
                <p class="lead" id="hh-marketing">Submit your questions and receive a reply from one of our experts within 72 hours.</p>
            </div>
            <div>
                <Form id="hhForm" onSubmit={onSubmit} >
                    <Col>
                        <Row>
                            <Col>
                                <Form.Label>First name</Form.Label>
                                <Form.Control placeholder="First name" required />
                            </Col>
                            <Col>
                                <Form.Label>First name</Form.Label>
                                <Form.Control placeholder="Last name" required />
                            </Col>
                        </Row>
                        <br></br>
                        
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Comments/Questions</Form.Label>
                            <Form.Control as="textarea" rows={5} required />
                        </Form.Group>

                        <Form.Group controlId="formFile" className="mb-3">
                            <Form.Label>Upload a pdf (optional)</Form.Label>
                            <Form.Control type="file" />
                        </Form.Group>
                    </Col>
                    <Col className="hh-Submit">
                        <Button type="submit">Submit</Button>     
                    </Col>
                    <br></br>
                    <br></br>
                </Form>




            </div>

        </div>
    )
}

export default HomeworkHelp
