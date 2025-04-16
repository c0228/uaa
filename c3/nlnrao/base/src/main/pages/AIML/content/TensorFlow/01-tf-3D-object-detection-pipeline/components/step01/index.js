import React from "react";
import { Card } from "e-ui-react";

const Step01 = () =>{
 return (<div className="mtop15p mbot15p lh28p fs16p">
    <div className="mtop15p"><h2 className="blog-head"><b>Step 1: Data Representation</b></h2></div>
    <div className="mtop15p">Before you train any model, you need to convert your raw sensor data into a format 
    that neural networks can understand. Common input representations for 3D:</div>
    <div>
        <ol>
            <li className="mtop15p">
                <div><b>Point Clouds (e.g., from LiDAR)</b></div>
                <div>
                    <ul>
                        <li className="mtop5p"><u>Format:</u> N x (X, Y, Z, intensity)</li>
                        <li className="mtop5p">Sparse, unordered</li>
                        <li className="mtop5p">Ideal for accuracy, but hard for CNNs</li>
                    </ul>
                </div>
            </li>
            <li className="mtop15p">
                <div><b>Voxel Grids</b></div>
                <div>
                    <ul>
                        <li className="mtop5p">Discretize 3D space into cubes (like pixels in 3D)</li>
                        <li className="mtop5p"><u>Format:</u> 3D grid (W x H x D)</li>
                        <li className="mtop5p"><u>Pros:</u> Can use 3D CNNs</li>
                        <li className="mtop5p"><u>Cons:</u> Memory expensive</li>
                    </ul>
                </div>
            </li>
            <li className="mtop15p">
                <div><b>Depth Images or RGB-D</b></div>
                <div>
                    <ul>
                        <li className="mtop5p">Encode depth as additional channel</li>
                        <li className="mtop5p"><u>Format:</u> H x W x (R, G, B, D)</li>
                        <li className="mtop5p"><u>Pros:</u> Compatible with 2D CNNs</li>
                        <li className="mtop5p"><u>Cons:</u> Lacks full 3D context</li>
                    </ul>
                </div>
            </li>
            <li className="mtop15p">
                <div><b>Bird’s Eye View (BEV)</b></div>
                <div>
                    <ul>
                        <li className="mtop5p">Project point cloud on top-down 2D grid</li>
                        <li className="mtop5p">Common in self-driving cars</li>
                        <li className="mtop5p">Efficient but loses vertical info</li>
                    </ul>
                </div>
            </li>
        </ol>
    </div>
    <Card padding={15}>
        <b>Tip:</b> Use TFRecords to store point clouds efficiently for TensorFlow training.
    </Card>
 </div>);
};

export default Step01;