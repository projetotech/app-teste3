import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import {AngularFireModule} from '@angular/fire/compat';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {AngularFireAuthModule} from '@angular/fire/compat/auth';
import { environment } from 'src/environments/environment';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    AngularFireModule,AngularFireAuthModule,AngularFireModule.initializeApp(environment.firebaseConfig), provideFirebaseApp(() => initializeApp({"projectId":"auth-2fa-871d0","appId":"1:976084860487:web:ac15505c81e571c4327b62","storageBucket":"auth-2fa-871d0.appspot.com","apiKey":"AIzaSyBbPvtDv-GOgZdp6EjgX3qchagBilkrWQM","authDomain":"auth-2fa-871d0.firebaseapp.com","messagingSenderId":"976084860487","measurementId":"G-34KCNX55W4"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore())
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
