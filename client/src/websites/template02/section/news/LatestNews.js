import React from "react";
import { Container, Button } from "@material-ui/core";
import ReactHtmlParser from "react-html-parser";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Autoplay, Pagination } from "swiper/core";
import Icons from "../../../../global/Icons";
import classNames from "classnames";
import useStyles from "./styles";
import useContents from "../../../../actions/cmscontent/useContents";
import useNews from "../../../../actions/template2/news/useNews";

import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/swiper.scss";

SwiperCore.use([Navigation, Autoplay, Pagination]);

const LatestNews = () => {

    let dataTitle, dataDescription;

    const classes = useStyles();

    const { data: contents, isLoading: contentsLoading } = useContents();
    const { data: news, isLoading: newsLoading } = useNews();

    if(contentsLoading) {
        console.log("");
    } else {
        const contentTitle = contents.filter(content => content._id === "62b6c64e2fb9853008d9e5ba");
        const contentDescription = contents.filter(content => content._id === "62b6c69f2fb9853008d9e5bb");

        dataTitle = contentTitle[0].content;
        dataDescription = contentDescription[0].content;
    }

    return (
        <div id="news" className={classes.newsLayout}>
            <Container maxWidth="lg">
                <div className={classes.newsContents}>
                    {ReactHtmlParser(dataTitle)}
                    {ReactHtmlParser(dataDescription)}
                </div>
                <div className={classes.swiperContainer}>
                    {newsLoading ? (
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
                            {news.map((latestNews) => (
                                <SwiperSlide className={classes.swiperSlide} key={latestNews._id}>
                                    <Button className={classNames(classes.slidesContainer)} disableRipple>
                                        <img src={latestNews.image} alt={latestNews.title} />
                                        <span className="slidesLayout">
                                            <span className="newsTag">
                                                {ReactHtmlParser(latestNews.tag)}
                                            </span>
                                            <span className="newsTitle">
                                                {ReactHtmlParser(latestNews.title)}
                                            </span>
                                            <span className="newsIcon">
                                                <Icons icon={`TrendingFlat`} />
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

export default LatestNews;