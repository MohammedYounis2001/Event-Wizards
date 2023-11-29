import axios from "axios";
import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useCookies } from "react-cookie";
import Swal from "sweetalert2";

const EidtPorfile = ({ isOpen, onclose }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [error, setError] = useState("");
  const [user, setUser] = useState({
    // ... other properties
  });

  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/user");
        setUser(response.data[0]);
        console.log("in axios", response.data);
        setDataLoaded(true);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id, isOpen]); // Include 'id' and 'isOpen' as dependencies

  const handleSaveChanges = async (e) => {
    e.preventDefault();
    if (!error) {
      const updatedUser = {};

      updatedUser.id = user.id;
      if (user.name_event !== "") {
        updatedUser.name_event = user.name_event;
      }

      if (user.first_name !== "") {
        updatedUser.first_name = user.first_name;
      }

      if (user.last_name !== "") {
        updatedUser.last_name = user.last_name;
      }
      if (user.presenter !== "") {
        updatedUser.presenter = user.presenter;
      }

      if (user.event_location !== "") {
        updatedUser.event_location = user.event_location;
      }
      if (user.number_seats !== "") {
        updatedUser.number_seats = user.number_seats;
      }
      if (user.ticket_price !== "") {
        updatedUser.ticket_price = user.ticket_price;
      }
      if (user.photo !== "") {
        updatedUser.photo = user.photo;
      }
      if (user.idphoto !== "") {
        updatedUser.idphoto = user.idphoto;
      }
      if (user.date !== "") {
        updatedUser.date = user.date;
      }
      if (user.description !== "") {
        updatedUser.description = user.description;
      }
      if (user.additions !== "") {
        updatedUser.additions = user.additions;
      }
      if (user.link_location !== "") {
        updatedUser.link_location = user.link_location;
      }

      console.log(updatedUser);

      try {
        const response = await axios.put(
          `http://localhost:3001/user/1`,
          updatedUser
          
          // Use user state for updating
        );
        
        
          Swal.fire({
            icon: "success",
            title: "Event Update  Successfully!",
            text: "Your event has been update successfully.",
            timer: 3000,
            iconColor: "#FE7A00",
            confirmButtonColor:"#FE7A00"
          });
          navigate("/dashboard");

        // window.location.reload();

        
        // onclose(); // Close the modal after successful submission
        // console.log(response.data);
      } catch (error) {
        alert("Error updating Information");
      }
    }
  };

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Modal
        id="popup-modal"
        tabindex="-1"
        className="fixed top-0 right-0 left-0 z-50 justify-center items-center  md:inset-0  max-h-full overflow-y-scroll w-[60%] h-[80%]  ml-52 mt-16"
        onRequestClose={onclose}
        isOpen={isOpen}
      >
        <div className="flexd items-center justify-center mx-auto mt-2 px-2 ">
          <form className="bg-white mx-auto text-start shadow-md  shadow-orange-500  rounded px-8 pt-6 pb-8 mb-4 flex  justify-center flex-col my-2 Z-10 ">
            <button
              type="button"
              class="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="popup-modal"
              onClick={onclose}
            >
              <svg
                class="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span class="sr-only">Close modal</span>
            </button>
            <div class="p-4 md:p-5 text-center">
              <h3 className="pt-4 text-[#FE7A00]">
                {" "}
                Complete the purchase process
              </h3>

              <div className="mb-4">
                <label
                  className="block mb-2 text-sm font-bold text-gray-700 dark:text-black "
                  htmlFor="Name  Events "
                >
                  Name Event
                </label>
                <input
                  className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-black  border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="text"
                  type="text"
                  value={user.name_event}
                  onChange={(e) =>
                    setUser({ ...user, name_event: e.target.value })
                  }
                  placeholder={user.name_event}
                />
              </div>
              <div className="mb-4 md:flex md:justify-between">
                <div className="mb-4 md:mr-2 md:mb-0">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700 dark:text-black "
                    htmlFor="firstName"
                  >
                    First Name
                  </label>
                  <input
                    className="w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-bl border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="firstName"
                    type="text"
                    value={user.first_name}
                    onChange={(e) =>
                      setUser({ ...user, first_name: e.target.value })
                    }
                    placeholder={user.first_name}
                  />
                </div>
                <div className="md:ml-2">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700 dark:text-black "
                    htmlFor="lastName"
                  >
                    Last Name
                  </label>
                  <input
                    className="w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-black  border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="lastName"
                    type="text"
                    value={user.last_name}
                    onChange={(e) =>
                      setUser({ ...user, last_name: e.target.value })
                    }
                    placeholder={user.last_name}
                  />
                </div>
              </div>

              <div className="mb-4 md:flex md:justify-between">
                <div className="mb-4 md:mr-2 md:mb-0">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700 dark:text-black "
                    htmlFor="Presenter "
                  >
                    Presenter *
                  </label>
                  <input
                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-black  border  rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="text"
                    type="text"
                    value={user.presenter}
                    onChange={(e) =>
                      setUser({ ...user, presenter: e.target.value })
                    }
                    placeholder={user.presenter}
                  />
                </div>
                <div className="md:ml-2">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700 dark:text-black "
                    htmlFor="Event location "
                  >
                    Event location *
                  </label>
                  <input
                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-black  border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="text1"
                    type="text"
                    value={user.event_location}
                    onChange={(e) =>
                      setUser({ ...user, event_location: e.target.value })
                    }
                    placeholder={user.event_location}
                  />
                </div>
              </div>

              <div className="mb-4 md:flex md:justify-between">
                <div className="mb-4 md:mr-2 md:mb-0">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700 dark:text-black "
                    htmlFor="Number "
                  >
                    Number of seats *
                  </label>
                  <input
                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-black  border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="text"
                    type="number"
                    value={user.number_seats}
                    onChange={(e) =>
                      setUser({ ...user, number_seats: e.target.value })
                    }
                    placeholder={user.number_seats}
                  />
                </div>
                <div className="mb-4 md:mr-2 md:mb-0">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700 dark:text-black "
                    htmlFor="price  "
                  >
                    Ticket price *
                  </label>
                  <input
                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-black  border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="text3"
                    type="text"
                    value={user.ticket_price}
                    onChange={(e) =>
                      setUser({ ...user, ticket_price: e.target.value })
                    }
                    placeholder={user.ticket_price}
                  />
                </div>
              </div>

              <div className="mb-4 md:flex md:justify-between">
                <div className="mb-4">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700 dark:text-black "
                    htmlFor="Direction"
                  >
                    ID photo *
                  </label>
                  <input
                    className="w-full h-15 px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-black  border rounded shadow appearance-none focus:outline-none focus:shadow-outline "
                    id="file"
                    type="file"
                    
                    onChange={(e) =>
                      setUser({ ...user, photo: e.target.value })
                    }
                    
                  />
                </div>

                <div className="md:ml-2">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700 dark:text-black "
                    htmlFor="Photo"
                  >
                    Photo of the event
                  </label>
                  <input
                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-black  border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="file"
                    type="file"
                    
                    onChange={(e) =>
                      setUser({ ...user, idphoto: e.target.value })
                    }
                   
                  />
                </div>
              </div>
              <div className="md:ml-2">
                <label
                  className="block mb-2 text-sm font-bold text-gray-700 dark:text-black "
                  htmlFor="Event location "
                >
                  Date and Time *
                </label>
                <input
                  className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-black  border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="text1"
                  type="datetime-local"
                  value={user.date}
                  onChange={(e) => setUser({ ...user, date: e.target.value })}
                  placeholder={user.date}
                />
              </div>

              <div className="mb-4">
                <label
                  className="block mb-2 text-sm font-bold text-gray-700 dark:text-black "
                  htmlFor="Direction"
                >
                  Description *
                </label>
                <input
                  className="w-full h-15 px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-black  border rounded shadow appearance-none focus:outline-none focus:shadow-outline "
                  id="text"
                  type="text"
                  value={user.description}
                  onChange={(e) =>
                    setUser({ ...user, description: e.target.value })
                  }
                  placeholder={user.description}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block mb-2 text-sm font-bold text-gray-700 dark:text-black "
                  htmlFor="Additions"
                >
                  Additions
                </label>
                <input
                  className="w-full h-15 px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-black  border rounded shadow appearance-none focus:outline-none focus:shadow-outline "
                  id="text"
                  type="text"
                  value={user.additions}
                  onChange={(e) =>
                    setUser({ ...user, additions: e.target.value })
                  }
                  placeholder={user.additions}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block mb-2 text-sm font-bold text-gray-700 dark:text-black "
                  htmlFor="location"
                >
                  link location *
                </label>
                <input
                  className="w-full h-15 px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-black  border rounded shadow appearance-none focus:outline-none focus:shadow-outline "
                  id="text"
                  type="url"
                  value={user.link_location}
                  onChange={(e) =>
                    setUser({ ...user, link_location: e.target.value })
                  }
                  placeholder={user.link_location}
                />
              </div>

              {/* thisssss2  */}

              <div className="flex justify-end">
                <button
                  className="w-1/4 mr-3 p-2 bg-gray-50 text-black rounded-xl mt-2 "
                  type="clear"
                  // onClick={hendleSignUp}
                >
                  Cancel
                </button>
                <button
                  className="w-auto py-2 px-3 bg-[#FE7A00] text-white rounded-xl mt-2 "
                  onClick={handleSaveChanges}
                >
                  Save Changes
                </button>
              </div>
            </div>
          </form>
        </div>
      </Modal>
    </>
  );
};

export default EidtPorfile;
