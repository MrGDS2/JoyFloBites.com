import AwesomeSlider from 'react-awesome-slider';
import image1 from '../../Images/cookie_flo_review2.png';
import image2 from '../../Images/cookie_flo_review_daddy.jpg';
import image3 from '../../Images/cookie_flo_review3.png';
import FadeIn from 'react-fade-in';
import 'react-awesome-slider/dist/styles.css';


const CommunityPage = () => {


  const slider = (
    <FadeIn transitionDuration="4000">
      <AwesomeSlider className="mb-1" >
        <div data-src={image1} />
        <div data-src={image2} />
        <div data-src={image3} />
      </AwesomeSlider>
    </FadeIn>

  );


  return (
    slider
  )


}

export default CommunityPage;

