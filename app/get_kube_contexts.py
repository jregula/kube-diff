from kubernetes import client, config

def get_contexts():
    contexts = [context["context"]["cluster"] for context in config.list_kube_config_contexts()[0]]
    api = {
        "contexts": contexts
    }
    print(contexts)
    return api

get_contexts()


