const HeaderandFooterCard = () => {
  return (
    <div>
      <h2 className="text-secondary text-lg font-bold">Header and Footer</h2>
      <div className="grid grid-cols-12 mt-5">
        <div className="col-span-12 rounded-md bg-white shadow-md p-6 md:col-span-6 md:mr-6 lg:mr-8 lg:col-span-4">
          <h5 className="text-textMain">Featured</h5>
          <h2 className="text-lg text-textMain my-3 font-bold">
            Special title treatment
          </h2>
          <p className="text-textMain">
            With supporting text below as a natural lead-in to additional
            content natural lead-in to additional content.
          </p>
          <button className="px-4 py-2 font-bold bg-primary mt-3 rounded-md text-white">
            Go Somewhere
          </button>
        </div>

        <div className="col-span-12 rounded-md bg-white shadow-md p-6 md:col-span-6 md:mr-6 lg:mr-8 lg:col-span-4">
          <h2 className="text-lg text-textMain my-3 font-bold">
            Special title treatment
          </h2>
          <p className="text-textMain text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            posuere erat a ante.Lorem ipsum dolor sit amet, consectetur.
          </p>
          <span className=" py-2 mt-3 rounded-md text-textMain">
            - Someone famous in Source Title
          </span>
        </div>

        <div className="col-span-12 rounded-md bg-white text-center shadow-md p-6 md:col-span-6 lg:col-span-4">
          <h5 className="text-textMain">Featured</h5>
          <h2 className="text-lg text-textMain my-3 font-bold">
            Special title treatment
          </h2>
          <p className="text-textMain">
            With supporting text below as a natural.
          </p>
          <button className="px-4 py-2 font-bold bg-primary mt-3 rounded-md text-white">
            Go Somewhere
          </button>

          <p className="text-gray-400 mt-6">2 days ago</p>
        </div>
      </div>

      <h2 className="text-secondary text-lg mt-12 font-bold">Text alignment</h2>
      <div className="grid grid-cols-12 mt-5">
        <div className="col-span-12 rounded-md bg-white shadow-md p-6 md:col-span-6 md:mr-6 lg:mr-8 lg:col-span-4">
          <h2 className="text-lg text-textMain my-3 font-bold">
            Special title treatment
          </h2>
          <p className="text-textMain">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <button className="px-4 py-2 font-bold bg-primary mt-3 rounded-md text-white">
            Go Somewhere
          </button>
        </div>

        <div className="col-span-12 rounded-md text-center bg-white shadow-md p-6 md:col-span-6 md:mr-6 lg:mr-8 lg:col-span-4">
          <h2 className="text-lg text-textMain my-3 font-bold">
            Special title treatment
          </h2>
          <p className="text-textMain">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <button className="px-4 py-2 font-bold bg-primary mt-3 rounded-md text-white">
            Go Somewhere
          </button>
        </div>

        <div className="col-span-12 rounded-md bg-white text-right shadow-md p-6 md:col-span-6 lg:col-span-4">
          <h2 className="text-lg text-textMain my-3 font-bold">
            Special title treatment
          </h2>
          <p className="text-textMain">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <button className="px-4 py-2 font-bold bg-primary mt-3 rounded-md text-white">
            Go Somewhere
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeaderandFooterCard;
