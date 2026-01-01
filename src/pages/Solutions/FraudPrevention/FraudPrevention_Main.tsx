import StartProcessing from '../../../sections/start-processing'
import FP_HeroSection from './FP_HeroSection'
import FP_Processing from './FP_Processing'
import FP_WhyChoose from './FP_WhyChoose'
import FP_Services from './FP_Services'
import FP_Fraud from './FP_Fraud'

function FraudPrevention_Main() {
  return (
    <>
    <FP_HeroSection/>
    <FP_Processing/>
    <FP_WhyChoose/>
    <FP_Services/>
    <FP_Fraud/>
    <StartProcessing/>
    </>
  )
}


export default FraudPrevention_Main

