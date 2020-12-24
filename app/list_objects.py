from kube_config_load import load_config
from flask_restful import reqparse

def list_objects():


    parser = reqparse.RequestParser()
    parser.add_argument("kubernetes_object")
    parser.add_argument("namespace")
    parser.add_argument("context")
    args = parser.parse_args()

    namespace = args["namespace"]
    kube_context = args["context"]
    kubernetes_object = args["kubernetes_object"]

    args = parser.parse_args()

    v1_client = load_config(kube_context)["v1"]
    v1_core = load_config(kube_context)["v1_core"]

    if kubernetes_object == "deployment":
        
        kube_obj_list = v1_client.list_namespaced_deployment(namespace)
    elif kubernetes_object == "service":
        
        kube_obj_list = v1_core.list_namespaced_service(namespace)

    response = [kube_obj.metadata.name for kube_obj in kube_obj_list.items]
    api = {
        kubernetes_object: response
    }
    return(api)



