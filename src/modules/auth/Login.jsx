
import { Navigate ,useNavigate } from "react-router-dom"


const Login = () => {
  const Navigate = useNavigate()
  const handleClick = async() => {
    Navigate('/dashboard')
  }


  return (

    <div className="flex bg-[#ffff]">
      <div className="left w-[600px]  h-screen bg-[#2C6975] ">
        <div className="my-[260px] mx-[100px]">
        <h1 className="text-white font-normal text-5xl">Welcome</h1>
        <p className="font-extralight text-3xl text-white">
          Login untuk nasabah
        </p>
      </div>
      </div>


      <div className="right bg-white h-screen">
        <div className="my-[170px] mx-[120px]">
        <div className="">
          <h1 className="font-medium text-3xl text-center text-[#2C6975]">Login</h1>
        </div>

        <div className="mb-[20px]">
          <p className="text-[#2C6975]">UserName</p>
          <input className="rounded border-solid border-[1px] border-[#2c6975] w-[500px] h-[50px]" type="text" />
        </div>

        <div className="mb-[20px]">
          <p className="text-[#2C6975]">Password</p>
          <input className="rounded border-solid border-[1px] border-[#2c6975] w-[500px] h-[50px]" type="password" />
        </div>
          <button onClick={handleClick} className="text-white bg-[#2C6975] w-[500px] h-[50px] rounded">Login</button>
      </div>
    </div>
    </div>
  )

}


export default Login