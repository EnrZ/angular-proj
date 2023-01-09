import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-google-map',
 // templateUrl: './google-map.component.html',
 // styleUrls: ['./google-map.component.css']
 template: `
    <agm-map
      [latitude]="lat"
      [longitude]="lng"
      [mapTypeId]="mapType"
    >
    </agm-map>
  `,
  styles: [
    'agm-map { height: 300px; }'
  ]
})
export class GoogleMapComponent implements OnInit {
  lat = 21.3069;
  lng = -157.8583;
  mapType = 'satellite';

  constructor() { }

  ngOnInit() {
  }

}
