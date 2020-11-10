FROM python:alpine3.10

ENV KUBECONFIG="/config/kubeconfig.yaml"

COPY . /kube_diff
WORKDIR /kube_diff
RUN pip install --upgrade pip
RUN pip install -r requirements.txt
EXPOSE 5000
EXPOSE 8080
EXPOSE 80
EXPOSE 443
CMD python app/main.py