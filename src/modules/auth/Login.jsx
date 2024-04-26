import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Login = ({ login }) => {
  const [password, setPassword] = useState(""); // Menyimpan nilai password
  const [showPassword, setShowPassword] = useState(false); // Menyimpan status tampilan password

  const navigate = useNavigate();

  const handleClick = () => {
    login(true);
    navigate('/dashboard'); // Contoh perpindahan ke halaman dashboard setelah login berhasil
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value); // Memperbarui nilai password saat ada perubahan
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword); // Toggle status tampilan password
  };

  return (
    <div className="flex bg-[#fffff]">
      <div className="left text-white bg-[#2C6975] w-[600px] h-screen">
        <div className="my-[230px] mx-[50px]">
          <h1 className="text-5xl items-center">Welcome,Admin</h1>
          <p>Login untuk melanjutkan</p>
        </div>
      </div>

      <div className="right bg-white h-screen">
        <div className="my-[120px] mx-[200px]">
          <h1 className="font-bold text-4xl justify-center text-[#2C6975] text-center mb-[20px]">Login</h1>

          <div className="mb-[20px]">
            <p className="text-[#2C6975]">UserName</p>
            <input
              className="rounded border-solid border-[1px] border-[#2C6975] w-[350px] h-[40px]"
              type="text"
            />
          </div>

          <div className="mb-[20px] relative"> {/* Tambahkan kelas relatif */}
            <p className="text-[#2C6975]">Password</p>
            <input
              className="rounded border-solid border-[1px] border-[#2C6975] w-[350px] h-[40px] pr-[40px]" // Tambahkan padding kanan untuk ikon
              type={showPassword ? "text" : "password"} // Tampilkan password jika showPassword true
              value={password} // Menyimpan nilai password
              onChange={handlePasswordChange} // Menangani perubahan nilai password
            />
            {/* Tampilkan ikon mata */}
            {showPassword ? (
              <FontAwesomeIcon icon={faEye}className="absolute top-[70%] right-4 transform -translate-y-1/2 h-6 w-6 text-gray-400 cursor-pointer" onClick={togglePasswordVisibility} />
            ) : (
              <FontAwesomeIcon icon={faEyeSlash} className="absolute top-[70%] right-4 transform -translate-y-1/2 h-6 w-6 text-gray-400 cursor-pointer" onClick={togglePasswordVisibility} />
              
            )}
          </div>

          <button onClick={handleClick} className="rounded bg-[#2C6975] hover:bg-[#358595] w-[350px] h-[45px] text-white">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;