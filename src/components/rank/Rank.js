import React from "react";
import "./rank.css"

const Rank = () => {
  let submits = 0;
  let rank = 1;
  return (
    <div className="rankContainer">
      <p className="submits">You have submitted {submits} photos so far</p>
      <p className="rank">You are on rank number {rank}</p>
    </div>
  )
}
export default Rank