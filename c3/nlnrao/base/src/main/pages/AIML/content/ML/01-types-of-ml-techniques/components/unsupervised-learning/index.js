import React from "react";
import { Highlight } from "e-ui-react";
import { BlogIndexHeader } from "@MainComponents/blog-index-header/index.js";

const CUSTOMER_SEG_PYTHON = `from sklearn.cluster import KMeans
import numpy as np

# Generate random data
X = np.random.rand(100, 2)

# KMeans clustering
kmeans = KMeans(n_clusters=3)
kmeans.fit(X)
labels = kmeans.labels_

print("Cluster Labels:", labels[:10])`;

const DIMENSIONAL_PCA_PYTHON = `from sklearn.decomposition import PCA
from sklearn.datasets import load_digits

# Load dataset
digits = load_digits()
X = digits.data

# Apply PCA
pca = PCA(n_components=2)
X_reduced = pca.fit_transform(X)

print("Reduced data shape:", X_reduced.shape)`;

const UnSupervisedLearning = () =>{
 return (<div className="mtop15p mbot15p lh28p fs16p">
   <div align="center" className="mtop15p"><h2 className="blog-head"><b>2. Unsupervised Learning</b></h2></div>
   <div className="mtop15p">Unsupervised learning is used when we have unlabeled data. The model finds patterns 
      and structures without explicit supervision.</div>
   
   <div className="mtop15p">
      <BlogIndexHeader type="h4" index="2.1" title="Clustering" />
      <div className="mtop15p">Clustering groups similar data points together.</div>
      <div className="mtop15p padLeft5p"><b>Example: </b> Customer Segmentation</div>
      <Highlight content={CUSTOMER_SEG_PYTHON} lang="python" />
   </div>

   <div className="mtop15p">
      <BlogIndexHeader type="h4" index="2.2" title="Dimensionality Reduction" />
      <div className="mtop15p">Dimensionality reduction is used to simplify data while retaining meaningful 
         information.</div>
      <div className="padLeft5p"><b>Example: </b> Principal Component Analysis (PCA)</div>
      <Highlight content={DIMENSIONAL_PCA_PYTHON} lang="python" />
   </div>
   
 </div>);
};

export default UnSupervisedLearning;