FROM python:alpine3.10

ENV KUBECONFIG="/config/kubeconfig.yaml"

COPY . /kube_diff
WORKDIR /kube_diff
RUN pip install --upgrade pip
RUN pip install -r requirements.txt
EXPOSE 8080
CMD python app/main.py
