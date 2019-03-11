import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Row, Label, Container } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

class CommentForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isFormOpen: false
        };
        this.toggleForm = this.toggleForm.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    toggleForm() {
        this.setState({
            isFormOpen : !this.state.isFormOpen
        });
    }

    handleSubmit(values) {
        this.toggleForm();
        this.props.addComment(this.props.dishId, values.rating, values.author, values.comment);
    }    

    render() {
        return(
            <>
            <Button outline onClick={this.toggleForm}><span className="fa fa-pencil fa-lg"></span> Submit Comment</Button>
            <Modal isOpen={this.state.isFormOpen} toggle={this.toggleForm}>
                <ModalHeader toggle={this.toggleForm}>Submit Comment</ModalHeader>
                <ModalBody>
                    <Container>
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Label htmlFor="rating">Rating</Label>

                                <Control.select value="3" model=".rating" name="rating"
                                    className="form-control">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </Control.select>
                            </Row>

                            <Row className="form-group">
                                <Label htmlFor="author">Your Name</Label>

                                <Control.text model=".author" id="author" name="author"
                                    placeholder="Your Name"
                                    className="form-control"
                                    validators={{
                                        required, minLength: minLength(3), maxLength: maxLength(15)
                                    }}
                                />
                                <Errors
                                    className="text-danger"
                                    model=".author"
                                    show="touched"
                                    messages={{
                                        required: 'Required',
                                        minLength: 'Must be greater than 2 characters',
                                        maxLength: 'Must be 15 characters or less'
                                    }}
                                />
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="comment">Comment</Label>
                                <Control.textarea model=".comment" id="comment" name="comment"
                                    rows="6"
                                    className="form-control" 
                                />
                            </Row>
                            <Row className="form-group">
                                <Button type="submit" value="submit" color="primary">Submit</Button>
                            </Row>
                        </LocalForm>
                    </Container>
                </ModalBody>
            </Modal>
            </>
        );
    }
}   

export default CommentForm;