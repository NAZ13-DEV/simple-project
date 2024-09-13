import { useState } from "react";
import Counter from "./components/Counter"
import StarRating from "./components/StarRating";
import Test from "./components/Test";

const App = () => {



  return (
   <div>
    <StarRating maxRating={5} size={48} className="" messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]} defaultRating={3}/>
    <StarRating color="red" defaultRating={3} />
    <Test/>
   </div>
  )
}

export default App
