import { useState } from "react";

function CharactorCounter() {
   const [text, setText] = useState("");
   
   function handleTextChange(Event) {
    setText(Event.target.value);
   }

   function clearText() {
    setText("");
   }

   return (
    <div>
        <h1>Charactor Counter</h1>

        <textarea placeholder="....." 
        value={} onChange={handleTextChange}>
        </textarea>

    </div>
   )
}