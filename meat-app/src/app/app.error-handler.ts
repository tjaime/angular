import { throwError } from 'rxjs';

export class ErrorHander {

    // Error handling 
    static handleError(error: any) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // Get client-side error
            errorMessage = error.error.message;

        } else {
            // Get server-side error
            errorMessage = `Error Code: ${error.status}\nURL: ${error.url}\nMessage: ${error.message}`;
        }
        console.log(errorMessage);

        return throwError(errorMessage);
    }

}