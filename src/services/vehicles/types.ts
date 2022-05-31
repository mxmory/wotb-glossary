export type Language = 'en' | 'ru' | 'pl' | 'de' | 'fr' | 'es' | 'zh-cn' | 'zh_tw' | 'tr' | 'cs' | 'th' | 'vi' | 'ko';

export interface AllVehiclesRequest {
	fields?: string[];
	language?: Language;
	nation?: string[];
	tank_id: number[];
}

export interface VehicleCommon {
	description: string;
	engines: number[];
	guns: number[];
	is_premium: boolean;
	name: string;
	nation: string;
	next_tanks: any[];
	suspensions: number[];
	tank_id: number;
	tier: number;
	turrets: number[];
	type: string;
	'cost.price_credit': number;
	'cost.price_gold': number;
	'images.normal': string;
	'images.preview': string;
}

export interface AllVehiclesResponse {
	data: {
		[key: number]: VehicleCommon;
	};
}
