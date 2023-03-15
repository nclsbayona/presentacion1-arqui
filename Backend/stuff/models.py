from django.db import models

class Person(models.Model):
    id = models.IntegerField(primary_key=True, auto_created=True)
    age = models.IntegerField(default=18)
    name = models.CharField(default='Lucas', max_length=100)
    gender = models.CharField(default='M', max_length=1)
    height = models.DecimalField(default=1.70, decimal_places=2, max_digits=3)

    def __str__(self):
        return self.name + ": "+str(self.age)
