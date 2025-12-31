import { Routes, Route } from "react-router-dom";
import Footer from "./components/footer";
import LenisScroll from "./components/lenis";
import Navbar from "./components/navbar";
import Home from './pages/Home/Home'
import MerchantServices_Main from './pages/Solutions/MerchantServices/MerchantServices_Main'

export default function App() {
    return (
        <div>
            <LenisScroll />
            <Navbar />

            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/merchant-services" element={<MerchantServices_Main/>}/>
            </Routes>
            <Footer />
        </div>
    )
}