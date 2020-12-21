from kube_config_load import load_config
import difflib
from jsondiff import diff
import sys
import json
from deepdiff import DeepDiff
from flask_restful import reqparse

def get_namespaced_deployment():

    parser = reqparse.RequestParser()
    parser.add_argument("namespace")
    parser.add_argument("context")
    parser.add_argument("deployment")
    args = parser.parse_args()

    namespace = args["namespace"]
    kube_context = args["context"]
    deployment_name = args["deployment"]


    v1_client = load_config(kube_context)["v1"]
    response = v1_client.read_namespaced_deployment(deployment_name, namespace, pretty="true",_preload_content=False).read()
    response = json.loads(response)
    response.pop("metadata")
    response.pop("status")

    response = {"deployment": response}
    # response = json.dumps(response)
    # print(response)
    return(response)



