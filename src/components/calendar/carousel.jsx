import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CalendarBox from "./reusableCalendarBox";

const CalendarCarousel = () => {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    vertical: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
    ],
  };

  return (
    <div className="">
      <Slider {...settings}>
        <CalendarBox
          day="16"
          month="Oct"
          title="Threshold — Undergraduate Exhibition"
          description="Thresholds: Fall 2024 Undergraduate ShowOctober 16 – November 4, 2024 Public re..."
          location="1156 Chapel Street"
          time="9:30 AM - 12:00 PM EST"
          color="bg-[#03346E]"
        />
        <CalendarBox
          day="05"
          month="Nov"
          title="Arts Library Pop-up"
          description="Hosted by the Haas Arts Library Tuesday, Nov. 5 11:30 am - 1:00 pm Crown Street stud"
          location="353 Crown Street"
          time="11:30 AM - 1:00 PM EST"
          color="bg-[#343434]"
        />
        <CalendarBox
          day="05"
          month="Nov"
          title="30-minute tour of the Robert B. Haas Arts Library"
          description="Hosted by the Haas Arts Library Tuesday, Nov. 53:00-3:30 pmHaas Arts LibraryRegi."
          location="Haas Arts Library"
          time="3:00 PM - 3:30 PM EST"
          color="bg-[#6EACDA]"
        />
        <CalendarBox
          day="05"
          month="Nov"
          title="MFA Crits in Photography"
          description="Photo critiques during the Fall 2024 semester are open to the SoA community and ..."
          location="1156 Chapel Street, New Haven"
          time="3:30 PM - 7:00 PM EST"
          color="bg-[#03346E]"
        />
        <CalendarBox
          day="06"
          month="Nov"
          title="Terrain Ahead film screening with directors Anna Kipervaser + Majd Alloush"
          description="Wednesday, November 61:30-3PMSchool of Architecture, Hastings Hall (enter at 190..."
          location="190 York St."
          time="1:30 PM - 3:00 PM EST"
          color="bg-[#343434]"
        />
        <CalendarBox
          day="06"
          month="Nov"
          title="Visiting Artist Lecture in Photography: Ocean Vuong"
          description="Ocean Vuong continues the Fall 2024 Visiting Artist Lectures in Photography with..."
          location="32 Edgewood Ave."
          time="3:30 PM - 5:30 PM EST"
          color="bg-[#6EACDA]"
        />
      </Slider>
    </div>
  );
};

export default CalendarCarousel;
