from django.db import models

class Person(models.Model):
    id = models.IntegerField(primary_key=True, auto_created=True)
    age = models.IntegerField()
    name = models.CharField(max_length=100)
    gender = models.CharField(max_length=1)
    height = models.DecimalField(decimal_places=2, max_digits=3)

    def __str__(self):
        return self.name + ": "+str(self.age)
