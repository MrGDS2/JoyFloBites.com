import AwesomeSlider from 'react-awesome-slider';
import FadeIn from 'react-fade-in';
import 'react-awesome-slider/dist/styles.css';


const ReviewPage = () => {


  const slider = (
    <FadeIn transitionDuration="4000">
      <AwesomeSlider className="mb-1" >
        <div data-src={'https://firebasestorage.googleapis.com/v0/b/joyflobites.appspot.com/o/Reviews%2Fcookie_flo_review2.png?alt=media&token=3c2adff5-7118-459b-b857-29c0172483af'} id="reviews"/>
        <div data-src={'https://firebasestorage.googleapis.com/v0/b/joyflobites.appspot.com/o/Reviews%2Fcookie_flo_review_daddy.jpg?alt=media&token=af8b8800-12c4-47ff-a985-d0b882a4556d'} />
        <div data-src={'https://firebasestorage.googleapis.com/v0/b/joyflobites.appspot.com/o/Reviews%2Fcookie_flo_review3.png?alt=media&token=5dc08f82-d2b5-492e-9fc1-220a30ca5e89'} />
      </AwesomeSlider>
    </FadeIn>

  );


  return (
    slider
  )


}

export default ReviewPage;

