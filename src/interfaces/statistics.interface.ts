import { IResponse } from './fetch.interface';

export interface IStatisticsResponse extends IResponse {
	total: IStatisticsItem[];
	topItems: IStatisticsItem[];
	topCategories: IStatisticsItem[];
	monthlySummary: IStatisticsItem[];
}

export interface IStatisticsItem {
	_id: number;
	count: number;
}
