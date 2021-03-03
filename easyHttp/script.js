// eslint-disable-next-line no-undef
const http = new easyHTTP();

// Get posts/retrieve data

http.get('https://jsonplaceholder.typicode.com/posts', function (err, posts) {
  if (err) {
    console.log(err);
  } else {
    console.log(posts);
  }
});

// Get single post

http.get('https://jsonplaceholder.typicode.com/posts/1', function (err, post) {
  if (err) {
    console.log(err);
  } else {
    console.log(post);
  }
});

// Make post request

const data = {
  title: 'Custom Post',
  body: 'This is a custom post body',
};
// Create post
http.post(
  'https://jsonplaceholder.typicode.com/posts',
  data,
  function (err, post) {
    if (err) {
      console.log(err);
    } else {
      console.log(post);
    }
  }
);

// Make PUT request/updating data

http.put(
  'https://jsonplaceholder.typicode.com/posts/1',
  data,
  function (err, post) {
    if (err) {
      console.log(err);
    } else {
      console.log(post);
    }
  }
);

// Make DELETE request/deleting data

http.delete(
  'https://jsonplaceholder.typicode.com/posts/1',
  function (err, response) {
    if (err) {
      console.log(err);
    } else {
      console.log(response);
    }
  }
);
