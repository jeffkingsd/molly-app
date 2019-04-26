import React from 'react';
import { Authorinfo } from '../../model/reimbursement';

interface IReimCardProps {
  author: Authorinfo;
}
export class ReimbursementCardComponent extends React.PureComponent<IReimCardProps> {
  render() {
    const author = this.props.author;
    return (
      <div className="card col-md-4 col-sm-6 col-xs-12">
        <img src="https://thenewswheel.com/wp-content/uploads/2018/05/Millennium-Falcon-760x428.jpg"
          className="card-img-top"
          alt="..." />
        <div className="card-body">
          <h5 className="card-title">{author.reimbursementId}</h5>
        </div>
        <ul className="list-group list-group-flush">
          <li className='list-group-item'>This is a test format</li>
          <li className="list-group-item">
            <button className="btn btn-danger">Delete</button>
          </li>
        </ul>
      </div>
    )
  }
}