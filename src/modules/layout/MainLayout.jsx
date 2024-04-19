import { Link } from "react-router-dom"

const MainLayout = () => {
  return (
    <div className="bg-[#E0ECDE]">
      <div className="text-center bg-white w-[300px] h-screen ">

        <div className="absolute left-[15px] top-[10px]"> <img src="src/assets/logoKSU.png" alt="" className="w-[45px] " /> </div>
        <h1 className=" pt-[15px] pr-[35px] font-bold">Teknika mandiri</h1>

        <div
          className=" mt-[50px] h-[50px] pt-[10px] pr-[40px] text-[#626262] hover:bg-[#2C6975] hover:text-white  ">
          <img src="src/assets/Vector.png" alt="" className="absolute w-[30px] left-[30px] top-[100px] " />
          <Link to={"/daftar-anggota"}><h2>Daftar Anggota</h2></Link>

        </div>

        <div
          className="  hover:bg-[#2C6975] text-[#626262] hover:text-white h-[50px] pt-[10px] pr-[40px] ">
          <img src="src/assets/Vector.png" alt="" className="absolute w-[30px] left-[30px] top-[150px] " />
          <Link to={"/input-simpanan"}> <h2>Input Simpanan</h2></Link>

        </div>

        <div
          className=" hover:bg-[#2C6975] text-[#626262] hover:text-white  h-[50px] pt-[10px] pr-[1px] ">
          <img src="src/assets/Vector.png" alt="" className="absolute w-[30px] left-[30px] top-[200px] " />
          <Link to={"/info-pinjaman"}><h2>Info Pinjaman Anggota</h2></Link>
        </div>

        <div
          className=" hover:bg-[#2C6975] hover:text-white  h-[50px] pt-[10px] pr-[1px] mt-[262px] ">
          {/* <img src="src/assets/Vector2.png" alt="" className="absolute w-[30px] left-[30px] top-[200px] " /> */}
          <Link to={"/info-pinjaman"}><h2 className="">Logout</h2></Link>
        </div>




      </div>

    </div>
  )
}

export default MainLayout