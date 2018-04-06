import { Injectable } from '@angular/core';

import { GemModel } from './gemmodel';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class GemsService {

    constructor(private httpClient: HttpClient) { }
    
    getGems() {
        return this.httpClient.get<GemModel[]>('/assets/gems.json');
    }

}
