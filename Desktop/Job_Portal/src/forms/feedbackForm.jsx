import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { useToast } from '../contexts/ToastContext';

const FeedbackForm = () => {
  const [name,setName] =useState('')
  const [product, setProduct] = useState('');
  const [rating, setRating] = useState('');
  const [comment, setComment] = useState('');
  const [date, setDate] = useState('');
  const { consumer } = useOutletContext(); // Access consumer from context
  const toast = useToast();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!consumer) {
      toast.addToast('Consumer not logged in', 'danger');
      return;
    }

    try {
      const formData = {
        consumerId: consumer.consumer._id,
        name,
        product,
        rating: parseInt(rating, 10),
        comment,
        date: date ? new Date(date).toISOString() : new Date().toISOString(),
      };

      const backendUrl = 'http://localhost:3001/feedback'; // Adjust URL as per your backend

      const token = localStorage.getItem('jwtToken');

      const response = await fetch(backendUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to submit feedback');
      }

      const data = await response.json();
      console.log('Feedback submitted successfully:', data);

      toast.addToast('Feedback submitted successfully', 'success');
      
      setName('');
      setProduct('');
      setRating('');
      setComment('');
      setDate('');
    } catch (error) {
      console.error('Error submitting feedback:', error.message);
      toast.addToast(`Error submitting feedback: ${error.message}`, 'danger');
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Feedback Form</h2>
      <form onSubmit={handleSubmit}>
      <div className="mb-3">
          <label htmlFor="product" className="form-label">Please enter your name:</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="product" className="form-label">Product:</label>
          <input
            type="text"
            className="form-control"
            id="product"
            value={product}
            onChange={(e) => setProduct(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="rating" className="form-label">Rating (1-5):</label>
          <input
            type="number"
            className="form-control"
            id="rating"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            min="1"
            max="5"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="comment" className="form-label">Comment:</label>
          <textarea
            className="form-control"
            id="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            rows="4"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="date" className="form-label">Date:</label>
          <input
            type="date"
            className="form-control"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-primary">Submit Feedback</button>
        </div>
      </form>
    </div>
  );
};

export default FeedbackForm;


// import React, { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
// import { useToast } from '../contexts/ToastContext';

// const FeedbackForm = () => {
//   const [product, setProduct] = useState('');
//   const [rating, setRating] = useState('');
//   const [comment, setComment] = useState('');
//   const [date, setDate] = useState('');
//   const [consumerId, setConsumerId] = useState('');
//   const location = useLocation();
//   const toast = useToast();

//   useEffect(() => {
//     // Parse consumerId from query parameter
//     const searchParams = new URLSearchParams(location.search);
//     console.log('location.search:', location.search); // Check the entire query string
//     const consumer = searchParams.get('consumer');
//     console.log('Consumer ID from query:', consumer); // Log the parsed consumer ID
//     if (consumer) {
//       setConsumerId(consumer);
//     }
//   }, [location]);

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     try {
//       const formData = {
//         consumerId,
//         product,
//         rating: parseInt(rating),
//         comment,
//         date: date ? new Date(date).toISOString() : new Date().toISOString(),
//       };

//       const backendUrl = 'http://localhost:3001/feedback'; // Adjust URL as per your backend

//       const token = localStorage.getItem('jwtToken');

//       const response = await fetch(backendUrl, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify(formData),
//       });

//       if (!response.ok) {
//         throw new Error('Failed to submit feedback');
//       }

//       const data = await response.json();
//       console.log('Feedback submitted successfully:', data);

//       toast.addToast('Feedback submitted successfully', 'success');

//       setProduct('');
//       setRating('');
//       setComment('');
//       setDate('');
//     } catch (error) {
//       console.error('Error submitting feedback:', error.message);
//       toast.addToast('Error submitting feedback', 'danger');
//     }
//   };

//   return (
//     <div className="container mt-5">
//       <h2 className="text-center mb-4">Feedback Form</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-3">
//           <label htmlFor="product" className="form-label">Product:</label>
//           <input
//             type="text"
//             className="form-control"
//             id="product"
//             value={product}
//             onChange={(e) => setProduct(e.target.value)}
//             required
//           />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="rating" className="form-label">Rating (1-5):</label>
//           <input
//             type="number"
//             className="form-control"
//             id="rating"
//             value={rating}
//             onChange={(e) => setRating(e.target.value)}
//             min="1"
//             max="5"
//             required
//           />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="comment" className="form-label">Comment:</label>
//           <textarea
//             className="form-control"
//             id="comment"
//             value={comment}
//             onChange={(e) => setComment(e.target.value)}
//             rows="4"
//             required
//           />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="date" className="form-label">Date:</label>
//           <input
//             type="date"
//             className="form-control"
//             id="date"
//             value={date}
//             onChange={(e) => setDate(e.target.value)}
//           />
//         </div>
//         <div className="text-center">
//           <button type="submit" className="btn btn-primary">Submit Feedback</button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default FeedbackForm;



// import React, { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';

// const FeedbackForm = () => {
//   const [product, setProduct] = useState('');
//   const [rating, setRating] = useState('');
//   const [comment, setComment] = useState('');
//   const [date, setDate] = useState('');
//   const [customerId, setCustomerId] = useState('');
//   const location = useLocation();

//   useEffect(() => {
//     // Parse customerId from query parameter
//     const searchParams = new URLSearchParams(location.search);
//     const customer = searchParams.get('customer');
//     if (customer) {
//       setCustomerId(customer);
//     }
//   }, [location]);

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     // Log formData for debugging
//     console.log('formData:', {
//       customerId,
//       product,
//       rating: parseInt(rating, 10),
//       comment,
//       date: date ? new Date(date).toISOString() : new Date().toISOString(),
//     });

//     try {
//       // Form data to be sent to backend
//       const formData = {
//         customerId,
//         product,
//         rating: parseInt(rating, 10),
//         comment,
        
//         date: date ? new Date(date).toISOString() : new Date().toISOString(),
//       };

//       // Replace with actual backend URL
//       const backendUrl = 'http://localhost:3001/feedback'; // Adjust URL as per your backend

//       // Send form data to backend
//       const response = await fetch(backendUrl, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${localStorage.getItem('jwtToken')}`, // Ensure token is sent
//         },
//         body: JSON.stringify(formData),
//       });

//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(errorData.message || 'Failed to submit feedback');
//       }

//       // Optionally handle response or success message
//       const data = await response.json();
//       console.log('Feedback submitted successfully:', data);

//       // Clear form fields after submission
//       setProduct('');
//       setRating('');
//       setComment('');
//       setDate('');
//     } catch (error) {
//       console.error('Error submitting feedback:', error.message);
//       // Handle error state or display error message to user
//     }
//   };

//   return (
//     <div className="container mt-5">
//       <div className="row justify-content-center">
//         <div className="col-md-6">
//           <div className="card">
//             <div className="card-body">
//               <h2 className="card-title text-center mb-4">Feedback Form</h2>
//               <form onSubmit={handleSubmit}>
//                 <div className="mb-3">
//                   <label htmlFor="product" className="form-label">Product</label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     id="product"
//                     value={product}
//                     onChange={(e) => setProduct(e.target.value)}
//                     required
//                   />
//                 </div>
//                 <div className="mb-3">
//                   <label htmlFor="rating" className="form-label">Rating (1-5)</label>
//                   <input
//                     type="number"
//                     className="form-control"
//                     id="rating"
//                     value={rating}
//                     onChange={(e) => setRating(e.target.value)}
//                     min="1"
//                     max="5"
//                     required
//                   />
//                 </div>
//                 <div className="mb-3">
//                   <label htmlFor="comment" className="form-label">Comment</label>
//                   <textarea
//                     className="form-control"
//                     id="comment"
//                     value={comment}
//                     onChange={(e) => setComment(e.target.value)}
//                     rows="4"
//                     required
//                   />
//                 </div>
//                 <div className="mb-3">
//                   <label htmlFor="date" className="form-label">Date</label>
//                   <input
//                     type="date"
//                     className="form-control"
//                     id="date"
//                     value={date}
//                     onChange={(e) => setDate(e.target.value)}
//                   />
//                 </div>
//                 <div className="d-grid">
//                   <button type="submit" className="btn btn-primary btn-block">Submit Feedback</button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FeedbackForm;



