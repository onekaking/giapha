import { Component, Input, ViewEncapsulation, ElementRef, ViewChild, OnInit } from '@angular/core';

/* Service */
import { UploadService } from '../../upload.service';

@Component({
    selector: 'app-upload-avatar',
    templateUrl: 'upload-avatar.component.html',
    styleUrls: ['upload-avatar.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class UploadAvatarComponent implements OnInit {
    @Input() defaultImage: string;
    image: string;
    @ViewChild('fileElement') fileElement: ElementRef;

    constructor(private uploadService: UploadService) {}

    ngOnInit() {
        this.image = this.defaultImage;
    }

    onChange(event) {
        const files = event.srcElement.files;
        this.uploadService.makeFileRequest([], files)
            .subscribe((data) => {
                const avatar = `data:image/gif;base64,${data.avatar}`;
                this.image = avatar;
                this.defaultImage = data.url;
            });
    }

    onClickChangeImage() {
        this.fileElement.nativeElement.click();
    }
}