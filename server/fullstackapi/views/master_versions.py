from rest_framework.viewsets import ViewSet
from rest_framework import serializers
from rest_framework.response import Response
from fullstackapi.models import MasterVersion, Labels
import discogs_client
import sys

class MasterVersionSearch(ViewSet):
    def list(self, request):
        d = discogs_client.Client('Fullstack/0.1 +@:atphy42@gmail.com', user_token="EMIDOqyOnyXKSDQGfzjhruBlRDBvBVaZnIDcaTOd")
        master = self.request.query_params.get("master", None)
        masters = d.master(master).versions.page(1)
        releases = []
        for version in masters:
            release = version.data
            if ("Vinyl" in release["major_formats"]): 
                releases.append(release)
        sorted_releases = sorted(releases, key=lambda x: x['stats']['community']['in_wantlist'], reverse=True)
            
        return Response(sorted_releases)
