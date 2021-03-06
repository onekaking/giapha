import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

/* Core Api */
import { BaseService } from '../core/base.service';
import { SecureApi } from '../core/secure.api';

/* rxjs operator */
import 'rxjs/Rx';

@Injectable()
export class UploadService {
    progress: any;
    progress$: any;
    progressObserver: any;
    url: string = 'http://localhost:1337/image/upload';

    constructor() {
        this.progress$ = Observable.create(observer => {
            this.progressObserver = observer;
        }).share();
    }

    public makeFileRequest(params: string[], files: File[]): any {
        return Observable.create(observer => {
            const formData: FormData = new FormData(),
                xhr: XMLHttpRequest = new XMLHttpRequest();

            for (let i = 0; i < files.length; i++) {
                formData.append('avatar', files[i], files[i].name);
            }

            xhr.onreadystatechange = () => {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        observer.next(JSON.parse(xhr.response));
                        observer.complete();
                    } else {
                        observer.error(xhr.response);
                    }
                }
            };

            xhr.upload.onprogress = (event) => {
                this.progress = Math.round(event.loaded / event.total * 100);

                this.progressObserver.next(this.progress);
            };

            xhr.open('POST', this.url, true);
            xhr.send(formData);
        });
    }
}