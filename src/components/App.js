import React, { Component } from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            renderBall: false,
            ballPosition: { left: "0px" }
        };
        this.renderChoice = this.renderBallOrButton.bind(this);
        this.buttonClickHandler = this.buttonClickHandler.bind(this);
    }

    buttonClickHandler() {
        // Toggle the renderBall state and reset ballPosition
        this.setState({
            renderBall: true,
            ballPosition: { left: "0px" }
        });

        // Add event listener for ArrowRight key
        document.addEventListener("keydown", this.handleKeyDown);
    }

    handleKeyDown = (event) => {
        // Check if the pressed key is the right arrow key (ArrowRight)
        if (event.key === "ArrowRight") {
            // Update ballPosition by moving it 5 pixels to the right
            const currentPosition = parseInt(this.state.ballPosition.left, 10);
            const newPosition = currentPosition + 5;
            
            // Update state with the new ballPosition
            this.setState({
                ballPosition: { left: `${newPosition}px` }
            });
        }
    };

    renderBallOrButton() {
        if (this.state.renderBall) {
            return <div className="ball" style={this.state.ballPosition}></div>;
        } else {
            return <button onClick={this.buttonClickHandler}>Start</button>;
        }
    }

    render() {
        return (
            <div className="playground">
                {this.renderBallOrButton()}
            </div>
        );
    }

    componentWillUnmount() {
        // Remove the event listener when the component is unmounted
        document.removeEventListener("keydown", this.handleKeyDown);
    }
}

export default App;
