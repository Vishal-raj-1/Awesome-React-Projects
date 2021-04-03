import React, { Component } from "react";
import Avatarlist from "./Avatar-list"
import "./Avatar.css";

class Avatar extends Component {

    constructor(){
        super();
        this.state = {
            heading: "Welcome to Avatar World"
        }
    }
    nameChange(){
        if(this.state.heading == "Welcome to Avatar World"){
            this.setState({
                heading: "You have subcribed to Avatar World"
            })
        }
        else{
            this.setState({
                heading: "You have Already Subrcribed"
            })
        }
    }
    render() {
        const avatarlistarray = [
            {
                id: "1",
                name: "Vishal",
                work: "Web Developer"
            },
            {
                id: "2",
                name: "Kunal",
                work: "ML Engineer"
            },
            {
                id: "3",
                name: "Harsh",
                work: "Data Scientist"
            },
            {
                id: "4",
                name: "Himanshi",
                work: "freelancer"
            }
        ]

        const avatarCard = avatarlistarray.map((avatarCard, i) => {
            return <Avatarlist key={i} name={avatarlistarray[i].name} work={avatarlistarray[i].work} />
        })
        return (
            <div className="mainPage">
                <h1>{this.state.heading}</h1>
                {avatarCard}
                <button onClick={ () => this.nameChange() } >Subscribe</button>
            </div>

        )
    }
}

export default Avatar;