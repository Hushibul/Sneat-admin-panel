type BasicInput = {
  label: string;
  type: string;
  placeholder: string;
  register: object;
  error: any;
};

const BasicInputLabel = ({
  label,
  type,
  placeholder,
  register,
  error,
}: BasicInput) => {
  return (
    <>
      <label
        className="uppercase block text-textMain text-xs mb-2 font-semibold"
        htmlFor=""
      >
        {label}
      </label>
      <input
        className="bg-inherit mb-3 rounded block px-4 w-full border-2 border-borderPrimary outline-textMain py-2 focus:outline-primary"
        type={type}
        placeholder={placeholder}
        {...register}
      />
      <p className="text-danger mb-2">{error}</p>
    </>
  );
};

export default BasicInputLabel;
