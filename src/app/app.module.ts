import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// Font Awesome Module
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

//Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { SectionTitleComponent } from './components/section-title/section-title.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { CustomInfoInterceptor } from './interceptors/custom-info.interceptor';
import { WeekDaysTextPipe } from './pipes/week-days-text.pipe';
import { UsersFormComponent } from './components/users-form/users-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SportInfoComponent } from './components/sport-info/sport-info.component';
import { QAndAComponent } from './components/q-and-a/q-and-a.component';
import { UsersPageComponent } from './pages/users-page/users-page.component';
import { AlbumsPageComponent } from './pages/albums-page/albums-page.component';
import { PostsPageComponent } from './pages/posts-page/posts-page.component';
import { AppRoutingModule } from './app-routing.module';
import { UserPostsComponent } from './components/user-posts/user-posts.component';
import { ExitBarComponent } from './components/exit-bar/exit-bar.component';
import { UserAlbumsComponent } from './components/user-albums/user-albums.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BreadcrumbComponent,
    SectionTitleComponent,
    UsersListComponent,
    WeekDaysTextPipe,
    UsersFormComponent,
    SportInfoComponent,
    QAndAComponent,
    UsersPageComponent,
    AlbumsPageComponent,
    PostsPageComponent,
    UserPostsComponent,
    ExitBarComponent,
    UserAlbumsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: CustomInfoInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
