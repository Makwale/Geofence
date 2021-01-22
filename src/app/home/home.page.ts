import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

import { Geofence } from '@ionic-native/geofence/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private geofence: Geofence) {
    geofence.initialize().then(
      // resolved promise does not return a value
      () => alert('Geofence Plugin Ready'),
      (err) => alert(err)
    )
  }
  ngOnInit(): void {
    this.addGeofence()
  }

  private addGeofence() {
    //options describing geofence
    let fence = {
      id: '1', //any unique ID
      latitude:       -24.3615738, //center of geofence radius
      longitude:      30.2960174,
      radius:         15, //radius to edge of geofence in meters
      transitionType: 3, //see 'Transition Types' below
      notification: { //notification settings
          id:             1, //any unique ID
          title:          'You crossed a fence', //notification title
          text:           'You just arrived to Gliwice city center.', //notification body
          openAppOnClick: true //open app when notification is tapped
      }
    }
  
    this.geofence.addOrUpdate(fence).then(
       () => alert('Geofence added'),
       (err) => alert(err.code)
     );
  }

}
