import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Navbar from './components/Navbar/Navbar'
import Banner from './components/Banner/Banner'
import "@fontsource/inter/300.css"
import "@fontsource/inter/400.css"
import "@fontsource/inter/500.css"
import "@fontsource/inter/600.css"
import "@fontsource/inter/700.css"
import "@fontsource/inter"
import Simplify from './components/Simplify/Simplify'
import TextView from './components/TextView/TextView'
import PayoutSection from './components/PayoutSection/PayoutSection'
import ImageSection from './components/ImageSection/ImageSection'
import SupportSection from './components/SupportSection/SupportSection'
import ExpertiseSection from './components/ExpertiseSection/ExpertiseSection'
import PaymentTabs from './components/PaymentTabs/PaymentTabs';
import Testimonials from './components/Testimonials/Testimonials';
import FooterSection from './components/FooterSection/FooterSection';
import FooterBottom from './components/FooterBottom/FooterBottom';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='container'>
        <div className='layout'>
        <Navbar />
        <Banner />
        <Simplify />
        <TextView />
        <PayoutSection />
        <ImageSection />
        <SupportSection />
        <ExpertiseSection />
        <PaymentTabs />
        <Testimonials />
        <FooterSection />
        </div>
       </div>
       <FooterBottom />
       
    </>
  )
}

export default App
