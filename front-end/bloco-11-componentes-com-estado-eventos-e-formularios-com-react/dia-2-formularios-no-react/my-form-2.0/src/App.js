import PersonalForm from './PersonalForm';
import ProfessionalForm from './ProfessionalForm';
import React from 'react';
import './App.css';

const states = {
  name: '',
  email: '',
  cpf: '',
  address: '',
  city: '',
  countryState: '',
  addressType: '',
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = states;
  }

  changeState = (event) => {
    let { name, value } = event.target;

    if (name === 'name') value = value.toUpperCase();

    this.updateState(name, value);
  }

  updateState(name, value) {
    this.setState((state) => ({
      [name]: value,
      formError: {
        ...state.formError,
        [name]: this.validateField(name, value)
      }
    }));
  }

  validateField(fieldName, value) {
    switch (fieldName) {
      case 'email':
        const isValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2})$/i)
        return isValid ? '' : ' is invalid';
      default:
        break;
    }
    return '';
  }

  render() {
    return (
      <div className="App">
        <PersonalForm changeState={this.changeState} />
        <ProfessionalForm />
      </div>
    );
  }
}

export default App;
