import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IndexComponent } from './components/index/index.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PhotosComponent } from './components/photos/photos.component';
import { AlbumsComponent } from './components/albums/albums.component';


const APP_ROUTES = [
  { path: '', component: IndexComponent },
  { path: 'photos/:id', component: PhotosComponent },
  { path: 'albums/:id', component: AlbumsComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    PhotosComponent,
    AlbumsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(APP_ROUTES),
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
