import json
import requests
from flask import Flask, jsonify
from flask_restful import Resource, Api, reqparse
from deployments_diff import compare_images
from get_namespaces import get_namespaces
from get_object import get_namespaced_object
from get_kube_contexts import get_contexts
from list_objects import list_objects

app = Flask(__name__)
api = Api(app)


class Images(Resource):
    def get(self):
        environment_comparison = compare_images()
        api = {
            "images": environment_comparison["api_response"],
            "diffMessage": environment_comparison["deployment_message"],
            "metadata": environment_comparison["compare_images_info"]
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
    def get(self):
        api = get_namespaces()
        return jsonify(api)

class Contexts(Resource):
    def get(self):
        api = get_contexts()
        return jsonify(api)

class List_Deployments(Resource):
    def get(self):
        api = list_objects()
        return jsonify(api)

class Kube_Object(Resource):
    def get(self):
        api = get_namespaced_object()
        return jsonify(api)


api.add_resource(Images, '/images')
api.add_resource(Namespaces, '/get-namespaces')
api.add_resource(Contexts, '/get-contexts')
api.add_resource(List_Deployments, '/list-objects')
api.add_resource(Default, '/')
api.add_resource(Kube_Object, '/objects')


if __name__ == '__main__':
    app.run(host="0.0.0.0", port='8080',debug=True)