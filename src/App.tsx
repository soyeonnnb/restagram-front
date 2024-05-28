import * as S from "./App.styles";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import PrivateRoutes from "./components/Route/PrivateRoute";
import PublicRoute from "./components/Route/PublicRoute";
import CustomerLogin from "./pages/Login/CustomerLogin";
import Main from "./pages/Main/Main";
import StoreLogin from "./pages/Login/StoreLogin";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path="" element={<Main />} />
        </Route>
        <Route element={<PublicRoute />}>
          <Route path="/login" element={<CustomerLogin />} />
          <Route path="/store-login" element={<StoreLogin />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
