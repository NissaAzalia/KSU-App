import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "./Auth";



const Login = () => {
  const { doLoginAdmin, changeAuthority } = useAuth()

  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  

  const handleClick = async () => {

     await doLoginAdmin (username, password);
     changeAuthority('Admin')
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleClickAdmin = () => {
    const confirm = window.confirm("Apakah Anda yakin ingin pindah ke halaman Nasabah?");
    if (confirm === true) {
      window.location.href = './login';
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-[100vh] w-full ">
        <div className="flex flex-col bg-[#2C6975] text-[#fafafa] h-[100%] md:w-full justify-center">
        <div className="md:mx-[60px] mx-[50px] my-[230px]  ">
          <h1 className="md:text-5xl text-3xl">Welcome, Admin</h1>
          <p className="md:text-2xl text-xl">Login untuk melanjutkan</p>
        </div>
      </div>

      <div className="flex flex-col bg-[#FFFFFF] text-[#2C6975] h-[100%] md:w-full justify-center">
        <div className="md:px-full px-[25px] md:my-[120px] my-[40px]">
          <h1 className="font-bold text-4xl md:mb-[25px] mb-[25px] text-center md:ml">Login</h1>

          <div className="resize-none mb-[25px]">
            <h1>Username</h1>
            <input
              className="resize-none border-solid border-[2px] border-[#2C6975] rounded w-full h-[50px] p-[10px] "
              type="text"
              placeholder= "Masukkan username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="mb-[25px]">
            <h1>Password</h1>
            <div className="relative">
              <input
                className="border-solid border-[2px] border-[#2C6975] rounded w-full h-[50px] p-[10px]"
                type={showPassword ? "text" : "password"}
                value={password}
                placeholder= "Masukkan password"
                onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  className="absolute top-[50%] right-[10px] transform -translate-y-1/2 flex items-center px-3 text-[#2C6975] focus:outline-none placeholder:Masukkan password"
                onClick={handleTogglePassword}
              >
                <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
              </button>
            </div>
            <p className="text-[13px] mt-[10px] text-[#6f6f6f] hover:text-[#2C6975]">Klik disini untuk login Nasabah. <span onClick={handleClickAdmin} className="text-[#4a9de6] cursor-pointer">Klik!</span></p>
          </div>

          <button onClick={handleClick} className="rounded bg-[#2C6975] hover:bg-[#358595] text-white w-full h-[50px]">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
