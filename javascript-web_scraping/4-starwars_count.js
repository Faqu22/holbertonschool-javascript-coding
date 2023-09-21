#!/usr/bin/node
const request = require('request');

request.get(process.argv[2], (err, response) => {
  if (err) {
    console.log(err);
    return;
  }
  let count = 0;
  const data = JSON.parse(response.body);
  for (const movie in data.results) {
    for (const char in data.results[movie].characters) {
      if (data.results[movie].characters[char] == 'https://swapi-api.hbtn.io/api/people/18/') {
        count = count + 1;
      }
    }
  }
  console.log(count);
});
