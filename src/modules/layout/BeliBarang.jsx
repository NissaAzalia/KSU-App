
import { faX } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const BeliBarang = () => {

    return (
        <>
            <div className="mx-[250px] mt-[50px]  ">
                <div className=" border-solid border-[1px] rounded-3xl w-[550px] py-[10px] h-[400px] flex flex-col items-center  shadow-2xl bg-white">
                    <div className='mr-[430px] pt-[10px]'>
                        <FontAwesomeIcon icon={faX} style={{ color: "#2C6975", }} />
                    </div>
                    <h1 className=" text-center text-xl font-bold  text-[#2C6975] mb-[20px] mt-[10px]">Pembelian Barang</h1>

                    <div className="flex flex-col gap-4 mt-[17px] ">
                        <input className="border-solid border-[1px] border-[#2C6975] rounded-[12px]  w-[450px] h-[50px] px-[15px]" type="text" placeholder="Jenis Barang" />
                        <input className="border-solid border-[1px] border-[#2C6975] rounded-[12px]  w-[450px] h-[50px] px-[15px]" type="number" placeholder="Alamat" />
                        <input className="border-solid border-[1px] border-[#2C6975] rounded-[12px]  w-[450px] h-[50px] px-[15px]" type="number" placeholder="Tanggal" />
                        <button className="rounded-[12px] bg-[#2C6975] hover:bg-[#23545d] text-white  w-[450px] h-[50px] mb-[20px] ">Kirim</button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default BeliBarang