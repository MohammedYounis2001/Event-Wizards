import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";

function ProfilePrivate() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [user, setUser] = useState({
   
    // ... other properties
  });

  const [headers, setHeaders] = useState();
  const [cookie, setCookie, removeCookie] = useCookies(["token"], {
    token: null,
  });
  console.log(useCookies(["token"]));

  useEffect(() => {
    if (cookie.token == undefined) {
      setUser(true);
    } else {
      setUser(false);
    }
  }, []);

  useEffect(() => {
    console.log("Fetching data...");
    console.log("Headers:", headers);
    
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3004/Login`, {
          headers: headers,
        });
        console.log("Response:", response.data);
        setUser(response.data[0]);
      } catch (error) {
        console.error("Error:", error);
      }
    };
  
    fetchData();
  }, []);
  

  console.log(user);  // handle image uploading
  const [photoName, setPhotoName] = useState(null);
  const [photoPreview, setPhotoPreview] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  // const [oldPassword, setOldPassword] = useState('');
  // const [newPassword, setNewPassword] = useState('');
  // const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState("");
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setImageFile(e.target.files[0]);
    if (file) {
      setPhotoName(file.name);

      const reader = new FileReader();
      reader.onload = (e) => {
        setPhotoPreview(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSelectPhoto = () => {
    // Trigger file input click using useRef
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };


  const handleImageChange = (e) => {
    setSelectedImage(e.target.files[0]);
  };
  // end handle image uploading

  // handle changes made
  const handleSaveChanges = async (e) => {
    e.preventDefault();
    if (!error) {
      const updatedUser = {};

      updatedUser.id = user.id;
      if (user.first_name != "") {
        updatedUser.first_name = user.first_name;
      }

      if (user.last_name != "") {
        updatedUser.last_name = user.last_name;
      }

      if (user.email != "") {
        updatedUser.email = user.email;
      }
      if (user.iban != "") {
        updatedUser.iban = user.iban;
      }

      if (user.phone != "") {
        updatedUser.phone = user.phone;
      }
      if (user.city != "") {
        updatedUser.city = user.city;
      }
      if (user.zip != "") {
        updatedUser.zip = user.zip;
      }
      
      updatedUser.profile_image_name = fileInputRef.current
      
      

      // if(oldPassword !== '' && newPassword !== '' && confirmPassword !== ''){
      //   if(oldPassword === user.password){
      //     if(newPassword === confirmPassword){
      //       updatedUser.password = newPassword;
      //     }else{
      //       setError("Password doesn't match");
      //     }
      //   }else{
      //     setError("The password you've entered doesn't match the old password");
      //   }
      // }

      updatedUser.profile_image_name = imageFile;
      console.log(updatedUser);
      try {
        const response = await axios.put(
          `http://localhost:3004/Login/1`,
          updatedUser,
          {
            headers: headers,
          }
        );
        window.location.reload();
        console.log(response.data);
      } catch (error) {
        alert("Error updating Information");
      }
    }
  };

  
useEffect(() => {
  console.log("User state updated:", user);
}, [user]);


  return (
    <div className="flex items-center justify-center mx-auto mt-5">
      <div className="bg-white mx-auto text-start shadow-md  shadow-orange-500 rounded px-8 pt-6 pb-8 mb-4 flex justify-center flex-col my-2">
        <div>
          {/* image uploading section */}
          <div className="col-span-6 ml-2 sm:col-span-4 md:mr-3">
            <input
              type="file"
              className="hidden"
              ref={fileInputRef}
              onChange={handleFileChange}
              
            />
            <div className="text-center">
              <div className="mt-2">
                <span
                  className="block w-40 h-40 rounded-full m-auto shadow"
                  style={{
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center center",
                    backgroundImage: `url('${
                      photoPreview !== null
                        ? photoPreview
                        : "https://i.pinimg.com/564x/02/59/54/0259543779b1c2db9ba9d62d47e11880.jpg"
                    }')`,
                  }}
                />
              </div>
              <button
                type="button"
                className="inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md font-semibold text-xs text-gray-700 uppercase tracking-widest shadow-sm hover-text-gray-500 focus-outline-none focus-border-blue-400 focus-shadow-outline-blue active-text-gray-800 active-bg-gray-50 transition ease-in-out duration-150 mt-2 ml-3"
                onClick={handleSelectPhoto}
              >
                Select New Photo
              </button>
            </div>
          </div>
        </div>

        <div className="-mx-3 md:flex mb-6 mt-3">
          <div className="md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              First Name
            </label>
            <input
              className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
              id="grid-first-name"
              type="text"
              value={user.first_name}
              onChange={(e) => setUser({ ...user, first_name: e.target.value })}
              placeholder={user.first_name}
            />
            cons
            {/* <p className="text-red text-xs italic">Please fill out this field.</p> */}
          </div>
          <div className="md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
              htmlFor="grid-last-name"
            >
              Last Name
            </label>
            <input
              className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
              id="grid-last-name"
              type="text"
              placeholder={user.last_name}
              value={user.last_name}
              onChange={(e) => setUser({ ...user, last_name : e.target.value })}
              
             
            />
          </div>
        </div>
        <div className="-mx-3 md:flex mb-6">
          <div className="md:w-full px-3">
            <label
              className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
              htmlFor="grid-password"
            >
              Email
            </label>
            <input
              className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3"
              id="email"
              type="text"
              value={user.email}
              onChange={(e) => setUser({ ...user, email : e.target.value })}
              placeholder={user.email}
              readOnly
              
            />
            {/* <p className="text-grey-dark text-xs italic">
              Make it as long and as crazy as you'd like
            </p> */}
          </div>
        </div>
        <div className="-mx-3 md:flex mb-6">
          <div className="md:w-full px-3">
            <label
              className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
              htmlFor="grid-password"
            >
              IBAN
            </label>
            <input
              className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3"
              id="email"
              type="text"
              value={user.iban}
              o onChange={(e) => setUser({ ...user, iban : e.target.value })}
              placeholder="Enter IBAN"
            />
            {/* <p className="text-grey-dark text-xs italic">
              Make it as long and as crazy as you'd like
            </p> */}
          </div>
        </div>
        <div className="-mx-3 md:flex mb-2">
          <div className="md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
              htmlFor="grid-city"
            >
              Phone
            </label>

            <input
              className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
              id="grid-phone"
              type="tel"
              value={user.phone}
              onChange={(e) => setUser({ ...user, phone : e.target.value })}
              placeholder="+962-78-069-8531"
            />
          </div>
          <div className="md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
              htmlFor="grid-state"
            >
              City
            </label>
            <div className="relative">
              <select
                className="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded"
                id="grid-state"
                value={user.city}
                onChange={(e) => setUser({ ...user, city : e.target.value })}
              >
                <option>Amman</option>
                <option>Irbid</option>
                <option>Ajloun</option>
                <option>Jerash</option>
                <option>Mafraq</option>
                <option>Salt</option>
                <option>Zarqa</option>
                <option>Madaba</option>
                <option>Al Karak</option>
                <option>Tafilah</option>
                <option>Ma'an</option>
                <option>Aqaba</option>
              </select>
              <div className="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker">
                <svg
                  className="h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
              htmlFor="grid-zip"
            >
              Zip
            </label>
            <input
              className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
              id="grid-zip"
              type="text"
              value={user.zip}
              onChange={(e) => setUser({ ...user, zip : e.target.value })}
              placeholder={90210}
            />
          </div>
        </div>
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
    </div>
  );
}

export default ProfilePrivate;
