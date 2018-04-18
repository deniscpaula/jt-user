import { Injectable } from "@angular/core";
import { User } from "../models/user";
import { Observable } from "rxjs/Observable";
import { Webservice } from "./webservice.service";

@Injectable()
export class UserService {

    constructor(private webservice: Webservice) {

    }
    
    save(user: User): Observable<User> {
        return this.webservice.post('users', JSON.stringify(user))
            .map(res => res.json());
    }

    delete(user: User): Observable<User> {
        return this.webservice.delete('users')
            .map(res => res.json());
    }
}