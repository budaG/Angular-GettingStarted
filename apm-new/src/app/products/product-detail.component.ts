import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from './product';

@Component({
	templateUrl: './product-detail.component.html',
	styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
	pageTitle: string = 'Prouct Details';
	product: IProduct | undefined;
	imageWidth: number = 250;

	constructor(private route: ActivatedRoute, private router: Router) {}

	ngOnInit(): void {
		const id = Number(this.route.snapshot.paramMap.get('id'));
		this.pageTitle += `: ${id}`;
		this.product = {
			productId: 5,
			productName: 'Hammer',
			productCode: 'TBX-0048',
			releaseDate: 'May 21, 2021',
			description: 'Curved claw steel hammer',
			price: 8.9,
			starRating: 4.8,
			imageUrl: 'assets/images/hammer.png',
		};
	}

	onBack(): void {
		this.router.navigate(['/products']);
	}
}
