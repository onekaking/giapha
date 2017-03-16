/* Angular 2 */
import { Inject } from '@angular/core';
import { URLSearchParams, Http, Headers, RequestOptions, Response } from '@angular/http';

/* rxjs */
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

export class SecureApi {
    constructor(
        @Inject(Http) private http: Http,
        @Inject('baseUrl') private baseUrl: string) {}

    get(resource: string, body?: any) {
        const params: URLSearchParams = new URLSearchParams();
        if (body) {
            for (const key in body) {
                params.set(key, body[key]);
            }
            resource += ('?' + params.toString());
        }
        const url = this.baseUrl + resource;

        return this.http.get(url, this.createRequestOptions())
            .map(res => res.json());
    }

    post(resource: string, body: any) {
        const url = this.baseUrl + resource;

        return this.http.post(url, body, this.createRequestOptions())
            .map(res => res.json());

    }

    delete(resource: string) {
        const url = this.baseUrl + resource;

        return this.http.delete(url, this.createRequestOptions())
            .map(res => res.json());
    }

    put(resource: string, body: any) {
        const url = this.baseUrl + resource;

        return this.http.put(url, body, this.createRequestOptions())
            .map(res => res.json());
    }

    private createRequestOptions() {
        const headerOptions = {
            'Accept': 'application/json'
        };

        const headers = new Headers(headerOptions);
        return new RequestOptions({ headers: headers });
    }
}
