// FlipCard.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../Component/Filecss/Detail.css'
import { Link, useParams } from 'react-router-dom';
import Related from '../Component/Website/Related';


const FlipCard = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [blogPost, setBlogPost] = useState(null);
  const [cart, setCart] = useState([]);
  const [favorite, setFavorite] = useState([]);
  const [error, setError] = useState([]);
  const [blogImages, setBlogImages] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // const addToPayment = async () => {
  //   try {
  //     const response = await axios.post('http://localhost:5000/add-to-cart', {
  //       "quantity" : quantity,
  //       "user_id" : 5,
  //       "product_id" :id,
  //         });
  //     if (response.status === 201) {
  //       alert("Added to cart successfully!");
  //       setCart([...cart, blogPost]);
  //       console.log ('hi')
  //     }
  //   } catch (error) {
  //     console.log("Error adding to cart:", error);
      
  //   }
  // };


  useEffect(() => {
    axios.get(`http://localhost:3004/posts/${id}`)
      .then((response) => {
        setBlogPost(response.data);
        // setBlogImages(response.data.images);
        console.log(response.data); 
      })
      .catch((error) => {
        console.error("Error fetching product:", error);
        setError("An error occurred. Please try again.");
      });
  }, [id]);

  console.log(blogPost); 

  if (!blogPost) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {/* Flip Card Container 1 */}
      <div className="flip-card-container-custom" style={{ "--hue": 40 }}>
        <div className="flip-card-custom">
          <div className="card-front-custom">
            <figure>
              <div className="img-bg-custom"></div>
              <img
                src={blogPost.image_url}
                alt={blogPost.product_name}
              />
              <figcaption className='text-[#FE7A00]'>{blogPost.name_event}</figcaption>
            </figure>
            <ul className='uldetail text-start'>
              <li className='list' > <label className='text-start text-[#FE7A00]'>Name Event : </label>{blogPost.name_event}</li>
              <li className='list'><label className='text-start text-[#FE7A00]'>Presenter : </label>{blogPost.presenter}</li>
              <li className='list'><label className='text-start text-[#FE7A00]'>Number_Seats : </label>{blogPost.number_seats}</li>
              <li className='list'><label className='text-start text-[#FE7A00]'>Description : </label>{blogPost.description}</li>
              <li className='list'><label className='text-start text-[#FE7A00]'>Ticket_Price : </label>{blogPost.ticket_price}</li>   
            </ul>
          </div>
          <div className="card-back-custom">
            <figure>
              <div className="img-bg-custom"></div>
              <img
                src={blogPost.image_url}
                alt="Brohm Lake"
              />
            </figure>
            <Link to ="/ticket">
            <button className='buttonticket text-[#FE7A00]'>Pay Ticket</button></Link>
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
      <div className='flex justify-between '>
<div className='text-start pt-12 px-20 w-1/2'><label className='text-start text-[#FE7A00]'>Description : </label><p  className='pt-3 '>{blogPost.description} Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere cum odio blanditiis tenetur, facilis ex eaque molestias. Amet unde hic quaerat, cumque maiores accusamus itaque dignissimos inventore enim pariatur obcaecati.</p></div>
 <div className='text-center pt-12 pr-80'>
 <Link to="/payment">
              <button
                // onClick={() => {
                //   addToCart(product.product_id);
                // }}
                className=" flex items-center justify-center rounded-full bg-[#FE7A00] px-1 py-2.5 text-center text-sm font-medium text-white hover:bg-orange-700  "
              >
                  <svg class="w-10 h-10" xmlns="http://www.w3.org/2000/svg"
                   width="24"
                    height="24" 
                   viewBox="0 0 24 24" 
                   stroke-width="2" 
                   stroke="currentColor"
                    fill="none" 
                    stroke-linecap="round"
                     stroke-linejoin="round"> 
                    
                      <path d="M5 5h14a2 2 0 0 1 2 2v3a2 2 0 0 0 0 4v3a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-3a2 2 0 0 0 0 -4v-3a2 2 0 0 1 2 -2" /></svg>
                {/* Add to cart */}
              </button>
              </Link>
              </div>
              </div>
      <Related/>
     
     
     

     
      
    </>
  );
};

export default FlipCard;
