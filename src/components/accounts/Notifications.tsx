import { FiMail } from "react-icons/fi";

const Notifications = () => {
  return (
    <div className="bg-white mt-4 p-6">
      <h3 className="text-textMain font-bold">Recent Device</h3>
      <p className="text-textMain mt-4">
        We need permission from your browser to show notifications.{" "}
        <span className="font-bold">Request Permission</span>
      </p>

      <table className="min-w-full overflow-x-auto text-left text-sm font-light border-b border-gray-200 text-textMain">
        <thead className="font-bold">
          <tr>
            <th scope="col" className="px-6 py-4 uppercase">
              Type
            </th>
            <th scope="col" className="px-6 py-4 uppercase">
              Email
            </th>
            <th scope="col" className="px-6 py-4 uppercase">
              Browser
            </th>
            <th scope="col" className="px-6 py-4 uppercase">
              App
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-gray-100">
            <td className="whitespace-nowrap px-6 py-4 font-medium">
              New for you
            </td>
            <td className="whitespace-nowrap px-6 py-4">
              <input
                className="accent-primary w-4 h-4 hover:accent-primary"
                type="checkbox"
              />
            </td>
            <td className="whitespace-nowrap px-6 py-4">
              <input
                className="accent-primary w-4 h-4 hover:accent-primary"
                type="checkbox"
              />
            </td>
            <td className="whitespace-nowrap px-6 py-4">
              <input
                className="accent-primary w-4 h-4 hover:accent-primary"
                type="checkbox"
              />
            </td>
          </tr>
          <tr className="">
            <td className="whitespace-nowrap px-6 py-4 font-medium">
              Account Activity
            </td>
            <td className="whitespace-nowrap px-6 py-4">
              <input
                className="accent-primary w-4 h-4 hover:accent-primary"
                type="checkbox"
              />
            </td>
            <td className="whitespace-nowrap px-6 py-4">
              <input
                className="accent-primary w-4 h-4 hover:accent-primary"
                type="checkbox"
              />
            </td>
            <td className="whitespace-nowrap px-6 py-4">
              <input
                className="accent-primary w-4 h-4 hover:accent-primary"
                type="checkbox"
              />
            </td>
          </tr>
          <tr className="bg-gray-100">
            <td className="whitespace-nowrap px-6 py-4 font-medium">
              A new browser used to sign in
            </td>
            <td className="whitespace-nowrap px-6 py-4">
              <input
                className="accent-primary w-4 h-4 hover:accent-primary"
                type="checkbox"
              />
            </td>
            <td className="whitespace-nowrap px-6 py-4">
              <input
                className="accent-primary w-4 h-4 hover:accent-primary"
                type="checkbox"
              />
            </td>
            <td className="whitespace-nowrap px-6 py-4">
              <input
                className="accent-primary w-4 h-4 hover:accent-primary"
                type="checkbox"
              />
            </td>
          </tr>
          <tr className="">
            <td className="whitespace-nowrap px-6 py-4 font-medium">
              A new device is linked
            </td>
            <td className="whitespace-nowrap px-6 py-4">
              <input
                className="accent-primary w-4 h-4 hover:accent-primary"
                type="checkbox"
              />
            </td>
            <td className="whitespace-nowrap px-6 py-4">
              <input
                className="accent-primary w-4 h-4 hover:accent-primary"
                type="checkbox"
              />
            </td>
            <td className="whitespace-nowrap px-6 py-4">
              <input
                className="accent-primary w-4 h-4 hover:accent-primary"
                type="checkbox"
              />
            </td>
          </tr>
        </tbody>
      </table>

      <select className="bg-inherit mb-3  rounded block px-4 mt-6 w-full border-2 border-borderPrimary outline-textMain py-2 focus:outline-primary md:w-1/2">
        <option value="online">Only when I am online</option>
        <option value="any">Anytime</option>
      </select>
    </div>
  );
};

export default Notifications;
