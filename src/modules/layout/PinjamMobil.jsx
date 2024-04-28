
import { faX } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from 'react-router-dom'

const PinjamMobil = () => {
    const Navigate = useNavigate()
    const handleClick = async ()=>{
        Navigate('/nasabah')
    }

    return (
        <>
        <div className="h-screen w-screen bg-[#F4F4F4]">
            <div className="md:px-[350px] px-[35px] md:pt-[50px] pt-[200px]   ">
                <div className=" border-solid border-[1px] rounded-3xl md:w-[550px] w-[350px] md:py-[10px]  h-[400px] flex flex-col items-center  shadow-2xl bg-white">
                    <div className='md:mr-[430px] mr-[280px] md:pt-[10px] pt-[15px]'>
                        <FontAwesomeIcon onClick={handleClick} icon={faX} style={{ color: "#2C6975", }} />
                    </div>
                    <h1 className=" text-center text-xl font-bold  text-[#2C6975] mb-[20px] ">Pinjaman Mobil</h1>

                    <div className="flex flex-col gap-4 mt-[17px] ">
                        <input className="border-solid border-[1px] border-[#2C6975] rounded-[12px]  md:w-[450px] w-[300px] h-[50px] px-[15px]" type="number" placeholder="Waktu" />
                        <div>
                            <select className="border-solid border-[1px] border-[#2C6975] rounded-[12px]  md:w-[450px] w-[300px] h-[50px] px-[15px]">
                                <option disabled selected>Sopir</option>
                                <option>Pakai</option>
                                <option>Tidak</option>

                            </select>
                        </div>
                        <button className="rounded-[12px] bg-[#2C6975]  hover:bg-[#358595] text-white  md:w-[450px] w-[300px] h-[50px] mb-[20px] ">Kirim</button>
                    </div>
                </div>
            </div>
</div>
        </>
    )
}

export default PinjamMobil