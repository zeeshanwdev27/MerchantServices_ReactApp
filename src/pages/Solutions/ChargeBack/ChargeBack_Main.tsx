import CB_HeroSection from './CB_HeroSection'
import CB_PaymentProcessing from './CB_PaymentProcessing'
import CB_WhyChooseCB from './CB_WhyChooseCB'
import CB_Services from './CB_Services'
import CB_WhatsCb from './CB_WhatsCb'
import StartProcessing from '../../../sections/start-processing'

function ChargeBack_Main() {
  return (
    <>
    <CB_HeroSection/>
    <CB_PaymentProcessing/>
    <CB_WhyChooseCB/>
    <CB_Services/>
    <CB_WhatsCb/>
    <StartProcessing />
    </>
  )
}

export default ChargeBack_Main
