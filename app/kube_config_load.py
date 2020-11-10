# base file for getting configuration and namespaces sorted
import os
from kubernetes import client, config

# maybe switch to a mapping of environments to contexts to make URL more user friendly
contexts = {
    "dev": "context_a",
    "test": "context_b",
    "pre" : "",
    "pro" :""
}
kubeconfig_file = os.environ['KUBECONFIG']

#kubeconfig_file = "~/.kube/config"

# loads kube config file and adds the various apis
def load_config(select_env_context):
    config.load_kube_config(config_file=kubeconfig_file,context=select_env_context)
    v1 = client.AppsV1Api()
    v1_core = client.CoreV1Api()
    kubernetes_apis = {
    "v1" : v1,
    "v1_core" : v1_core
    }
    return kubernetes_apis

