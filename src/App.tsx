import * as S from "./App.styles";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import PrivateRoutes from "./components/Route/PrivateRoute";
import PublicRoute from "./components/Route/PublicRoute";
import CustomerLogin from "./pages/User/CustomerLogin";
import Main from "./pages/Main/Main";
import StoreLogin from "./pages/User/StoreLogin";
import StoreSignup from "./pages/User/StoreSignup";
import SocialLoginSuccess from "./pages/User/SocialLoginSuccess";
import Logout from "./pages/User/Logout";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path="" element={<Main />} />
        </Route>
        <Route element={<PublicRoute />}>
          <Route path="/login" element={<CustomerLogin />} />
          <Route path="/store/login" element={<StoreLogin />} />
          <Route path="/store/sign-up" element={<StoreSignup />} />
          <Route
            path="/social-login-success"
            element={<SocialLoginSuccess />}
          />
        </Route>
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </Router>
  );
}

export default App;
