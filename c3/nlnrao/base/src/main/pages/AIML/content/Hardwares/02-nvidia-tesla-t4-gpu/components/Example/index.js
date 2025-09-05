import React from "react";
import { Highlight } from "e-ui-react";

const PYTHON_CHECK_GPU = `import tensorflow as tf

# Check GPU devices
gpus = tf.config.list_physical_devices('GPU')
if gpus:
    print("GPUs Available:", gpus)
else:
    print("No GPU found")`;

const PYTHON_RUN_MODEL = `import tensorflow as tf
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense, Flatten
from tensorflow.keras.datasets import mnist

# Load dataset
(x_train, y_train), (x_test, y_test) = mnist.load_data()
x_train, x_test = x_train / 255.0, x_test / 255.0

# Build simple neural network
model = Sequential([
    Flatten(input_shape=(28, 28)),
    Dense(128, activation='relu'),
    Dense(10, activation='softmax')
])

# Compile
model.compile(optimizer='adam',
              loss='sparse_categorical_crossentropy',
              metrics=['accuracy'])

# Train on Tesla T4 (if available)
model.fit(x_train, y_train, epochs=5, validation_data=(x_test, y_test))

# Evaluate
loss, acc = model.evaluate(x_test, y_test)
print(f"Test Accuracy: {acc:.4f}")`;

const Example = () =>{
 return (<div className="mtop15p mbot15p lh28p fs16p">
    <div className="mtop15p"><h2 className="blog-head"><b>Example Use Case</b></h2></div>
    <div className="mtop15p">Imagine deploying a <b>real-time translation service.</b> Training a large NLP model 
    (e.g., BERT or GPT) might require high-end GPUs like the A100, but running the trained model (inference) across millions of 
    queries daily requires efficiency.</div>
    <div className="mtop15p">The <b>Tesla T4</b> allows:</div>
    <div>
        <ul>
            <li className="mtop5p"><b>Faster inference</b> with low latency.</li>
            <li className="mtop5p"><b>Reduced cost per query</b> due to low power consumption.</li>
            <li className="mtop5p"><b>High throughput</b> for cloud-based AI services.</li>
        </ul>
    </div>
    <div>This makes it a preferred choice for <b>AI startups and enterprises</b> scaling inference workloads.</div>

    <div className="mtop15p"><h2 className="blog-head"><b>Python Implementation Example</b></h2></div>
    <div className="mtop15p">Let’s see how you can check and use the NVIDIA Tesla T4 in <b>Python with TensorFlow.</b></div>
    <div className="mtop5p"><h5 className="blog-head"><b>1. Check GPU Availability</b></h5></div>
    <div className="mtop5p padLeft5p">
        <Highlight content={PYTHON_CHECK_GPU} lang="python" />
    </div>
    <div className="mtop5p"><h5 className="blog-head"><b>2. Running a Simple Model on Tesla T4</b></h5></div>
    <div className="mtop5p padLeft5p">
        <Highlight content={PYTHON_RUN_MODEL} lang="python" />
    </div>
    <div>If you’re running this on <b>Google Colab with GPU enabled,</b> it typically uses a <b>Tesla T4 GPU</b> by default.</div>
 </div>);
};

export default Example;