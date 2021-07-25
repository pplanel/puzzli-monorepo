import { Component, OnInit } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Component({
  selector: 'app-healthcheck',
  templateUrl: './healthcheck.component.html',
  styleUrls: ['./healthcheck.component.scss']
})
export class HealthcheckComponent implements OnInit {

  constructor(private socket: Socket) { }

  ngOnInit(): void {
    setInterval(() => {
      console.log("enviad")
      this.socket.emit("events", {message: "Hellow", timestamp: new Date().getTime() });
    });
  }

}
