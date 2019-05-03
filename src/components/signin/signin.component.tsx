import React from 'react';
import freddylogo from '../../assets/freddylogo.png';
import { IAuthState, IState } from '../../reducers';
import { connect } from 'react-redux';
import { login, logout } from '../../actions/auth.actions';
import { RouteComponentProps } from 'react-router';
import { User } from '../../model/user';
import { Link } from 'react-router-dom';

interface ISignInState {
    username: string;
    password: string;
}
interface ISignInProps extends RouteComponentProps<{}>{
    auth: IAuthState
    currentUser: User
    login: (username: string, password: string, history: any) => void
    logout: () => void
}

export class SignInComponent extends React.Component<ISignInProps, ISignInState> {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
    }

    //Log in
    submit = async (event) => {
        event.preventDefault();
        console.log('Trying to log in');
        this.props.login(this.state.username, this.state.password, this.props.history);
    }
    //Log out
    exit = async () => {
        console.log('Logging out');
        this.props.logout();
    }

    //Updating UserName
    updateUsername = (e) => {
        this.setState({
            username: e.target.value
        });
    }
    //Updating passwordsa
    updatePassword = (e) => {
        this.setState({
            password: e.target.value
        })
    }
    render() {
        const user = this.props.currentUser;
        const { username, password }= this.state;
        const errorMessage  = this.props.auth.errorMessage;
        if (!user) {
        return (
            <div className="model-dialog text-center">
            <div className="col-sm-9 main-section">
                <div className="model-content">
                    <div className="col-12 user-img">
                        <img src={freddylogo} alt="Freddy FazBear"/>
                        <p className="col-sm-12 logtitle"> Freddy Fazbear Pizzeria</p>
                    </div>
                    <div className="col-12 form-input">
                        <form className="form-signin" onSubmit={this.submit}>
                            <div className="form-group">
                                <input type="text" 
                                className="form-control" 
                                placeholder="Enter Username"
                                required value={username} 
                                onChange={this.updateUsername}/>
                            </div>
                            <div className="form-group">
                                <input type="password" 
                                className="form-control" 
                                placeholder="Enter Password"
                                required value={password} 
                                onChange={this.updatePassword}/>
                            </div>
                            <button type="submit" 
                            className="btn btn-login">
                            Login
                            </button>
                            <p id="login-error">{errorMessage}</p>
                        </form>
                    </div>

                    <div className="col-12 forgot">
                        Forgot Password?
                    </div>
                    <div className="col-12 forgot">
                        <Link to={'/create'} className="createUser">New User?</Link>
                    </div>

                </div>
            </div>
            <footer>
            <p> Licensed by Jeffrey King. Free of use. Not Commerical Product</p>
            </footer>   
        </div>
                )
        } else {
        return (
            <div className="model-dialog text-center">
            <div className="col-sm-9 main-section">
                <div className="model-content">
                    <div className="col-12 user-img">
                        <img src={freddylogo} alt="Freddy FazBear"/>
                        <p className="col-sm-12 logtitle"> Freddy Fazbear Pizzeria</p>
                    </div>
                    <div className="col-12 form-input">
                        <form className="form-signin" onSubmit={this.exit}>

                            <button type="submit" 
                            className="btn btn-login">
                            Logout
                            </button>
                            <p id="login-error">{errorMessage}</p>
                        </form>
                    </div>

                    <div className="col-12 forgot">
                        Ready to logout?
                    </div>

                </div>
            </div>
            <footer>
            <p> Licensed by Jeffrey King. Free of use. Not Commerical Product</p>
            </footer>   
        </div>
        )
        }
            }    
}

const mapStateToProps = (state: IState) => {
    return  {
      auth: state.auth,
      currentUser: state.auth.currentUser
    }
  }
  
  const mapDispatchToProps = {
    login: login,
    logout: logout
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(SignInComponent);