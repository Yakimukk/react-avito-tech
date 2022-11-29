import React, { Fragment, useEffect } from "react";
import { News } from "../components/News";

export const Main = () => {

  const [listNews, setListNews] = React.useState([]);

  useEffect(() => {
    getNews();
  }, [])
  
  const onClickUpdate = () => {
    getNews();
  } 

  //setInterval(() => getNews(), 60000);

  function getNews() {
    fetch('https://dummyjson.com/posts?_limit=100')
    .then(responce => responce.json())
    .then((res) => setListNews(res.posts))
  }

  return (
    <Fragment>
      <button className="btn btn-secondary" onClick={onClickUpdate}>Update</button>
      <News listNews={listNews}/>
    </Fragment>
  )
}