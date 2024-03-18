// import React, { useState, useEffect } from 'react';
// import './List_images.css';
// import { useNavigate } from 'react-router-dom';

// const ListImages = () => {
//   const [imageData, setImageData] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Fetch JSON data from the URL
//     const fetchData = async () => {
//       try {
//         const response = await fetch('http://localhost:8085/api/v1/employee/images');
//         const data = await response.json();
//         setImageData(data);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div className="container">
//       <h1>Profile Hub Deployment History</h1>
//       {imageData.map((repository, index) => (
//         <div key={index}>
//           <h2>Service: {repository[0].repositoryName}</h2>
//           <table>
//             <thead>
//               <tr>
//                 <th>Tag</th>
//                 <th>Repository</th>
//                 <th>Pushed At</th>
//               </tr>
//             </thead>
//             <tbody>
//               {repository.map((image, index) => (
//                 <tr key={index} className={image.isNew ? 'new' : ''}>
//                   <td>{image.imageTag}</td>
//                   <td>{image.repositoryName}</td>
//                   <td>{image.imagePushedAt}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       ))}
//       <button className="btn btn-primary" onClick={() => navigate('/Home')}>Home</button>
//     </div>
//   );
// };

// export default ListImages;





import React, { useState, useEffect } from 'react';
import './List_images.css';
import { useNavigate,Link } from 'react-router-dom';
import { BASE_URL } from '../../constants.js';


const ListImages = () => {
  const [imageData, setImageData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch JSON data from the URL
    const fetchData = async () => {
      try {
        const response = await fetch(`${BASE_URL}/employee/images`);
        const data = await response.json();
        setImageData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // Function to check if the time difference is less than 24 hours
  const isWithin24Hours = (pushedAt) => {
    const pushedTime = new Date(pushedAt).getTime();
    const currentTime = new Date().getTime();
    const differenceInHours = (currentTime - pushedTime) / (1000 * 60 * 60);
    return differenceInHours < 24;
  };

  return (
    <div className="container">
      <h1>Profile Hub Deployment History</h1>
      {imageData.map((repository, index) => (
        <div key={index}>
          <h2>Service: {repository[0].repositoryName}</h2>
          <table>
            <thead>
              <tr>
                <th>Tag</th>
                <th>Repository</th>
                <th>Pushed At</th>
              </tr>
            </thead>
            <tbody>
              {repository.map((image, index) => (
                <tr
                  key={index}
                  className={image.isNew ? 'new' : ''}
                  style={{ backgroundColor: isWithin24Hours(image.imagePushedAt) ? '#2ecc71' : '' }}
                >
                  <td>{image.imageTag}</td>
                  <td>{image.repositoryName}</td>
                  <td>{image.imagePushedAt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
      <button className="btn btn-primary" onClick={() => navigate('/Home')}>Home</button>
    </div>
  );
};

export default ListImages;
