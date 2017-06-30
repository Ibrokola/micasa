from django.contrib import admin

from .models import About, Discography, Page, BandProfile, Contact, Song, Image

admin.site.register(About)
admin.site.register(Discography)
admin.site.register(Page)
admin.site.register(BandProfile)
admin.site.register(Song)
admin.site.register(Image)
# admin.site.register(TourDate)
admin.site.register(Contact)