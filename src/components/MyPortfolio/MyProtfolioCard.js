import React from 'react';
import { Link } from 'react-router-dom';

const MyProtfolioCard = (props) => {
    const{image, name, description, id}=props.project;
    return (
        <div className="col">
        <div className="card h-100 p-2">
          <img src={image} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{description}</p>
          </div>
          <div className="card-footer">
         <Link to={`/details/${id}`}>
         <button className="btn btn-warning fw-bold w-100">Details</button>
         </Link>
          </div>
        </div>
      </div>
    );
};

export default MyProtfolioCard;