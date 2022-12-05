import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getNews, getComments } from "../redux/actions";

export const NewsPage = (props) => {
  const {id} = useParams();
  const [news, setNews] = useState({})
  const [comments, setComments] = useState([]);

  console.log(comments)

  useEffect(() => {
    getNews(id, setNews)
    getComments(id, setComments)
  }, []);
  
  return (
    <Fragment>
      {news && (
        <div className="container">
          <h3 className="fw-lighter mt-3">News:</h3>
          <div className="card">
            <div className="card-body">
              <h2 className="card-title fw-lighter">{news.title}</h2>
              <p className="card-text">{news.body}</p>
            </div>
            <div className="card-footer text-muted fw-lighter">
              <span><b>reactions:</b>  {news.reactions}</span> | <span><b>user:</b> {news.userId}</span> | <span><b>tags:</b>{news.tags}</span>
            </div>
          </div>
          <h4 className="fw-lighter mt-3">Comments:</h4>
          {comments && (
            <ul className="list-group mt-3">
              {comments.map(comment => (
                <li className="list-group-item news d-flex justify-content-start align-items-center" key = {comment.id}>
                  <div>
                    <p>{comment.body}</p>
                    <span className="text-muted fw-lighter"><b>user:</b> {comment.user.username}</span>
                  </div>
                </li>
              ))}
          </ul>
          )}
        </div>

      )}
    </Fragment>
  )
}