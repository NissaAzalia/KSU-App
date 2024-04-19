import { useNavigate } from "react-router-dom"

const Login = ({login}) => {

  const handleClick = () => {
    login(true);
  }




  return (
    <div className="flex bg-[#fffff]  ">

      <div
        className="left text-white bg-[#2C6975] w-[600px] h-screen " >
        <div className="my-[230px] mx-[50px]">
          <h1 className="text-5xl items-center  ">Welcome</h1>
          <p>Login untuk melanjutkan</p>
        </div>

      </div>

      <div
        className="right  bg-white h-screen  ">

        <div className="my-[120px] mx-[200px] ">
          <h1 className="font-bold text-4xl justify-center text-[#2C6975] text-center mb-[20px]  ">Login</h1>

          <div className="mb-[20px]">
            <p className="text-[#2C6975]">UserName</p>
            <input className="rounded border-solid border-[1px] border-[#2C6975] w-[350px] h-[40px]" type="text" />
          </div>

          <div className="mb-[20px]">
            <p className="text-[#2C6975]">Password</p>
            <input className="rounded border-solid border-[1px] border-[#2C6975] w-[350px] h-[40px]" type="password" />
          </div>
          <button onClick={handleClick} className="rounded bg-[#2C6975] w-[350px] h-[45px] text-white " >
            Login
          </button>
        </div>


      </div>

    </div>


  )

}


export default Login