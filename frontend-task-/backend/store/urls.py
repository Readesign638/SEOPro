from django.urls import path
from .views import product_list_html

urlpatterns = [
    path('', product_list_html, name='product-list-html'),
]

