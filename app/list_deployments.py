from kube_config_load import load_config
from flask_restful import reqparse

def list_deployments(kubernetes_object="deployments"):

    parser = reqparse.RequestParser()
    parser.add_argument("namespace")
    parser.add_argument("context")
    args = parser.parse_args()

    namespace = args["namespace"]
    kube_context = args["context"]
    args = parser.parse_args()


    v1_client = load_config(kube_context)["v1"]
    response = [kube_obj.metadata.name for kube_obj in v1_client.list_namespaced_deployment(namespace).items]
    api = {
        kubernetes_object: response
    }
    return(api)



