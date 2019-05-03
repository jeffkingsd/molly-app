import React from 'react';
import { IState } from '../../reducers';
import { updateProfile } from '../../actions/profile.actions';
import { connect } from 'react-redux';

interface ICreateProfileState {
  username: string,
  password: string,
  email: string,
  firstname: string,
  lastname: string

}

interface ICreateProfileProps {
  updateProfile: (username: string, email: string, password: string, firstname: string, lastname: string) => void;
}
export class CreateComponent extends React.Component<ICreateProfileProps, ICreateProfileState> {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: '',
      firstname: '',
      lastname: ''
    }
  }
  submit = (e) => {
    e.preventDefault();
    this.props.updateProfile(this.state.username, this.state.email, this.state.password, this.state.firstname, this.state.lastname);
  }
  createUsername = (e) => {
    this.setState({
      username: e.target.value
    });
  }
  createEmail = (e) => {
    this.setState({
      email: e.target.value
    });
  }
  createPassword = (e) => {
    this.setState({
      password: e.target.value
    });
  }
  createFirstName = (e) => {
    this.setState({
      firstname: e.target.value
    });
  }
  createLastName = (e) => {
    this.setState({
      lastname: e.target.value
    });
  }

  render() {
    return (
      <form className="create-back">
        <h2>Create username</h2>
        <div className="input-field">
          <p className="examplePassword">Username</p>
          <input type="text" name="cUsername"
            id="examplePassword"
            placeholder="Enter username"
            onChange={this.createUsername} />
        </div>
        <div className="input-field">
          <p className="exampleEmail">Email</p>
          <input type="email" name="email"
            id="exampleEmail"
            placeholder="Enter email"
            onChange={this.createEmail} />
        </div>
        <div className="input-field">
          <p className="examplePassword">Password</p>
          <input type="password"
            name="password" id="examplePassword"
            placeholder="Enter a password"
            onChange={this.createPassword} />
        </div>
        <div className="input-field">
          <p className="examplePassword">First Name</p>
          <input type="text"
            name="password" id="examplePassword"
            placeholder="Enter a password"
            onChange={this.createFirstName} />
        </div>
        <div className="input-field">
          <p className="examplePassword">Last Name</p>
          <input type="text"
            name="password" id="examplePassword"
            placeholder="Enter a password"
            onChange={this.createLastName} />
        </div>
        <button onClick={this.submit}>Submit</button>
      </form>
    );
  }
}
const mapStateToProps = (state: IState) => {
  return {
    claim: state.claim,
    currentUser: state.auth.currentUser
  }
}

const mapDispatchToProps = {
  updateProfile: updateProfile
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateComponent);