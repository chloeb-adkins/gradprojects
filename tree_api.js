// include the express library
const express = require('express');

// create the server
const server = express();

// define your data
let treedata = [
  { "Date": "late Feb", "Weather": "", "Kanzan Stage": "" },
  { "Date": "10-Mar", "Weather": "37/51", "Kanzan Stage": "" },
  { "Date": "11-Mar", "Weather": "35/52", "Kanzan Stage": "" },
  { "Date": "12-Mar", "Weather": "43/66", "Kanzan Stage": "" },
  { "Date": "13-Mar", "Weather": "48/62", "Kanzan Stage": "" },
  { "Date": "14-Mar", "Weather": "46/74", "Kanzan Stage": "" },
  { "Date": "15-Mar", "Weather": "51/73", "Kanzan Stage": "" },
  { "Date": "16-Mar", "Weather": "47/61", "Kanzan Stage": "" },
  { "Date": "17-Mar", "Weather": "48*63", "Kanzan Stage": "" },
  { "Date": "18-Mar", "Weather": "35/53", "Kanzan Stage": "" },
  { "Date": "19-Mar", "Weather": "39/53", "Kanzan Stage": "" },
  { "Date": "20-Mar", "Weather": "34/57", "Kanzan Stage": "" },
  { "Date": "21-Mar", "Weather": "30/43", "Kanzan Stage": "" },
  { "Date": "22-Mar", "Weather": "29/46", "Kanzan Stage": "" },
  { "Date": "23-Mar", "Weather": "35/50", "Kanzan Stage": "" },
  { "Date": "24-Mar", "Weather": "31/48 Rain", "Kanzan Stage": "" },
  { "Date": "25-Mar", "Weather": "35/53", "Kanzan Stage": "" },
  { "Date": "26-Mar", "Weather": "39/53", "Kanzan Stage": "" },
  { "Date": "27-Mar", "Weather": "42/52", "Kanzan Stage": "" },
  { "Date": "28-Mar", "Weather": "44/51", "Kanzan Stage": "" },
  { "Date": "29-Mar", "Weather": "42/56", "Kanzan Stage": "" },
  { "Date": "30-Mar", "Weather": "41/62", "Kanzan Stage": "" },
  { "Date": "31-Mar", "Weather": "47/62", "Kanzan Stage": "" },
  { "Date": "1-Apr", "Weather": "49/54", "Kanzan Stage": "" },
  { "Date": "2-Apr", "Weather": "44/51 Rain", "Kanzan Stage": "" },
  { "Date": "3-Apr", "Weather": "41/45 Rain", "Kanzan Stage": "" },
  { "Date": "4-Apr", "Weather": "37/53 Rain", "Kanzan Stage": "" },
  { "Date": "5-Apr", "Weather": "38/50", "Kanzan Stage": "" },
  { "Date": "6-Apr", "Weather": "42/54", "Kanzan Stage": "" },
  { "Date": "7-Apr", "Weather": "43/60", "Kanzan Stage": "" },
  { "Date": "8-Apr", "Weather": "43/69", "Kanzan Stage": "" },
  { "Date": "9-Apr", "Weather": "55/80", "Kanzan Stage": "" },
  { "Date": "10-Apr", "Weather": "51/67", "Kanzan Stage": "" },
  { "Date": "11-Apr", "Weather": "50/61", "Kanzan Stage": "" },
  { "Date": "12-Apr", "Weather": "56/63 Storm", "Kanzan Stage": "" },
  { "Date": "13-Apr", "Weather": "48/54 sprinkles", "Kanzan Stage": "" },
  { "Date": "14-Apr", "Weather": "47/71 sprinkles", "Kanzan Stage": "" },
  { "Date": "15-Apr", "Weather": "47/71 sprinkles", "Kanzan Stage": 1 },
  { "Date": "16-Apr", "Weather": "47/71 sprinkles", "Kanzan Stage": 1 },
  { "Date": "17-Apr", "Weather": "47/71 sprinkles", "Kanzan Stage": 1 },
  { "Date": "18-Apr", "Weather": "", "Kanzan Stage": 1 },
  { "Date": "19-Apr", "Weather": "", "Kanzan Stage": 1 },
  { "Date": "20-Apr", "Weather": "", "Kanzan Stage": 1 },
  { "Date": "21-Apr", "Weather": "", "Kanzan Stage": 2 },
  { "Date": "22-Apr", "Weather": "", "Kanzan Stage": 2 },
  { "Date": "23-Apr", "Weather": "", "Kanzan Stage": 2 },
  { "Date": "24-Apr", "Weather": "", "Kanzan Stage": 2 },
  { "Date": "25-Apr", "Weather": "", "Kanzan Stage": 2 },
  { "Date": "26-Apr", "Weather": "", "Kanzan Stage": 2 },
  { "Date": "27-Apr", "Weather": "", "Kanzan Stage": 2 },
  { "Date": "28-Apr", "Weather": "", "Kanzan Stage": 2 },
  { "Date": "29-Apr", "Weather": "", "Kanzan Stage": 2 },
  { "Date": "30-Apr", "Weather": "", "Kanzan Stage": 2 },
  { "Date": "1-May", "Weather": "", "Kanzan Stage": 2 },
  { "Date": "2-May", "Weather": "", "Kanzan Stage": 2 },
  { "Date": "3-May", "Weather": "", "Kanzan Stage": 3 },
  { "Date": "4-May", "Weather": "", "Kanzan Stage": "" },
  { "Date": "5-May", "Weather": "", "Kanzan Stage": "" },
  { "Date": "6-May", "Weather": "", "Kanzan Stage": "" },
  { "Date": "7-May", "Weather": "", "Kanzan Stage": "" },
  { "Date": "8-May", "Weather": "", "Kanzan Stage": "" }
];

// route: shows data + allows queries
server.get('/', (req, res) => {
  console.log("got a request");

  const query = req.query;  // whatever comes after '?'
  let results = treedata;

  // allow filtering by field names
  for (const key in query) {
    results = results.filter(item => {
      const matchedKey = Object.keys(item).find(k =>
        k.toLowerCase().replace(/\s+/g, '') === key.toLowerCase().replace(/\s+/g, '')
      );
      if (matchedKey) {
        return String(item[matchedKey]).toLowerCase().includes(
          String(query[key]).toLowerCase()
        );
      }
      return false;
    });
  }

  // send formatted JSON to the browser
  res.send('<pre>' + JSON.stringify(results, null, 2) + '</pre>');
});

// start the server
server.listen(13001, () => {
  console.log("server running on port 13001");
});

