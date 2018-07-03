import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ProfilePannelComponent } from './component/profile-pannel/profile-pannel.component';
import { PostsComponent } from './component/posts/posts.component';
import { FooterComponent } from './component/footer/footer.component';
import { AboutComponent } from './component/about/about.component';
import { ContactComponent } from './component/contact/contact.component';
import { WorkComponent } from './component/work/work.component';

const routes : Routes = [
  { path: '', component: PostsComponent},
  { path: 'about', component: AboutComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'work', component: WorkComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    ProfilePannelComponent,
    PostsComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    WorkComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
