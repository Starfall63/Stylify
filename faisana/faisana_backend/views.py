from django.http import HttpResponse
import json
import subprocess



def index(request):
    
    if request.method == "post":
        body = json.loads(request.body)
        content = body["content"]
        outputValues = [(content[0] - 22) / 5, (content[1] - 20) / 10, (content[2] - 30) / 10, (content[1] - 160) / 35]

    subprocess.run(['python', 'faisana_backend\\blenderAccess.py', str((outputValues[0] - 22) / 5), str((outputValues[1] - 20) / 10), str((outputValues[2] - 30) / 10), str((outputValues[3] - 160) / 35)])
        

    
