# kube-diff

A Kubernetes tool aimed at establishing consistency across clusters. The basic idea is to compare configuration from one Cluster to another. The first use case is a comparison of images between environments. In environments where you have lots of microservices, it's hard to keep track of what you have. Using this tool, you should be able to see the difference.

## Usage

When Port Forwarding http://0.0.0.0:8080/ you should see an API with basic use instructions:

```json
{
  "how_to_use_diff_images": "/images/context_a-namespace_a/context_b-namespace-b", 
  "how_to_use_get_namespaces": "/context/get-namespaces"
}
```

To compare images from one Kubernetes Context and Namespace to another, use the following URL
http://0.0.0.0:8080/images/context_a-namespace_a/context_b-namespace-b

For example the following URL in my local Minikube environment:

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

- Create a Secret with the kubeconfig file for the Multiple Contexts
- Kubectl
- Helm

## How to create Secret

You can generate the secret with your current kubeconfig, although this approach is not recommended.

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

see detailed guide for creating kubeconfig file here
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