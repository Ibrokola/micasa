from django.db import models




class About(models.Model):
	title = models.CharField(max_length=120)
	summary = models.TextField()
	image = models.ImageField(upload_to='images/')

	def __str__(self):
		return self.title


class Discography(models.Model):
	title = models.CharField(max_length=120)
	image = models.ImageField(upload_to='images/')

	def __str__(self):
		return self.title


class Video(models.Model):
	title = models.CharField(max_length=120)
	embed_code = models.CharField(max_length=500, null=True, blank=True)
	featured = models.BooleanField(default=False)
	timestamp = models.DateTimeField(auto_now_add=True, auto_now=False)
	updated = models.DateTimeField(auto_now_add=False, auto_now=True)

	def __str__(self):
		return self.title


# DEFAULT_MESSAGE = "We are coming to Edmonton, be there!"

class BandProfile(models.Model):
	name = models.CharField(max_length=120)
	contribution = models.TextField()
	# share_message = models.TextField(default=DEFAULT_MESSAGE)
	facebook_link = models.CharField(max_length=320,
									null=True,
									blank=True,
									verbose_name='Facebook profile url')
	twitter_handle = models.CharField(max_length=320,
									null=True,
									blank=True,
									verbose_name='Twitter handle')

	def __str__(self):
		return self.name

class TourDate(models.Model):
	title = models.CharField(max_length=120, verbose_name='Date')
	country = models.CharField(max_length=120)
	places = models.CharField(max_length=120)
	tickets = models.CharField(max_length=500, null=True, blank=True)

	def __str__(self):
		return self.title

class Contact(models.Model):
	name = models.CharField(max_length=120, verbose_name='Your name')
	email = models.EmailField(max_length=300, verbose_name='Your email')
	subject = models.CharField(max_length=300)
	message = models.TextField()

	def __str__(self):
		return self.name
