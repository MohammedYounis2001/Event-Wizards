// FlipCard.js
import React from 'react';
import '../Component/Filecss/Detail.css'

const FlipCard = () => {
  return (
    <>
      {/* Flip Card Container 1 */}
      <div className="flip-card-container-custom" style={{ "--hue": 40 }}>
        <div className="flip-card-custom">
          <div className="card-front-custom">
            <figure>
              <div className="img-bg-custom"></div>
              <img
                src="https://images.unsplash.com/photo-1486162928267-e6274cb3106f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                alt="Brohm Lake"
              />
              <figcaption>Brohm Lake</figcaption>
            </figure>
            <ul className='uldetail'>
              <li className='list'>Detail 1</li>
              <li className='list'>Detail 2</li>
              <li className='list'>Detail 3</li>
              <li className='list'>Detail 4</li>
              <li className='list'>Detail 5</li>
            </ul>
          </div>
          <div className="card-back-custom">
            <figure>
              <div className="img-bg-custom"></div>
              <img
                src="https://images.unsplash.com/photo-1486162928267-e6274cb3106f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                alt="Brohm Lake"
              />
            </figure>
            <button className='buttonticket'>Book</button>
            <div className="design-container-custom">
              <span className="design-custom design--1-custom"></span>
              <span className="design-custom design--2-custom"></span>
              <span className="design-custom design--3-custom"></span>
              <span className="design-custom design--4-custom"></span>
              <span className="design-custom design--5-custom"></span>
              <span className="design-custom design--6-custom"></span>
              <span className="design-custom design--7-custom"></span>
              <span className="design-custom design--8-custom"></span>
            </div>
          </div>
        </div>
      </div>

     
     
     

     
      
    </>
  );
};

export default FlipCard;
