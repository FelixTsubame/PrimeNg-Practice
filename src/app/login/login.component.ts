import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { PrimeNGConfig } from 'primeng/api';
import { PasswordModule } from 'primeng/password';
import { FormsModule  } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'his-login',
  standalone: true,
  imports: [
            CommonModule,
            ButtonModule,
            PasswordModule,
            FormsModule,
            RouterLink,
          ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  private primeConfig = inject(PrimeNGConfig);
  public welcomeTitle = '歡迎使用醫療系統';
  public userNameTitle = '帳號';
  public exampleTitle = 'Username'
  public passwordValue = '';
  public passwordTitle = '密碼';

  OnInit(): void {
    this.primeConfig.ripple = true;
  }
}
