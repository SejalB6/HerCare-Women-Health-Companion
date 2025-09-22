from django.db import models
from django.contrib.auth import get_user_model
from datetime import timedelta, date

User = get_user_model()

class PeriodCycle(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    start_date = models.DateField()
    end_date = models.DateField()
    notes = models.TextField(blank=True, null=True)
    cycle_length = models.IntegerField(default=28)  # default cycle length

    def predictions(self):
        """Return useful predictions based on cycle length"""
        next_period = self.start_date + timedelta(days=self.cycle_length)
        luteal_phase_start = next_period - timedelta(days=14)
        fertile_start = self.start_date + timedelta(days=12)
        fertile_end = fertile_start + timedelta(days=5)

        return {
            "next_period": next_period,
            "luteal_phase_start": luteal_phase_start,
            "fertile_window": f"{fertile_start} to {fertile_end}"
        }

    def __str__(self):
        return f"{self.user.email} cycle starting {self.start_date}"
