import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './shared/page-not-found.component';
import { ProductModule } from './products/product.module';

@NgModule({
	declarations: [AppComponent, WelcomeComponent, PageNotFoundComponent],
	imports: [
		BrowserModule,
		HttpClientModule,
		RouterModule.forRoot([
			{ path: 'welcome', component: WelcomeComponent },
			{ path: '', redirectTo: 'welcome', pathMatch: 'full' },
			{ path: '**', component: PageNotFoundComponent },
		]),
		ProductModule,
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
