import React from "react";

const Rank = ({ user }) => {
  let rank = 1;
  return (
    <div className="rankContainer">
      <p className="submits">You have submitted {user.entries} photos so far</p>
      <p className="rank">You are on rank number {rank}</p>
    </div>
  )
}
export default Rank