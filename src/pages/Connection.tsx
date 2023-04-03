import SocialConnections from "../components/accounts/SocialConnections";
import TabsComponent from "../components/base/TabComponent";

const Connection = () => {
  return (
    <div className="mx-2 md:mx-8 xl:ml-5">
      <TabsComponent />

      <SocialConnections />
    </div>
  );
};

export default Connection;
