import React, { Component } from 'react';

// import axios from 'axios';
// import YelpFusion from 'yelp-fusion';


// import API:
import API from '../services/API'
    class FindEats extends Component {
        state = {
            eats: [],
            message: "ROARRRRRR YOU SUCK"
        };

        componentDidMount = () => {
            this.getEatsById();
        };

        getEatsById = () => {
            API.findEats()
                .then(res => {
                    console.log(res.data)
                    this.setState({
                        eats: res.data
                    })
                })
                .catch(err => {
                    console.log(err)
                    // this.setState({
                        // message: err
                    // })
                })
        };
        render() {
            console.log(this.state);
            return (
            <div className="cardContainer text-white">
    {
        this.state.eats.length ? this.state.eats.map(oneEat => (
            <div key={oneEat.id}>
                <img src={oneEat.image_url} alt={oneEat.name} />
                <p>{oneEat.name}</p>
                <p>{oneEat.location.address1}</p>
                {/* <p>{oneEat.url}</p> */}
                <a className="btn btn-dark btn-lg" href={oneEat.url} role="button">Link to Site</a>
                <a className="btn btn-dark btn-lg" href="http://localhost:3000/SavedEats" role="button">Add to List</a>
                
            </div>
        )) : (
                <h1>{this.state.message}</h1>
            )}
            </div>
        )
}
    }
    
export default FindEats;