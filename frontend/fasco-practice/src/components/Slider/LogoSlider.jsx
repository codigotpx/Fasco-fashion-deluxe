import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, FreeMode} from 'swiper/modules'

import 'swiper/css'
import './logoSlider.css'

const LogoSlider = ({ logos }) => {

    const logosExtended = [...logos, ...logos, ...logos]

    return (
        <div className="logo-slider-container">
            <Swiper
            modules={[Autoplay]}
            freeMode={true}
            loop={true}
            slidesPerView={4}
            spaceBetween={70}
            speed={4000}
            autoplay= {{
                delay: 0,
                disableOnInteraction: false
            }}
            breakpoints={{
                640: {slidesPerView: 3},
                1024: {slidesPerView: 5},
            }}
            className="logo-swiper"
            >
                {logosExtended.map((logo, index)=> (
                    <SwiperSlide key={index} className='logo-slide'>
                        <img src={logo.url} alt={logo.alt} className='logo-img' />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )

}
export default LogoSlider;