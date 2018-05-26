import { Component, OnInit } from '@angular/core';
import { Broker, Topic } from '../../model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SystemHealthService } from './system.service';

@Component({
  selector: 'app-system-health',
  templateUrl: './system-health.component.html',
  styleUrls: ['./system-health.component.css']
})
export class SystemHealthComponent implements OnInit {

  brokers:Broker;
  numberOfBroker:number = 0;
  disconnectd:number;
  activeControllers:number;
  uncleanElections:number;
  networkPool:number;
  requestPool:number;
  disk:number;
  online:number;
  offline:number;
  underReplicated:number;
  
  constructor(private httpClient:HttpClient) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/vnd.kafka.json.v1+json'
      })
    };
    this.httpClient.get("http://localhost:8082/brokers", httpOptions).subscribe(
      (data:any[])=>{
        this.numberOfBroker = eval("data.brokers.length");
      },
      (e)=>{
        alert("error: " + e);
      }
    )
    this.httpClient.get("http://localhost:8082/topics").subscribe(
      (data:any[])=>{
        for (let i = 0; i<data.length; i++)
        {
          this.httpClient.get("http://localhost:8082/topics/" + data[i]).subscribe(
            (data:Topic)=>{
              console.log(data.partitions);
            },
            (e)=>{
              alert("erro2: " + e);
            }
          )
        }
      },
      (e)=>{
        alert("error1: " + e);
      }
    )
  }

  ngOnInit() {
  }

}
