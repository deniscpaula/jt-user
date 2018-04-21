import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable } from 'rxjs/Observable';
import { Webservice } from './webservice.service';
import { History } from '../models/history';

@Injectable()
export class HistoryService {

    constructor(private webservice: Webservice) {

    }
    
    getAll(): Observable<Array<History>> {
        return this.webservice.get('history')
            .map(res => res.json());
    }
}