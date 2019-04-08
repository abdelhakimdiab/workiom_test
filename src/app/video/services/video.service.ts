import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { VideoSearchResponse } from '../models/video.model';

@Injectable()
export class VideoService {

    baseUrl = 'https://www.googleapis.com/youtube/v3/search?part=snippet&' +
        '&key=AIzaSyA8OHCyYSR7aFsJXsna7TumltQ0v56rUWU' +
        '&order=date&maxResults=10&type=video&videoEmbeddable=true';

    constructor(private http: HttpClient) {
    }

    getVideos(channelId: string, pageToken?: string): Observable<VideoSearchResponse> {

        let url = this.baseUrl + `&channelId=${channelId}`;

        if (pageToken) {
            url = `${this.baseUrl}&pageToken=${pageToken}` + `&channelId=${channelId}`;
        }

        return this.http.get<VideoSearchResponse>(url);
    }
}
