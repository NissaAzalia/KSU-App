import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const LoginNasabah = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = async () => {
    navigate('/nasabah');
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex flex-col md:flex-row w-full">
      <div className="bg-[#2C6975] text-[#FAFAFA] md:h-screen md:w-full text-[4xl]">
        <div className="mx-[60px] my-[230px]">
          <h1 className="md:text-5xl text-4xl">Welcome,Admin</h1>
          <p className="md:text-2xl text-xl">Login untuk melanjutkan</p>
        </div>
      </div>
      <div className="flex flex-col bg-[#FFFFFF] text-[#2C6975] h-[100%] md:w-full justify-center">
        <div className="md:px-full px-[25px] md:my-[120px] my-[40px]">
          <h1 className="font-bold text-4xl md:mb-[25px] mb-[25px] text-center md:ml">Login</h1>

          <div className="resize-none mb-[25px]">
            <h1>Username</h1>
            <input
              className="resize-none border-solid border-[1px] border-[#2C6975] rounded w-full h-[50px] p-[10px]"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="mb-[25px]">
            <h1>Password</h1>
            <div className="relative">
              <input
                className="border-solid border-[1px] border-[#2C6975] rounded w-full h-[50px] p-[10px]"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                className="absolute top-[50%] right-[10px] transform -translate-y-1/2 flex items-center px-3 text-[#2C6975] focus:outline-none"
                onClick={handleTogglePassword}
              >
                <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
              </button>
            </div>
          </div>

          <button onClick={handleClick} className="rounded bg-[#2C6975] hover:bg-[#358595] text-white w-full h-[50px]">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginNasabah;
