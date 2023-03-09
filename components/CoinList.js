import React from "react";
import Coins from "./Coins";

const CoinList = ({ coins }) => {
  console.log("k", coins);
  return (
    <div>
      {coins.map((coin) => {
        return <Coins key={coin.id} coin={coin} />;
      })}
    </div>
  );
};

export default CoinList;
