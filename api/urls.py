from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import PeriodCycleViewSet

router = DefaultRouter()
router.register(r'periods', PeriodCycleViewSet, basename='periods')

urlpatterns = [
    path('', include(router.urls)),
]
