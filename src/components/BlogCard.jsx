import React, { useEffect, useState } from "react";
import {useLocation} from "react-router-dom"
import "../css/BlogCard.css";
import { PostList } from "../../APIRequest/APIRequest";

const BlogCard = (props) => {
  const [list, setList] = useState([]);
  const location = useLocation()

  useEffect(() => {
    (async () => {
      const res = await PostList();
      if(location.pathname === "/" || "/Home"){
        setList(res.slice(0, 6))
      }
      else if (location.pathname === "/Blog"){
        setList(res)
      }
    })();
  }, [location.pathname]);

  return (
    <div className="blog-wrapper">
      {list.map((item, index) => (
        <div className="blog-card" key={index}>
          <img src={item.img} alt={item.title} className="blog-image" />
          <div className="blog-title">{item.title}</div>
          <p className="blog-description">{item.shortDes}</p>
          <div>
            <a
              href={item.link || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="read-button"
            >
              Read More
            </a>
          </div>
        </div>
      ))}
      {props.children}
    </div>
  );
};

export default BlogCard;
