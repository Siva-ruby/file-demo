import { Component, OnInit } from '@angular/core';
import files from './_file/files.json';
import { DocviewerComponent } from './docviewer/docviewer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'File Demo';
  docview = false;
  pdfview = false;
  docSrc = '';
  DemoDoc = '';
  // DemoDoc = 'https://files.fm/down.php?i=za6x53972';
  myDocCompObj:any;
  
  public fileList:{name:string, path:string}[] = files;

  ngOnInit(){
    localStorage.clear();
    this.myDocCompObj = new DocviewerComponent();
    this.docview = false;
  }

  viewFile(id: any){
    // this.myDocCompObj.ngOnInit();
    const ext = ['png', 'gif', 'jpg', 'jpeg', 'mp4']
    let name = this.fileList[id].name;
    let docurl = 'http://localhost:4200/assets/download_file/' + this.fileList[id].name;
    if (ext.includes(name.split('.')[1])){
      // this.docview = false;
      // this.DemoDoc  = '';
      window.open(docurl, '_self');
    }else{
      // this.docview = true;
      // alert(this.fileList[id].path)
      // localStorage.setItem('dataPath', this.fileList[id].path);
      this.DemoDoc = this.fileList[id].path.toString();
      // alert(this.fileList[id].path.toString())
      // this.DemoDoc = 'https://files.fm/down.php?i=za6x53972';

    }
  }
  
}
