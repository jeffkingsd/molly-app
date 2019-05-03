import React, { Component } from 'react';
import { updateResolve } from '../../../actions/resolve.actions';
import { connect } from 'react-redux';
import { User } from '../../../model/user';
import { Authorinfo } from '../../../model/reimbursement';
import { IState } from '../../../reducers';
import { ResolverPendComponent } from './resolver-form-component';
import { Role } from '../../../model/role';

interface IResolveState {
    author: Authorinfo[];
    reimbursementId: number;
    resolver: number;
    pendingCount: number;
    status: number;
    date_resolved: 0;
}

interface IResolveProps {
    currentUser: User,
    role: Role,
    pendingCount: number,
    author: Authorinfo,
    updateResolve: (reimbursementId: number, resolver_id: number, status_id: number, date_resolved: number) => void,

}
export class ResolverComponent extends Component<IResolveProps, IResolveState> {

    constructor(props) {
        super(props)
        this.state = {
            author: [],
            reimbursementId: 0,
            resolver: 0,
            pendingCount: 0,
            status: 0,
            date_resolved: 0
        };
    }
    componentDidMount = async () => {
        const resp = await fetch('http://localhost:8081/reimbursements/author',
            {
                method: 'GET',
                credentials: 'include'
            });
        const body = await resp.json();
        this.setState({
            author: body
        });
    }
    accept = async (e) => {
        e.preventDefault();
        const amount = this.state.pendingCount - 1;
        const resolver = this.props.currentUser.userId;
        await this.setState({
            status: 1,
            resolver: resolver,
            pendingCount: amount
        })
        this.props.updateResolve(this.state.reimbursementId, this.state.resolver, this.state.status, this.state.date_resolved);
    }

    deny = async (e) => {
        e.preventDefault();
        const amount = this.state.pendingCount - 1;
        const resolver = this.props.currentUser.userId;
        await this.setState({
            status: 2,
            resolver: resolver,
            pendingCount: amount
        })
        this.props.updateResolve(this.state.reimbursementId, this.state.resolver, this.state.status, this.state.date_resolved);
    }
    deleting = async (e) => {
        e.preventDefault();
        const amount = this.state.pendingCount - 1;
        await this.setState({
            pendingCount: amount
        })
    }
    pullpending = (e) => {
        e.preventDefault();
        const amount = this.state.author.filter(reimb => reimb.status === 'Pending').length;
        this.setState({
            pendingCount: amount
        })
    }

    nextpending = (e) => {
        e.preventDefault();
        const arraypend = [0];
        this.state.author.map(name => {
            if (name.status === 'Pending') {
                arraypend.push(name.reimbursement_id);
                return name;
            } else {
                return undefined;
            }
        })
        console.log("ReimId: " + arraypend[this.state.pendingCount]);
        this.setState({
            reimbursementId: arraypend[this.state.pendingCount],
        });
    }

    render() {
        const user = this.props.currentUser;
        const role = this.props.role;
        console.log(role.role);

        if (role.role === 'Finance Manager' || role.role === 'Admin') {
        return (
            <>
                <div className="model-content-resolver">
                    <div className="col-12 user-img">
                        <p className="col-sm-12 logtitle"> Resolver Update claims</p>
                    </div>
                    <div className="form-resolver">
                        <form className="form-resolver">
                            <h4 className="">Resolver ID: {user && user.userId} </h4>
                            <h4 className="">Current Pending ID: {this.state.pendingCount}</h4>
                            <button className="btn btn-success"
                                onClick={this.accept}>Accept</button>
                            <button className="btn btn-danger"
                                onClick={this.deny}>Deny</button>
                            <button className="btn btn-warning"
                                onClick={this.pullpending}>Current Pending</button>
                            <button className="btn btn-primary"
                                onClick={this.nextpending}>Next</button>
                        </form>
                    </div>
                </div>
                <div className="model-content-pending">
                    <div className="col-12 user-img">
                        <p className="col-sm-12 logtitle">Current claim</p>
                    </div>
                    <div className="col-12 form-input">
                        <form className="form-signin">
                            {
                                this.state.author.map(name => (

                                    <ResolverPendComponent key={'author-' + name.reimbursement_id} author={name} />

                                ))}

                        </form>
                    </div>

                </div>
            </>
        )
        } else {
            return (
                <div>
                    Oh hello there, you don't have permission!
                </div>
            )
        }
    }
}

const mapStateToProps = (state: IState) => {
    return {
        resolve: state.resolve,
        currentUser: state.auth.currentUser,
        role: state.auth.role
    }
}

const mapDispatchtoProps = {
    updateResolve: updateResolve
}

export default connect(mapStateToProps, mapDispatchtoProps)(ResolverComponent)
