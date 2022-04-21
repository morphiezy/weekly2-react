import { useEffect, useState } from "react";
import { useNavigate, useMatch, useParams } from "react-router-dom";
import style from "./style.module.css";



const { container_article, frame_project } = style;

const Article = ({source}) => {
  
 
  const {title, description, picture, live_project} = source;
  
  return (
    <div className={container_article}>
      <h1 className="fs-3 fw-bold lh-base">{ title }</h1>
      <p className="fs-6 lh-lg mt-3">{ description }</p>
      <img src={picture} className="img-fluid mt-4 mb-5" alt="content-img" />

      <div className="mt-5" id="container_live_project">
        <h1 className="fs-3 fw-bold lh-base">Preview Task { title }</h1>
        <iframe
          key={title}
          src={live_project}
          title={title}
          className={`mt-5 border rounded-3 ${frame_project}`}
          ssandbox="allow-same-origin allow-scripts allow-popups allow-forms"></iframe>
      </div>
    </div>
  );
};

export default Article;


/*
  <h1 className="fs-3 fw-bold lh-base">Versioning Control & Branch Management</h1>
  <img src="https://149695847.v2.pressablecdn.com/wp-content/uploads/2021/12/GitHub-code-search_banner.png" className="img-fluid mt-4" alt="content-img" />
  <p className="fs-6 lh-base mt-5">
    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
  </p>
  <iframe
    src="https://codesandbox.io/embed/praktikum-css-2-se6po4?fontsize=14&hidenavigation=1&theme=dark"
    title="Praktikum CSS 2"
    className={`mt-5 ${frame_project}`}></iframe>
*/