from rest_framework import serializers
from .models import PeriodCycle

class PeriodCycleSerializer(serializers.ModelSerializer):
    predictions = serializers.SerializerMethodField()

    class Meta:
        model = PeriodCycle
        fields = ['id', 'start_date', 'end_date', 'notes', 'cycle_length', 'predictions']
        read_only_fields = ['user', 'predictions']

    def get_predictions(self, obj):
        return obj.predictions()

