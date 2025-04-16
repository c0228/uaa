import React from "react";
import { Highlight } from "e-ui-react";

const PIPELINE_OVERVIEW = `Raw Data → Preprocessing → Data Representation → Model Input → 3D Detection Head → Post-processing`;

const DATA_PREPROCESSING = `def preprocess_point_cloud(pc):
    pc = tf.convert_to_tensor(pc, dtype=tf.float32)
    # Crop, normalize, random jitter, etc.
    pc = tf.random.shuffle(pc)
    return pc[:2048]  # limit number of points
`;

const VOXELIZATION_EXAMPLE = `def voxelize(pc, grid_size=0.1):
    # Simple voxel binning
    voxel_indices = tf.floor(pc / grid_size)
    # You can aggregate features per voxel here
    return voxel_indices
`;

const BIRD_EYE_VIEW_EXAMPLE = `def pointcloud_to_bev(pc, height=512, width=512):
    # Convert 3D coords to top-down 2D map
    bev_map = tf.zeros((height, width, 3))
    # You can add occupancy, intensity, etc.
    return bev_map
`;

const VOXEL_BASED_EXAMPLE = `from tensorflow.keras import layers, Model

def voxelnet_model(input_shape=(32, 32, 32, 4)):
    inputs = layers.Input(shape=input_shape)
    x = layers.Conv3D(32, 3, activation='relu', padding='same')(inputs)
    x = layers.MaxPool3D()(x)
    x = layers.Conv3D(64, 3, activation='relu')(x)
    x = layers.GlobalAveragePooling3D()(x)
    x = layers.Dense(128, activation='relu')(x)
    outputs = layers.Dense(7)(x)  # x, y, z, w, h, l, yaw
    return Model(inputs, outputs)
`;

const POINT_NET_BLOCK = `def pointnet_encoder(input_shape=(2048, 3)):
    inputs = layers.Input(shape=input_shape)
    x = layers.Conv1D(64, 1, activation='relu')(inputs)
    x = layers.Conv1D(128, 1, activation='relu')(x)
    x = layers.GlobalMaxPooling1D()(x)
    x = layers.Dense(256, activation='relu')(x)
    outputs = layers.Dense(7)(x)  # 3D box parameters
    return Model(inputs, outputs)
`;

const OUTPUT_FORMAT = `{
    "x": float,
    "y": float,
    "z": float,
    "width": float,
    "height": float,
    "length": float,
    "rotation_yaw": float,
    "class_id": int
}
`;

const Step02 = () =>{
 return (<div className="mtop15p mbot15p lh28p fs16p">
    <div className="mtop15p"><h2 className="blog-head"><b>Step 2: Building a 3D Detection Pipeline in TensorFlow</b></h2></div>
    <div className="mtop15p padLeft5p">Let’s now walk through the major building blocks of a 3D object detection system using TensorFlow.</div>
    <Highlight content={PIPELINE_OVERVIEW} lang="python" />

    <div className="mtop15p"><h4><b>A. Data Preprocessing</b></h4></div>
    <div>
        <ul>
            <li className="mtop5p"><b>Parse sensor input</b> (LiDAR point cloud or RGB-D)</li>
            <li className="mtop5p"><b>Normalize coordinates</b> (e.g., to meters)</li>
            <li className="mtop5p"><b>Augment:</b> random rotation, scaling, noise</li>
            <li className="mtop5p">Convert to voxel or BEV representations</li>
        </ul>
    </div>
    <div className="padLeft5p"><b>Example using TensorFlow:</b></div>
    <Highlight content={DATA_PREPROCESSING} lang="python" />

    <div className="mtop15p"><h4><b>B. Feature Representation</b></h4></div>
    <div className="padLeft5p"><b>Option 1: Voxelization</b></div>
    <Highlight content={VOXELIZATION_EXAMPLE} lang="python" />
    <div className="padLeft5p"><b>Option 2: Bird’s Eye View Image</b></div>
    <Highlight content={BIRD_EYE_VIEW_EXAMPLE} lang="python" />

    <div className="mtop15p"><h4><b>C. Model Architecture</b></h4></div>
    <div>Let’s explore three model types commonly used.</div>
    <div>
        <ol>
            <li className="mtop5p">
                <div><b>Voxel-Based (e.g., VoxelNet)</b></div>
                <div>
                    <ul>
                        <li className="mtop5p">Converts point cloud to voxel grid</li>
                        <li className="mtop5p">Applies 3D CNNs</li>
                        <li className="mtop5p">Good for dense spatial reasoning</li>
                    </ul>
                </div>
                <div><b>TensorFlow Implementation:</b></div>
                <Highlight content={VOXEL_BASED_EXAMPLE} lang="python" />
            </li>
            <li className="mtop5p">
                <div><b>Point-Based (e.g., PointNet, PointNet++)</b></div>
                <div>
                    <ul>
                        <li className="mtop5p">Directly consumes point clouds</li>
                        <li className="mtop5p">Learns permutation-invariant features</li>
                        <li className="mtop5p">Lightweight and accurate</li>
                    </ul>
                </div>
                <div><b>TensorFlow PointNet Block:</b></div>
                <Highlight content={POINT_NET_BLOCK} lang="python" />
            </li>
            <li className="mtop5p">
                <div><b>Fusion-Based (e.g., PointPainting)</b></div>
                <div>
                    <ul>
                        <li className="mtop5p">Fuses LiDAR and RGB using attention or CNNs</li>
                        <li className="mtop5p">Great for real-world driving scenarios</li>
                    </ul>
                </div>
                <div>Requires:</div>
                <div>
                    <ul>
                        <li className="mtop5p">Multi-modal input encoders (image CNN + point encoder)</li>
                        <li className="mtop5p">Transformer or cross-attention for fusion</li>
                    </ul>
                </div>
            </li>
        </ol>
    </div>

    <div className="mtop15p"><h4><b>D. Output Format</b></h4></div>
    <div className="padLeft5p">For each detected object, your model should predict:</div>
    <Highlight content={OUTPUT_FORMAT} lang="python" />
    <div className="padLeft5p">Use <b>Non-Maximum Suppression (NMS) </b>in 3D to filter overlapping boxes.</div>

    <div className="mtop15p"><h4><b>E. Training & Evaluation</b></h4></div>
    <div>
        <ul>
            <li className="mtop5p">Use <b>KITTI</b>, <b>nuScenes</b> or <b>Waymo Open Dataset</b></li>
            <li className="mtop5p"><u>Loss functions:</u> L2 for regression, cross-entropy for class</li>
            <li className="mtop5p">Use <b>IoU-3D</b>, <b>mAP-3D</b> for evaluation</li>
        </ul>
    </div>
    <Highlight content={`loss = tf.reduce_mean(tf.square(predicted_box - true_box)) + tf.nn.softmax_cross_entropy(...)`} lang="python" />

    <div className="mtop15p"><h2 className="blog-head"><b>Real-World Applications</b></h2></div>
    <div>
        <ul>
            <li className="mtop5p"><b>Autonomous Vehicles:</b> Detect cars, pedestrians in 3D space</li>
            <li className="mtop5p"><b>Drones & Robotics:</b> For navigation and obstacle avoidance</li>
            <li className="mtop5p"><b>Augmented Reality:</b> Scene understanding in real-time</li>
            <li className="mtop5p"><b>Retail & Warehousing:</b> Shelf tracking, robot automation</li>
        </ul>
    </div>
 </div>);
};

export default Step02;