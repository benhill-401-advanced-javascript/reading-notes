# [Web Scraping](https://realpython.com/python-web-scraping-practical-introduction/)

Web scraping is the process of collecting and parsing raw data from the web using an automated process.
- Some websites forbid users from scraping their data with automated tools because,
  - the site has a good reason to protect its data. Google maps doesn't let you request too many results too quickly
  - making too many requests to a sites server may use up bandwidth, slowing down the site for other users and potentially overloading the server
- You should always check your target website's acceptable use policy to see if accessing the site with automated tools is a violation of its terms of use. 
## Legally it's a gray area to scrape without permission, click **[here](https://en.wikipedia.org/wiki/Web_scraping#Legal_issues)** for more details on where scraping could be deemed illegal

To me, web scraping sounds a lot like just making an API call, doesn't it? This article from [parsehub.com](https://www.parsehub.com/blog/web-scraping-vs-api/#:~:text=Web%20scraping%20allows%20you%20to,the%20data%20you'd%20want.&text=In%20these%20scenarios%2C%20web%20scraping,is%20available%20on%20a%20website.) was helpful to sort out the difference. I'll highlight some of my key takeaways below.

- The goal of web scraping and APIs is to access web data
- Web scraping is used via automated scraping software, APIs give you direct access to the data you'd want
  - you might be in a situation where there isn't an API to access data you want, or access to the API might be too limited or expensive
  - this is when you can use web scraping **as long as it is available on a particular website**
  - an example is Amazon, you could use a web scraper to extract product data as they don't provide an API for you to access the data

It sounds like I'll also need to create a blog on API integration in Python as well, which you can find [here]()

[Table of Contents](../README.md)
