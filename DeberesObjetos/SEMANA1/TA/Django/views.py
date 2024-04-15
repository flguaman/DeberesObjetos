from django.shortcuts import render

def hello_world(request):
    return render(request, 'miapp/hello_world.html')

