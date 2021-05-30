import { IResponse } from './fetch.interface';

export interface ICategoriesResponse extends IResponse {
	categories: ICategory[];
}

export interface ICreateCategoryResponse extends IResponse {
	category: ICategory;
}

export interface IBaseCategory {
	category: string;
	lowercase: string;
	user: string;
}

export interface ICategory extends IBaseCategory {
	_id: string;
	__v: number;
}

// Items
export interface IItemsResponse extends IResponse {
	items: IItem[];
	categories: ICategory[];
}
export interface IModifyItemResponse extends IResponse {
	item: IItem;
}

export interface IBaseItem {
	name: string;
	note: string;
	image: string;
	category: string;
	user: string;
}

export interface IItemByCategory {
	category: string;
	items: IItem[];
}

export interface IItem extends IBaseItem {
	_id: string;
	__v: number;
}

export interface IItemsPayload {
	categories: ICategory[];
	items: IItem[];
}
