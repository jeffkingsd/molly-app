import React from 'react';
import { Authorinfo } from '../../model/reimbursement';
import { ReimbursementCardComponent } from './reimbursement-card.component';

interface IState {
  author: Authorinfo[];
}

export class ReimbursementComponent extends React.Component<any, IState> {

  constructor(props: any) {
    super(props);
    this.state = {
      author: []
    };
  }

  // in here we should initialize http calls
  componentDidMount = async () => {
    const resp = await fetch('http://localhost:8081/reimbursements/author');
    console.table(resp);
    const body = await resp.json();
    this.setState({
      author: body
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          Hello
          {this.state.author.map(name => (
            <ReimbursementCardComponent key={'author-' +name.reimbursementId} author={name}/>
          ))}
        </div>
      </div>
    );
  }
}