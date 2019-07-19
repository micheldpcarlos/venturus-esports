import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';


// Models
import { User } from '../models/user.model';
import { Post } from '../models/post.model';
import { Album } from '../models/album.model';
import { Photo } from '../models/photo.model';
import { CustomInfo } from '../models/custom-info.model';
import { TableData } from '../models/table-data.model';

@Injectable({
  providedIn: 'root'
})
export class SportsService {

  constructor(private http: HttpClient) { }

  // Users
  public getUsers() {
    const url = environment.API_URL + '/users';
    return this.http.get<User[]>(url)
  }

  public getUser(userId: number) {
    const url = environment.API_URL + '/users/' + userId;
    return this.http.get<User>(url)
  }

  // Posts
  public getPosts() {
    const url = environment.API_URL + '/posts';
    return this.http.get<Post[]>(url)
  }

  public getPostsByUser(userId: number) {
    const url = environment.API_URL + '/posts?userId=' + userId;
    return this.http.get<Post[]>(url)
  }

  public getCommentsByPostId(postId: number) {
    const url = environment.API_URL + '/comments?postId=' + postId;
    return this.http.get<Comment[]>(url)
  }

  // Albums
  public getAlbums() {
    const url = environment.API_URL + '/albums';
    return this.http.get<Album[]>(url)
  }

  public getAlbumsByUser(userId: number) {
    const url = environment.API_URL + '/albums?userId=' + userId;
    return this.http.get<Album[]>(url)
  }

  // Photos
  public getPhotos() {
    const url = environment.API_URL + '/photos';
    return this.http.get<Photo[]>(url)
  }

  public getPhotosByAlbumId(albumId: number) {
    const url = environment.API_URL + '/photos?_limit=5&albumId=' + albumId;
    return this.http.get<Photo[]>(url);
  }

  // Custom Mock Info
  public getCustomInfo() {
    const url = environment.MOCK_URL + '/custom-info';
    return this.http.get<CustomInfo[]>(url)
  }

  // Consolidated Table Data Info
  public getTableData() {
    const users = this.getUsers();
    const posts = this.getPosts();
    const albums = this.getAlbums();
    const photos = this.getPhotos();
    const customInfo = this.getCustomInfo();

    return forkJoin([users, posts, albums, photos, customInfo]).pipe(map(result => {
      const tableDataArray: TableData[] = [];
      let tempTableData: TableData;

      result[0].forEach(user => {
        tempTableData = {
          userId: user.id,
          name: user.name,
          username: user.username,
          email: user.email,
          address: user.address,
          dayOfTheWeek: this.getDayOfTheWeek(user.id, result[4]),
          rideInGroup: this.getRideInGroup(user.id, result[4]),
          albums: this.countUserAlbums(user.id, result[2]),
          posts: this.countUserPosts(user.id, result[1]),
          photos: this.countUserPhotos(user.id, result[2], result[3])
        }

        tableDataArray.push(tempTableData)
      })
      return tableDataArray
    }))
  }

  private countUserAlbums(userId: number, albums: Album[]): number {
    return albums.filter(item => item.userId === userId).length
  }

  private countUserPosts(userId: number, posts: Post[]): number {
    return posts.filter(item => item.userId === userId).length
  }

  private countUserPhotos(userId: number, albums: Album[], photos: Photo[]): number {
    let photoCounter = 0;
    const userAlbuns = albums.filter(item => item.userId === userId);

    userAlbuns.forEach(album => {
      photoCounter += photos.filter(photo => photo.albumId == album.id).length;
    })

    return photoCounter;
  }

  private getDayOfTheWeek(userId: number, customInfos: CustomInfo[]) {
    return customInfos.find(item => item.userId === userId).dayOfTheWeek;
  }

  private getRideInGroup(userId: number, customInfos: CustomInfo[]) {
    return customInfos.find(item => item.userId === userId).rideInGroup;
  }
}
