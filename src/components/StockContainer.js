import React from "react";
import Stock from "./Stock";

function StockContainer( {filtered, handleStock} ) {
  return (
    <div>
      <h2>Stocks</h2>
      {filtered.map(stock => <Stock handleStock={handleStock} key={stock.id} stock={stock} />)}
    </div>
  );
}

export default StockContainer;
