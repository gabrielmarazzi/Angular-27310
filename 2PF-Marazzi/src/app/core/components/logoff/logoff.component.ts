import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-logoff',
  templateUrl: './logoff.component.html',
  styleUrls: ['./logoff.component.css']
})
export class LogoffComponent implements OnInit {

  constructor(
    private router: Router,
    private SpinnerService: NgxSpinnerService
  ) { }

  ngOnInit(): void {
    this.SpinnerService.show();
    setTimeout(() => {
      this.SpinnerService.hide();
      this.router.navigate(['./login']);
      //llamada a web service para blaquear guid
    }, 2000);
  }

}
