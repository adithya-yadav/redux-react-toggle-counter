import { Fragment } from "react";
import Counter from "./components/Counter";
import Header from "./components/Header";
import Auth from "./components/Auth";
import { useSelector } from "react-redux";
import UserProfile from "./components/UserProfile";

function App() {
  const showAuth = useSelector((state) => state.auth.isAuthentication);
  return (
    <Fragment>
      <Header />
      {!showAuth && <Auth />}
      {showAuth && <UserProfile />}
      <Counter />
    </Fragment>
  );
}

export default App;
