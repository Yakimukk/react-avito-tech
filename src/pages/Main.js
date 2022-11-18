import React, { Fragment } from "react";
import { News } from "../components/News";

export const Main = () => {
  const listNews = new Array(3).fill('').map((_, i) => ({id: i, title: 'Название новости', rating: 'Рейтинг', author: 'Автор', data: 'Дата'}))

  return (
    <Fragment>
      <News listNews={listNews}/>
    </Fragment>
  )
}