import React, { useState } from 'react';
import './home.css';

function Home() {
    const [showMessage, setShowMessage] = useState(false);
    const [message, setMessage] = useState('');

    const handleClick = (action) => {
        const url = action === 'start' ? 'www.start' : 'www.stopcontainer';
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ action })
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            // Handle successful response here
            setMessage(`Button "${action}" was pressed successfully!`);
            setShowMessage(true);
        })
        .catch(error => {
            console.error('There was a problem with your fetch operation:', error);
            // Handle error here
            setMessage(`An error occurred while pressing the button: ${error.message}`);
            setShowMessage(true);
        });
    };

    const functionalities = ['Start Containers', 'Stop Containers'];

    return (
        <div className="container">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/BT_logo_2019.svg/900px-BT_logo_2019.svg.png" alt="BT Logo" style={{ maxWidth: "100px", marginBottom: "20px" }} />
            <h1 className="title">Home Page</h1>
            <ul>
                {functionalities.map((functionality, index) => (
                    <li key={index}>
                        {functionality === 'Start Containers' ?
                            <button onClick={() => handleClick('start')}>{functionality}
                            </button> :
                            functionality === 'Stop Containers' ?
                            
                            <button onClick={() => handleClick('stop')}>{functionality}</button> :
                                    functionality
                        }
                    </li>
                ))}
            </ul>
            {showMessage && <p>{message}</p>}
            <div className="Home">
                <a href="/Home"><i className="fas fa-sign-out-alt"></i> Home</a>
            </div>
        </div>
    );
}

export default Home;
