import React, { useEffect, useState } from "react";
import "../css/BlogCard.css";
import { PostList } from "../../APIRequest/APIRequest";

const BlogCard = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await PostList();
      setList(res); // প্রথম ১০টি পোস্ট
    })();
  }, []);

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
    </div>
  );
};

export default BlogCard;
