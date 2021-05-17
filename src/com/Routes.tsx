import { Switch, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Orders from "../pages/Orders";




const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Dashboard />
      </Route>   
      <Route exact path="/orders">
        <Orders />
      </Route>         
    </Switch>
  );
};
export default Routes;
