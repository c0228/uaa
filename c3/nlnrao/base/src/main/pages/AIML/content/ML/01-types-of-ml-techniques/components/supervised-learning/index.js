import React from "react";
import { Highlight } from "e-ui-react";
import { BlogIndexHeader } from "@MainComponents/blog-index-header/index.js";

const SPAM_DETECTION_PYTHON = `from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.datasets import load_iris
from sklearn.metrics import accuracy_score

# Load dataset
iris = load_iris()
X, y = iris.data, iris.target

# Split data
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Train classifier
clf = RandomForestClassifier(n_estimators=100)
clf.fit(X_train, y_train)

# Predictions
y_pred = clf.predict(X_test)

# Accuracy
print("Accuracy:", accuracy_score(y_test, y_pred))`;

const PREDICT_HOUSE_PRICE_PYTHON = `from sklearn.linear_model import LinearRegression
from sklearn.datasets import make_regression

# Generate synthetic data
X, y = make_regression(n_samples=100, n_features=1, noise=0.1)

# Train model
model = LinearRegression()
model.fit(X, y)

# Prediction
predicted = model.predict([[2.0]])
print("Predicted value:", predicted)`;

const SupervisedLearning = () =>{
 return (<div className="mtop15p mbot15p lh28p fs16p">
   <div align="center" className="mtop15p"><h2 className="blog-head"><b>1. Supervised Learning</b></h2></div>
   <div className="mtop15p">Supervised learning is the most common ML approach, where the algorithm learns from 
      labeled data. The model is trained on input-output pairs and then makes predictions on new data.</div>
   
   <div className="mtop15p">
      <BlogIndexHeader type="h4" index="1.1" title="Classification" />
      <div className="mtop15p">Classification is used when the output variable is categorical.</div>
      <div className="mtop15p padLeft5p"><b>Example:</b> Spam Detection (Email is spam or not)</div>
      <Highlight content={SPAM_DETECTION_PYTHON} lang="python" />
   </div>

   <div className="mtop15p">
      <BlogIndexHeader type="h4" index="1.2" title="Regression" />
      <div className="mtop15p">Regression is used when the output variable is continuous.</div>
      <div className="mtop15p padLeft5p"><b>Example: </b> Predicting House Prices</div>
      <Highlight content={PREDICT_HOUSE_PRICE_PYTHON} lang="python" />
   </div>
 </div>);
};

export default SupervisedLearning;