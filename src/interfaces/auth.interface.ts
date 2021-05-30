import { IResponse } from './fetch.interface';

export interface IAuthResponse extends IResponse {
	user: IAuthUserResponse;
	token: string;
}

export interface IAuthUserResponse {
	email: string;
	uid: string;
}
