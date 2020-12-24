from kube_config_load import load_config

import sys
import json
from flask_restful import reqparse

def get_namespaced_object():
    
    parser = reqparse.RequestParser()
    parser.add_argument("namespace")
    parser.add_argument("context")
    parser.add_argument("object_name")
    parser.add_argument("kubernetes_object")

    args = parser.parse_args()

    namespace = args["namespace"]
    kube_context = args["context"]
    object_name = args["object_name"]
    kubernetes_object = args["kubernetes_object"]

    v1_client = load_config(kube_context)["v1"]
    v1_core = load_config(kube_context)["v1_core"]

    if kubernetes_object == "deployment":
        kube_obj_get = v1_client.read_namespaced_deployment(object_name, namespace, pretty="true",_preload_content=False)
    elif kubernetes_object == "service":
        
        kube_obj_get = v1_core.read_namespaced_service(object_name, namespace, pretty="true",_preload_content=False)

    response = kube_obj_get.read()
    response = json.loads(response)
    response.pop("metadata")
    response.pop("status")

    response = {kubernetes_object: response}
    # response = json.dumps(response)
    # print(response)
    return(response)



