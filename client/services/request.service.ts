/**
 * Created by boiko on 9/22/2016.
 */

import { Injectable } from "@angular/core";
import {
	Http,
	Response,
	Headers,
	RequestOptions
} from '@angular/http';
import { Observable } from "rxjs";
import 'rxjs/Rx';

@Injectable()
export class RequestService {
	private options: RequestOptions;

	constructor(private http: Http) {
		let header   = new Headers({ 'Content-Type': 'application/json' });
		this.options = new RequestOptions({ headers: header });
	}

	get<T>(url: string): Observable<T> {
		return this.http.get(url)
		           .map((res: Response)=>{ return this.extractData(res) as T;});
	}

	post<T>(url: string, data: T): Observable<T> {
		return this.http.post(url, JSON.stringify(data), this.options)
		           .map((res: Response)=>{ return this.extractData(res) as T;});
	}

	private extractData(res: Response) {
		let body = res.json();
		return body || {};
	}
}