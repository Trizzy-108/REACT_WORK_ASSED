
import  { useRef } from "react";

function ColorComponent() {
  const colorRef = useRef("#000000"); 

  const handleChange = (e) => {
    colorRef.current = e.target.value;
    document.getElementById("color-display").style.color = colorRef.current;
  };

  return (
    <div style={{  marginTop: "20px" }}>
      <input 
        type="color" 
        defaultValue={colorRef.current} 
        onChange={handleChange} 
      />
      <h1 id="color-display">Your selected color</h1>
    </div>
  );
}

export default ColorComponent;
