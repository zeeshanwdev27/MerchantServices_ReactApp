import StartProcessing from '../../../sections/start-processing'
import SP_HeroSection from './SP_HeroSection'
import SP_Processing from './SP_Processing'
import SP_WhyChooseSP from './SP_WhyChooseSP'
import SP_Services from './SP_Services'


function SecurePayment_Main() {
  return (
    <>
    <SP_HeroSection/>
    <SP_Processing/>
    <SP_WhyChooseSP/>
    <SP_Services/>
    <StartProcessing/>
    </>
  )
}

export default SecurePayment_Main
