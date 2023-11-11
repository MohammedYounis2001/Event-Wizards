import React from 'react'
import '../Filecss/Top.css'

function Top() {
  return (
    <div><>
   
        <h2 className="mb-4 text-center pt-12 left-1/2 font-serif text-3xl font-bold text-[#F9B530] md:mb-6 md:text-4xl">Top Event</h2>
        
    
    <link
      href="https://fonts.googleapis.com/css?family=Montserrat:400,700"
      rel="stylesheet"
    />
    <section className="hero-section">
      <div className="card-grid">
        <a className="card" href="#">
          <div
            className="card__background"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1557177324-56c542165309?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80)"
            }}
          />
          <div className="card__content">
            <p className="card__category">Category</p>
            <h3 className="card__heading">Example Card Heading</h3>
          </div>
        </a>
        <a className="card" href="#">
          <div
            className="card__background"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1557187666-4fd70cf76254?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60)"
            }}
          />
          <div className="card__content">
            <p className="card__category">Category</p>
            <h3 className="card__heading">Example Card Heading</h3>
          </div>
        </a>
        <a className="card" href="#">
          <div
            className="card__background"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1556680262-9990363a3e6d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60)"
            }}
          />
          <div className="card__content">
            <p className="card__category">Category</p>
            <h3 className="card__heading">Example Card Heading</h3>
          </div>
        </a>
        <a className="card" href="#">
          <div
            className="card__background"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1557004396-66e4174d7bf6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60)"
            }}
          />
          <div className="card__content">
            <p className="card__category">Category</p>
            <h3 className="card__heading">Example Card Heading</h3>
          </div>
        </a>
        <div></div>
      </div>
    </section>
  </>
  </div>
  )
}

export default Top