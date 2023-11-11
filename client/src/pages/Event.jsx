import React from 'react';

const Events = () => {
  return (
    <div className="h-full ">
      <div className="mx-auto">
        <div className="flex justify-center px-6 py-12">
          <div className="w-full xl:w-3/4 lg:w-11/12 flex">
            <div className="w-full h-auto bg-gray-400 dark:bg-gray-800 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg"
              style={{ backgroundImage: "url('https://images.pexels.com/photos/1192609/pexels-photo-1192609.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')" }}
            ></div>
            <div className="w-full lg:w-7/12 bg-white    rounded-lg lg:rounded-l-none">
            <h2 className="mb-4 text-center pt-12 left-1/2 font-serif text-3xl font-bold text-[#F9B530] md:mb-6 md:text-4xl">Create Your Event!</h2>
              <form className="px-8 pt-6 pb-8 mb-4 bg-white text-start  rounded">
              <div className="mb-4">
                  <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-black " htmlFor="Name  Events ">
                  Name  Event
                  </label>
                  <input
                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-black  border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="text"
                    type="text"
                    placeholder="Name  Events "
                  />
                </div>
                <div className="mb-4 md:flex md:justify-between">
                    
                  <div className="mb-4 md:mr-2 md:mb-0">
                    <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-black " htmlFor="firstName">
                      First Name
                    </label>
                    <input
                      className="w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-bl border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="firstName"
                      type="text"
                      placeholder="First Name"
                    />
                  </div>
                  <div className="md:ml-2">
                    <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-black " htmlFor="lastName">
                      Last Name
                    </label>
                    <input
                      className="w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-black  border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="lastName"
                      type="text"
                      placeholder="Last Name"
                    />
                  </div>
                </div>
                
                <div className="mb-4 md:flex md:justify-between">
                  <div className="mb-4 md:mr-2 md:mb-0">
                    <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-black " htmlFor="Presenter ">
                    Presenter *
                    </label>
                    <input
                      className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-black  border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="text"
                      type="text"
                      placeholder="Name "
                    />
                    
                  </div>
                  <div className="md:ml-2">
                    <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-black " htmlFor="Event location ">
                    Event location *
                    </label>
                    <input
                      className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-black  border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="text1"
                      type="text"
                      placeholder="Location"
                    />
                  </div>
                </div>

                <div className="mb-4 md:flex md:justify-between">
                  <div className="mb-4 md:mr-2 md:mb-0">
                    <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-black " htmlFor="Number ">
                    Number of seats *
                    </label>
                    <input
                      className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-black  border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="text"
                      type="number"
                      placeholder="Number "
                    />
                    
                  </div>
                  <div className="mb-4 md:mr-2 md:mb-0">
                    <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-black " htmlFor="price  ">
                    Ticket price *
                    </label>
                    <input
                      className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-black  border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="text3"
                      type="text"
                      placeholder="price  "
                    />
                   
                  </div>
                  
                </div>

                <div className="mb-4 md:flex md:justify-between">
                  
                <div className="md:ml-2">
                    <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-black " htmlFor="Event location ">
                    Event location *
                    </label>
                    <input
                      className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-black  border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="text1"
                      type="text"
                      placeholder="Location"
                    />
                  </div>

                  <div className="md:ml-2">
                    <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-black " htmlFor="Photo">
                     Photo  
                    </label>
                    <input
                      className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-black  border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="file"
                      type="file"
                      placeholder="A picture of the event"
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-black " htmlFor="Direction">
                  Direction  *
                  </label>
                  <input
                    className="w-full h-15 px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-black  border rounded shadow appearance-none focus:outline-none focus:shadow-outline "
                    id="text"
                    type="text"
                    placeholder="Direction of the event *"
                  />
                </div>
                <div className="mb-4">
                  <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-black " htmlFor="Additions">
                  Additions 
                  </label>
                  <input
                    className="w-full h-15 px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-black  border rounded shadow appearance-none focus:outline-none focus:shadow-outline "
                    id="text"
                    type="text"
                    placeholder="Addition"
                  />
                </div>
                <div className="mb-4">
                  <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-black " htmlFor="location">
                  link location * 
                  </label>
                  <input
                    className="w-full h-15 px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-black  border rounded shadow appearance-none focus:outline-none focus:shadow-outline "
                    id="text"
                    type="link"
                    placeholder="link location "
                  />
                </div>
                <div className="mb-6 text-center">
                  <button
                    className="w-full px-4 py-2 font-bold text-white bg-[#F9B530]  rounded-full hover:bg-[#F9B530]  dark:bg-[#F9B530]  dark:text-white dark:hover:bg-yellow-600  focus:outline-none focus:shadow-outline"
                    type="button"
                  >
                   submit
                  </button>
                </div>
                <hr className="mb-6 border-t" />
               
                
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
