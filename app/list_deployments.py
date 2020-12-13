from kube_config_load import load_config

def list_deployments(namespace="ktest",kube_context="minikube",kubernetes_object="deployments"):
    v1_client = load_config(kube_context)["v1"]
    response = [kube_obj.metadata.name for kube_obj in v1_client.list_namespaced_deployment(namespace).items]
    api = {
        kubernetes_object: response
    }
    return(api)



