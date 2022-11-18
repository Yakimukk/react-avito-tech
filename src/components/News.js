import React from "react";

export const News = ({listNews}) => (
  <ul className="list-group">
    {listNews.map(news => (
      <li className="list-group-item news" key = {news.id}>
        <div>
          <span>{news.id + 1} </span>
          <a href="">{news.title}</a>
        </div>
        <div>
            <span>{news.rating}</span> | <span>{news.author}</span> | <span>{news.data}</span>
        </div>
      </li>
    ))}
  </ul>
)