import { IResponse } from './fetch.interface';

export interface ICartResponse extends IResponse {
	cart: ICart;
}

export interface IBaseCart {
	name: string;
	user: string;
	items: ICartItem[];
}

export interface ICart extends IBaseCart {
	_id: string;
	__v: number;
}

export interface IBaseCartItem {
	completed: boolean;
	name: string;
	quantity: number;
	category: string;
	item: string;
}

export interface ICartItem extends IBaseCartItem {
	_id: string;
}
