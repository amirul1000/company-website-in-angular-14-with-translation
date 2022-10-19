import { AfterViewInit, Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import * as Leaf from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class MapComponent implements OnInit, AfterViewInit {
  map: any;

  data: any[] = [
    { lat: '32', lng: '20.2', status: 1 },
    { lat: '32.1', lng: '20.1', status: 0 },
    { lat: '32.005', lng: '20.1', status: 1 },
    { lat: '32.005', lng: '20.05', status: 0 },
    { lat: '32.08', lng: '20.05', status: 1 },
    { lat: '32', lng: '20', status: 1 },
    { lat: '32', lng: '15', status: 1 },
    { lat: '32', lng: '15.2', status: 1 },
    { lat: '32.6', lng: '13', status: 10 },
    { lat: '32.4', lng: '12', status: 1 },
    { lat: '32.5', lng: '13', status: 1 },
    { lat: '32.5', lng: '13.2', status: 1 },
    { lat: '31', lng: '16', status: 1 },
    { lat: '31.5', lng: '12', status: 1 },
    { lat: '28.5', lng: '12', status: 1 },
    { lat: '29.5', lng: '20', status: 0 },
    { lat: '29.5', lng: '24', status: 1 },
    { lat: '22.5', lng: '24', status: 0 },
    { lat: '25.5', lng: '21', status: 0 },
    { lat: '26.5', lng: '20', status: 1 },
    { lat: '24.5', lng: '20', status: 0 },
    { lat: '23.5', lng: '18', status: 1 },
    { lat: '23.5', lng: '15', status: 1 },
    { lat: '25.5', lng: '12', status: 0 },
    { lat: '25.7', lng: '12', status: 1 },


  ]

  iconOnline = Leaf.icon({
    iconUrl: 'assets/img/atm-online.png',
    iconSize: [50, 50],
  })

  iconOffline = Leaf.icon({
    iconUrl: 'assets/img/atm-offline.png',
    iconSize: [50, 50],
  })

  constructor() { }


  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.initMap();
    this.addMarkers();
  }


  private initMap(): void {
    this.map = Leaf.map('map', {
      center: [28, 18],
      zoom: 6
    });

    const tiles = Leaf.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });
    tiles.addTo(this.map);

    this.addMarkers();
  }

  addMarkers(): void {
    if (this.data) {
      this.data.forEach(element => {
        if (element.status == 1) {
          Leaf.marker([element.lat, element.lng], { title: 'Available', alt: 'Online', icon: this.iconOnline }).addTo(this.map);
        } else {
          Leaf.marker([element.lat, element.lng], { title: 'Unavailable', alt: 'Offline', icon: this.iconOffline }).addTo(this.map);
        }
      });
    }
  }
}
