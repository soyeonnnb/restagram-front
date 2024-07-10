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
import Search from "./pages/Customer/Search";
import MyReservation from "./pages/Customer/MyReservation";
import MyCoupon from "./pages/Customer/MyCoupon";
import UserFeed from "./pages/Feed/UserFeed";
import Notification from "./pages/User/Notification";
import ReservationList from "./pages/Store/ReservationList";
import CouponList from "./pages/Store/CouponList";
import Setting from "./pages/User/Setting";
import ReservationFormList from "./pages/Store/ReservationFormList";
import ReservationForm from "./pages/Store/ReservationForm";
import CustomerReservationForm from "./pages/Customer/ReservationForm";
import FeedForm from "./pages/Feed/FeedForm";
import UserFeedList from "./pages/Feed/UserFeedList";
import CouponForm from "./pages/Store/CouponForm";
import DMList from "./pages/DM/DMList";
import DMChat from "./pages/DM/DMChat";
import UpdateStoreInfo from "./pages/Store/UpdateStoreInfo";
import UpdateCustomerInfo from "./pages/Customer/UpdateCustomerInfo";
import UpdateNickname from "./pages/User/UpdateNickname";
import UpdatePassword from "./pages/User/UpdatePassword";

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
            <Route path="coupon/form" element={<CouponForm />} />
            <Route path="update/info" element={<UpdateStoreInfo />} />
            <Route path="update/password" element={<UpdatePassword />} />
          </Route>
          <Route element={<CustomerRoute />}>
            <Route path="/" element={<FeedList />} />
            <Route path="search" element={<Search />} />
            <Route path="reservation" element={<MyReservation />} />
            <Route path="coupon" element={<MyCoupon />} />
            <Route
              path="reservation/:storeId"
              element={<CustomerReservationForm />}
            />
            <Route path="update/info" element={<UpdateCustomerInfo />} />
          </Route>
          <Route path="dm" element={<DMList />} />
          <Route path="dm/:userId" element={<DMChat />} />
          <Route path="feed/newFeed" element={<FeedForm />} />
          <Route path="feed/user/:userId" element={<UserFeedList />} />
          <Route path="feed/:userId" element={<UserFeed />} />
          <Route path="notification" element={<Notification />} />
          <Route path="setting" element={<Setting />} />
          <Route path="update/nickname" element={<UpdateNickname />} />
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
