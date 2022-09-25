import django_filters #libraray
from .models import dataNew 

class dataNewFilter(django_filters.FilterSet):
    class Meta:
        model = dataNew #model = model_name for which making this filter
        fields='__all__'