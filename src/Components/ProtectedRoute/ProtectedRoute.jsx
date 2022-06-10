import { Outlet, Navigate } from "react-router-dom";

export default function ProtectedRoute({ user }){
    return user.isLog ? <Outlet/> : <Navigate to="/"/>
}