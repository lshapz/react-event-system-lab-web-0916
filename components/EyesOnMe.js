const React = require('react');

class EyesOnMe extends React.Component {

  constructor(){
    super();

  }

  good(){
    console.log('Good!')
  }

  bad(){
    console.log('Hey! Eyes on me!')
  }

  render(){
    

    return(
    <button onFocus={this.good} onBlur={this.bad} /> 
    )
  }
}

module.exports = EyesOnMe;
