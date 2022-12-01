export const getNews = () => {
  return fetch('https://dummyjson.com/posts?_limit=100')
  .then(responce => responce.json())
  .then((res) => setListNews(res.posts))
};