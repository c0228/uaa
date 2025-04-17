import React from "react";

const Limitations = () =>{
 return (<div className="mtop15p mbot15p lh28p fs16p">
    <div className="mtop15p"><h2 className="blog-head"><b>Challenges and Limitations</b></h2></div>
    <div>
        <ol>
            <li className="mtop15p">
                <div><h4><b>Data Scarcity</b></h4></div>
                <div className="mtop5p">Limited labeled data can lead to overfitting. Strategies to address this include:</div>
                <div>
                    <ul>
                        <li className="mtop5p"><b>Data Augmentation:</b> Increase data variability through transformations.</li>
                        <li className="mtop5p"><b>Synthetic Data Generation:</b> Use generative models like GANs to create 
                        additional training samples.</li>
                    </ul>
                </div>
            </li>
            <li className="mtop15p">
                <div><h4><b>Class Imbalance</b></h4></div>
                <div className="mtop5p">FSOD tasks often involve imbalanced datasets. Techniques to mitigate this include:</div>
                <div>
                    <ul>
                        <li className="mtop5p"><b>Loss Reweighting:</b> Assign higher weights to underrepresented classes in the 
                        loss function.</li>
                        <li className="mtop5p"><b>Resampling:</b> Oversample minority classes or undersample majority classes to 
                        balance the dataset.</li>
                    </ul>
                </div>
            </li>
            <li className="mtop15p">
                <div><h4><b>Computational Complexity</b></h4></div>
                <div className="mtop5p">Meta-learning methods can be computationally intensive due to their nested optimization 
                loops. Solutions include:</div>
                <div>
                    <ul>
                        <li className="mtop5p"><b>Efficient Algorithms:</b> Utilize algorithms like Reptile, which are less computationally 
                        demanding than MAML.</li>
                        <li className="mtop5p"><b>Hardware Acceleration:</b> Leverage GPUs or TPUs to speed up training.</li>
                    </ul>
                </div>
            </li>
        </ol>
    </div>
 </div>);
};

export default Limitations;