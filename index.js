import cheerio from "cheerio";
import axios from "axios";
import { bot, sendMessage } from "./Discord.js";

export async function getData(channel, n) {
  const download = await axios.request({
    method: "GET",
    url: "https://geca.ac.in/default.aspx",
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36",
    },
  });

  const $ = cheerio.load(download.data);
  //   $("ul.scrollNews li a").each((index, element) => {
  //     console.log($(element).text());
  //   });
  let result = "";
  if (n <= 10 && n > 0) {
    $("ul.scrollNews li a")
      .slice(0, n)
      .each(function (index, element) {
        let text = $(element).text();
        let link =
          "https://geca.ac.in/" + encodeURIComponent($(element).attr("href"));
        result += `${text} - ${link}\n\n`;
      });
    sendMessage(result, channel);
  } else {
    sendMessage("Invalid input - cannot fetch " + n + " results", channel);
  }
}

bot();
