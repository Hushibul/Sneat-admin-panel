import React from "react";
import TabsComponent from "../components/base/TabComponent";
import Notifications from "../components/accounts/Notifications";

const Notification = () => {
  return (
    <div className="mx-2 md:mx-8 xl:mx-5">
      <TabsComponent />

      <Notifications />
    </div>
  );
};

export default Notification;
