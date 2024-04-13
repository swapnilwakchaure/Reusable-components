import { useState } from "react";

const Paste = () => {
  const [input, setInput] = useState("");

  return (
    <div>
      <p>Input page</p>
      <input
        value={input}
        onChange={(e) => {
          const val = e.target.value.replace(" ", "");
          setInput(val);
        }}
        type="text"
      />
    </div>
  );
};

export default Paste;
