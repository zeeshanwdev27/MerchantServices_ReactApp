import MS_HeroSection from './MS_HeroSection'
import MS_GetStarted from './MS_GetStarted'
import MS_CompleteMerchant from './MS_CompleteMerchant'
import MS_OurServices from './MS_OurServices'
import MS_MerchantSupport from './MS_MerchantSupport'
import StartProcessing from '../../../sections/start-processing'

function MerchantServices_Main() {
  return (
    <>
    <MS_HeroSection/>
    <MS_GetStarted/>
    <MS_CompleteMerchant/>
    <MS_OurServices/>
    <MS_MerchantSupport/>
    <StartProcessing />
    </>
  )
}

export default MerchantServices_Main
