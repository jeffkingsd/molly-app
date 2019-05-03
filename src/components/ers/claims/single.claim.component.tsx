import React from 'react';
import { User } from '../../../model/user';
import { Authorinfo } from '../../../model/reimbursement';

interface IsingleClaimState {
    reim: Authorinfo
}

interface IsingleClaimProps {
    currentUser: User
}

export class singleClaimComponent extends React.Component<IsingleClaimProps, IsingleClaimState> {
    constructor(props) {
        super(props);
        this.state = {
            reim: new Authorinfo
        };
    }
    
    //Event Handlers
    componentWillMount = async() => {
        const resp = await fetch('http://localhost:8081/reimbursements/author/userId/' + this.props.currentUser.userId, {
            method: 'GET',
            credentials: 'include'
        })
        const body = await resp.json();
        this.setState({
            reim: body
        })
    }

    render() {
        const reim = this.state.reim;
        reim.full_name;
        return (
            <div className="model-content">
                <h1> Hello </h1>
                <div>
                <p>{reim.full_name}</p>
                </div>  
            </div>
        )
    }
}
