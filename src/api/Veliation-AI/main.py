import trigger_pipeline
import transform_trigger
import load_trigger
import yaml
# Trigger the AWS Lambda function
from fastapi import FastAPI

app = FastAPI()

@app.get("/extract")
def extract():
    payload=yaml.safe_load(open("extract.yaml","r"))
    status = trigger_pipeline.extract_trigger(payload)
    return status

@app.get("/transform")
def transform():
    payload=yaml.safe_load(open("transform.yaml","r"))
    status=transform_trigger.extract_trigger(payload)
    return status

@app.get("/load")
def load():
    payload=yaml.safe_load(open("load.yaml","r"))
    status = load_trigger.extract_trigger(payload)
    return status
