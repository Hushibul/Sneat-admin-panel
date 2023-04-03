import TabsComponent from "../components/base/TabComponent";
import AccountForm from "../components/accounts/AccountForm";

const Account = () => {
  return (
    <div className="mx-2 md:mx-6 xl:ml-5">
      <TabsComponent />

      <AccountForm />
    </div>
  );
};

export default Account;
