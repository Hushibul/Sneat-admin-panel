const Footer = () => {
  return (
    <div className="mx-2 md:mx-6 xl:ml-5">
      <h2 className="text-secondary text-lg font-bold">Basic Footer</h2>

      <div className="flex items-center px-6 py-3 bg-gray-200 justify-between">
        <span className="font-bold text-textMain">Sneat &copy;</span>
        <ul className="flex flex-w md:gap-10">
          <li className="text-gray-400 hover:text-gray-600 cursor-pointer">
            Lincence{" "}
          </li>
          <li className="text-gray-400 hover:text-gray-600 cursor-pointer">
            Help
          </li>
          <li className="text-gray-400 hover:text-gray-600 cursor-pointer">
            Contact
          </li>
          <li className="text-gray-400 hover:text-gray-600 cursor-pointer">
            Terms & Conditions
          </li>
        </ul>
      </div>
      <h2 className="text-secondary text-lg font-bold">Footer with elements</h2>

      <div className="flex items-center px-6 py-3 bg-gray-200 justify-between">
        <span className="font-bold text-textMain">Sneat &copy;</span>
        <ul className="flex flex-w md:gap-10">
          <li className="text-gray-400 hover:text-gray-600 cursor-pointer">
            Lincence{" "}
          </li>
          <li className="text-gray-400 hover:text-gray-600 cursor-pointer">
            Help
          </li>
          <li className="text-gray-400 hover:text-gray-600 cursor-pointer">
            Contact
          </li>
          <li className="text-gray-400 hover:text-gray-600 cursor-pointer">
            Terms & Conditions
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
