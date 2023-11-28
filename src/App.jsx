import { useEffect, useState } from "react";

function App() {
  const [quoteList, setQuoteList] = useState(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    fetch("https://type.fit/api/quotes")
      .then((res) => {
        if (!res.ok) {
          throw Error("Could not fetch the data");
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setQuoteList(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  function handleQuote() {
    setIndex(Math.floor(Math.random() * quoteList.length));
    console.log(index);
  }

  return (
    <>
      <div id="quote-box">
        {quoteList && (
          <>
            <h3 id="text">{quoteList[index].text}</h3>
            <p id="author">{quoteList[index].author}</p>
          </>
        )}

        <button id="new-quote" onClick={handleQuote}>
          New Quote
        </button>
        <a
          title="Tweet this quote"
          href={`https://twitter.com/intent/tweet?text=${
            quoteList[index].text + " - " + quoteList[index].author
          }`}
          target="_blank"
          id="tweet-quote"
        >
          Twitter
        </a>
      </div>
      <footer>React Quote Machine 🌬️ Aural 2023 </footer>
    </>
  );
}

export default App;

//Falta: error y loading useState para agregar al fetch
