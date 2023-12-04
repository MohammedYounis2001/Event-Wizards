import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import SidePar from "../Component/SidePar";
import Dashbored from "../Component/Dashbored";
import Users from "../Component/Users";
import Events from "../Component/Events";
import Tickets from "../Component/Tickets";
import Message from "../Component/Message";
function HomeDash() {
  return (
    <>
      <div className="flex flex-row gap-4 ">
        <SidePar />
        <Routes>
          <Route path="dashbored" element={<Dashbored />} />
          <Route
            index
            element={
              <div className="flex flex-col space-y-20">
                <Dashbored /> <Users />{" "}
              </div>
            }
          />
          <Route path="users" element={<Users />} />
          <Route path="events" element={<Events />} />
          <Route path="tickets" element={<Tickets />} />
          <Route path="message" element={<Message />} />
          {/* <Route path="orderEvent" element={<OrderEvent />} />
        <Route path="profilePrivate" element={<ProfilePrivate />} /> */}
        </Routes>
      </div>
    </>
  );
}

export default HomeDash;
