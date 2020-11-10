from kube_config_load import load_config

def get_namespaces(environment):
    v1_client = load_config(environment)["v1_core"]

    response = v1_client.list_namespace()
    namespaces = []
    for i in response.items:
        namespaces.append(i.metadata.name)

    api = {
        "namespaces": namespaces
        }
    return api


