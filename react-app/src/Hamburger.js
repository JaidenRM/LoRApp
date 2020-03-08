import React from 'react';
import './Hamburger.css'
import NavBar from './NavBar';

class Hamburger extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            isFirstTime: true
        };

        //The binding enables `this` to work in the callback
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(state => ({
            isOpen: !state.isOpen,
            isFirstTime: false
        }));
    }

    setAnimations(cName) {
        cName += "-line";
        if(this.state.isFirstTime)
            return cName;

        cName += (" " + cName + "-animate");

        if(!this.state.isOpen)
            cName += "-reverse";

        return cName;
    }

    render() {
        return(
            <div>
                <NavBar className={this.state.isOpen ? "show" : "hidden"}/>
                <div onClick={this.handleClick}>
                    <div className={this.setAnimations("top")}/>
                    <div className={this.setAnimations("mid")}/>
                    <div className={this.setAnimations("bot")}/>
                </div>
            </div>
        );
    }
}

export default Hamburger;