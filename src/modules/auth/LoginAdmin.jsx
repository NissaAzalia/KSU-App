import { useNavigate } from "react-router-dom";

const LoginAdmin = () => {
  const Navigate = useNavigate()

  const handleClick = async () => {
    Navigate('/dashboard')
  }
  return (
    <div className="flex">
      <div className="bg-[#2C6975] text-[#FAFAFA] h-screen w-[520px] justify-content: center text-[4xl]">
        <div className="mx-[60px] my-[230px]">
        <h1 className="text-5xl">Welcome,Admin</h1>
        <p className="text-2xl">Login untuk melanjutkan</p>
        </div>
      </div>

      <div className="bg-[#FFFFFF] text-[#2C6975] h-screen w-[550px]">
      <div className="mx-[200px] my-[120px]">
        <h1 className="font-bold text-4xl mb-[25px] text-center ml-[120px]">Login</h1>

        <div className="mb-[25px]">
          <h1>Username</h1>
          <input className="border-solid border-[1px] border-[#2C6975] rounded w-[360px] h-[50px] " type="text" />
        </div>

        <div className="mb-[25px]">
          <h1>Password</h1>
          <input className="border-solid border-[1px] border-[#2C6975] rounded  w-[360px] h-[50px]" type="password" />
        </div>

        <button  onClick = {handleClick} className="rounded bg-[#2C6975] hover:bg-[#358595] text-white  w-[360px] h-[50px]"> Login </button>

      </div>
      </div>
    </div>
  );
}

export default LoginAdmin