import React from 'react';
import '../Filecss/Distinationtop.css'
// Card component
const Card = ({ title, copy, button }) => (
  <div className="card">
    <div className="content">
      <h2 className="title">{title}</h2>
      <p className="copy">{copy}</p>
      <button className="btn">{button}</button>
    </div>
  </div>
);

// PageContent component
const PageContent = () => {
  // Define your array of cards
  const cards = [
    { title: 'Aqaba', copy: 'Check out all of these gorgeous mountain trips with beautiful views of, you guessed it, the mountains', button: 'View Trips' },
    { title: 'Amman', copy: 'Plan your next beach trip with these fabulous destinations', button: 'View Trips' },
    { title: 'Zarqa', copy: 'It\'s the desert you\'ve always dreamed of', button: 'Book Now' },
    { title: 'Irbid', copy: 'Seriously, straight up, just blast off into outer space today', button: 'Book Now' }
  ];

  return (
    <div>
        <h2 className="mb-4 text-center pt-12 left-1/2 font-serif text-3xl font-bold text-[#F9B530] md:mb-6 md:text-4xl">Top Destination</h2>
    <main className="page-content">
      {cards.map((card, index) => (
        <Card key={index} title={card.title} copy={card.copy} button={card.button} />
      ))}
    </main>
    </div>
  );
};

export default PageContent;
