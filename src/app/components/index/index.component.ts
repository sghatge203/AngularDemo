import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { IndexService } from '../../Services/index.service';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class IndexComponent implements OnInit {
  users;
  usersAddress=[];
  usersCompany=[];
  constructor(
    public indexService: IndexService,
    private router: Router,
    private modalService: NgbModal
    ) { }

  ngOnInit() {
    this.getUser();
  }

  getUser() {
    this.indexService.getList().subscribe(
      data => {
        this.users = data;
      },
      error => {

      }
    )
  }
  viewAlbums(id,name) {
    localStorage.setItem('name',name)
    this.router.navigate(['albums',id])
  }
  viewDetails(content,id){
    this.modalService.open(content, { centered: true });
    this.usersCompany=[];
    this.usersAddress=[];
    for(let key in this.users){
      if(id == this.users[key].id){
        this.usersAddress.push(this.users[key].address);
        this.usersCompany.push(this.users[key].company);
      }
    }
  }
}
