import React from "react";
import { categories } from "../constants";
import fetchNews from "../lib/fetchNews";

async function Homepage() {
  //fetch the news data
  const news: NewsResponse = await fetchNews(categories.join(","));
  return (
    <div>
      Homepage
      {/**newslist news */}
      {/** */}
    </div>
  );
}
//59,06

export default Homepage;
