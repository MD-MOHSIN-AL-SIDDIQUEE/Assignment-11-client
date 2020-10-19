import React from 'react';
import Sidebar from '../../Sidebar/Sidebar';
import MakeAdminBody from '../MakeAdminBody/MakeAdminBody';

const MakeAdminFinal = () => {
    const containerStyle = {
        height: "100%"
    }
    return (
        <div>
        <section>
          <div style={containerStyle} className="container-fluid row">
              <div className="col-md-2">
                  <Sidebar></Sidebar>
              </div>
              <div className="col-md-10 ">
                  <MakeAdminBody></MakeAdminBody>
              </div>
          </div>
      </section>
  </div>
    );
};

export default MakeAdminFinal;