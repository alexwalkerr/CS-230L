import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import 'bootstrap/dist/js/bootstrap';

function Card() {
    return (
        <div className="parent">
        <div>
            <h1>Card Component</h1>
        </div>
        
        <div className="d-flex justify-content-center">
            <div className="card" style={{ width: "18rem", margin: "0 10px" }}>
                <img className="card-img-top" src="..." alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">Card 1</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>

            <div className="card" style={{ width: "18rem", margin: "0 10px" }}>
                <img className="card-img-top" src="..." alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">Card 2</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>

            <div className="card" style={{ width: "18rem", margin: "0 10px" }}>
                <img className="card-img-top" src="..." alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">Card 3</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
        </div>
        </div>
    );
}

export { Card };