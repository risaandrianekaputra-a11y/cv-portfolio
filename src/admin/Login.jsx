import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Lock, User, LogIn } from "lucide-react";
import toast from "react-hot-toast";

function Login() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Username dan password sementara
    if (username === "admin" && password === "admin123") {
      localStorage.setItem("isAdmin", "true");

      toast.success("Login berhasil");

      navigate("/dashboard");
    } else {
      toast.error("Username atau password salah");
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">

        <div className="login-header">
          <div className="login-icon">
            <Lock size={30} />
          </div>

          <h1>Admin Login</h1>

          <p>
            Masuk untuk mengelola CV dan Portfolio
          </p>
        </div>

        <form onSubmit={handleLogin}>

          <div className="form-group">
            <label>Username</label>

            <div className="input-icon">
              <User size={18} />

              <input
                type="text"
                placeholder="Masukkan username"
                value={username}
                onChange={(e) =>
                  setUsername(e.target.value)
                }
              />
            </div>
          </div>

          <div className="form-group">
            <label>Password</label>

            <div className="input-icon">
              <Lock size={18} />

              <input
                type="password"
                placeholder="Masukkan password"
                value={password}
                onChange={(e) =>
                  setPassword(e.target.value)
                }
              />
            </div>
          </div>

          <button
            type="submit"
            className="login-button"
          >
            <LogIn size={18} />

            Login
          </button>

        </form>

        <p className="login-info">
          Username: <strong>admin</strong>
          <br />

          Password: <strong>admin123</strong>
        </p>

      </div>
    </div>
  );
}

export default Login;