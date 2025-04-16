import React from "react";

const Introduction = () =>{
 return (<div className="mtop15p mbot15p lh28p fs16p">
    <div><i>The world we live in is three-dimensional. From autonomous driving to augmented reality, our systems must perceive 
        and interact with the 3D world—not just through 2D images, but with full spatial awareness.<br/><br/>
        That’s where <b>3D Object Detection</b> steps in. Unlike 2D detection, which draws bounding boxes around objects on flat images, 
        3D detection predicts <b>position</b>, <b>size</b>, <b>orientation</b> and <b>depth</b> in three-dimensional space.<br/><br/>
        In this blog, I’ll walk you through:
        <ul>
            <li className="mtop5p">Key challenges of 3D object detection vs. 2D</li>
            <li className="mtop5p">How to represent 3D data</li>
            <li className="mtop5p">Building a 3D object detection pipeline using TensorFlow</li>
            <li className="mtop5p">Model architectures: voxel-based, point-based, and hybrid methods</li>
        </ul>
        Whether you're coming from a 2D background or just starting out in 3D vision, this blog is your stepping 
        stone into the third dimension.
        </i></div>
    <div className="mtop15p"><h2 className="blog-head"><b>Why 3D Object Detection is Challenging</b></h2></div>
    <div className="mtop15p">Let’s start by understanding <b>why 3D is hard</b> compared to 2D.</div>
    <div className="table-responsive">
        <table className="table">
           <thead>
            <tr style={{ backgroundColor:'#eee' }}>
                <td><b>Challenge</b></td>
                <td><b>2D Object Detection</b></td>
                <td><b>3D Object Detection</b></td>
            </tr>
           </thead>
           <tbody>
            <tr>
                <td><b>Data</b></td>
                <td>RGB images (dense, 2D grid)</td>
                <td>Point Clouds (sparse, unordered) or depth maps</td>
            </tr>
            <tr>
                <td><b>Annotations</b></td>
                <td>2D bounding boxes (x, y, w, h)</td>
                <td>3D boxes (x, y, z, w, h, l, rotation)</td>
            </tr>
            <tr>
                <td><b>Computation</b></td>
                <td>Lower dimensionality</td>
                <td>Higher computational cost</td>
            </tr>
            <tr>
                <td><b>Ambiguity</b></td>
                <td>One view only</td>
                <td>Occlusions, missing depth info</td>
            </tr>
            <tr>
                <td><b>Sensor Fusion</b></td>
                <td>Not always needed</td>
                <td>Often fuses LiDAR + RGB/IMU</td>
            </tr>
            <tr>
                <td><b>Network Design</b></td>
                <td>Convolutional CNNs</td>
                <td>Needs 3D CNNs, PointNet, Voxels, Transformers</td>
            </tr>
           </tbody>
        </table>
    </div>
    <div>In short: <b>sparsity</b>, <b>higher complexity</b>, and <b>representation issues</b> make 3D object detection 
    a far tougher nut to crack.</div>
 </div>);
};

export default Introduction;