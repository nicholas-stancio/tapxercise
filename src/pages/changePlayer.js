import React from 'react';

class ChangePlayer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {

        console.log()

        // Simple POST request with a JSON body using fetch
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              "gameType": 1,
              "playerOne": this.state.value,
              "playerTwo": "VR"
          })
        };
        fetch('https://www.nss-productions.com/tapxercise/players', requestOptions)
            .then(response => response.json())
            .then(data => console.log(data));

        alert('[Single Player] name changed to: ' + this.state.value);
        event.preventDefault();
      }
    
      render() {
        return (

        <><form onSubmit={this.handleSubmit} class="center">
            <label>
              <div class="form__group field">
                <input type="input" class="form__field" placeholder="Name" value={this.state.value} onChange={this.handleChange} />
                <label for="name" class="form__label">Name</label>
              </div>
            </label>
            <input type="submit" value="Submit" />
          </form><p>Ntar kirimin design ke line ya, thankyou. di page ini untuk ngeganti mode (single player/ multi), sm masukin usernamenya</p>
          <p>Untuk APInya udah jadi yg single/multinya, tp blm gua implementasiin aja disini. klo gabut bantu sabi kali @VR, masukin design ke page ini WKKWKWKW</p></>
        );
      }

}

export default ChangePlayer;

