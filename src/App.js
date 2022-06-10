import React, {Component} from 'react'
import './App.css'
import Slider from '@mui/material/Slider';


class App extends Component {
    state = {
        brightness: 250,
        colorTemperature: 500,
    }

    componentDidMount() {
    }

    updateDevice = async evt => {
        evt.preventDefault()

        let apiURL = process.env.REACT_APP_API_URL

        await fetch(`${apiURL}/devices/1`, {
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
                    <label>Brightness:</label>
                    <Slider aria-label="brightness" name="brightness" value={this.state.brightness}
                            onChange={this.handleChange} min={10} max={1000} color="secondary"
                            valueLabelDisplay="auto"/>


                    <label>Color temperature:</label>
                    <Slider aria-label="colorTemperature" name="colorTemperature" value={this.state.colorTemperature}
                            onChange={this.handleChange} min={0} max={1000} valueLabelDisplay="auto"/>

                    <hr></hr>

                    <button type="submit">Adjust settings!</button>
                </form>
            </div>
        )
    }
}

export default App
