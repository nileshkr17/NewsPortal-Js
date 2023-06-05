const articles = [
  {
    source: {
      id: null,
      name: "Hindustan Times",
    },
    author: "Manshi Singh",
    title:
      "Terrifyingly strong geomagnetic storms hit the Earth; here are 5 - HT Tech",
    description:
      "Terrifyingly strong geomagnetic storms hit the Earth here are 5 The Sun has been horrifyingly active over the last few months and it has been sparking massive geomagnetic storms on Earth. There have been five significant geomagnetic storms in calendar year 20…",
    url: "https://tech.hindustantimes.com/web-stories/terrifyingly-strong-geomagnetic-storms-hit-the-earth-here-are-5-71685864372683.html",
    urlToImage:
      "https://images.hindustantimes.com/tech/img/2023/06/04/1600x900/earth-g9d3490d8c_1280_1685866946896_1685867036787.jpg/",
    publishedAt: "2023-06-04T08:25:35Z",
    content:
      "Photo Credit: NASA\r\n The Sun has been horrifyingly active over the last few months and it has been sparking massive geomagnetic storms on Earth.\r\nPhoto Credit: NASA\r\n  There have been five significan… [+1447 chars]",
  },
  {
    source: {
      id: "the-hindu",
      name: "The Hindu",
    },
    author: "The Hindu",
    title:
      "Science This Week | New exoplanet 13 times the mass of Jupiter found, Ozone layer recovery delayed and more - The Hindu",
    description: null,
    url: "https://www.thehindu.com/sci-tech/science/new-exoplanet-13-times-the-mass-of-jupiter-found-ozone-layer-recovery-delayed-and-more/article66930293.ece",
    urlToImage: null,
    publishedAt: "2023-06-04T08:21:00Z",
    content: null,
  },
  {
    source: {
      id: null,
      name: "News18",
    },
    author: "Navneet Vyasan",
    title:
      "Young Adulthood Window Best to Treat Schizophrenia, Autism: Study - News18",
    description:
      "If we can target the right windows in development and understand the signals at play, we can develop treatments that change the course of these brain disorders.",
    url: "https://www.news18.com/lifestyle/young-adulthood-window-best-to-treat-schizophrenia-autism-study-7995649.html",
    urlToImage:
      "https://images.news18.com/ibnlive/uploads/2023/04/untitled-design-2023-04-05t161950.663-168069183016x9.png",
    publishedAt: "2023-06-04T08:06:31Z",
    content:
      "Targeting and stimulating underperforming neurons in the dopamine system and increasing its activity in young adulthood could help treat neuropsychiatric disorders like schizophrenia and autism with … [+1611 chars]",
  },
  {
    source: {
      id: null,
      name: "NDTV News",
    },
    author: null,
    title:
      "Chandrababu Naidu Meets Amit Shah, Sets Off Buzz About Alliance For Polls - NDTV",
    description:
      "TDP was a part of NDA in 2014 but quit the ruling alliance in March 2018 before the 2019 elections on the issue of special status to Andhra Pradesh. However, both parties came together after the recent municipal elections in Port Blair.",
    url: "https://www.ndtv.com/india-news/telugu-desam-party-chief-chandrababu-naidu-meets-amit-shah-and-jp-nadda-may-have-alliance-for-telangana-polls-4092556",
    urlToImage:
      "https://c.ndtvimg.com/2019-10/ciq3ma1_chandrababu-naidu-twitter_625x300_12_October_19.jpg",
    publishedAt: "2023-06-04T07:18:27Z",
    content:
      "TDP was a part of NDA in 2014 but quit the ruling alliance in March 2018 before the 2019 elections.\r\nNew Delhi: Telugu Desam Party chief Chandrababu Naidu today met BJP president JP Nadda and Home Mi… [+713 chars]",
  },
  {
    source: {
      id: null,
      name: "NDTV News",
    },
    author: "Press Trust of India",
    title:
      '"IPL Changed Monopoly Of International Cricket On Players\' Time": Pat Cummins - NDTV Sports',
    description:
      "Pat Cummins believes cricket is going soccer's way and there will be a time when national teams will need clearances from franchises to play for the country.",
    url: "https://sports.ndtv.com/cricket/ipl-changed-monopoly-of-international-cricket-on-players-time-pat-cummins-4092670",
    urlToImage:
      "https://c.ndtvimg.com/2023-05/m1sk0keg_pat-cummins_625x300_10_May_23.jpg?im=FeatureCrop,algorithm=dnn,width=1200,height=675",
    publishedAt: "2023-06-04T07:02:26Z",
    content:
      "The IPL has ended the monopoly of international cricket on players' time, said Australia captain Pat Cummins, who feels going forward it will be a challenge to persuade players to prioritise national… [+3174 chars]",
  },
  {
    source: {
      id: null,
      name: "The Indian Express",
    },
    author: "Express Web Desk",
    title:
      "Ayodhya rally deferred, WFI chief Brij Bhushan to address UP BJP rally on June 11 - The Indian Express",
    description:
      "Singh had previously announced the postponement of his June 5 Jan Chetna Maharally in Ayodhya, citing police investigation into the allegations of sexual harassment against him by seven female wrestlers, including a minor.",
    url: "https://indianexpress.com/article/india/brij-bhushan-sharan-singh-up-bjp-rally-8644864/",
    urlToImage:
      "https://images.indianexpress.com/2023/06/brij-bhushan-rally.jpg",
    publishedAt: "2023-06-04T06:31:06Z",
    content:
      "Wrestling Federation of India (WFI) chief and Bharatiya Janata Party (BJP) Lok Sabha MP Brij Bhushan Singh will address a party rally in Katra area of Uttar Pradesh’s Kaiserganj, his constituency, on… [+1250 chars]",
  },
  {
    source: {
      id: null,
      name: "NDTV News",
    },
    author: null,
    title:
      "Odisha Train Accident Updates: Death Count In Tragedy Climbs To 288 - NDTV",
    description:
      "NDTV.com: India, Business, Bollywood, Cricket, Video and Breaking News",
    url: "https://www.ndtv.com/news",
    urlToImage: "https://cdn.ndtv.com/common/images/ogndtv.png",
    publishedAt: "2023-06-04T06:21:19Z",
    content:
      "If you are a climate change warrior or know someone who is doing incredible work in this space, send us your entries and we'll bring the most innovative stories to the world.",
  },
  {
    source: {
      id: null,
      name: "Hindustan Times",
    },
    author: "HT Entertainment Desk",
    title:
      "Aditi Rao Hydari poses for pic with rumoured boyfriend Siddharth during vacation - Hindustan Times",
    description:
      "Aditi Rao Hydari and her rumoured boyfriend Siddharth flew out of Mumbai. Now, in new pictures, there are seen holidaying together. See post here. | Bollywood",
    url: "https://www.hindustantimes.com/entertainment/bollywood/aditi-rao-hydari-rumoured-boyfriend-siddharth-vacation-pics-101685855831040.html",
    urlToImage:
      "https://www.hindustantimes.com/ht-img/img/2023/06/04/1600x900/Aditi_Rao_Hydari_1685856959251_1685856979543.jpg",
    publishedAt: "2023-06-04T06:00:27Z",
    content:
      "Actor and rumoured couple Aditi Rao Hydari and Siddharth are on a vacation together. They seem to have travelled to Rajasthan where they visited Bina Kak, who shared pictures with the two of them on … [+2767 chars]",
  },
  {
    source: {
      id: null,
      name: "Livemint",
    },
    author: "Livemint",
    title:
      "WWDC 2023: Apple may issue health warnings to some of its mixed reality headset users. Details inside | Mint - Mint",
    description:
      "Apple mixed reality headset may notify select consumers with certain health conditions that they should not buy or use the device due to the impact of augmented reality (AR) and virtual reality (VR) on health.",
    url: "https://www.livemint.com/technology/gadgets/wwdc-2023-apple-may-issue-health-warnings-to-some-of-its-mixed-reality-headset-users-details-inside-11685856697348.html",
    urlToImage:
      "https://www.livemint.com/lm-img/img/2023/06/04/600x338/APPLE_1685856896268_1685856896498.JPG",
    publishedAt: "2023-06-04T05:35:50Z",
    content:
      "Apples annual Worldwide Developer Conference (WWDC) is set to kickstart tomorrow, June 5 at 10:30pm IST. Major highlight of the event is expected to be the companys first mixed reality headset that A… [+1923 chars]",
  },
  {
    source: {
      id: "the-times-of-india",
      name: "The Times of India",
    },
    author: "TIMESOFINDIA.COM",
    title: "5 myths of ovarian cancer you believed to be true - Indiatimes.com",
    description:
      "Here are some myths around ovarian cancer that need to be debunked.",
    url: "https://timesofindia.indiatimes.com/life-style/health-fitness/health-news/5-myths-of-ovarian-cancer-you-believed-to-be-true/photostory/100710032.cms",
    urlToImage: "https://static.toiimg.com/photo/100710080.cms",
    publishedAt: "2023-06-04T05:30:00Z",
    content:
      "Fact: Dr. Mandeep Singh Malhotra, Director- Surgical Oncology, CK Birla Hospital (R), Delhi says, “It has become a common belief that only older women can be affected by ovarian cancer. While ovarian… [+579 chars]",
  },
  {
    source: {
      id: "the-times-of-india",
      name: "The Times of India",
    },
    author: "TIMESOFINDIA.COM",
    title:
      "WTC Final: Cameron Green hopes to bring in Rohit Sharma's calmness - Indiatimes.com",
    description:
      "Cricket News: Having spent valuable time with Rohit Sharma in the Mumbai Indians dugout during the IPL 2023, Australia star all-rounder Cameron Green aims to incorp",
    url: "https://timesofindia.indiatimes.com/sports/cricket/icc-world-test-championship/wtc-final-cameron-green-hopes-to-bring-in-rohit-sharmas-calmness/articleshow/100739192.cms",
    urlToImage:
      "https://static.toiimg.com/thumb/msid-100739230,width-1070,height-580,imgsize-54448,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
    publishedAt: "2023-06-04T05:25:00Z",
    content:
      "WTC Final: Time to reformat for Team IndiaAt the start of the year, there was a lengthy meeting at a five-star hotel in Mumbai where some BCCI office-bearers huddled with India captain Rohit Sharma, … [+99 chars]",
  },
  {
    source: {
      id: null,
      name: "Hindustan Times",
    },
    author: "HT Entertainment Desk",
    title:
      "Vicky and Sara's Zara Hatke Zara Bachke makes 12.7 cr in 2 days - Hindustan Times",
    description:
      "Zara Hatke Zara Bachke box office: Vicky Kaushal and Sara Ali Khan's romantic comedy directed by Laxman Utekar is aiming for a ₹22 crore-weekend. | Bollywood",
    url: "https://www.hindustantimes.com/entertainment/bollywood/zara-hatke-zara-bachke-box-office-collection-vicky-kaushal-sara-ali-khan-101685853996872.html",
    urlToImage:
      "https://www.hindustantimes.com/ht-img/img/2023/06/04/1600x900/zara_hatke_zara_bachke_1685854535628_1685854535904.jpg",
    publishedAt: "2023-06-04T05:23:31Z",
    content:
      "Zara Hatke Zara Bachke, starring Vicky Kaushal and Sara Ali Khan, is doing good business at the box office. The film showed decent growth on Saturday with collections of 7.20 crore, taking its two-da… [+2300 chars]",
  },
  {
    source: {
      id: "the-times-of-india",
      name: "The Times of India",
    },
    author: "ET Online and Agencies",
    title:
      "Foreign airlines reaped benefits of India's unhealthy domestic airline industry: Air India chief Campbell - The Economic Times",
    description:
      "The lack of a healthy domestic airline industry in India prevents the country from controlling its own destiny and instead foreign carriers enjoy the benefits of the growing Indian market, says Air India chief Campbell Wilson. Though Go First's insolvency is …",
    url: "https://economictimes.indiatimes.com/industry/transportation/airlines-/-aviation/india-deserves-to-have-non-stop-flights-to-more-overseas-destinations-air-india-ceo-campbell-wilson/articleshow/100739012.cms",
    urlToImage:
      "https://img.etimg.com/thumb/msid-100739103,width-1070,height-580,imgsize-69616,overlay-economictimes/photo.jpg",
    publishedAt: "2023-06-04T05:01:00Z",
    content:
      'India has, in some respect, not been able to control its own destiny as a consequence of not having a healthy domestic airline industry, according to Air India chief Campbell Wilson. "As a consequenc… [+3583 chars]',
  },
  {
    source: {
      id: null,
      name: "Etvbharat.com",
    },
    author: "ETV Bharat",
    title:
      "Study reveals how grief increases risk of heart problems - ETV Bharat",
    description:
      "A recent study has helped researchers figure out how grief increases the risk of heart problems",
    url: "https://www.etvbharat.com/english/sukhibhava/sukhibhava-news/study-reveals-how-grief-increases-risk-of-heart-problems/na20230604102523340340827",
    urlToImage:
      "https://etvbharatimages.akamaized.net/etvbharat/prod-images/1200-675-18670148-648-18670148-1685854463377.jpg",
    publishedAt: "2023-06-04T04:55:47Z",
    content:
      "A recent study has helped researchers figure out how grief increases the risk of heart problems.Washington [US]: The loss of a loved one may have a profound impact on both mental and physical health.… [+3674 chars]",
  },
  {
    source: {
      id: null,
      name: "Hindustan Times",
    },
    author: "Ritu Maria Johny",
    title:
      "Rahul Gandhi spotted on Times Square billboard ahead of New York visit. Watch - Hindustan Times",
    description:
      "Rahul Gandhi is set to address Indian Americans at Javits Center in New York on Sunday. | Latest News India",
    url: "https://www.hindustantimes.com/india-news/rahul-gandhi-us-visit-times-square-billboard-new-york-video-bharat-jodo-yatra-congress-101685852480312.html",
    urlToImage:
      "https://www.hindustantimes.com/ht-img/img/2023/06/04/1600x900/PTI06-02-2023-000252A-0_1685853072316_1685853099566.jpg",
    publishedAt: "2023-06-04T04:43:32Z",
    content:
      "Ahead of Rahul Gandhis visit to New York, a Times Square billboard displayed the Congress leader with visuals from Bharat Jodo Yatra. The disqualified Lok Sabha MP, currently on a six day tour of the… [+2166 chars]",
  },
  {
    source: {
      id: null,
      name: "NDTV News",
    },
    author: null,
    title:
      "World's Spy Chiefs Meet In Secret Conclave In Singapore: Report - NDTV",
    description:
      "Senior officials from about two dozen of the world's major intelligence agencies held a secret meeting on the fringes of the Shangri-La Dialogue security meeting in Singapore this weekend.",
    url: "https://www.ndtv.com/world-news/worlds-spy-chiefs-meet-in-secret-conclave-in-singapore-report-4092597",
    urlToImage:
      "https://c.ndtvimg.com/2023-06/iq4cao0s_spy-meeting-reuters_625x300_04_June_23.jpg",
    publishedAt: "2023-06-04T04:30:01Z",
    content:
      "Singapore: Senior officials from about two dozen of the world's major intelligence agencies held a secret meeting on the fringes of the Shangri-La Dialogue security meeting in Singapore this weekend,… [+3965 chars]",
  },
  {
    source: {
      id: null,
      name: "The Indian Express",
    },
    author: "The Indian Express",
    title:
      "‘Asia’s best middle-order batsman’: Virender Sehwag on Inzamam-ul-Haq - The Indian Express",
    description: null,
    url: "https://indianexpress.com/article/sports/cricket/asias-best-middle-order-batsman-virender-sehwag-on-inzamam-ul-haq-8644652/",
    urlToImage: null,
    publishedAt: "2023-06-04T04:05:15Z",
    content: null,
  },
  {
    source: {
      id: null,
      name: "The Express Tribune",
    },
    author: "Tribune",
    title: "Govt will not delay external payments: Dar - The Express Tribune",
    description:
      "Stresses country will take initiatives to promote IT and agriculture",
    url: "https://tribune.com.pk/story/2420120/govt-will-not-delay-external-payments-dar",
    urlToImage:
      "https://i.tribune.com.pk/media/images/ishaq-dar1668000563-0/ishaq-dar1668000563-0.jpg",
    publishedAt: "2023-06-04T03:27:09Z",
    content:
      "KARACHI:\r\nFinance Minister Ishaq Dar has reaffirmed that it is the government’s top priority that no delay occurs in external payment and it is promptly being done.\r\n“We will come out of the economic… [+1864 chars]",
  },
  {
    source: {
      id: null,
      name: "Livemint",
    },
    author: "Livemint",
    title:
      "‘Rahul Gandhi is a living Buddha’, says Indian-American entrepreneur | Mint - Mint",
    description:
      "Congress leader Rahul Gandhi discussed the impact of technology on common man and jobs during a meeting with Silicon Valley startup entrepreneurs. He expressed his appetite for technology and indicated that he is in favour of regulating technologies rather th…",
    url: "https://www.livemint.com/news/india/rahul-gandhi-is-a-living-buddha-says-indian-american-entrepreneur-shan-sankaran-founder-fixnix-11685847059386.html",
    urlToImage:
      "https://www.livemint.com/lm-img/img/2023/06/04/600x338/Rahul-Gandhi_1685847112071_1685847112303.jpg",
    publishedAt: "2023-06-04T03:19:16Z",
    content:
      'Rahul Gandhi has a deep understanding of technology, an Indian-American entrepreneur said who hosted the Congress leader for a meeting with Silicon Valley startups. "He never claims that he knows eve… [+1962 chars]',
  },
  {
    source: {
      id: null,
      name: "Hindustan Times",
    },
    author: "HT Tech",
    title:
      "NASA alert! 120-foot Asteroid 2023 JR2 set to buzz Earth TODAY at 27287 kmph - HT Tech",
    description:
      "Asteroid 2023 JR2 is set to make its closest approach to Earth at a blistering speed of 27287 km per hour, NASA warned.",
    url: "https://tech.hindustantimes.com/tech/news/nasa-alert-120-foot-asteroid-2023-jr2-set-to-buzz-earth-today-at-27287-kmph-71685847564044.html",
    urlToImage:
      "https://images.hindustantimes.com/tech/img/2023/06/04/1600x900/43cb2d66-f88a-11ec-b6f2-35645806a8b6_1659186212429_1659186212429_1685847651628.jpg",
    publishedAt: "2023-06-04T03:02:03Z",
    content:
      "NASA had launched the NEO Observations Program to fulfill its mission of detecting, monitoring, and studying Near-Earth Objects (NEOs) while identifying any potential threats to our planet including … [+2453 chars]",
  },
];

const userid = localStorage.getItem("userid");
const logout = document.getElementById("logout");
const id = document.getElementById("id");
if (userid == null) {
  logout.innerHTML = "Login";
  logout.addEventListener("click", () => {
    window.location.href = "./pages/login.html";
  });
} else {
  logout.innerHTML = "Logout";
  id.innerHTML = userid;
  logout.addEventListener("click", () => {
    localStorage.removeItem("userid");
    window.location.href = "./index.html";
  });
}

// fetch(
//   "https://newsapi.org/v2/top-headlines?country=in&apiKey=badd093afcdc454dabcf992c4debcaee",
//   {
//     method: "GET",
//   }
// )

    // console.log(data);
    // console.log(data.articles);
    const news_box = document.getElementById("article");
    const news = document.getElementById("news-container");
    for (let i = 0; i < 5; i++) {
      const content1 = document.createElement("div");
      content1.addEventListener("click", () => {
        window.location.href = `${articles[0].url}`;
      });
  
      content1.style.cursor = "pointer";
      content1.id = "content1";
      content1.innerHTML = articles[0].title;
      content1.style.color = "white";
      content1.style.fontSize = "20px";
      content1.style.fontWeight = "bold";
      content1.style.textAlign = "center";
      content1.style.paddingTop = "20px";
      content1.style.paddingBottom = "20px";
      content1.style.paddingLeft = "20px";
      content1.style.paddingRight = "20px";
      content1.style.backgroundImage = `url(${articles[0].urlToImage})`;
      content1.style.backgroundSize = "cover";

      const content2 = document.createElement("div");
      content2.addEventListener("click", () => {
        window.location.href = `${articles[0].url}`;
      });
      content2.style.cursor = "pointer";
      content2.id = "content2";
      content2.innerHTML = articles[1].title;
      content2.style.color = "white";
      content2.style.fontSize = "20px";
      content2.style.fontWeight = "bold";
      content2.style.textAlign = "center";
      content2.style.paddingTop = "20px";
      content2.style.paddingBottom = "20px";
      content2.style.paddingLeft = "20px";
      content2.style.paddingRight = "20px";
      content2.style.backgroundImage = `url(${articles[1].urlToImage})`;
      content2.style.backgroundSize = "cover";

      const content3 = document.createElement("div");
      content3.addEventListener("click", () => {
        window.location.href = `${articles[2].url}`;
      });
      content3.style.cursor = "pointer";
      content3.id = "content3";
      content3.innerHTML = articles[2].title;
      content3.style.color = "white";
      content3.style.fontSize = "20px";
      content3.style.fontWeight = "bold";
      content3.style.textAlign = "center";
      content3.style.paddingTop = "20px";
      content3.style.paddingBottom = "20px";
      content3.style.paddingLeft = "20px";
      content3.style.paddingRight = "20px";

      content3.style.backgroundImage = `url(${articles[2].urlToImage})`;
      content3.style.backgroundSize = "cover";

      const content4 = document.createElement("div");
      content4.addEventListener("click", () => {
        window.location.href = `${articles[3].url}`;
      });
      content4.style.cursor = "pointer";
      content4.id = "content4";
      content4.innerHTML = articles[3].title;
      content4.style.color = "white";
      content4.style.fontSize = "20px";
      content4.style.fontWeight = "bold";
      content4.style.textAlign = "center";
      content4.style.paddingTop = "20px";
      content4.style.paddingBottom = "20px";
      content4.style.paddingLeft = "20px";
      content4.style.paddingRight = "20px";

      content4.style.backgroundImage = `url(${articles[3].urlToImage})`;
      content4.style.backgroundSize = "cover";

      const content5 = document.createElement("div");
      content5.addEventListener("click", () => {
        window.location.href = `${articles[4].url}`;
      });
      content5.style.cursor = "pointer";
      content5.id = "content5";
      content5.innerHTML = articles[4].title;
      content5.style.color = "white";
      content5.style.fontSize = "20px";
      content5.style.fontWeight = "bold";
      content5.style.textAlign = "center";
      content5.style.paddingTop = "20px";
      content5.style.paddingBottom = "20px";
      content5.style.paddingLeft = "20px";
      content5.style.paddingRight = "20px";

      content5.style.backgroundImage = `url(${articles[4].urlToImage})`;
      content5.style.backgroundSize = "cover";

      news.append(content1, content2, content3, content4, content5);
    }

    articles.forEach(item => {
      console.log(item.url);
      news_box.innerHTML += `
        <div id="top-article">
        <a href="${item.url}">
        <img src="${item.urlToImage}" id="image">
        </a>
        <h3 id="title">"${item.title}"</h3>
        <p id="date">Updated at "${item.publishedAt}"</p>
        <p id="desc">"${item.description}"</p>
        </div>`;
      news_box.style.gap = "20px";
      news_box.style.padding = "20px";
    });


let date = document.getElementById("date");
let time = document.getElementById("time");
let loc = document.getElementById("Location");

date.innerText = new Date().toDateString();
time.innerText = new Date().toLocaleTimeString();
// weather.innerText = new Date().toLocaleTimeString();
navigator.geolocation.watchPosition(
  function (position) {
    fetch(
      `https://geocode.xyz/${position.coords.latitude},${position.coords.longitude}?geoit=json`
    )
      .then(response => response.json())
      .then(data => {
        loc.innerText = data.city;
      })
      .catch(err => {
        console.error(err);
      });
  },
  function (error) {
    loc.innerText = "Location not found";
    console.log(error);
  }
);
