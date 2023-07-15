import React, {useState, useEffect} from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {

  const [stocks, setStocks] = useState([]);
  const [myStocks, setMyStocks] = useState([]);
  const [sort, setSort] = useState('Alphabetically');
  const [filter, setFilter] = useState('Tech')

  useEffect(() => {
    fetch('http://localhost:3001/stocks')
    .then(r => r.json())
    .then(data => setStocks(data))
  }, [])

  function handleStock(stock){
    if (myStocks.includes(stock)){
      return;
    }
    else{
      setMyStocks([...myStocks, stock])
    }
  }

  function handleRemove(stock){
    setMyStocks(myStocks.filter(s => s.id !== stock.id))
  }

  const sorted = [...stocks].sort((stock1, stock2) => {
    if (sort === 'Alphabetically'){
      return stock1.name.localeCompare(stock2.name);
    }else
      return stock1.price - stock2.price;
  });

  const filtered = sorted.filter(stock => stock.type === filter);

  return (
    <div>
      <SearchBar changeFilter={setFilter} sort={sort} changeSort={setSort} />
      <div className="row">
        <div className="col-8">
          <StockContainer filtered={filtered} stocks={stocks} handleStock={handleStock} />
        </div>
        <div className="col-4">
          <PortfolioContainer handleStock={handleRemove} myStocks={myStocks} />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
