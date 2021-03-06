import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { LoginComponent } from './login/index';
import { FormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing }        from './app.routing';
import { WorkoutComponent,WorkoutService } from './workout/index';
import { RegisterComponent } from './register/index';
import { WorkoutlistComponent } from './workoutlist/workoutlist.component';
import { WorkouttransactionsListComponent } from './workouttransactionslist/workouttransactionslist.component';
import { WorkouttransactionsComponent,WorkouttransactionsService } from './workouttransactions/index';
import { ServiceUrlProviderService } from './serviceurlprovider.service';
import { HomeComponent } from './home/home.component';
import { AlertComponent,AlertService } from './alert/index';
import { CheckUserLoginComponent } from './checkuserlogin/index';
import { DecimalPipe } from '@angular/common';
import { CheckUserLoginService } from './checkuserlogin.service';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    WorkoutComponent,
    RegisterComponent,
    WorkoutlistComponent,
    WorkouttransactionsListComponent,
    WorkouttransactionsComponent,
    HomeComponent,
    AlertComponent,
    CheckUserLoginComponent
    
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
	  BrowserModule,
    FormsModule,
    HttpModule,
    routing
    
  ],
   providers: [ServiceUrlProviderService,WorkouttransactionsService,WorkoutService,AlertService,CheckUserLoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
