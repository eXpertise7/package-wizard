import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class HttpClientService {

    constructor(
        protected http: HttpClient) {
    }

    async getPromise(_Url: string): Promise<any> {
        return await new Promise(resolve => {
            this.http.get<any>(_Url).toPromise().then((getResponse: any) => {
                return resolve(getResponse);
            });
        });
    }

    async postPromise(_Body: any, _Url: string): Promise<any> {
        return await new Promise(resolve => {
            this.http.post<any>(_Url, _Body).toPromise().then((getResponse: any) => {
                return resolve(getResponse);
            });
        });
    }g

    async putPromise(_Body: any, _Url: string): Promise<any> {
        return await new Promise(resolve => {
            this.http.put<any>(_Url, _Body).toPromise().then((getResponse: any) => {
                return resolve(getResponse);
            });
        });
    }
}
