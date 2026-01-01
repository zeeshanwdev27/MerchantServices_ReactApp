import { Routes, Route } from "react-router-dom";
import Footer from "./components/footer";
import LenisScroll from "./components/lenis";
import Navbar from "./components/navbar";
import Home from './pages/Home/Home'
import MerchantServices_Main from './pages/Solutions/MerchantServices/MerchantServices_Main'
import ChargeBack_Main from './pages/Solutions/ChargeBack/ChargeBack_Main'
import SecurePayment_Main from './pages/Solutions/SecurePayment/SecurePayment_Main'
import HighRisk_Main from './pages/Solutions/HighRisk/HighRisk_Main'
import FraudPrevention_Main from './pages/Solutions/FraudPrevention/FraudPrevention_Main'
import VirtualTerminal_Main from './pages/Solutions/VirtualTerminal/VirtualTerminal_Main'
import Contact from './pages/Contact/Contact'
import TermCondition from './pages/TermCondition/TermCondition'
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy'

export default function App() {
    return (
        <div>
            <LenisScroll />
            <Navbar />
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/merchant-services" element={<MerchantServices_Main/>}/>
                <Route path="/chargeback-management" element={<ChargeBack_Main/>}/>
                <Route path="/3d-secure" element={<SecurePayment_Main/>}/>
                <Route path="/high-risk-merchant-account" element={<HighRisk_Main/>}/>
                <Route path="/fraud-prevention" element={<FraudPrevention_Main/>}/>
                <Route path="/virtual-terminal" element={<VirtualTerminal_Main/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/terms-of-service" element={<TermCondition/>}/>
                <Route path="/privacy-policy" element={<PrivacyPolicy/>}/>
            </Routes>
            <Footer />
        </div>
    )
}