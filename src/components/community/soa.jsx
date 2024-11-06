import Slider from "react-slick";
import SoaContent from "./soaContent";
import NewsBulletin from "./newsbulletin";

const SoaCarousel = () => {
  const settings = {
    dots: true, // Shows dots for navigation
    infinite: true, // Enables infinite looping
    speed: 500, // Transition speed in ms
    slidesToShow: 1, // Show one item at a time
    slidesToScroll: 1, // Scroll one item at a time
    autoplay: true, // Automatically slides
    autoplaySpeed: 3000, // Autoplay interval in ms
    arrows: true, // Shows navigation arrows
  };

  return (
    <div className="p-10 bg-[#504c4c] w-full md:h-[460px] md:w-[500px] md:pt-14 px-14">
      <div>
        <Slider {...settings}>
          <SoaContent />
          <NewsBulletin
            title="Community Bulletin Board"
            subheading="From our friends at the Yale Center for Environmental Justice"
            shortText="The Yale Center for Environmental Justice is in the process of planning our fourth annual Global Environmental Justice Conference..."
            fullContent="The Yale Center for Environmental Justice is in the process of planning our fourth annual Global Environmental Justice Conference, with this year focusing on the theme of “Environmental Joy.” The conference aims to explore the ways in which environmental and climate justice and the communities engaged in that work generate joy... (rest of content here)"
          />
          <NewsBulletin
            title="Community Bulletin Board"
            subheading="Faculty/Alumni: Post Your Art Apprenticeship/Internship Opportunities for Undergraduates"
            shortText="The Yale Arts Apprenticeship Program is an initiative that connects Yale undergraduates, particularly those on financial aid..."
            fullContent="The Yale Arts Apprenticeship Program is an initiative that connects Yale undergraduates, particularly those on financial aid, with professional arts practitioners of any discipline. As an option within Yale’s Summer Experience Award (SEA) funding model, the Arts Apprenticeship must fulfill the same basic requirements. Additional details, as well as those specific to the Arts Apprenticeship are included below. Yale faculty, alumni, or other arts practitioners interested in featuring positions through the program should contact Yale’s Creative Careers advisor. Which Opportunities are Eligible? Must be at least 30 hours/week"
          />
        </Slider>
      </div>
    </div>
  );
};

export default SoaCarousel;
