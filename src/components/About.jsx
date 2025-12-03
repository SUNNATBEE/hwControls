import React from 'react'
import Slide from '../assets/Side Image.png'

const About = () => {
    return (
        <div>
            <div className='container gap-[75px]'>
                <div className="text">
                    <h1 className='text-[54px], text-black, text-[600]'>Our Story</h1>
                    <p className='text-[16px], text-black, text-[400], mt-[40]'>Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region.
                        Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.
                    </p>
                </div>
                <div className="image">
                    <img src={Slide} />
                </div>
            </div>
        </div>
    )
}

export default About