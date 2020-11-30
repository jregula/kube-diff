import json
import requests
from flask import Flask, jsonify
from flask_restful import Resource, Api
from deployments_diff import compare_images
from get_namespaces import get_namespaces
from get_deployment import get_namespaced_deployment

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

class Deployment(Resource):
    def get(self, namespace="default",deployment_name="kubediff",kube_context="minikube"):

        api = get_namespaced_deployment()

        return jsonify(api)

api.add_resource(Images, '/images/<env_a>-<ns_a>/<env_b>-<ns_b>')

api.add_resource(Namespaces, '/<environment>/get-namespaces')
api.add_resource(Default, '/')

api.add_resource(Deployment, '/deployments/<deployment_name>/<namespace>/<kube_context>')


if __name__ == '__main__':
    app.run(host="0.0.0.0", port='8080',debug=True)