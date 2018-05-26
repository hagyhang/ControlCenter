import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Broker } from '../../model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SystemHealthService {
    constructor(private httpClient:HttpClient){ }
    getBroker(): Observable<number[]>{
        return this.httpClient.get<number[]>('localhost:8082/brokers');
    }
}