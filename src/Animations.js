import React,{useEffect} from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css'

const Animations = () => {
    useEffect(()=>{
    Aos.init({duration:1500, offset:200})
  },[])
  return (
    <div></div>
  )
}

export default Animations