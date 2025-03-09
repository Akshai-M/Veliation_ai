import boto3
import json
import yaml
from glue_status import wait_for_glue_job
# Initialize AWS Lambda client
lambda_client = boto3.client("lambda", region_name="ap-south-1",aws_access_key_id="",aws_secret_access_key="")  


# payload = {
#         "source_bucket": "etl-intermediate-9062",
#         "destination_bucket": "etl-sql-intermediate-9062",
#         "source_key": "test.csv",
#         "destination_key": "transformed.csv"
    # }

payload=yaml.safe_load(open("transform.yaml","r"))

def extract_trigger(payload):
    # Lambda function name
    lambda_function_name = "transform_code"


    def invoke_lambda():
        """
        Triggers the AWS Lambda function with S3 paths.
        """
        try:
            response = lambda_client.invoke(
                FunctionName=lambda_function_name,
                InvocationType="RequestResponse",
                Payload=json.dumps(payload)
            )

            # Read response
            response_payload = json.loads(response["Payload"].read().decode("utf-8"))
            print("Lambda Response:", response_payload)

        except Exception as e:
            print(f"Error invoking Lambda: {e}")

    invoke_lambda()
    wait_for_glue_job(job_name="transform")

    return {"Status":"Completed"}

# extract_trigger(payload)