import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const Login = ({ login }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  

  const handleClick = () => {
    login(true);
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex flex-col md:flex-row">
      <div className="bg-[#2C6975] text-[#FAFAFA] md:h-screen h-[400px] md:w-[520px] w-full text-[4xl]">
        <div className="mx-[60px] my-[230px]">
          <h1 className="md:text-5xl text-4xl">Welcome,Admin</h1>
          <p className="md:text-2xl text-xl">Login untuk melanjutkan</p>
        </div>
      </div>

      <div className="bg-[#FFFFFF] text-[#2C6975] h-auto md:w-[550px] w-full ">
        <div className="md:px-[200px] px-[25px] md:my-[120px] my-[40px]">
          <h1 className="font-bold text-4xl md:mb-[25px] mb-[25px] text-center md:ml-[120px]">Login</h1>

          <div className="mb-[25px]">
            <h1>Username</h1>
            <input
              className="border-solid border-[1px] border-[#2C6975] rounded min-w-[360px] h-[50px] px-[10px]"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="mb-[25px]">
            <h1>Password</h1>
            <div className="relative">
              <input
                className="border-solid border-[1px] border-[#2C6975] rounded min-w-[360px] h-[50px] px-[10px]"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                className="absolute top-[18px] left-[310px]  flex items-center px-3 text-[#2C6975] focus:outline-none"
                onClick={handleTogglePassword}
              >
                <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
              </button>
            </div>
          </div>

          <button onClick={handleClick} className="rounded bg-[#2C6975] hover:bg-[#358595] text-white w-[360px] h-[50px]">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
