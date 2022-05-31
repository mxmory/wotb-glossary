import { URLS } from '@/constants/api';
import { AxiosResponse } from 'axios';
import api from '../config';
import { AllVehiclesRequest, AllVehiclesResponse } from './types';

// interface VehicleRequest {
// 	tank_id: number;
// 	engine_id?: number;
// 	gun_id?: number;
// 	language?: string;
// 	turret_id?: number;
// 	profile_id?: string;
// 	suspension_id: number;
// 	fields?: string[];
// }

export const getVehicles: (params?: AllVehiclesRequest) => Promise<AxiosResponse<AllVehiclesResponse, any>> = (
	params
) => api.get(URLS.ALL_VEHICLES, { params });

// export const getVehicleSpecs = (params: VehicleRequest) => api.get(URLS.VEHICLE, { params });
