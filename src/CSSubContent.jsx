import React from "react";
import "./cssub.css";

/* layout for each cs subpage */
export default function CSSubContent({
  name,
  imgs,
  imgsid,
  tech,
  desc,
  descid,
  prev,
  next,
  link,
}) {
  return (
    <>
      <div className="sub-main">
        <div className="title">
          <h1>{name}</h1>
        </div>
        <div className={`imgs ${imgsid}`}>
          {imgs.map((img, index) => (
            <img className={`img${index}`} key={index} src={img} />
          ))}
        </div>
        <div className="tech">
          {tech && (
            <p>
              <span>tech</span>
              {tech}
            </p>
          )}
        </div>
        {link && (
          <div className="tech">
            <span>Link: </span>
            <a
              rel="stylesheet"
              href={link}
              style={{
                color: "var(--text-color)",
                textDecoration: "underline",
              }}
            >
              {name}{" "}
            </a>
          </div>
        )}
        <div className="title">
          <h1>Description</h1>
        </div>
        <div id={descid} className="desc">
          {desc}
        </div>
      </div>
      <div className="buttons">
        <button className="btn">
          <a href={prev}> Previous </a>
        </button>
        <button className="btn a">
          <a href={next}> Next </a>
        </button>
      </div>
    </>
  );
}
