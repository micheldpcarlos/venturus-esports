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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BreadcrumbComponent,
    SectionTitleComponent,
    UsersListComponent,
    WeekDaysTextPipe,
    UsersFormComponent,
    SportInfoComponent
  ],
  imports: [
    BrowserModule,
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
