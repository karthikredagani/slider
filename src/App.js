import React, { useState, useEffect } from 'react';
import './App.css'; // Assuming you have some CSS for styling

const reviewsData = [
  {
    id: 1,
    image: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg',
    name: 'maria ferguson',
    title: 'office manager',
    quote: 'Fingerstache umami squid, kinfolk subway tile selvage tumblr man braid viral kombucha gentrify fanny pack raclette pok pok mustache.',
  },
  {
    id: 2,
    image: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
    name: 'john doe',
    title: 'regular guy',
    quote: 'Gastropub sustainable tousled prism occupy. Viral XOXO roof party brunch actually, chambray listicle microdosing put a bird on it paleo subway tile squid umami.',
  },
  {
    id: 3,
    image: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959121/person-1_aufeoq.jpg',
    name: 'peter smith',
    title: 'product designer',
    quote: 'Drinking vinegar polaroid street art echo park, actually semiotics next level butcher master cleanse hammock flexitarian ethical paleo.',
  },
  {
    id: 4,
    image: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
    name: 'susan andersen',
    title: 'the boss',
    quote: 'Marfa af yr 3 wolf moon kogi, readymade distillery asymmetrical seitan kale chips fingerstache cloud bread mustache twee messenger bag.',
  },
];

const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoSlide, setAutoSlide] = useState(true);

  useEffect(() => {
    let intervalId;
    if (autoSlide) {
      intervalId = setInterval(() => {
        goToNextReview();
      }, 3000);
    }
    return () => clearInterval(intervalId);
  }, [autoSlide, currentIndex]);

  const goToNextReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex === reviewsData.length - 1 ? 0 : prevIndex + 1));
  };

  const goToPrevReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? reviewsData.length - 1 : prevIndex - 1));
  };

  const handleAutoSlideToggle = () => {
    setAutoSlide((prevState) => !prevState);
  };

  return (
    <div className="App">
      <h1 id="review-heading">Reviews</h1>
      <div id="review-container">
        {reviewsData.map((review, index) => (
          <div key={review.id} className={index === currentIndex ? 'slide active' : 'slide'}>
            <img src={review.image} alt={review.name} />
            <h2>{review.name}</h2>
            <p>{review.title}</p>
            <p>{review.quote}</p>
          </div>
        ))}
        <button className="prev" onClick={goToPrevReview}>Previous</button>
        <button className="next" onClick={goToNextReview}>Next</button>
        <button className="auto-slide-toggle" onClick={handleAutoSlideToggle}>
          {autoSlide ? 'Stop Auto Slide' : 'Start Auto Slide'}
        </button>
      </div>
    </div>
  );
};

export default App;