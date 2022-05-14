import React, {Component} from 'react'
import './App.css'

class App extends Component {
    state = {
        text: '',
        brightness: 255,
        colorTemperature: 255,
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
        this.setState({[evt.target.name]: evt.target.value})
    }

    render() {
        return (
            <div className="App">
                <h1>Smart Bulbs</h1>

                <form onSubmit={this.updateDevice}>
                    <label>Brightness</label>
                    <input
                        type="number"
                        name="brightness"
                        value={this.state.brightness}
                        onChange={this.handleChange}
                    />

                    <label>Color temperature</label>
                    <input
                        type="number"
                        name="colorTemperature"
                        value={this.state.colorTemperature}
                        onChange={this.handleChange}
                    />

                    <button type="submit">Adjust settings!</button>
                </form>
            </div>
        )
    }
}

export default App
