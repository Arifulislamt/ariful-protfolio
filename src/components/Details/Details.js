import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Details = () => {
    const { userId } = useParams();
    // console.log(serviceId);
    const [details, setDetails] = useState([]);
    const [totalDetail, setTotalDetail] = useState([])

    useEffect(() => {
        fetch('/protfolio.json')
            .then(res => res.json())
            .then(data => setDetails(data))
    }, [])


    useEffect(() => {
        const services = details?.find(td => td.id == userId)
        setTotalDetail(services);
    }, [details])


    return (
        <div className="background-color p-5">
          <div className="container shadow-lg py-5 bg-white rounded">
          <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                    <div className="card h-100 shadow-lg">
                        <img src={totalDetail?.image} className="card-img-top" alt="..." />
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src={totalDetail?.image1} className="card-img-top" alt="..." />
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src={totalDetail?.image2} className="card-img-top" alt="..." />
                    </div>
                </div>
            </div>
            <div className="mt-5">
                <li className="fw-bold">{totalDetail?.description}</li>
                <li className="fw-bold">{totalDetail?.description1}</li>
                <li className="fw-bold">{totalDetail?.description2}</li>
            </div>
            <div className="">
            <button className="btn btn-warning w-25 fw-bold mt-3"> <a style={{textDecoration: "none" , color: "black"}} href={totalDetail?.link}>Go Live</a></button>
            <br />
            <button className="btn btn-warning my-3 w-25 fw-bold "> <a style={{textDecoration: "none" , color: "black"}} href={totalDetail?.link1}>Live SiteCode</a></button>
            <br />
            <button className="btn btn-warning w-25 fw-bold "> <a style={{textDecoration: "none" , color: "black"}} href={totalDetail?.link2}>Server SiteCode</a></button>
            </div>
          </div>
        </div>
    );
};

export default Details;