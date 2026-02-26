from django.shortcuts import render
from .models import SliderImage


def index(request):
    slides = SliderImage.objects.select_related('image').all()
    return render(request, 'landing/index.html', {'slides': slides})