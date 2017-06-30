import urllib.parse
from django.db import models
from django.conf import settings



DEFAULT_MESSAGE = "Mi Casa live in Edmonton, a different flavour from what you are used to, be there or miss out!!"
class Page(models.Model):
	title = models.CharField(max_length=120)
	sub_title = models.CharField(max_length=120)
	share_message = models.TextField(default=DEFAULT_MESSAGE)


	def __str__(self):
		return self.title

	def get_share_message(self):
		full_url = "%s%s" %(settings.FULL_DOMAIN_NAME)
		return urllib.parse.quote("%s %s" %(self.share_message, full_url))

	def share_link(self):
		full_url = "%s%s" %(settings.FULL_DOMAIN_NAME)
		return full_url



class About(models.Model):
	title = models.CharField(max_length=120)
	summary = models.TextField()
	image = models.ImageField(upload_to='images/', null=True, blank=True)

	def __str__(self):
		return self.title


class Discography(models.Model):
	title = models.CharField(max_length=120)
	image = models.ImageField(upload_to='images/', null=True, blank=True)

	def __str__(self):
		return self.title

class Song(models.Model):
	title = models.CharField(max_length=120, null=True, blank=True)
	audio = models.FileField(upload_to='audio/', null=True, blank=True)

	def __str__(self):
		return self.title

# class Video(models.Model):
# 	title = models.CharField(max_length=120)
# 	embed_code = models.CharField(max_length=500, null=True, blank=True)
# 	featured = models.BooleanField(default=False)
# 	timestamp = models.DateTimeField(auto_now_add=True, auto_now=False)
# 	updated = models.DateTimeField(auto_now_add=False, auto_now=True)

# 	def __str__(self):
# 		return self.title


# DEFAULT_MESSAGE = "We are coming to Edmonton, be there!"

class BandProfile(models.Model):
	name = models.CharField(max_length=120)
	contribution = models.TextField()
	image = models.ImageField(upload_to='images/', null=True, blank=True)
	# share_message = models.TextField(default=DEFAULT_MESSAGE)
	facebook_link = models.CharField(max_length=320,
									null=True,
									blank=True,
									verbose_name='Facebook profile url')
	twitter_handle = models.CharField(max_length=320,
									null=True,
									blank=True,
									verbose_name='Twitter handle')
	instagram_handle = models.CharField(max_length=320,
									null=True,
									blank=True,
									verbose_name='Instagram handle')
	googleplus_handle = models.CharField(max_length=320,
									null=True,
									blank=True,
									verbose_name='Google plus')


	def __str__(self):
		return self.name

class Image(models.Model):
	title = models.CharField(max_length=120)
	image = models.ImageField(upload_to='images/', null=True, blank=True)

	def __str__(self):
		return self.title



class Contact(models.Model):
	name = models.CharField(max_length=120, verbose_name='Your name')
	email = models.EmailField(max_length=300, verbose_name='Your email')
	subject = models.CharField(max_length=300, verbose_name='Your message')
	message = models.TextField()

	def __str__(self):
		return self.name
