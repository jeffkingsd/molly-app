import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './includes/bootstrap';
import './App.css';
import { Provider } from 'react-redux';
import { store } from './Store';
import  NavComponent  from './components/nav/nav-component';
import SignInComponent from './components/signin/signin.component';
import ClaimComponent from './components/ers/claims/claim.component';
import  ResolverComponent  from './components/ers/resolver/resolver.component';
import  ProfileComponent  from './components/profile/profile.component';
import  CreateComponent  from './components/profile/create.profile.component';
import { HomeComponent } from './components/home/home.component';
import  ReimbursementComponent  from './components/reim/reimbursement.component';

const App: React.FC = () => {
  return (
    <Provider store={store}>
    <BrowserRouter>
      <NavComponent/>
      <main id="container">
      <Switch>
      <Route path="/claims/new" component={ClaimComponent}/>
      <Route path="/sign-in" component={SignInComponent} />
      <Route path="/home" component={HomeComponent} />
      <Route path="/claims/update" component={ResolverComponent}/>
      <Route path="/reimbursement" component={ReimbursementComponent} />
      <Route path="/profile" component={ProfileComponent}/>
      <Route path="/create" component={CreateComponent} />
      <Route component={HomeComponent} />
      </Switch>
      </main>
 </BrowserRouter>
 </Provider>
  );
}

export default App;
