import { Restaurant } from "./restaurant/restaurant.model";
import { Injectable } from "@angular/core";
import { MEAT_API } from "../app.api";
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { retry, catchError } from 'rxjs/operators';
import { ErrorHander } from "../app.error-handler";


@Injectable()
export class RestaurantsService {

    constructor(private http: HttpClient) { }

    getRestaurants(): Observable<Restaurant[]> {
        return this.http.get<Restaurant[]>(`${MEAT_API}/restaurants`)
            .pipe(
                retry(1),
                catchError(ErrorHander.handleError)
            )
    }

}