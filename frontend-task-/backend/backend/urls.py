from django.contrib import admin
from django.urls import path, include
from users.views import home  # Import home view
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', home, name='home'),  # Home page
    path('auth/', include('users.urls')),  # Auth routes
    path('store/', include('store.urls')),  # Store routes
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
