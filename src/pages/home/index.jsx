import { Outlet } from "react-router-dom"
import { Header } from "../../components/header"

export const Home = () => {
    return (
        <>
            <Header/>
            <Outlet/>
        </>
    )
}