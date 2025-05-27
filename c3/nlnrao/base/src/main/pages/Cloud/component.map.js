import ServerlessContainerizedBackends from "./content/01-serverless-containerized-backends/index.js";
import PublicPrivateHybridCloudDeployment from "./content/02-public-private-hybrid-cloud-deployments/index.js";
import AwsAzureGcp from "./content/03-aws-azure-gcp/index.js";
import BlueGreenDeployment from "./content/04-blue-green-deployment/index.js";
import CloudCostOptimizationGuide from "./content/05-cloud-cost-optimization-guide/index.js";
import HashicorpVaultForSecretManagement from "./content/06-hashicorp-vault-for-secret-management/index.js";
import EdgeComputing from "./content/07-edge-computing/index.js";
import InfrastructureAsACode from "./content/08-infrastructure-as-a-code/index.js";
import PrometheusAndGrafana from "./content/09-prometheus-and-grafana/index.js";

export const CloudComponentMap = {
 "ServerlessContainerizedBackends": ServerlessContainerizedBackends,
 "PublicPrivateHybridCloudDeployment": PublicPrivateHybridCloudDeployment,
 "AwsAzureGcp": AwsAzureGcp,
 "BlueGreenDeployment": BlueGreenDeployment,
 "CloudCostOptimizationGuide": CloudCostOptimizationGuide,
 "HashicorpVaultForSecretManagement": HashicorpVaultForSecretManagement,
 "EdgeComputing": EdgeComputing,
 "InfrastructureAsACode": InfrastructureAsACode,
 "PrometheusAndGrafana": PrometheusAndGrafana
};