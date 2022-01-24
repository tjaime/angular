import { Restaurant } from "./restaurant/restaurant.model";
import { Injectable } from "@angular/core";
import { MEAT_API } from "../app.api";
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { retry, catchError } from 'rxjs/operators';
import { ErrorHander } from "../app.error-handler";
import { MenuItem } from "../restaurant-detail/menu-item/menu-item.model";


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

    getRestaurantById(id: String): Observable<Restaurant> {
        return this.http.get<Restaurant>(`${MEAT_API}/restaurants/${id}`)
            .pipe(
                retry(1),
                catchError(ErrorHander.handleError)
            )
    }

    getReviewsOfRestaurants(id: string): Observable<any> {
        return this.http.get(`${MEAT_API}/restaurants/${id}/reviews`)
            .pipe(
                retry(1),
                catchError(ErrorHander.handleError)
            )
    }

    getMenuOfRestaurant(id: string): Observable<MenuItem[]> {
        return this.http.get<MenuItem[]>(`${MEAT_API}/restaurants/${id}/menu`)
            .pipe(
                retry(1),
                catchError(ErrorHander.handleError)
            )
    }

}