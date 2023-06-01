import { Component, OnInit } from '@angular/core';
import { RedditService } from '../reddit.service'
import { Posts, SinglePost } from '../full-result';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

constructor(private redditService: RedditService) {}

posts?: SinglePost[];

// angular life cycle hook, add onInit above
ngOnInit(): void {
  this.getAllPosts();
}
// methods to use the service
getAllPosts() {
  this.redditService.getPosts().subscribe( 
    
    result => {
      //  stuff result into post property
      this.posts = result.data.children;
    }
    
  );
}





}
