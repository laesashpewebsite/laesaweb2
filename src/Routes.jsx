// import Main from "./Main";
import Login from "./Accounts/Login";
import MakeAccount from "./Accounts/MakeAccount";
import Profile from "./Accounts/ProfilePage";

export default () => (
  <Switch>
    <Route exact path="/" component={Login} />
    <Route path="/Login" component={Login} />
    <Route path="/MakeAccount" component={MakeAccount} />
    <Route path="/Profile" component={Profile} />
  </Switch>
);
