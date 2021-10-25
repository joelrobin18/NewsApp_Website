import React, { useState, useEffect } from "react";

const Article = () => {
  const [articles, setArticles] = useState([]);
  const [term, setTerm] = useState("Everything");
  const [isLoading, setIsLoading] = useState(true);
  const API_KEY = "EJcS3wLuZUnj2xgWceit4hxrC9w6XErk";

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const res = await fetch(
          `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${term}&api-key=${API_KEY}`
        );
        const articles = await res.json();
        console.log(articles);
        setArticles(articles.response.docs);
        console.log(articles.response.docs);
      } catch (error) {
        console.log(error);
      }
    };
    fetchArticles();
  }, []);
  return (
    <>
      <div className="showcase">
        <div className="overlay">
          <h1>Viewing Articles About {term}</h1>
          {/*Form*/}
        </div>
      </div>

      <section>
        {articles.map((article) => {
          const {
            abstract,
            headline: { main },
            byline: { original },
            lead_paragraph,
            news_desk,
            section_name,
            _id,
            word_count,
          } = article;

          return (
            <article className="article" key={_id}>
              <h2 id="h2_id" className="h_class">
                {main}
              </h2>
              <h4 id="h4_id" className="h_class">
                {abstract}
              </h4>
              <p className="para_class">{lead_paragraph}</p>
              <ul>
                <li className="list_class">
                  Author:<span className="list_span"> {original}</span>
                </li>
                <li className="list_class">
                  News Desk:<span className="list_span"> {news_desk}</span>
                </li>
                <li className="list_class">
                  News Section:{" "}
                  <span className="list_span">{section_name}</span>
                </li>
                <li className="list_class">
                  Word Count: <span className="list_span">{word_count}</span>
                </li>
              </ul>
            </article>
          );
        })}
      </section>
    </>
  );
};

export default Article;
