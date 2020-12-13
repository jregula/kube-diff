import json
import requests
from flask import Flask, jsonify
from flask_restful import Resource, Api
from deployments_diff import compare_images
from get_namespaces import get_namespaces
from get_deployment import get_namespaced_deployment
from get_kube_contexts import get_contexts
from list_deployments import list_deployments

app = Flask(__name__)
api = Api(app)

class Images(Resource):
    def get(self,env_a,env_b, ns_a, ns_b):
        environment_comparison = compare_images(env_a,env_b,ns_a, ns_b)
        api = {
            "message": environment_comparison["api_response"],
            "diff": environment_comparison["deployment_message"]
            }
        return jsonify(api)

class Default(Resource):
    def get(self):
        api = {
            "how_to_use_diff_images": "/images/context_a-namespace_a/context_b-namespace-b",
            "how_to_use_get_namespaces" : "/context/get-namespaces"
            }
        return jsonify(api)

class Namespaces(Resource):
    def get(self, environment):
        api = get_namespaces(environment)
        return jsonify(api)

class Contexts(Resource):
    def get(self):
        api = get_contexts()
        return jsonify(api)

class List_Deployments(Resource):
    def get(self,namespace,kube_context):
        api = list_deployments(namespace,kube_context)
        return jsonify(api)

class Deployment(Resource):
    def get(self, namespace,deployment_name,kube_context):
        api = get_namespaced_deployment(namespace,deployment_name,kube_context)
        return jsonify(api)


api.add_resource(Images, '/images/<env_a>-<ns_a>/<env_b>-<ns_b>')
api.add_resource(Namespaces, '/<environment>/get-namespaces')
api.add_resource(Contexts, '/get-contexts')
api.add_resource(List_Deployments, '/list-deployments/<namespace>/<kube_context>')
api.add_resource(Default, '/')
api.add_resource(Deployment, '/deployments/<kube_context>/<namespace>/<deployment_name>')


if __name__ == '__main__':
    app.run(host="0.0.0.0", port='8080',debug=True)