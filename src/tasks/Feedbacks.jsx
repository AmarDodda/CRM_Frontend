import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FeedbackList = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    const fetchFeedbacks = async () => {
      try {
        const response = await axios.get('https://crm-backend-7-cu7u.onrender.com/feedback');
        setFeedbacks(response.data);
      } catch (error) {
        console.error('Error fetching feedbacks:', error);
      }
    };

    fetchFeedbacks();
  }, []);

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-header bg-primary text-white">
          <h2 className="text-center mb-0">Feedback List</h2>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-striped table-hover">
              <thead className="thead-dark">
                <tr>
                  <th>Consumer ID</th>
                  <th>Name</th>
                  <th>Product</th>
                  <th>Rating</th>
                  <th>Comment</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {feedbacks.map(feedback => (
                  <tr key={feedback._id}>
                    <td>{feedback.consumerId}</td>
                    <td>{feedback.name}</td>
                    <td>{feedback.product}</td>
                    <td>{feedback.rating}</td>
                    <td>{feedback.comment}</td>
                    <td>{new Date(feedback.date).toLocaleDateString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackList;
