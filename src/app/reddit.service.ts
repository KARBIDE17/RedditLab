import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FullResult } from './full-result';
@Injectable({
  providedIn: 'root'
})
export class RedditService {
  // inject     ------\/\/\/
  constructor(private http: HttpClient) { }

  private readonly url: string = 'https://www.reddit.com/r/aww/.json'


  // then we need to make some http web requests (use HttpClientModule)
  getPosts(): Observable<FullResult> {
    return this.http.get<FullResult>(this.url)
  }
}
