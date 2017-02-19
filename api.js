const rootURL = 'https://www.omdbapi.com';

exports.search = (query) => {
  let url = `${rootURL}?s=${query}`;
  return fetch(url)
    .then(res => res.json())
    .then(json => json.Search);
};

exports.view = (id) => {
  let url = `${rootURL}?i=${id}&plot=short&r=json`;
  return fetch(url)
    .then(res => res.json());
};