import { Outlet, Navigate } from "react-router-dom";

export default function ProtectedLogin({user}){
    return user.isLog ? <Navigate to="/home"/> : <Outlet/>
}