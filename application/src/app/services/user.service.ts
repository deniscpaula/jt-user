import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable } from 'rxjs/Observable';
import { Webservice } from './webservice.service';

@Injectable()
export class UserService {

    constructor(private webservice: Webservice) {

    }
    
    save(user: User): Observable<User> {
        return this.webservice.post('users', JSON.stringify(user))
            .map(res => res.json());
    }
    
    get(id: number | string): Observable<User> {
        return this.webservice.get(`users/${id}`)
            .map(res => res.json());
    }

    getAll(): Observable<Array<User>> {
        return this.webservice.get('users')
            .map(res => res.json());
    }

    delete(user: User): Observable<User> {
        return this.webservice.delete(`users/${user.id}`)
            .map(res => res.json());
    }
}