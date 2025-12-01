import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../features/auth/authSlice";
import RoleSelect from "../components/RoleSelect";

export default function LoginPage() {
    const dispatch = useDispatch();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("");

    const handleLogin = () => {
        if (!email || !password || !role) {
            alert("Fill all fields!");
            return;
        }

        dispatch(login({ email, role }));
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-white-100 px-4">
            <div className="w-full max-w-md p-6 bg-red rounded-2xl shadow-lg">
                <h1 className="text-2xl font-bold text-center">Login</h1>

                <input
                    type="email"
                    placeholder="Email"
                    className="w-full p-2 border rounded-xl mt-4"
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="Password"
                    className="w-full p-2 border rounded-xl mt-3"
                    onChange={(e) => setPassword(e.target.value)}
                />

                <RoleSelect role={role} setRole={setRole} />

                <button
                    onClick={handleLogin}
                    className="w-full bg-blue-600 text-red py-2 mt-6 rounded-xl"
                >
                    Login
                </button>
            </div>
        </div>
    );
}
