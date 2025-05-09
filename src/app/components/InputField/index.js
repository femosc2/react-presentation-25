const InputField = ({ placeholder, onChange, value }) => {
  return (
    <div>
      <input
        type="text"
        onChange={onChange}
        placeholder={placeholder}
        value={value}
      />
    </div>
  );
};
export default InputField;
