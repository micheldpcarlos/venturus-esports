import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { ActivatedRoute } from '@angular/router';
import { SportsService } from 'src/app/services/sports.service';
import { Album } from 'src/app/models/album.model';
import { Photo } from 'src/app/models/photo.model';

@Component({
  selector: 'app-user-albums',
  templateUrl: './user-albums.component.html',
  styleUrls: ['./user-albums.component.scss']
})
export class UserAlbumsComponent implements OnInit {

  public userAlbums: Album[];
  public albumsCover: Photo[] = [];
  public user: User;
  constructor(private sportsService: SportsService, private route: ActivatedRoute) { }

  ngOnInit() {
    const uid: number = Number(this.route.snapshot.paramMap.get("uid"));

    this.sportsService.getUser(uid).subscribe(result => {
      this.user = result;
    });

    this.sportsService.getAlbumsByUser(uid).subscribe(result => {
      this.userAlbums = result;

      this.userAlbums.forEach(album => {
        this.sportsService.getPhotoForAlbumCover(album.id).subscribe(result => {
          this.albumsCover.push(result[0]);
        })
      })
    });

  }
}
