import ArtificalNeuron from "./basics/01-artifical-neuron/index.js";
import ArtificalLayer from "./basics/02-artifical-layers/index.js";
import NeuralNetworks from "./basics/03-neural-networks/index.js";
import Transformers from "./basics/04-transformers/index.js";
import LanguageModels from "./basics/05-language-models/index.js";
import LargeLanguageModels from "./basics/06-llm/index.js";
import RetrievalAugmentedGeneration from "./basics/07-rag/index.js";
import FineTuning from "./basics/08-fine-tuning/index.js";
import AgentAI from "./basics/09-agent-ai/index.js";
import AgenticAI from "./basics/10-agentic-ai/index.js";
// Terminologies
import VectorEmbeddings from "./terminologies/01-vector-embeddings/index.js";

// content: Hardwares
import CpuGpuTpu from "./content/Hardwares/01-cpu-gpu-tpu/index.js";

// content: ML
import MLTechniques from "./content/ML/01-types-of-ml-techniques/index.js";
import DecisionTreesVsRandomForests from "./content/ML/02-decision-trees-vs-random-forests/index.js";
import KMeansClustering from "./content/ML/03-k-means-clustering/index.js";
import KNearestNeighbors from "./content/ML/04-k-nearest-neighbors/index.js";
import ArtificialNeuralNetworks from "./content/ML/05-artificial-neural-networks/index.js";
import ConvolutionalNeuralNetworks from "./content/ML/06-convolutional-neural-networks/index.js";
import ReCurrentlNeuralNetworks from "./content/ML/07-recurrent-neural-networks/index.js";
import GenerativeAdversarialNetworks from "./content/ML/08-generative-adversarial-networks/index.js";
import HidenMarkovModels from "./content/ML/09-hidden-markov-models/index.js";

// content: TensorFlow
import TF3DObjectDetectionPipeline from "./content/TensorFlow/01-tf-3D-object-detection-pipeline/index.js";
import TFNewCategoryObjectDetection from "./content/TensorFlow/02-tf-new-category-object-detection/index.js";

export const AIMLComponentMap = {
 // Basics
 "ArtificalNeuron": ArtificalNeuron,
 "ArtificalLayer": ArtificalLayer,
 "NeuralNetworks": NeuralNetworks,
 "Transformers": Transformers,
 "LanguageModels": LanguageModels,
 "LargeLanguageModels": LargeLanguageModels,
 "RetrievalAugmentedGeneration":  RetrievalAugmentedGeneration,
 "FineTuning": FineTuning,
 "AgentAI": AgentAI,
 "AgenticAI": AgenticAI,

 // Terminologies
 "VectorEmbeddings": VectorEmbeddings,

 // content: Hardwares
 "CpuGpuTpu": CpuGpuTpu,

 // content: ML
 "MLTechniques": MLTechniques,
 "DecisionTreesVsRandomForests": DecisionTreesVsRandomForests,
 "KMeansClustering": KMeansClustering,
 "KNearestNeighbors": KNearestNeighbors,
 "ArtificialNeuralNetworks": ArtificialNeuralNetworks,
 "ConvolutionalNeuralNetworks": ConvolutionalNeuralNetworks,
 "ReCurrentlNeuralNetworks": ReCurrentlNeuralNetworks,
 "GenerativeAdversarialNetworks": GenerativeAdversarialNetworks,
 "HidenMarkovModels": HidenMarkovModels,
 
 // content: TensorFlow
 "TF3DObjectDetectionPipeline": TF3DObjectDetectionPipeline,
 "TFNewCategoryObjectDetection": TFNewCategoryObjectDetection
}