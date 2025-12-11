import { useState, Link } from "react";
import { useNavigate } from "react-router-dom";
import { X } from "lucide-react";

function Login({ onLogin, isAdmin, isLoggedIn, setUsername }) {
  // variables stored across re-renders
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [message, setMessage] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const navigate = useNavigate();

  // Demo credentials
  const demoEmail = "test@test.com";
  const demoPassword = "1234";
  const demoUsername = "test67";
  // Demo Admin credentials
  const adminEmail = "admin@test.com";
  const adminPassword = "1234";
  const adminUsername = "admin21";

  const handleSubmit = (e) => {
    e.preventDefault(); //Prevent page regresh

    if (isLogin) {
      // Login simulation
      if (email === demoEmail && password === demoPassword) {
        setSuccessMsg("Login successful!");
        setTimeout(() => {
          navigate("/home-user");
          onLogin(); //set isLoggedIn = true in app.jsx
          isAdmin(false);
          setUsername(demoUsername);
        }, 2000);
      } else if (email === adminEmail && password === adminPassword) {
        setSuccessMsg("Login successful!");
        setTimeout(() => {
          navigate("/home-admin");
          onLogin();
          isAdmin(true); //set isAdmin  = true in app.jsx
          setUsername(adminUsername);
        });
      } else {
        setMessage("Invalid Credentials");
      }
    } else {
      // Create account simulation
      if (email && password && password === passwordCheck) {
        setSuccessMsg("Account created successfully!");

        setTimeout(() => {
          setIsLogin(true); //Sends user to login screen
        }, 1000);
      } else if (password != passwordCheck) {
        setMessage("Passwords do NOT match");
      } else {
        setMessage("Please enter email and password");
      }
    }
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <div className="bg-white shadow-md rounded p-6 w-80">
          <h1 className="text-2xl font-bold mb-4">
            {/* 'isLogin': "is login page?" used to toggle between login page and create account */}
            {/* 'isLoggedIn': "is a user currently logged in" used to change msg if user already logged in */}
            {!isLogin
              ? "Create Account"
              : isLoggedIn
              ? "Switch Accounts?"
              : "Login"}
          </h1>

          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <input
              type="email"
              placeholder="Email"
              className="border p-2 rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            {!isLogin && (
              <input
                type="text"
                placeholder="Username"
                className="border p-2 rounded"
                // value={username}
                // onChange={(e) => setUsername(e.target.value)}
              />
            )}

            <input
              type="password"
              placeholder="Password"
              className="border p-2 rounded"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {!isLogin && (
              <input
                type="password"
                placeholder="Confirm password"
                className="border p-2 rounded"
                value={passwordCheck}
                onChange={(e) => setPasswordCheck(e.target.value)}
              />
            )}

            {!isLogin && (
              <input
                title="ID"
                type="file"
                placeholder="Upload ID"
                accept="image/png, image/jpeg"
              />
            )}

            <button
              type="submit"
              className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
              onClick={() => {
                setMessage("");
                setSuccessMsg("");
                setTimeout(() => {
                  setEmail("");
                  setPassword("");
                  setPasswordCheck("");
                }, 2000);
              }}
            >
              {isLogin ? "Login" : "Sign Up"}
            </button>
          </form>

          {message && <p className="mt-3 text-sm text-red-500">{message}</p>}
          {successMsg && (
            <p className="mt-3 text-sm text-green-500">{successMsg}</p>
          )}

          <p className="mt-4 text-sm">
            {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
            <button
              type="button"
              className="text-blue-600 underline"
              onClick={() => {
                setIsLogin(!isLogin);
                setMessage("");
                setEmail("");
                setPassword("");
                setPasswordCheck("");
              }}
            >
              {isLogin ? "Create one" : "Login"}
            </button>
          </p>
        </div>
      </div>
    </>
  );
}

export default Login;
