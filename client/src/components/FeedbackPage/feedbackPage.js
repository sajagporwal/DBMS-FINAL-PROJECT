import React, {Component} from 'react';
import img1 from "../../images/feedbackb.jpg";
import {Form,Button} from 'react-bootstrap';
import axios from "axios";

class FeedbackPage extends Component {

    state={
        experience:'',
        comments:''
    }

    handleSubmit = (e)=>{

    }

    handleChange=(e)=>{
        this.setState({
                          [e.target.name]:e.target.value
                      })
    }

    render() {
        return (
            <div
                style={{
                    backgroundImage: `url(${img1})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition:'center center',
                    backgroundAttachment: 'fixed',
                    height: `${window.innerHeight}px`
                }}
            >
                <div class='container justify-content-center'>
                <Form >
                    <Form.Group controlId="formBasicEmail" >
                        <Form.Label>Your Experience</Form.Label>
                        <Form.Control as="textarea" placeholder="Tell us your experience"
                           input
                        />
                        <Form.Text className="text-muted">
                            We'll never share your information with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Comments</Form.Label>
                        <Form.Control type="text" placeholder="Your comments here. Help us improve!"

                        />
                    </Form.Group>
                    <Button variant="primary" type="submit" onClick={this.handleSubmit}>
                        Submit
                    </Button>
                </Form>
                </div>
            </div>
        );
    }
}

export default FeedbackPage;