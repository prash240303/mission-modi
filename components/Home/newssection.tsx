import HeadingTitle from "../HeadingTitle";
import NewsCard from "../ui/newsCard";

const LatestnewsData = [
  {
    imglink: "/images/newsCovers/himachal.jpg",
    heading: "REACHED JAMMU &KASHMIR MISSION",
    desc: "कश्मीर श्रीनगर 30/11/2023: मिशन मोदी राष्ट्रीय संघ ने आज केंद्र शासित प्रदेश जम्मू एंड कश्मीर",
    location: "Himachal Pradesh",
    date: new Date("2023-11-30T00:00:00Z") // Date object
  },
  {
    imglink: "/images/newsCovers/kashmir.jpg",
    heading: "MISSION MODI RASHTRIYA SANGH",
    desc: "हिमाचल प्रदेश शिमला :मिशन मोदी राष्ट्रीय संघ की प्रदेश सचिव श्रीमती गुड्डी भारती जी के",
    location: "Kashmir",
    date: new Date("2024-02-15T00:00:00Z") // Date object
  },
  {
    imglink: "/images/newsCovers/tamilnadu.jpg",
    heading: "MISSION MODI RASHTRIYA SANGH",
    desc: "हिमाचल प्रदेश शिमला :मिशन मोदी राष्ट्रीय संघ की प्रदेश सचिव श्रीमती गुड्डी भारती जी के",
    location: "Tamil Nadu",
    date: new Date("2024-02-15T00:00:00Z") // Date object
  },
];


const TrendingnewsData = [
  {
    imglink: "/images/newsCovers/pondicherry.jpg",
    heading: "Pondicherry पहुंचा मिशन मोदी",
    desc: "Pondicherry ::मिशन मोदी राष्ट्रीय संघ के कार्यकारी अध्यक्ष संजय ठाकुर ने पुड्डुचेरी में भी आम",
    location: "Pondicherry",
    date: new Date("2023-10-20T00:00:00Z") // Date object
  },
  {
    imglink: "/images/newsCovers/pondicherry2.jpg",
    heading: "MISSION MODI RASHTRIYA SANGH",
    desc: "Pondicherry 06/10/2023 आज सुबह पुडुचेरी के राज्यसभा सांसद श्री. सेल्वा गणपति और पांडिचेरी भाजपा के",
    location: "Pondicherry",
    date: new Date("2023-10-09T00:00:00Z") // Date object
  },
  {
    imglink: "/images/newsCovers/pondicherry3.jpg",
    heading: "MISSION MODI RASHTRIYA SANGH",
    desc: "Pondicherry 06/10/2023 आज सुबह पुडुचेरी के राज्यसभा सांसद श्री. सेल्वा गणपति जी से मिशन मोदी",
    location: "Pondicherry",
    date: new Date("2023-10-09T00:00:00Z") // Date object
  },
]

const NewsSection = () => {
  const sampleDate = new Date();


  return (
    <div className="flex flex-col items-center gap-6 my-12 md:px-12 px-4 mx-2">
      <HeadingTitle title="Mission Modi Latest News" className="text-center flex-wrap mx-auto" />
      <div className="flex flex-col gap-4  items-start justify-center my-6">
        <h2 className="font-semibold text-2xl">Latest News</h2>
        <div className="flex md:flex-row flex-col gap-6 w-full ">
          {/* <NewsCard imglink="/images/temp.jpg" heading="REACHED JAMMU &KASHMIR MISSION" date={sampleDate} desc="The sixth mega blood donation camp is being held in Jalandhar City for the people of the city. Special doctors will be there to do eye checkups as well " location="Jalandhar" />
          <NewsCard imglink="/images/temp.jpg" heading="6th Mega Blood Donation and eye checkup Camp" date={sampleDate} desc="The sixth mega blood donation camp is being held in Jalandhar City for the people of the city. Special doctors will be there to do eye checkups as well " location="Jalandhar" />
          <NewsCard imglink="/images/temp.jpg" heading="6th Mega Blood Donation and eye checkup Camp" date={sampleDate} desc="The sixth mega blood donation camp is being held in Jalandhar City for the people of the city. Special doctors will be there to do eye checkups as well " location="Jalandhar" />
          Repeat the above NewsCard component four times for the initial visible cards */}
          {LatestnewsData.map((news, index) => {
            return <NewsCard key={index} imglink={news.imglink} heading={news.heading} date={news.date} desc={news.desc} location={news.location} />
          })}
        </div>
      </div>
      <div className="flex flex-col gap-4 items-start justify-center  ">
        <h2 className="font-semibold text-2xl">Latest News</h2>
        <div className="flex gap-6 md:flex-row flex-col w-full ">
          {/* <NewsCard imglink="/images/temp.jpg" heading="6th Mega Blood Donation and eye checkup Camp" date={sampleDate} desc="The sixth mega blood donation camp is being held in Jalandhar City for the people of the city. Special doctors will be there to do eye checkups as well " location="Jalandhar" />
          <NewsCard imglink="/images/temp.jpg" heading="6th Mega Blood Donation and eye checkup Camp" date={sampleDate} desc="The sixth mega blood donation camp is being held in Jalandhar City for the people of the city. Special doctors will be there to do eye checkups as well " location="Jalandhar" />
          <NewsCard imglink="/images/temp.jpg" heading="6th Mega Blood Donation and eye checkup Camp" date={sampleDate} desc="The sixth mega blood donation camp is being held in Jalandhar City for the people of the city. Special doctors will be there to do eye checkups as well " location="Jalandhar" />
          Repeat the above NewsCard component four times for the initial visible cards */}

          {TrendingnewsData.map((news, index) => {
            return <NewsCard key={index} imglink={news.imglink} heading={news.heading} date={news.date} desc={news.desc} location={news.location} />
          })}
        </div>
      </div>
    </div>
  );
}

export default NewsSection;
