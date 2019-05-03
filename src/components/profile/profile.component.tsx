import React, { Component, PureComponent } from 'react';
import { User } from '../../model/user';
import { IState } from '../../reducers';
import { connect } from 'react-redux';
import { Role } from '../../model/role';
import { Link } from 'react-router-dom';

interface IProfileProps {
    currentUser: User
    role: Role

}
  
  export class ProfileComponent extends PureComponent<IProfileProps> {
    constructor(props) {
      super(props)
    }

    render() {
        const user = this.props.currentUser;
        const role = this.props.role;
        if (user) {
      
      return (
        
        <div>
          <h2> Welcome {user && user.firstName}</h2>
          <form>
            <div className="Form-group">
            User ID: {user.userId}
            </div>
            <div className="Form-group">
            Username: {user.username}
            </div><div className="Form-group">
            Email: {user.email}
            </div>
            <div className="Form-group">
            Role: {role.role}
            </div>
            <div className="Form-group">
            Reimbursements: <Link to="/reimbursement" className="Bursto"> To your claims!</Link>
            </div>
            <div className="Form-group">
            </div>

          </form>
        </div>
      )
        } else {
          return (
            <div>
              You shouldn't be here. How did you get here.
            </div>
          )
        }
    }
  }
const mapStateToProps = (state: IState) => {
    return  {
        currentUser: state.auth.currentUser,
        role: state.auth.role
    }
  }
  
export default connect(mapStateToProps)(ProfileComponent)
