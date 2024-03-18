import React from 'react';
import './home.css';

function Home() {
    const functionalities = ['Start and Stop Services', 'Deployment History Overview', 'Whitelist IP'];

    return (
        <div className="container">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/BT_logo_2019.svg/900px-BT_logo_2019.svg.png" alt="BT Logo" style={{ maxWidth: "100px", marginBottom: "20px" }} />
            <h1 className="title">Home Page</h1>
            <ul>
                {functionalities.map((functionality, index) => (
                    <li key={index}>
                        {functionality === 'Start and Stop Services' ?
                            <a href="/EnvironmentSelectionPage">{functionality}</a> :
                            functionality === 'Deployment History Overview' ?
                                <a href="/List_images">{functionality}</a> :
                                functionality === 'Whitelist IP' ?
                                    <a href="/EnvironmentSelection_IP">{functionality}</a> :
                                    functionality
                        }
                    </li>
                ))}
            </ul>
            <div className="logout">
                <a href="/Login"><i className="fas fa-sign-out-alt"></i> Logout</a>
            </div>
        </div>
    );
}

export default Home;
