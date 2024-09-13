import { useState } from "react";
import Counter from "./components/Counter"
import StarRating from "./components/StarRating";

const App = () => {



  return (
   <div>
    <StarRating maxRating={5}/>
   </div>
  )
}

export default App
