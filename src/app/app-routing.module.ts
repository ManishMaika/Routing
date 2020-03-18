import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';

const routes: Routes = [
	{path:'', component:HomeComponent},
	{path:'home', component:HomeComponent},
	{path:'about', component:AboutComponent},
	{path:'services', component:ServicesComponent},
	{path:'blog', component:BlogComponent},
	{path:'contact', component:ContactComponent},
	{path:'**', component:ErrorpageComponent }
		
	];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    BlogComponent,
    ContactComponent,
    ErrorpageComponent],
  
  
    declarations: [
   
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    BlogComponent,
    ContactComponent,
    ErrorpageComponent],

})
export class AppRoutingModule { }
