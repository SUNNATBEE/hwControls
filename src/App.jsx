import { useSelector } from "react-redux";
import LoginPage from "./pages/LoginPage";
import Home from "./pages/Home";

export default function App() {
  const { user } = useSelector((state) => state.auth);

  return user ? <Home /> : <LoginPage />;
}
