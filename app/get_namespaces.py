from kube_config_load import load_config
from flask_restful import reqparse

def get_namespaces():
    parser = reqparse.RequestParser()
    parser.add_argument("context")
    args = parser.parse_args()
    context = args["context"]
    args = parser.parse_args()
    
    v1_client = load_config(context)["v1_core"]

    response = v1_client.list_namespace()
    namespaces = []
    for i in response.items:
        namespaces.append(i.metadata.name)

    api = {
        "namespaces": namespaces
        }
    return api


