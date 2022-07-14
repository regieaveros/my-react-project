import React from "react";
import { Container } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import ReactHtmlParser from "react-html-parser";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper/core";
import Icons from "../../../../global/Icons";
import classNames from "classnames";
import useStyles from "./styles";
import useContents from "../../../../actions/cmscontent/useContents";
import useTestimonials from "../../../../actions/template2/testimonials/useTestimonials";

import "swiper/swiper.scss";

SwiperCore.use([Autoplay]);

const Testimonials = () => {

    let dataTag, dataTitle;

    const classes = useStyles();

    const { data: contents, isLoading: contentsLoading } = useContents();
    const { data: testimonials, isLoading: testimonialsLoading } = useTestimonials();

    if(contentsLoading) {
        console.log("");
    } else {
        const contentTag = contents.filter(content => content._id === "62b84d5ad7376942b44e8dd5");
        const contentTitle = contents.filter(content => content._id === "62b84d88d7376942b44e8dd6");

        dataTag = contentTag[0].content;
        dataTitle = contentTitle[0].content;
    }

    return (
        <div id="testimonials" className={classes.testimonialsLayout}>
            <Container maxWidth="lg">
                <div className={classes.lineContainer}>
                    <div className={classes.lineStyle}>&nbsp;</div>
                </div>
                <div className={classes.testimonialContainer}>
                    {ReactHtmlParser(dataTag)}
                    {ReactHtmlParser(dataTitle)}
                </div>
                <div className={classes.swiperContainer}>
                    {testimonialsLoading ? (
                        <></>
                    ) : (
                        <Swiper
                            loop={true}
                            breakpoints={{
                                640: {
                                  slidesPerView: 1,
                                  spaceBetween: 5,
                                },
                                768: {
                                  slidesPerView: 2,
                                  spaceBetween: 15,
                                },
                                1024: {
                                  slidesPerView: 3,
                                  spaceBetween: 30,
                                },
                            }}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                            }}
                        >
                            {testimonials.map((testimonial) => (
                                <SwiperSlide key={testimonial._id}>
                                    <div className={classes.slidesContainer}>
                                        <Rating
                                            className={classes.testimonialRating}
                                            icon={<Icons icon="StarBorder" />}
                                            emptyIcon={
                                                <span className={classes.emptyRating}>
                                                    <Icons icon="StarBorder" />
                                                </span>
                                            }
                                            value={testimonial.rating}
                                            readOnly 
                                        />
                                        {ReactHtmlParser(testimonial.description)}
                                        <div className={classNames(classes.testimonialContent)}>
                                            <img src={testimonial.image} alt={testimonial.name} />
                                            <div className="testimonialInfo">
                                                <div className="testimonialName">
                                                    {ReactHtmlParser(testimonial.name)}
                                                </div>
                                                <div className="testimonialPosition">
                                                    {ReactHtmlParser(testimonial.position)}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    )}
                </div>
            </Container>
        </div>
    )
}

export default Testimonials;