import React from "react";
import Stock from "./Stock";

function PortfolioContainer( {myStocks, handleStock} ) {

  return (
    <div>
      <h2>My Portfolio</h2>
      {
        myStocks.map(stock => <Stock handleStock={handleStock} key={stock.id} stock={stock} />)
      }
    </div>
  );
}

export default PortfolioContainer;
