import React, {PureComponent} from 'react';
import Container from "react-bootstrap/Container";
import axios from "axios";
import CardColumns from "react-bootstrap/CardColumns"
import ItemCard from "./ItemCard";
import {Link} from "react-router-dom";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Navbar from "react-bootstrap/Navbar";

export class Home extends PureComponent {

    state = {
        data: [],
        searchedData: [],
        loaded: false,
        error: false
    }

    componentDidMount() {
        axios.get("https://cors-anywhere.herokuapp.com/http://starlord.hackerearth.com/recipe").then((res) => {
            this.setState({
                data: [...res.data],
                searchedData: [...res.data],
                loaded: true
            })
        }).catch(() => {
            this.setState({
                error: true
            })
        })
    }

    search = (event) => {
        event.preventDefault()

        let newItems = this.state.data.filter(item => {
            return item.name.toLowerCase().includes(event.target.value.toLowerCase())
        })

        this.setState({
            searchedData: [...newItems]
        })
    }

    render() {
        return (
            <div className="App">
                <Navbar className="bg-light justify-content-between my-2">
                    <Container>
                        <Navbar.Brand>Items</Navbar.Brand>
                        <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={this.search} />
                        </Form>
                    </Container>
                </Navbar>
                <Container>
                    {this.state.loaded ? <CardColumns>
                        {
                            this.state.searchedData.map(item => {
                                return <Link to={`/${item.id}`} key={item.id}>
                                    <ItemCard description={item.description} title={item.name}
                                              category={item.category} image={item.image} price={item.price}
                                              label={item.label}/>
                                </Link>
                            })
                        }
                    </CardColumns> : this.state.error ?
                        <h2 className="text-center font-weight-light">Sorry, An error occurred</h2> :
                        <h2 className="text-center font-weight-light">Loading..</h2>}
                </Container>
            </div>
        );
    }
}

export default Home;
