from django.shortcuts import render
from .models import Product

def product_list_html(request):
    products = Product.objects.all()
    return render(request, 'store/product_list.html', {'products': products})
