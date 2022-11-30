import React, { Fragment, useEffect } from "react";
import { News } from "../components/News";

export const Main = () => {

  const [listNews, setListNews] = React.useState([]);

  useEffect(() => {
    getNews();
  }, [])

  useEffect(() => {
    const interval = setInterval(() => getNews() , 60000);
    return () => clearInterval(interval);
  }, [])
  
  const onClickUpdate = () => {
    getNews();
  } 


  function getNews() {
    fetch('https://dummyjson.com/posts?_limit=100')
    .then(responce => responce.json())
    .then((res) => setListNews(res.posts))
  }

  return (
    <Fragment>
      <div className="container"><button className="mb-3 btn btn-secondary" onClick={onClickUpdate}>Update</button></div>
      
      <News listNews={listNews}/>
    </Fragment>
  )
}