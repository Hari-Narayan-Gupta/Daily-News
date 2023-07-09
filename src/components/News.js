import React, { useEffect, useState } from "react";
import Newsitems from "./Newsitems";
import Spinner from "./Spinner";

export default function News() {
  const [state, setState] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);

  const fetchApi = async () => {
    const url = await fetch(
      `https://newsapi.org/v2/top-headlines?country=in&apikey=74d5104d4eb04470a8dd34d4e6389513&page=1`
    );
    setLoading(true);
    const actualData = await url.json();
    setState(actualData.articles);
    setLoading(false);
    // console.log(page);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  const handleNext = async () => {
    setPage(page + 1);

    const url = await fetch(
      `https://newsapi.org/v2/top-headlines?country=in&apikey=74d5104d4eb04470a8dd34d4e6389513&page=${page}`
    );
    setLoading(true);
    const actualData = await url.json();
    setState(actualData.articles);
    setLoading(false);
    console.log("next ", page);
  };

  const handlePrev = async () => {
    setPage(page - 1);

    const url = await fetch(
      `https://newsapi.org/v2/top-headlines?country=in&apikey=74d5104d4eb04470a8dd34d4e6389513&page=${page}`
    );
    setLoading(true);
    const actualData = await url.json();
    setState(actualData.articles);
    setLoading(false);
    console.log("prev ", page);
  };

  return (
    <>
      <div>
        <div className="container my-4">
          <h1>News zone- Top Headlines</h1>
          {loading === true ? <Spinner /> : null}

          <div className="row my-4">
            {state.map((ele, indx) => {
              return (
                <div className="col-md-4" key={ele.url}>
                  <Newsitems
                    newsTitle={ele.title ? ele.title.slice(0, 45) : ""}
                    discraption={
                      ele.description ? ele.description.slice(0, 88) : ""
                    }
                    imgurl={ele.urlToImage}
                    moreAboutnews={ele.url}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="container d-flex justify-content-between mb-4">
        <button
          disabled={page === 1}
          type="button"
          className="btn btn-secondary"
          onClick={handlePrev}
        >
          &larr; Prev
        </button>
        <button
          disabled={page === 2}
          type="button"
          className="btn btn-secondary"
          onClick={handleNext}
        >
          Next &rarr;
        </button>
      </div>
    </>
  );
}
