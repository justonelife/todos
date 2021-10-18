import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faUser, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-user-button',
  templateUrl: './user-button.component.html',
  styleUrls: ['./user-button.component.scss']
})
export class UserButtonComponent implements OnInit {

  public faUser = faUser;
  public faSignOutAlt = faSignOutAlt;
  public isShowNavigate: Boolean = false;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  toggleShowNavigate(): void {
    this.isShowNavigate = !this.isShowNavigate;
  }

  onLogoutClick(): void{
    sessionStorage.removeItem('user');
    sessionStorage.removeItem('TOKEN');
    this.router.navigate(['/login']);
  }

}
