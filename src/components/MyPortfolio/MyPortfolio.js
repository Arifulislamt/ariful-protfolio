import React, { useEffect, useState } from 'react';
import MyProtfolioCard from './MyProtfolioCard';

const MyPortfolio = () => {
    const [projects, setProjects] = useState([])

    useEffect(()=> {
        fetch('./protfolio.json')
        .then(res => res.json())
        .then(data => setProjects(data));
    },[])
    return (
        <div className="container">
            <h1 className="fw-bold my-5 text-center">Portfolio</h1>
            <div className="row row-cols-1 row-cols-md-3 g-4 mb-5">
            {
                    projects.map(project => <MyProtfolioCard 
                    key={project.id}
                    project={project}
                    ></MyProtfolioCard>)
                }
            </div>
        </div>
    );
};

export default MyPortfolio;