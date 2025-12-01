import { useSelector, useDispatch } from "react-redux";
import { logout } from "../features/auth/authSlice";

export default function Home() {
  const { user, role } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  return (
    <div className="p-6 text-xl">
      <h1 className="text-3xl font-bold">Welcome, {user}</h1>
      <p className="mt-2">Your role: {role.toUpperCase()}</p>

      <button
        onClick={() => dispatch(logout())}
        className="px-4 py-2 bg-red-600 text-white rounded-xl mt-4"
      >
        Logout
      </button>
    </div>
  );
}
