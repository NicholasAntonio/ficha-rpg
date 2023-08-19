import { useEffect, useState } from "react";

const Teste = () => {
  const [name, setName] = useState("");

   useEffect(()=>{
    localStorage.setItem("name", JSON.stringify(name));
   }, [name]) 


  return (
    <form>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Full name"
        aria-label="fullname"
      />
    </form>
  );
};

export default Teste;