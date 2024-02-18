import HeadingTitle from "../HeadingTitle";
import NewsCard from "../ui/newsCard";

const NewsSection = () => {
  const sampleDate = new Date();

  return (
    <div className="flex flex-col items-center gap-6 my-12 px-12">
      <HeadingTitle title="Mission Modi Latest News" className="text-center mx-auto" />
      <div className="flex flex-col gap-4 items-start justify-center my-6">
        <h2 className="font-semibold text-2xl">Latest News</h2>
        <div className="flex md:flex-row flex-col gap-6 w-full ">
          <NewsCard imglink="/images/temp.jpg" heading="6th Mega Blood Donation and eye checkup Camp" date={sampleDate} desc="The sixth mega blood donation camp is being held in Jalandhar City for the people of the city. Special doctors will be there to do eye checkups as well " location="Jalandhar" />
          <NewsCard imglink="/images/temp.jpg" heading="6th Mega Blood Donation and eye checkup Camp" date={sampleDate} desc="The sixth mega blood donation camp is being held in Jalandhar City for the people of the city. Special doctors will be there to do eye checkups as well " location="Jalandhar" />
          <NewsCard imglink="/images/temp.jpg" heading="6th Mega Blood Donation and eye checkup Camp" date={sampleDate} desc="The sixth mega blood donation camp is being held in Jalandhar City for the people of the city. Special doctors will be there to do eye checkups as well " location="Jalandhar" />
          {/* Repeat the above NewsCard component four times for the initial visible cards */}
        </div>
      </div>
      <div className="flex flex-col gap-4 items-start justify-center  ">
        <h2 className="font-semibold text-2xl">Latest News</h2>
        <div className="flex gap-6 md:flex-row flex-col w-full ">
          <NewsCard imglink="/images/temp.jpg" heading="6th Mega Blood Donation and eye checkup Camp" date={sampleDate} desc="The sixth mega blood donation camp is being held in Jalandhar City for the people of the city. Special doctors will be there to do eye checkups as well " location="Jalandhar" />
          <NewsCard imglink="/images/temp.jpg" heading="6th Mega Blood Donation and eye checkup Camp" date={sampleDate} desc="The sixth mega blood donation camp is being held in Jalandhar City for the people of the city. Special doctors will be there to do eye checkups as well " location="Jalandhar" />
          <NewsCard imglink="/images/temp.jpg" heading="6th Mega Blood Donation and eye checkup Camp" date={sampleDate} desc="The sixth mega blood donation camp is being held in Jalandhar City for the people of the city. Special doctors will be there to do eye checkups as well " location="Jalandhar" />
          {/* Repeat the above NewsCard component four times for the initial visible cards */}
        </div>
      </div>
    </div>
  );
}

export default NewsSection;
