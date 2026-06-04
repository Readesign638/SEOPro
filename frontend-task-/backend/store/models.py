from django.db import models

class Product(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField(blank=True)
    benefits = models.TextField(blank=True)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    buy_link = models.URLField(blank=True)
    image_url = models.URLField(blank=True, null=True)

    created_at = models.DateTimeField(auto_now_add=True)

    def _str_(self):
        return self.name


