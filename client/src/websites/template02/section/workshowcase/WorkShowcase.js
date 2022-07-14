import React from "react";
import { Container, Button } from "@material-ui/core";
import ReactHtmlParser from "react-html-parser";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Autoplay, Pagination } from "swiper/core";
import classNames from "classnames";
import useStyles from "./styles";
import useContents from "../../../../actions/cmscontent/useContents";
import useWorkShowcase from "../../../../actions/template2/work_showcase/useWorkShowcase";

import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/swiper.scss";

SwiperCore.use([Navigation, Autoplay, Pagination]);

const WorkShowcase = () => {

    let dataTitle, dataDescription;

    const classes = useStyles();

    const { data: contents, isLoading: contentsLoading } = useContents();
    const { data: works, isLoading: worksLoading } = useWorkShowcase();


    if(contentsLoading) {
        console.log("");
    } else {
        const contentTitle = contents.filter(content => content._id === "62b424b5be55be15a4af6de5");
        const contentDescription = contents.filter(content => content._id === "62b42520be55be15a4af6de6");

        dataTitle = contentTitle[0].content;
        dataDescription = contentDescription[0].content;
    }

    return (
        <div id="work-showcase" className={classes.workShocaseLayout}>
            <Container maxWidth="lg">
                <div className={classes.workShowcaseContent}>
                    {ReactHtmlParser(dataTitle)}
                    {ReactHtmlParser(dataDescription)}
                </div>
                <div className={classes.swiperContainer}>
                    {worksLoading ? (
                        <></>
                    ) : (
                        <Swiper
                            className={classes.swiperLayout}
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
                            pagination={{
                                clickable: true,
                            }}
                            navigation={false}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                            }}
                        >
                            {works.map((work) => (
                                <SwiperSlide className={classes.swiperSlide} key={work._id}>
                                    <Button className={classNames(classes.slidesContainer)} disableRipple>
                                        <img src={work.image} alt={work.title} />
                                        <span className="slidesLayout">
                                            <span className="workTitle">
                                                {ReactHtmlParser(work.title)}
                                            </span>
                                            <span className="workTag">
                                                {ReactHtmlParser(work.tag)}
                                            </span>
                                        </span>
                                    </Button>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    )}
                </div>
            </Container>
        </div>
    )
}

export default WorkShowcase;