import React from "react";
import { Route, useHistory } from "react-router-dom";
const jwt = require('jsonwebtoken')
function PublicRoute({ component: Component, ...rest }) {
  const history = useHistory();
  const isLogin = localStorage.getItem("token");
  let decode = jwt.decode(isLogin)
  const role = isLogin?decode.role: null;
    console.log('role', role);
  return (
    <Route
      {...rest}
      render={(props) =>
        role==2 ? <Component {...props} /> : history.goBack()
      }
    />
  );
}

export default PublicRoute;