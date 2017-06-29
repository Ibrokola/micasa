from django.contrib import admin

from .models import About, Discography, Page, BandProfile, Contact, Song

admin.site.register(About)
admin.site.register(Discography)
admin.site.register(Page)
admin.site.register(BandProfile)
admin.site.register(Song)
# admin.site.register(TourDate)
admin.site.register(Contact)