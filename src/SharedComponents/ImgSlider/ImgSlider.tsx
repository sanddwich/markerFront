import React from 'react'
import { Container, Row } from 'react-bootstrap'
import Image from '../../Redux/interfaces/AdditionalInterfaces/Image'
import './ImgSlider.scss'

// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination } from 'swiper'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/swiper.scss'
import ScrollAnimation from 'react-animate-on-scroll'

// install Swiper modules
SwiperCore.use([Navigation, Pagination])

interface ImgSliderProps {
  images: Image[]
  slideWidth: number
}

const ImgSlider = (props: ImgSliderProps) => {
  return (
    <Container fluid className="ImgSlider">
      <Row className="ImgSlider__slides m-0">
        <Swiper
          slidesPerView={props.images.length > 3 ? 'auto' : props.images.length}
          spaceBetween={5}
          lazy={true}
          pagination={{ el: '.ImgSlider__pagination', clickable: true }}
        >
          {props.images.map((img) => {
            return (
              <SwiperSlide key={img.id} style={{ width: `${props.slideWidth} !important` }}>
                <img
                  className="img-fluid"
                  src={`https://picsum.photos/100/100?random=${img.id}`}
                  alt={img.name}
                  // style={{ width: props.slideWidth }}
                />
              </SwiperSlide>
            )
          })}
        </Swiper>
      </Row>
      {props.images.length > 3 && <Row className="ImgSlider__pagination d-flex justify-content-center"></Row>}
    </Container>
  )
}

export default ImgSlider
