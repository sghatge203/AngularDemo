import { Component, OnInit } from '@angular/core';
import { IndexService } from '../../Services/index.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  albums;
  sub;
  id;
  userAlbums=[];
  userAlbum={
    id:'',
    title:'',
    userId:''
  };
  userName='';
  constructor(public indexService: IndexService,
    public router: Router,
    private route: ActivatedRoute) {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
    });
  }

  ngOnInit() {
    this.userName = localStorage.getItem('name')
    this.getAlbums();
  }
  getAlbums() {
    this.indexService.getAlbums().subscribe(
      data => {
        this.albums = data;
        this.userAlbums = [];
        for (let key in this.albums) {
          if (this.id == this.albums[key].userId) {
            this.userAlbum.id = this.albums[key].id;
            this.userAlbum.title = this.albums[key].title;
            this.userAlbum.userId = this.albums[key].userId;
            this.userAlbums.push(this.userAlbum)
          }
        }
      },
      error => {

      }
    )
  }
  viewPhotos(id,title){
      localStorage.setItem('album',title)
      this.router.navigate(['photos',id])
  }
  back(){
    this.router.navigate([''])
  }
}
