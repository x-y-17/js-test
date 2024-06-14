const axios = require("axios");
const cheerio = require("cheerio");

// 定义要爬取的网站 URL
const url =
  "https://www.yonyou.com/subject/gd-yyBIP?utm_source=bdpz&utm_campaign=red&utm_content=Title&utm_term=Title1";

// 使用 axios 发起 HTTP 请求并获取网页内容
axios
  .get(url)
  .then((response) => {
    // 使用 cheerio 加载 HTML 内容
    const $ = cheerio.load(response.data);
    console.log("🚀 ~ .then ~ $:", $);

    // 在这里编写你的爬取逻辑
    // 例如，查找页面上的特定元素并提取信息
    const pageTitle = $("title").text();
    console.log("页面标题:", pageTitle);

    // 或者遍历页面上的链接
    $("a").each((index, element) => {
      const link = $(element).attr("href");
      console.log("链接:", link);
    });

    // 可以继续在这里添加其他的爬取逻辑
  })
  .catch((error) => {
    console.error("发生错误:", error);
  });
