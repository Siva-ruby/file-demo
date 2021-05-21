import { Component, OnInit } from '@angular/core';
import files from '../_file/files.json';

@Component({
  selector: 'app-docviewer',
  templateUrl: './docviewer.component.html',
  styleUrls: ['./docviewer.component.scss']
})
export class DocviewerComponent implements OnInit {
  selectedType = 'docx';
  // alert(localStorage.getItem("dataPath"));
  // DemoDoc = '';
  // DemoDoc="http://www.africau.edu/images/default/sample.pdf"
  DemoDoc = "https://files.fm/down.php?i=za6x53972"
  // DemoDoc = "https://files.fm/down.php?i=jf8krg5gr"
  // DemoDoc = "https://files.fm/down.php?i=9zr7k4wtc"
  // DemoDoc = "https://files.fm/down.php?i=k8rft92sb"

  public fileList:{name:string, path:string}[] = files;
  
  constructor() { }

  ngOnInit(): void {
    // alert('local '+localStorage.getItem("dataPath"))
    // this.DemoDoc = "https://files.fm/down.php?i=za6x53972"
    // this.DemoDoc = '' + localStorage.getItem("dataPath");
    // alert(this.DemoDoc)
  }

  viewDocFile(id: any){
    const ext = ['png', 'gif', 'jpg', 'jpeg', 'mp4']
    let name = this.fileList[id].name;
    
    if (ext.includes(name.split('.')[1])){
      let docurl = 'http://localhost:4200/assets/download_file/' + this.fileList[id].name;
      window.open(docurl, '_self');
    }else{
      this.DemoDoc = this.fileList[id].path;
      alert(this.DemoDoc)
    }
  }

}
