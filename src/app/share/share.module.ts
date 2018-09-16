import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { UserService } from './services/user.service';
import { DatePipe } from './pipes/date.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    LoginComponent
  ],
  declarations: [LoginComponent, DatePipe],
  providers: [UserService]
})
export class ShareModule { }
