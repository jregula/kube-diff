# sorts through deployments and gets relevant info
# i.e. deployment name, image, replicas, tolerations

from kube_config_load import load_config

def get_kube_env_state(func_load_config, select_env_context,ns):


    v1_client = func_load_config(select_env_context)["v1"]

    ret = v1_client.list_namespaced_deployment(namespace=ns,watch=False,pretty=True)
    #print (ret.items[0].spec.template.spec.node_selector)
    result = []
    for i in ret.items:
        deployment = i.metadata.name
        image = i.spec.template.spec.containers[0].image
        # image = i.spec.template.spec.containers[0].image.replace("acr_name.azurecr.io/", "")
        image_name = image[0]
        # image_tag = image[1]
        replicas = i.spec.replicas

        if i.spec.template.spec.tolerations is not None:
            tolerations_component = i.spec.template.spec.tolerations[0].value
        else:
            tolerations_component = None

        if i.spec.template.spec.containers[0].liveness_probe is not None:
            liveness_probe_active = "y"
        else:
            liveness_probe_active = "n"
        if i.spec.template.spec.containers[0].readiness_probe is not None:
            readiness_probe_active = "y"
        else:
            readiness_probe_active = "n"
        if i.spec.template.spec.node_selector is not None:
            node_selector = i.spec.template.spec.node_selector
        else:
            node_selector = None


        image_list = {
            "deployment": deployment,
            "metadata": {
                "image": image,
                "replicas": replicas,
                "tolerations_component": tolerations_component,
                "node_selector": node_selector,
                "liveness_probe_active": liveness_probe_active,
                "readiness_probe_active": readiness_probe_active
            }
        }
        result.append(image_list)
    result = sorted(result, key=lambda i: i["deployment"], reverse=False)
    api = {"images": result}
    return api
