import React from 'react';
import PropTypes from 'prop-types';
import Card from "react-bootstrap/Card";

export function ItemCard(props) {

    let title = props.title
    let description = props.description
    let price = props.price
    let category = props.category
    let imageURL = props.image
    let label = props.label // nullable

    return (
        <Card>
            <Card.Img variant="top" src={imageURL}/>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
                <Card.Text>
                    <small className="text-muted">Category: {category}</small>
                </Card.Text>
                {
                    label !== "" && label !== category ? <Card.Text>
                        <small className="text-muted">Label: {label}</small>
                    </Card.Text> : ""
                }
                <Card.Text>
                    <small className="text-muted">Price: {price}</small>
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

ItemCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
}

export default ItemCard;