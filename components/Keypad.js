const React = require('react');

class Keypad extends React.Component {

  constructor(){
    super();

  }

  pwd() {
    console.log('Entering password...')
  }

  render(){
    

    return(
    <input type="password" onKeyUp={this.pwd} /> 
    )
  }
}

module.exports = Keypad;
