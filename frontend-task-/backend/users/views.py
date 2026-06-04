from django.contrib.auth import login, authenticate
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from django.contrib.auth.views import PasswordResetView, PasswordResetDoneView
from django.shortcuts import render, redirect
from django.contrib.auth import logout
from store.models import Product  # Import your Product model

# Logout View
def logout_view(request):
    logout(request)
    return redirect('login')  # or wherever you want after logout

# Registration View
def register(request):
    if request.method == 'POST':
        form = UserCreationForm(request.POST)
        if form.is_valid():
            form.save()  # Save the new user
            username = form.cleaned_data.get('username')
            raw_password = form.cleaned_data.get('password1')
            user = authenticate(username=username, password=raw_password)
            login(request, user)  # Log the user in
            return redirect('home')  # Redirect to home page
    else:
        form = UserCreationForm()
    return render(request, 'users/register.html', {'form': form})

# Login View
def login_view(request):
    if request.method == 'POST':
        form = AuthenticationForm(data=request.POST)
        if form.is_valid():
            username = form.cleaned_data.get('username')
            password = form.cleaned_data.get('password')
            user = authenticate(username=username, password=password)
            if user is not None:
                login(request, user)  # Log the user in
                return redirect('home')  # Redirect to home page
    else:
        form = AuthenticationForm()
    return render(request, 'users/login.html', {'form': form})

# Password Reset View
class CustomPasswordResetView(PasswordResetView):
    template_name = 'users/password_reset.html'
    email_template_name = 'users/password_reset_email.html'
    success_url = '/auth/password_reset/done/'  # Redirect after email sent

# Password Reset Done View
class CustomPasswordResetDoneView(PasswordResetDoneView):
    template_name = 'users/password_reset_done.html'

# Home View
def home(request):
    products = Product.objects.all()  # Get all products
    return render(request, 'users/home.html', {'products': products})