from rest_framework import viewsets, permissions
from .models import PeriodCycle
from .serializers import PeriodCycleSerializer


class PeriodCycleViewSet(viewsets.ModelViewSet):
    serializer_class = PeriodCycleSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        # Only return periods that belong to the logged-in user
        return PeriodCycle.objects.filter(user=self.request.user)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)





