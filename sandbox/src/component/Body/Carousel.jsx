import React from "react";
import src from "./ast1.jpg"
import src1 from "./ast2.jpg"
import src2 from "./ast3.jpg"
const Carousel = () =>{
    return (
        <div className="flex gap-8 columns-3 justify-center">
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img className="w-96 h-80"src={src} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Cyber Security Class</h2>
                    <p>Cybersecurity is the practice of protecting systems, networks, and data from cyber attacks. Cyber attacks can come in many forms, including malware, phishing, and denial-of-service attacks. Cybersecurity professionals are responsible for developing and implementing security measures to protect organizations from these attacks.</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Join Now</button>
                    </div>
                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img className="w-96 h-80" src={src1} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Algorithms and Data Structures</h2>
                    <p>Algorithms and data structures are two of the most fundamental concepts in computer science. Algorithms are step-by-step instructions for solving a problem, while data structures are ways of organizing data so that it can be accessed and processed efficiently.</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Join Now</button>
                    </div>
                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img className="w-96 h-80" src={src2} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">System Operation</h2>
                    <p>System operation is the process of managing and monitoring computer systems to ensure that they are running efficiently and reliably. System operators are responsible for a variety of tasks</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Join Now</button>
                    </div>
                </div>
            </div>
        </div>
    
    );
}
export default Carousel;