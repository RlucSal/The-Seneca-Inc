import React, { useState, useEffect } from "react";
import "../app.css";

const New = () => {
  const [news, setNews] = useState([]); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    const fetchNews = async () => {
      const params = {
        api_token: 'cjpQk7mBwGIcK4NUbiieWRF7EQLtWztBdnqqfngL',
        categories: 'education,science, women', 
        search: 'harvard, university, women', 
        limit: '100'
      };

      const esc = encodeURIComponent;
      const query = Object.keys(params)
        .map(k => esc(k) + '=' + esc(params[k]))
        .join('&');

      try {
        const response = await fetch("https://api.thenewsapi.com/v1/news/all?" + query, { method: 'GET' });

        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }

        const result = await response.json();
        
        // Check if 'data' exists and is an array
        if (result.data && Array.isArray(result.data)) {
          setNews(result.data);
        } else {
          throw new Error('No news data available');
        }
        
        setLoading(false);
      } catch (err) {
        setError(`Error fetching news: ${err.message}`);
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) return <p>Loading news...</p>;
  if (error) return <p>{"No more API requests available at the moment"}</p>;

  return (
    <div className="news-container1">
    <div className="news-image1"></div>
    <div className="news-text2">
      <h1>WHAT'S NEW</h1>
    </div>
    <div className="news-container">
      {news.length === 0 ? (
        <p>No news available at the moment.</p>
      ) : (
        news.map((article, index) => (
          <div key={index} className="news-article">
            {article.image_url && (
              <img src={article.image_url} alt={article.title} className="news-image" />
            )}
            <h2>{article.title}</h2>
            <p>{article.description}</p>
            <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
          </div>
        ))
      )}
    </div>
    </div>
  );
};

export default New;
