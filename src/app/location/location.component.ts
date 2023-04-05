import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
declare const google: any;

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent {
  @ViewChild('mapContainer', { static: true })
  mapContainer!: ElementRef;
  map: any;
  marker: any;
  latitude: number = 0;
  longitude: number = 0;

  ngOnInit() {
    this.getLocation();
  }

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        localStorage.setItem('latitude', this.latitude.toString());
        localStorage.setItem('longitude', this.longitude.toString());
        const { latitude, longitude } = position.coords;
        const location = { latitude, longitude };
        localStorage.setItem('gpsLocation', JSON.stringify(location));

        const mapOptions = {
          center: new google.maps.LatLng(this.latitude, this.longitude),
          zoom: 12,
        };
        this.map = new google.maps.Map(this.mapContainer.nativeElement, mapOptions);
        this.marker = new google.maps.Marker({
          position: new google.maps.LatLng(this.latitude, this.longitude),
          map: this.map,
        });


        console.log(this.map);

      });

      navigator.geolocation.watchPosition(
        (position) => {
          const latLng = new google.maps.LatLng(
            position.coords.latitude,
            position.coords.longitude
          );
          // this.marker.setCenter(latLng);
          this.map.setCenter(latLng);
          const { latitude, longitude } = position.coords;
          const location = { latitude, longitude };
          localStorage.setItem('gpsLocation', JSON.stringify(location));
        },
        (error) => {
          console.error('Error getting location:', error);
        }
      );


    } else {
      alert('Geolocation is not supported by this browser.');
    }
  }
}
