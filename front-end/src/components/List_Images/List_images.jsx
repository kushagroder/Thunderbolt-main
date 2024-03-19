// import React, { useState, useEffect } from 'react';
// import './List_images.css';
// import { useNavigate,Link } from 'react-router-dom';
// import { BASE_URL } from '../../constants.js';


// const ListImages = () => {
//   const [imageData, setImageData] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Fetch JSON data from the URL
//     const fetchData = async () => {
//       try {
//         const response = await fetch(`${BASE_URL}/employee/images`);
//         const data = await response.json();
//         setImageData(data);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   // Function to check if the time difference is less than 24 hours
//   const isWithin24Hours = (pushedAt) => {
//     const pushedTime = new Date(pushedAt).getTime();
//     const currentTime = new Date().getTime();
//     const differenceInHours = (currentTime - pushedTime) / (1000 * 60 * 60);
//     return differenceInHours < 24;
//   };

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
//                 <tr
//                   key={index}
//                   className={image.isNew ? 'new' : ''}
//                   style={{ backgroundColor: isWithin24Hours(image.imagePushedAt) ? '#2ecc71' : '' }}
//                 >
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
import { useNavigate, Link } from 'react-router-dom';
import { BASE_URL, startLinks_containers,stopLinks_containers, Ip_whitelist } from '../../constants.js';

const ListImages = () => {
  const [imageData, setImageData] = useState([]);
  const [openRepositories, setOpenRepositories] = useState([]);
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

  const toggleRepository = (index) => {
    setOpenRepositories((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

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
          <h3 onClick={() => toggleRepository(index)} style={{ cursor: 'pointer' }}>
            {repository[0].repositoryName} {openRepositories[index] ? '▼' : '▶'}
          </h3>
          {openRepositories[index] && (
            <table>
              <thead>
                <tr>
                  <th>Tag</th>
                  {/* <th>Repository</th> */}
                  <th>Pushed At</th>
                </tr>
              </thead>
              <tbody>
                {repository.map((image, imageIndex) => (
                  <tr
                    key={imageIndex}
                    className={image.isNew ? 'new' : ''}
                    style={{ backgroundColor: isWithin24Hours(image.imagePushedAt) ? '#2ecc71' : '' }}
                  >
                    <td>{image.imageTag}</td>
                    {/* <td>{image.repositoryName}</td> */}
                    <td>{image.imagePushedAt}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      ))}
      <button className="btn btn-primary" onClick={() => navigate('/Home')}>Home</button>
    </div>
  );
};

export default ListImages;
