import { Component, OnInit } from '@angular/core';
import { BooksProviderService } from '../books-provider.service';
import { FileUploader, FileSelectDirective } from 'ng2-file-upload/ng2-file-upload';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  userId: number = 0;
  imageUploaded: boolean = false;
  imageURL: string = '';
  constructor(public booksProviderService: BooksProviderService) {
    this.getUserData();
  }

  public uploader: FileUploader = new FileUploader({ url: "/api/upload", itemAlias: 'photo' });


  getUserData() {
    if (this.userId == 0)
      this.booksProviderService.getUser().subscribe(res => {
        console.log("getRequest in add ", res);
        if (res["statusCode"] != 400) {
          this.userId = res["id"];
        }
      });
  }

  ngOnInit() {
    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      // console.log(JSON.parse(response));
      if(JSON.parse(response)["success"]){
        alert('File uploaded successfully');
        this.imageUploaded=true;
        this.imageURL= "/uploads/"+JSON.parse(response)["info"];
      }
      else{
        alert('File upload failed');
        this.imageUploaded=false;
        this.imageURL= '';
      }
      
    };
  }

}
