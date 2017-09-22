import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class LocationChangeService {
	
	constructor(private http:Http) { }

	//method is used to hit api on express server and post the data of form in database
	locationChangeMethod(change:any){
		return this.http
		.post('http://localhost:4000/locationInsert',change)
		.map(res=>res.json());
	}

	//method is used to hit api on express server and get the location change data from database
	getLocationChange()
	{
		return this.http
		.get('http://localhost:4000/findlocation')
		.map(res=>res.json());
	}
}