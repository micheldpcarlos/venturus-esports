import { Component, OnInit } from '@angular/core';
import { SportsService } from 'src/app/services/sports.service';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/models/post.model';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.scss']
})
export class UserPostsComponent implements OnInit {

  public userPosts: Post[];
  public user: User;
  constructor(private sportsService: SportsService, private route: ActivatedRoute) { }

  ngOnInit() {
    const uid: number = Number(this.route.snapshot.paramMap.get("uid"));

    this.sportsService.getUser(uid).subscribe(result => {
      this.user = result;
    });

    this.sportsService.getPostsByUser(uid).subscribe(result => {
      this.userPosts = result;
    });

  }

}
