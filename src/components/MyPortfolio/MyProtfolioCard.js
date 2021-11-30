import React from 'react';

const MyProtfolioCard = (props) => {
    const{image, name, description}=props.project;
    return (
        <div className="col">
        <div className="card h-100 p-2">
          <img src={image} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{description}</p>
          </div>
          <div className="card-footer">
          <button className="btn btn-warning fw-bold w-100">Details</button>
          </div>
        </div>
      </div>
    );
};

export default MyProtfolioCard;