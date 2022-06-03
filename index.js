// https://jsonkeeper.com/b/N9OS
// API - get:
/**
 * {
 *  tag: [{}],
 *  noTag: [{}]
 * }
 * 
 * {
    "title": "Landing page for secret project",
    "user": {
    "name": "Daniel Clifferton",
    "imageUrl": "https://randomuser.me/api/portraits/men/60.jpg"
    },
    "createdAt": "2022-02-20T23:17:27.163Z",
    "prime": boolean
    "tag": {
    "name": "Expiring",
    "color": "#FFBB33"
    }
 */

const express = require("express");
const moment = require("moment");
const { getDataFromApi, isPrime } = require("./helpers");
const app = express();
const port = 3000;

// TODO: get response from URL
// TODO: function to check if the date between current and created is Prime
// TODO: Flag prime for data
// TODO: send json response

app.get("/", async (req, res) => {
  try {
    const responseObj = {
      tag: [],
      noTag: [],
    };
    const apiData = await getDataFromApi();
    apiData.forEach((data) => {
      const daysDiff = moment().diff(data.createdAt, "days");
      data.daysDiff = daysDiff;
      data.isPrime = isPrime(daysDiff);
      if (data.tag) responseObj.tag.push(data);
      else responseObj.noTag.push(data);
    });
    res.send(responseObj);
  } catch (error) {
    console.log(error);
    res.status(400).send({ error });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
