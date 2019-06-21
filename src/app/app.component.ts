import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'test';


  ngOnInit() {
    this.hidetimer();
    this.moveleft();
  }
  hidetimer() {

    setTimeout(() => {
      // document.body.style.position = 'fixed';
      // document.body.style.overflow = 'hidden';

      document.getElementById('timer').classList.add('hide_it');
    }, 4000);
    return false;
  }

  moveleft() {
    const p = document.querySelector('.i_main_container');
    if (screen.width < 767) {
      document.getElementById('banner_main').style.width = '100%';
      document.getElementById('details_container').style.width = '100%';
    } else {

      setTimeout(() => {
        document.getElementById('banner_main').style.width = '50%';
        document.getElementById('details_container').style.width = '50%';

      }, 5000);
    }
    return false;
  }
}
