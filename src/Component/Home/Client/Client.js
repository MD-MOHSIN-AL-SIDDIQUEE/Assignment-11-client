import React from 'react';
import ClientListInfo from './ClientListInfo/ClientListInfo';

const Client = () => {
    return (

        <div>
            <h1 style={{ fontSize: "34px", textAlign: "center" }} className="p-5 mt-5">Clients <span style={{ color: ' #7AB259' }}>Feedback</span></h1>
            <div className=" container">
            <ClientListInfo></ClientListInfo>
            </div>
        </div>

    );
};

export default Client;