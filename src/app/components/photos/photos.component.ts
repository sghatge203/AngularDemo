import { Component, OnInit } from '@angular/core';
import { IndexService } from '../../Services/index.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  sub;
  id;
  photos;
  userPhoto={
    thumbnailUrl:'',
    title:'',
    url:'',
    albumId:''

  }
  userPhotos=[];;
  albumName='';
  constructor(public indexService: IndexService,
    public router: Router,
    private route: ActivatedRoute) {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
    });
  }

  ngOnInit() {
    this.getPhotos();
    this.albumName = localStorage.getItem('album')
  }
  getPhotos() {
    this.indexService.getPhotos().subscribe(
      data => {
        this.photos = data;
        this.userPhotos=[];
        for(let key in this.photos){
          if(this.id == this.photos[key].albumId){
            this.userPhoto.albumId = this.photos[key].albumId
            this.userPhoto.title = this.photos[key].title
            this.userPhoto.url = this.photos[key].url
            this.userPhoto.thumbnailUrl = this.photos[key].thumbnailUrl;
            this.userPhotos.push(this.userPhoto);
          }

        }
      },
      error => {

      }
    )
  }
  back(){
    this.router.navigate(['albums',this.id])
  }
}
