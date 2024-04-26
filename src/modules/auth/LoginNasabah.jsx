import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Login = ({ login }) => {
  const [password, setPassword] = useState(""); // Menyimpan nilai password
  const [showPassword, setShowPassword] = useState(false); // Menyimpan status tampilan password

  const Navigate = useNavigate();

  const handleClick = async () => {
    Navigate('/nasabah')
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value); // Memperbarui nilai password saat ada perubahan
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword); // Toggle status tampilan password
  };

  return (
    <div className="flex  flex-col md:flex-row">
      <div className="bg-[#2C6975] text-[#FAFAFA] md:h-screen h-[400px] md:w-[520px] w-full text-[4xl]">
        <div className="mx-[60px] my-[230px]">
          <h1 className="md:text-5xl text-4xl">Welcome,Admin</h1>
          <p className="md:text-2xl text-xl">Login untuk melanjutkan</p>
        </div>
      </div>

      <div className="bg-[#FFFFFF] text-[#2C6975] h-auto md:w-[550px] w-full ">

        <div className="md:px-[200px] px-[25px]  md:my-[120px] my-[40px]">
          <h1 className="font-bold text-4xl md:mb-[25px] mb-[25px] text-center md:ml-[120px]">Login</h1>

          <div className="mb-[25px]">
            <h1>Username</h1>
            <input className="border-solid border-[1px] border-[#2C6975] rounded w-[360px] h-[50px] " type="text" />
          </div>

          <div className="mb-[25px] relative"> {/* Tambahkan kelas relatif */}
            <p className="text-[#2C6975]">Password</p>
            <input
              className="border-solid border-[1px] border-[#2C6975] rounded  w-[360px] h-[50px]" // Tambahkan padding kanan untuk ikon
              type={showPassword ? "text" : "password"} // Tampilkan password jika showPassword true
              value={password} // Menyimpan nilai password
              onChange={handlePasswordChange} // Menangani perubahan nilai password
            />
            {/* Tampilkan ikon mata */}
            {showPassword ? (
              <FontAwesomeIcon icon={faEye} className="absolute top-[70%] right-4 transform -translate-y-1/2 h-6 w-6 text-gray-400 cursor-pointer" onClick={togglePasswordVisibility} />
            ) : (
              <FontAwesomeIcon icon={faEyeSlash} className="absolute top-[70%] right-4 transform -translate-y-1/2 h-6 w-6 text-gray-400 cursor-pointer" onClick={togglePasswordVisibility} />

            )}
          </div>
          <button onClick={handleClick} className="rounded bg-[#2C6975] hover:bg-[#358595] text-white  w-[360px] h-[50px]"> Login </button>

        </div>
      </div>
    </div>
  );
};

export default Login
