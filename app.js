const nodeFetch = require("node-fetch");
const key = require("./config.js");

let fn = "TIME_SERIES_INTRADAY";
let symbol = "IBM";
let interval = "15min"
let outputsize = "compact"
let url = `https://www.alphavantage.co/query?function=${fn}&symbol=${symbol}&interval=${interval}&outputsize=${outputsize}&apikey=${key.AV_key}`;

async function getData(url) {
  try {
    let posts = [];
    const response = await nodeFetch(url);
    const json = await response.json();
    let title = `Stock history for ${symbol} -- ${fn}\n`;
    /*
      posts.push(title);
        
      for (let x = 0; x < count; x++) {
        posts.push(json.data.children[x].data.title + "\n");
      }
      console.log(posts);
      */
    console.log(json);
    console.log("completed");
    return posts;
  } catch (error) {
    console.log(error);
  }
}

getData(url);