import React from 'react';
import { Authorinfo } from '../../../model/reimbursement';

interface IResolveProps {
  author: Authorinfo

}


export class ResolverPendComponent extends React.PureComponent<IResolveProps> {
    render() {
    const author = this.props.author;
    if ( author.status === 'Pending')
    {
    return (
      <div className="card col-md-2 col-md-6 col-md-12">
        <div className="card-body">
          <h5 className="card-title">{author.reimbursement_id}</h5>
        </div>
        <ul className="why">
          <li className="list-group-item">Author: {author.full_name}</li>
          <li className="list-group-item">Amount: ${author.amount}</li>
          <li className="list-group-item">Date Sb: {author.date_submitted}</li>
          <li className="list-group-item">Date Rv: {author.date_resolved}</li>
          <li className="list-group-item">Status: {author.status}</li>
          <li className="list-group-item">Type: {author.type}</li>
          <li className="list-group-item"><button className="btn btn-danger">Delete</button>
          </li>
        </ul>
      </div>
    )
    } else {
        return (
            <></>
        )
    }
  }
}