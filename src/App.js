import React, {Component} from 'react'
import './App.css'

class App extends Component {
    state = {
        brightness: 1000,
        colorTemperature: 1000,
    }

    componentDidMount() {
    }

    updateDevice = async evt => {
        evt.preventDefault()

        await fetch('/devices/1', {
            method: 'PATCH',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "brightness": this.state.brightness,
                "colorTemperature": this.state.colorTemperature
            })
        });
    }

    handleChange = evt => {
        this.setState({[evt.target.name]: parseInt(evt.target.value)})
    }

    render() {
        return (
            <div className="App">
                <h1>💡 Smart Home Panel 💡</h1>
                <hr></hr>

                <h2>Lounge - main bulb:</h2>

                <form onSubmit={this.updateDevice}>
                    <label>Brightness (10 -> 1000):</label>
                    <input
                        type="number"
                        name="brightness"
                        value={this.state.brightness}
                        onChange={this.handleChange}
                    />

                    <label>Color temperature (0 -> 1000):</label>
                    <input
                        type="number"
                        name="colorTemperature"
                        value={this.state.colorTemperature}
                        onChange={this.handleChange}
                    />

                    <hr></hr>

                    <button type="submit">Adjust settings!</button>
                </form>
            </div>
        )
    }
}

export default App
