/* Angular 2 */
import { Inject } from '@angular/core';
import { URLSearchParams, Http, Headers, RequestOptions, Response } from '@angular/http';

/* rxjs */
import { Observable } from 'rxjs/Observable';

import { SecureApi } from './secure.api';

export class BaseService {
    constructor(private api: SecureApi) {}

    get(resource: string, body?: any) {
        return this.api.get(resource, body);
    }

    post(resource: string, body: any) {
        return this.api.post(resource, body);
    }

    delete(resource: string) {
        return this.api.delete(resource);
    }

    put(resource: string, body: any) {
        return this.api.put(resource, body);
    }
}
