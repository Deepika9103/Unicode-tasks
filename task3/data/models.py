from django.db import models

# Create your models here.
class dataNew(models.Model):
    login=models.SlugField(max_length=50, null=True)
    id_user=models.IntegerField(null=True)
    type=models.CharField(max_length=50, null=True)

    def __str__(self):
        return self.login

