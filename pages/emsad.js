import { useEffect, useState } from "react";

const Emsad = () => {
  const [message, setMessage] = useState("");
  useEffect(async () => {
    const res = await fetch("/api/hello");
    const json = await res.json();
    setMessage(json.message);
  });

  return (
    <div>
      <h2>Emsad is a cool guy</h2>
      <h1>{message}</h1>
    </div>
  );
};

export default Emsad;
