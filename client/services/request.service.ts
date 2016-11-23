/**
 * Created by boiko on 9/22/2016.
 */

import {
	Http,
	Response,
	Headers,
	RequestOptions
} from '@angular/http';
import 'rxjs/Rx';

export class RequestService {

	constructor(private http: Http) {
	}

	get<T>(url: string): Promise<T> {
		return this.http.get(url)
		           .map((res: Response)=>{ return this.extractData(res) as T;}).toPromise();
	}

	post<T>(url: string, data: T): Promise<T> {
		return this.http.post(url, JSON.stringify(data), this.getJsonHeader())
		           .map((res: Response)=>{ return this.extractData(res) as T;}).toPromise();
	}

	private getJsonHeader():RequestOptions{
		let header   = new Headers({ 'Content-Type': 'application/json' });
		return new RequestOptions({ headers: header });
	}

	private extractData(res: Response) {
		let body = res.json();
		return body || {};
	}
}