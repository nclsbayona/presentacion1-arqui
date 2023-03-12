from rest_framework import routers
from stuff.viewsets import PersonViewSet
router = routers.SimpleRouter()
router.register(r'person', PersonViewSet)