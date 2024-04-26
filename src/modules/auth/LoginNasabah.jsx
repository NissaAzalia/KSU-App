import { useNavigate } from "react-router-dom";

const LoginNasabah = () => {
  const Navigate = useNavigate()

  const handleClick = async () => {
    Navigate('/nasabah')
  }
  return (
    <div className="flex flex-col md:flex-row w-[100%] ">
      

      <div className="bg-[#2C6975] text-[#FAFAFA] md:h-screen md:w-full text-[4xl]">
        <div className="mx-[60px] my-[230px]">
          <h1 className="md:text-5xl text-4xl">Welcome</h1>
          <p className="md:text-2xl text-xl">Login untuk melanjutkan</p>
        </div>
      </div>
      <div className="flex flex-col bg-[#FFFFFF] text-[#2C6975] h-[100%] md:w-full justify-center ">

        <div className="md:px-full px-[25px] md:my-[120px] my-[40px]">
          <h1 className="font-bold text-4xl md:mb-[25px] mb-[25px] text-center md:ml">Login</h1>

          <div className="resize-none mb-[25px]">
            <h1>Username</h1>
            <input className="resize-none border-solid border-[1px] border-[#2C6975] rounded w-full h-[50px] " type="text" />
          </div>

          <div className="mb-[25px]">
            <h1>Password</h1>
            <input className="border-solid border-[1px] border-[#2C6975] rounded  w-full h-[50px]" type="password" />
          </div>

          <button onClick={handleClick} className="rounded bg-[#2C6975] hover:bg-[#358595] text-white  w-full h-[50px]"> Login </button>
        </div>
      </div>
    </div>
  );
}

export default LoginNasabah