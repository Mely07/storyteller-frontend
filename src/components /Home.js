import React, { Component } from 'react';

class Home extends Component {

    componentDidMount() {
        const x = document.getElementsByTagName("body")[0];
        x.style = 'background-image: url("https://miro.medium.com/max/10368/1*77kVLXT5wReVAW-kQYcpaw.jpeg"); background-size: 100%';
    }

    componentWillUnmount() {
        const x = document.getElementsByTagName("body")[0];
        x.style = '';
    }


    render() {
        return (
            <div>
            </div>
        );
    }
}

export default Home;