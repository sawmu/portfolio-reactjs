import { Fragment, useState } from "react";
import Slider from "react-slick";
import BlogPopup from "./popup/BlogPopup";

const News = () => {
  const props = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  const blogData = [
    {
      title: "The Artists",
      img: "img/news/p5.jpg",
      dec: [

        "Project : Web Development",
        "Duration : 2 Days",
        "Technologies : ReactJs, NextJs, Tailwind, Sanity",
        "Link : www.artists.mukabaw.com",
      ],
      date: "Web Development",
    },
    {
      title: "Khoo Teck Puat Hospital",
      img: "img/news/p2.jpg",
      dec: [

        "Project : Re-Design and Development",
        "Client : Khoo Teck Puat Hospital",
        "Duration : 2.5 Months",
        "Technologies : HTMI, CSS, Javascript, Bootstrap",
        "Link : www.ktph.com.sg",
      ],
      date: "Web Development",
    },
    {
      title: "Yoga Nation",
      img: "img/news/p1.jpg",
      dec: [
        "Project : ECOMMERCE WEBSITE",
        "Client : Yoga Nation",
        "Duration : 7 DAYS",
        "Technologies : WordPress",
        "Link : www.yoganation.com.sg",
      ],
      date: "Web Development",
    },
    {
      title: "Chin Aik Co.(Pte)Ltd",
      img: "img/news/p3.jpg",
      dec: [
        "Project : ECOMMERCE WEBSITE",
        "Client : Chin Aik",
        "Duration : 7 DAYS",
        "Technologies : OpenCart",
        "Link : www.chinaik.com.sg",
      ],
      date: "Web Development",
    },
    {
      title: "Mei Fan",
      img: "img/news/p4.jpg",
      dec: [
        "Project : ECOMMERCE WEBSITE",
        "Client : Mei Fan",
        "Duration : 7 DAYS",
        "Technologies : OpenCart",
        "Link : www.mandfcoffeesolutions.com.sg",
      ],
      date: "Web Development",
    },
    {
      title: "ASCM Kitchen Pro",
      img: "img/news/p6.jpg",
      dec: [
        "Project : ECOMMERCE WEBSITE",
        "Client :ASCM Kitchen Pro",
        "Duration : 7 DAYS",
        "Technologies : OpenCart",
        "Link : www.mandfcoffeesolutions.com.sg",
      ],
      date: "Web Development",
    },
 
  ];
  const [activeBlogData, setActiveBlogData] = useState();
  const [activeBlog, setActiveBlog] = useState(false);
  return (
    <Fragment>
      <BlogPopup
        close={() => setActiveBlog(false)}
        show={activeBlog}
        blogData={activeBlogData}
      />
      <div className="tonni_tm_section" id="portfolio">
        <div className="tonni_tm_news">
          <div className="container bigger">
            <div className="news_inner">
              <div className="container">
                <div className="tonni_tm_main_title" data-type="flex">
                  <div className="title">
                    <h3>Latest Portfolio</h3>
                  </div>
                  <div className="subtitle">
                    <p>
                    Proficient in
various platforms, languages, and embedded systems. I’m a very
passionate Coding that’s always wanting to grow, learn and try
something new.
                    </p>
                  </div>
                </div>
                <div className="news_list">
                  <ul>
                    {blogData.map((blog, i) => (
                      <li
                        className="wow fadeInUp"
                        data-wow-duration="1s"
                        data-wow-delay={`0.${i * 2}s`}
                        key={i}
                      >
                        <div className="list_inner">
                          <div className="image">
                            <img src="img/thumbs/37-31.jpg" alt="" />
                            <div
                              className="main"
                              data-img-url={blog.img}
                              style={{ backgroundImage: `url(${blog.img})` }}
                            />
                            <a
                              className="tonni_tm_full_link c-pointer"
                              onClick={() => {
                                setActiveBlog(true);
                                setActiveBlogData(blog);
                              }}
                            />
                          </div>
                          <div className="details">
                            <span className="date">{blog.date}</span>
                            <h3 className="title">
                              <a
                                className="c-pointer"
                                onClick={() => {
                                  setActiveBlog(true);
                                  setActiveBlogData(blog);
                                }}
                              >
                                {blog.title}
                              </a>
                            
                            </h3>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <span className="shape">
                    <img className="svg" src="img/svg/icon8.svg" alt="" />
                  </span>
                  <span className="shape2">
                    <img
                      className="svg anim_circle"
                      src="img/svg/icon5.svg"
                      alt=""
                    />
                  </span>
                  <span className="shape3">
                    <img className="svg" src="img/svg/icon10.svg" alt="" />
                  </span>
                </div>
            
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default News;
