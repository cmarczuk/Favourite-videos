import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  API_YT_URL = 'https://www.googleapis.com/youtube/v3/videos?id=';
  API_VIMEO_URL = 'https://api.vimeo.com/videos/'
  constructor(public http: HttpClient) { }

  public getYtVideo(videoId: string): Observable<Object> {
    let url = `${this.API_YT_URL}${videoId}&key=${environment.API_YT_TOKEN}&part=snippet,statistics`;
    return this.http.get(url)
      .pipe(map((res) => {
        return res;
      }, catchError(err => { console.log(err); return throwError(err) })))
  }

  public getVimeoVideo(videoId: string): Observable<Object> {
    let url = `${this.API_VIMEO_URL}${videoId}`;
    return this.http.get(url, {
      headers: new HttpHeaders({
        'Authorization': `bearer ${environment.API_VIMEO_TOKEN}`,
        'Content-Type': 'application/json',
        'Accept': 'application/vnd.vimeo.*+json;version=3.4',
      })

    })
      .pipe(map((res) => {
        return res;
      }, catchError(err => { console.log(err); return throwError(err) })))
  }
}
