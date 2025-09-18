from rest_framework import serializers
from .models import PeriodCycle

class PeriodCycleSerializer(serializers.ModelSerializer):
    class Meta:
        model = PeriodCycle
        fields = '__all__'

