export default function RoleSelect({ role, setRole }) {
    const roles = ["teacher", "student", "parent", "admin"];

    return (
        <div className="grid grid-cols-2 gap-3 mt-4">
            {roles.map((r) => (
                <button
                    key={r}
                    onClick={() => setRole(r)}
                    className={`px-4 py-2 rounded-xl border 
            ${role === r ? "bg-blue-600 text-white" : "bg-white"}
          `}
                >
                    {r.toUpperCase()}
                </button>
            ))}
        </div>
    );
}
