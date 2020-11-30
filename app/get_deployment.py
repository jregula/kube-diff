from kube_config_load import load_config
import difflib
from jsondiff import diff
import sys
import json
from deepdiff import DeepDiff

def get_namespaced_deployment(namespace="default",deployment_name="kubediff",kube_context="minikube"):
    v1_client = load_config(kube_context)["v1"]
    response = v1_client.read_namespaced_deployment(deployment_name, namespace, pretty="true",_preload_content=False).read()
    response = json.loads(response)
    response.pop("metadata")
    response.pop("status")

    response = {"deployment": response}
    # response = json.dumps(response)
    # print(response)
    return(response)



get_namespaced_deployment()