import React, { useEffect, useState } from "react";
import axios from "axios";

import "./App.css";
import QuoteCard from "./QuoteCard";

function App() {
  const [quotes, setQuotesData] = useState([]);
  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const response = await axios.get("https://type.fit/api/quotes");
        console.log(response.data);
        setQuotesData(response.data);
      } catch (error) {
        console.error("Error fetching quote:", error);
      }
    };

    fetchQuote();
  }, []);

  return (
    <div className="App">
		<div className="container">
			<div className="row">
				<div className="col-md-12">
					<h2 className="mt-2">Quotes</h2>
				</div>
			</div>
			<div className="row">
			{quotes.length > 0 ? (
				<>
				{quotes.map((quote) => (
					<QuoteCard quote={quote} />
				))}
				</>
			) : (
				<p>Loading...</p>
			)}
			</div>
		</div>
     

     
    </div>
  );
}

export default App;
