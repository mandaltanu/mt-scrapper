import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import * as cheerio from "cheerio";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { url } = req.query;

  if (!url || typeof url !== "string") {
    return res.status(400).json({ error: "Invalid URL" });
  }

  try {
    const { data } = await axios.get(url, { timeout: 10000 });
    const $ = cheerio.load(data);

    const title =
      $("title").text() || $('meta[property="og:title"]').attr("content") || "";
    const description =
      $('meta[name="description"]').attr("content") ||
      $('meta[property="og:description"]').attr("content") ||
      "";
    const image =
      $('meta[property="og:image"]').attr("content") ||
      $('meta[name="twitter:image"]').attr("content") ||
      "";

    res.status(200).json({
      title,
      description,
      image,
      meta: {
        ogTitle: $('meta[property="og:title"]').attr("content") || "",
        ogDescription: $('meta[property="og:description"]').attr("content") || "",
        ogImage: $('meta[property="og:image"]').attr("content") || "",
        twitterCard: $('meta[name="twitter:card"]').attr("content") || "",
        twitterTitle: $('meta[name="twitter:title"]').attr("content") || "",
        twitterDescription:
          $('meta[name="twitter:description"]').attr("content") || "",
      },
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to scrape website" });
  }
}
