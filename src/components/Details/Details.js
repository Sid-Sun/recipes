import React, {Component} from 'react';
import {Container} from "react-bootstrap";
import axios from "axios";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Details extends Component {

    state = {
        data: {}
    }

    componentDidMount() {
        axios.get("https://cors-anywhere.herokuapp.com/http://starlord.hackerearth.com/recipe").then((res) => {
            console.log(res)
            this.setState({
                data: {...res.data[this.props.match.params.id]},
                loaded: true
            })
        }).catch(() => {
            this.setState({
                error: true
            })
        })
    }

    render() {
        let name = this.state.data.name
        let description = this.state.data.description
        let image = this.state.data.image
        let category = this.state.data.category
        let label = this.state.data.label
        let price = this.state.data.price

        return (
            <Container className="pt-2">
                {this.state.loaded ? <Row>
                    <Col sm={4} md={4} className="px-auto">
                        <img src={image} className="mx-auto d-block w-100" alt={name}/>
                        <p className="text-center">{price}</p>
                    </Col>
                    <Col sm={4} lg={8}>
                        <h1>{name}</h1>
                        <p>
                            {description}
                        </p>
                        <p>
                            Category: {category}
                        </p>
                        {
                            label !== "" && label !== category ? <p>
                                Label: {label}
                            </p> : ""
                        }
                    </Col>
                </Row> : this.state.error ? <h1 className="text-center font-weight-light">Sorry, An error occurred</h1> :
                    <h1 className="text-center font-weight-light">Loading..</h1>
                }
            </Container>
        );
    }
}

export default Details;