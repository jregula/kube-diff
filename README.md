# kube-diff

A Kubernetes tool aimed at establishing consistency across clusters. The basic idea is to compare configuration from one Kubernetes Cluster to another. The first use case is an API that compares images between Clusters/Namespaces. 

In environments where you have lots of microservices and configuration, it's hard to be able to visualise the difference between them. Using this tool, you should be able to see quite clearly what the difference is between them (starting with images) and what would need to be promoted or changed to achieve consistency.

## Usage

Currently, I have not included an Ingress in the Helm Chart, so to access kube-diff you will have to port-forward. When Port Forwarding to http://0.0.0.0:8080/ you should see an API with basic use instructions:

```json
{
  "how_to_use_diff_images": "/images/context_a-namespace_a/context_b-namespace-b", 
  "how_to_use_get_namespaces": "/context/get-namespaces"
}
```

To compare images from one Kubernetes Context and Namespace to another, use the following URL
http://0.0.0.0:8080/images/context_a-namespace_a/context_b-namespace-b

The kubeconfig file in kube-diff will reference Kubernetes Contexts and should have access to various Namespaces. You will need to refer to these Contexts and Namespaces in the URL. For example, I have deployed this Helm Chart in my local Minikube environment with the following URL:

http://0.0.0.0:8080/images/minikube-default/minikube2-default


```json
{
  "diff": "Diff detected. The following images exist in the Context minikube with Namespace default and not in the Context minikube2 with Namespace default.", 
  "message": [
    "nginx:1-alpine"
  ]
}
```

## Prerequisites 

- Create a Secret with a kubeconfig file with access to the Contexts (Kubernetes clusters) you want to compare
- Kubectl
- Helm

## How to create Secret

You can generate the secret with your current kubeconfig, although this approach is not recommended as it is potentially overly permissive.

```bash

kubectl create secret generic kubeconfigread --from-file=kubeconfig.yaml=~/.kube/config

```

A more secure approach would be to create a Service Account with limited Cluster wide Roles. The minimum required for this microservice can be found under the kubeconfig_setup folder.

If you're comparing 2 or more Clusters you will need to repeat the process below:


```bash
#Select the Context
kubectl config use-context <CONTEXT_CLUSTER_1>

#Create Service Account, Clusterrole, Clusterrolebinding
kubectl apply -f kubeconfig_setup/sa-role-binding.yaml

#Retrieve the token generated from the Service Account's Secret
SECRET=$(kubectl get sa kubeconfigtoken -o=jsonpath='{.secrets[*].name}')
TOKEN=$(kubectl get secret $SECRET -o 'go-template={{index .data "token"}}' | base64 -D)

#Retrieve values for Cert Authority Data, Server and Name of Cluster
CERT_AUTHORITY_DATA=$(kubectl config view --flatten --minify -o jsonpath='{.clusters[*].cluster.certificate-authority-data}')
SERVER=$(kubectl config view --flatten --minify -o jsonpath='{.clusters[*].cluster.server}')
NAME=$(kubectl config view --flatten --minify -o jsonpath='{.clusters[*].name}')

```

You can use the kubeconfig from ./kubeconfig_setup/kubeconf to start with and pass in the values from above and repeating if multiple context/clusters are used. 

```bash

# Once you have the kubeconfig file ready with well restricted permisions, you can go ahead and deploy it to your cluster of chosing.
kubectl create secret generic kubeconfigread --from-file=kubeconfig.yaml=<filename>
```

see detailed guide for creating kubeconfig file here if you wish to go about this in a different way
http://docs.shippable.com/deploy/tutorial/create-kubeconfig-for-self-hosted-kubernetes-cluster/

## Steps to Deploy and test kube-diff Beta


```bash

#Deploy Helm Chart
helm upgrade --install kube-diff  ./helm -f ./helm/values.yaml

#Port-forward
kubectl port-forward <pod_name> 8080:8080

```

## Future Functionality and Plans

- Add an Ingress

## Contributing
Pull requests are welcome.

## License
[MIT](https://choosealicense.com/licenses/mit/)
