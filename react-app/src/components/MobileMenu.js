import React from 'react';
import NavBar from '../components/NavBar';

class MobileMenu extends React.Component {

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
            <div className={this.props.className}>
                <NavBar className={`nav ${this.state.isOpen ? "show" : "hidden"}`} layout={"mobile"}/>
                <div onClick={this.handleClick} className="hamburger">
                    <div className={this.setAnimations("top")}/>
                    <div className={this.setAnimations("mid")}/>
                    <div className={this.setAnimations("bot")}/>
                </div>
            </div>
        );
    }
}

export default MobileMenu;