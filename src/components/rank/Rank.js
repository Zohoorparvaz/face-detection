import React from "react";

const Rank = ({ entries, rank }) => {
  return (
    <div className="rankContainer">
      <p className="submits">You have submitted {entries} photos so far</p>
      <p className="rank">You are on rank number {rank}</p>
    </div>
  )
}
export default Rank