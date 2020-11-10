from deployments import get_kube_env_state
from kube_config_load import load_config

def load_images(env,ns):
    enviroment = get_kube_env_state(load_config, env, ns)
    images = []
    for i in enviroment["images"]:
        images.append(i["metadata"]["image"])
    return images

def deployment_diff(env_deployment_list_a,env_deployment_list_b):
    diff_deployment_list = []
    for i in env_deployment_list_a:
        if i not in env_deployment_list_b:
            diff_deployment_list.append(i)
    return diff_deployment_list

def compare_images(env_a, env_b,ns_a, ns_b):

    env_a_images_list = load_images(env_a,ns_a)
    env_b_images_list = load_images(env_b,ns_b)
    if env_a_images_list == env_b_images_list:
        api_response = "There is no diff in images"
        deployment_message = "No Image Upgrades detected in {0}.".format(env_a)
    else:
        api_response = deployment_diff(env_a_images_list,env_b_images_list)
        deployment_message = "Diff detected. The following images exist in the Context {0} with Namespace {2} and not in the Context {1} with Namespace {3}.".format(env_a, env_b,ns_a,ns_b)
    response = {
        "api_response" : api_response,
        "deployment_message" : deployment_message
        }
    return response
