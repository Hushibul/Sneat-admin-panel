import { footerMenu } from "../../assets/constants/constant";

const Footer = () => {
  return (
    <div className="sticky bottom-0 left-0 z-[-10] text-textMain px-6 flex flex-col justify-between md:flex-row">
      <span className="text-center md:text-left">
        © 2023 , made with ❤️ by{" "}
        <span className="font-extrabold">ThemeSelection</span>
      </span>
      <ul className="grid grid-cols-12">
        {footerMenu.map((item) => (
          <li key={item.id} className="col-span-6 md:col-span-3 mt-1 md:ml-8">
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Footer;
