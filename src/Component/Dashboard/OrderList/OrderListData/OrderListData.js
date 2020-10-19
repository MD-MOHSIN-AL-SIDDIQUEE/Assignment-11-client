import React from 'react';

const OrderListData = (props) => {
    const { image, title, description } = props.singledata;

    return (
        <div className="col-md-5 p-3 m-2">
            <div className="row">
                <div className="col-md-4">
                    {
                        <img style={{ height: '100px' }} src={`data:image/png;base64,${image.img}`} />
                    }
                </div>
                <div className="col-md-6">
                    <h3></h3>
                </div>
            </div>
            <div>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default OrderListData;