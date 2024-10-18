import React, { useState, useEffect } from "react";
import "./News.css";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL; // Fetch API URL from .env

const NewsEvent = () => {
  const [newsList, setNewsList] = useState([]); // All news articles
  const [selectedNews, setSelectedNews] = useState(null); // State to track the selected news item for the modal
  const [loading, setLoading] = useState(true); // State to manage loading

  // Fetch news articles from the API
  const fetchNews = async () => {
    try {
      const response = await axios.get(`${API_URL}/news`);
      // Normalize image paths by replacing backslashes with forward slashes
      const normalizedData = response.data.map((news) => ({
        ...news,
        image: news.image.replace(/\\/g, "/"), // Replace backslashes with forward slashes
      }));
      setNewsList(normalizedData);
    } catch (error) {
      console.error("Error fetching news articles:", error.message);
      alert("Failed to fetch news articles. Please try again.");
    } finally {
      setLoading(false); // Hide loading screen after fetching is complete
    }
  };

  useEffect(() => {
    // Call the fetch function when the component mounts
    fetchNews();
  }, []); // Fetch news when the component mounts

  // Helper function to truncate description text in card view only
  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  };

  // Function to handle opening the modal and setting the selected news item
  const handleShowModal = (news) => {
    setSelectedNews(news);
  };

  // Function to handle closing the modal
  const handleCloseModal = () => {
    setSelectedNews(null);
  };

  return (
    <div
      className={`main-outer-news-container ${
        loading ? "blur-background" : ""
      }`}
    >
      <div className="news-bookmark">News & Events</div>
      <div className="title-div-news">
        <h2 className="title-part-news">News And Events</h2>
        <h6 className="title-part-news-subtext">
          Discover the latest news, upcoming events, and important announcements
          here.
        </h6>
      </div>

      {/* Show loading message or spinner while content is being fetched */}
      {loading ? (
        <div className="loading">
          <div className="loader">
            <span className="item"></span>
            <span className="item"></span>
            <span className="item"></span>
            <span className="item"></span>
          </div>
        </div>
      ) : (
        <div className="container my-5">
          <div className="row">
            {/* Left side: News cards */}
            <div className="col-md-12 main-outer-card-div">
              {newsList.length > 0 ? (
                newsList.map((news, index) => (
                  <div className="card mb-4 news-card" key={index}>
                    <div className="row g-0">
                      {/* Image on the left */}
                      <div className="col-md-4">
                        {news.image && (
                          <img
                            src={`${API_URL}${news.image}`} // Properly concatenating API_URL with the normalized image path
                            alt={news.title}
                            className="img-fluid rounded-start"
                          />
                        )}
                      </div>
                      {/* Content on the right */}
                      <div className="col-md-8">
                        <div className="card-body">
                          <div className="news-meta">
                            <span className="badge bg-warning text-dark">
                              Business & Entrepreneurship
                            </span>
                            <span className="text-muted">
                              <i className="bi bi-calendar"></i> {news.date}
                            </span>
                          </div>
                          <h5 className="card-title">{news.title}</h5>
                          <p className="card-text">
                            {truncateText(news.description, 150)}
                          </p>
                          <button
                            className="btn btn-link"
                            onClick={() => handleShowModal(news)}
                          >
                            Read more
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p>No news articles available.</p>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Custom Modal */}
      {selectedNews && (
        <div className="news-modal-custom-modal">
          <div className="news-modal-content">
            <span className="news-modal-close" onClick={handleCloseModal}>
              &times;
            </span>
            <div className="news-modal-body-content">
              <div className="news-modal-image">
                {selectedNews.image && (
                  <img
                    src={`${API_URL}${selectedNews.image}`}
                    alt={selectedNews.title}
                    className="img-fluid"
                  />
                )}
              </div>
              <div className="news-modal-details">
                <h2 className="news-modal-title">{selectedNews.title}</h2>
                <p className="news-modal-date">
                  <strong>Date:</strong> {selectedNews.date}
                </p>
                <p className="news-modal-description">
                  {selectedNews.description}
                </p>
                <div className="div-visit-more">
                  <a
                    href={selectedNews.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="visit-link"
                  >
                    Visit Link
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewsEvent;
