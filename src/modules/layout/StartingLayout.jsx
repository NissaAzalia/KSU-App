import { NavLink } from "react-router-dom";

export default function(){
    return(
        <>
        <div className="flex flex-col justify-center items-center text-center h-[100vh] gap-[2em]">
            <NavLink to={"admin"} className={'btn-start'}>Admin</NavLink>
            <NavLink to={"admin"} className={'btn-start'}>Nasabah</NavLink>
        </div>
        </>
    );
}