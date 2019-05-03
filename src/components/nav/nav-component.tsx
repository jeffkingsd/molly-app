import React from 'react';
import { Link } from 'react-router-dom';
import freddylogo from '../../assets/freddylogo.png';
import { User } from '../../model/user';
import { IState } from '../../reducers';
import { connect } from 'react-redux';


interface INavProps {
  currentUser: User
}
export class NavComponent extends React.Component<INavProps> {
  constructor(props){
    super(props)
  }

  render() {
    const currentUser = this.props.currentUser;
    return (
      <nav className="navbar navbar-toggleable-md navbar-expand-lg navbar-light bg-light display-front nav-pad">
        <div className="navbar-header c-pointer shift-left">
          <Link to="/home" className="unset-anchor">
            <img className="img-adjust-position rev-logo" src={freddylogo} alt="revature" />
          </Link>
        </div>
        <div>{currentUser && currentUser.firstName}</div>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarsExample04">
          <ul className="navbar-nav ml-auto margin-nav">
            <li className="nav-item active">
              <Link to="/home" className="unset-anchor nav-link">Home</Link>
            </li>
            {
              currentUser
                ? <li className="nav-item active">
                <Link to="/profile" className="unset-anchor nav-link">Profile</Link>
              </li>
                : <></>
            }
            {
              currentUser
                ? <li className="nav-item active">
                  <Link to="/sign-in" className="unset-anchor nav-link">Sign Out</Link>
                </li>
                : <li className="nav-item active">
                  <Link to="/sign-in" className="unset-anchor nav-link">Sign In</Link>
                </li>
            }
            <li className="nav-item active dropdown">
            <a className="nav-link dropdown-toggle pointer" id="examples-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" href="">ERS</a>
              <div className="dropdown-menu" aria-labelledby="ERS-dropdown">
                <div className="dropdown-item"><Link to="/reimbursement" className="unset-anchor nav-link active">View Claims</Link></div>
                <div className="dropdown-item"><Link to="/claims/new" className="unset-anchor nav-link active">Submit Claim</Link></div>
                <div className="dropdown-item"><Link to="/claims/update" className="unset-anchor nav-link active">Update claims</Link></div>
                <div className="dropdown-item"><Link to="/claims/ban" className="unset-anchor nav-link active">Block users</Link></div>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = (state: IState) => {
  return {
    currentUser: state.auth.currentUser
  }
}

export default connect(mapStateToProps)(NavComponent);