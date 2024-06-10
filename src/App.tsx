import * as S from "./App.styles";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import PrivateRoute from "./components/Route/PrivateRoute";
import PublicRoute from "./components/Route/PublicRoute";
import CustomerLogin from "./pages/Login/CustomerLogin";
import StoreLogin from "./pages/Login/StoreLogin";
import StoreSignup from "./pages/Login/StoreSignup";
import SocialLoginSuccess from "./pages/Login/SocialLoginSuccess";
import Logout from "./pages/Login/Logout";
import CustomerRoute from "./components/Route/CustomerRoute";
import StoreRoute from "./components/Route/StoreRoute";
import FeedList from "./pages/Feed/FeedList";
import Search from "./pages/Feed/Search";
import MyReservation from "./pages/Customer/MyReservation";
import MyCoupon from "./pages/Customer/MyCoupon";
import UserFeed from "./pages/Feed/UserFeed";
import DM from "./pages/User/DM";
import Notification from "./pages/User/Notification";
import ReservationList from "./pages/Store/ReservationList";
import CouponList from "./pages/Store/CouponList";
import Setting from "./pages/User/Setting";
import ReservationFormList from "./pages/Store/ReservationFormList";
import ReservationForm from "./pages/Store/ReservationForm";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path="store" element={<StoreRoute />}>
            <Route path="reservation" element={<ReservationList />} />
            <Route path="reservation/form" element={<ReservationFormList />} />
            <Route path="reservation/form/add" element={<ReservationForm />} />
            <Route path="coupon" element={<CouponList />} />
          </Route>
          <Route element={<CustomerRoute />}>
            <Route path="/" element={<FeedList />} />
            <Route path="search" element={<Search />} />
            <Route path="reservation" element={<MyReservation />} />
            <Route path="coupon" element={<MyCoupon />} />
          </Route>
          <Route path="feed/:userId" element={<UserFeed />} />
          <Route path="dm" element={<DM />} />
          <Route path="notification" element={<Notification />} />
          <Route path="setting" element={<Setting />} />
        </Route>
        <Route element={<PublicRoute />}>
          <Route path="login" element={<CustomerLogin />} />
          <Route path="store/login" element={<StoreLogin />} />
          <Route path="store/sign-up" element={<StoreSignup />} />
          <Route path="social-login-success" element={<SocialLoginSuccess />} />
        </Route>
        <Route path="logout" element={<Logout />} />
      </Routes>
    </Router>
  );
}

export default App;
