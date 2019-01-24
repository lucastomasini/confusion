import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {
    constructor(props) {
        super(props);
    }

    renderDish(dish) {
        return (
            <Card>
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        )
    }

    renderComments(comments) {
        if (comments != null) {
            const cmmts = comments.map((comment) => {
                return (
                    <li key={comment.id}>
                        <p>{comment.comment}</p>
                        <p>-- {comment.author}, {comment.date}</p>
                    </li>
                );
            });

            return (
                <div>
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        { cmmts }
                    </ul>
                </div>
            );
        } else {
            return(
                <div></div>
            );
        }
    }

    render() {
        const dish = this.props.dish;

        if (dish != null) {
            const comments = dish.comments;

            return (
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        { this.renderDish(dish) }
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        { this.renderComments(comments) }                    
                    </div>
                </div>
            );
        } 
        else {
            return(
                <div></div>
            );
        }

    }
}

export default DishDetail;


