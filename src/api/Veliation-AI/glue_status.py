import boto3
import time

def wait_for_glue_job(job_name, poll_interval=2):
    """
    Checks if a specific AWS Glue job is running and waits until it finishes.
    
    :param job_name: Name of the Glue job
    :param poll_interval: Time (in seconds) between status checks (default: 30 seconds)
    """
    glue_client = boto3.client("glue",region_name="ap-south-1",aws_access_key_id="",aws_secret_access_key="")

    while True:
        response = glue_client.get_job_runs(JobName=job_name, MaxResults=1)
        
        if "JobRuns" not in response or not response["JobRuns"]:
            print(f"❌ No recent job runs found for: {job_name}")
            break
        
        job_status = response["JobRuns"][0]["JobRunState"]
        print(f"🔄 Current status of job '{job_name}': {job_status}")
        
        if job_status in ["SUCCEEDED", "FAILED", "STOPPED"]:
            print(f"✅ Job '{job_name}' has ended with status: {job_status}")
            break
        
        time.sleep(poll_interval)  # Wait before checking again

# Example usage
# job_name = "your-glue-job-name"
# wait_for_glue_job(job_name)
