from django.shortcuts import render
from django.contrib.messages.views import SuccessMessageMixin
from django.views.generic import View, FormView, CreateView

from .models import About, Discography, BandProfile, Page
from .forms import ContactForm

class HomeView(SuccessMessageMixin, CreateView):
	form = ContactForm
	def get(self, request, *args, **kwargs):
		template = 'home.html'
		about_qs = About.objects.all()
		disco_qs = Discography.objects.all().order_by('?')
		band_qs = BandProfile.objects.all().order_by('?')
		page_qs = Page.objects.all().order_by('?')
		context = {
			"about_qs": about_qs,
			"disco_qs": disco_qs,
			"band_qs": band_qs,
			"page_qs": page_qs
		}
		return render(request, template, context)