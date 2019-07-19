import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersPageComponent } from './pages/users-page/users-page.component';
import { AlbumsPageComponent } from './pages/albums-page/albums-page.component';
import { PostsPageComponent } from './pages/posts-page/posts-page.component';

const routes: Routes = [
  { path: 'users', component: UsersPageComponent },
  { path: 'albums/:uid', component: AlbumsPageComponent },
  { path: 'posts/:uid', component: PostsPageComponent },
  { path: '', redirectTo: 'users', pathMatch: 'full' },
  { path: '**', redirectTo: 'users' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }