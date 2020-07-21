import React, { Component } from "react";
import API from "../utils/API";
import SearchBar from "./SearchBar";
import Header from "./Header";
import Card from "./Card";
import SearchResults from "./SearchResults";
import Title from "./Title";


class EmployeeDirectory extends Component {

    state = {
        directory: [],
        search: ""
    };

    componentDidMount() {
        this.fetchDirectory();
    };

    handleInputChange = event => {
        this.setState({ search: event.target.value });
    };

    fetchDirectory = () => {
        API.search()
            .then((res) => {
                this.setState({ directory: res.data.results })
                console.log(this.state.directory)
            })
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div>
                <Header />
                <SearchBar
                    handleInputChange={this.handleInputChange}
                />
                <Title />
                < SearchResults
                    directory={this.state.directory}
                />
            </div>
        );
    }

};


export default EmployeeDirectory;