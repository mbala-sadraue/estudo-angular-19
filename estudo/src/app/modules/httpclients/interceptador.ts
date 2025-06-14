import { HttpEvent, HttpHandlerFn, HttpRequest, HttpResponse } from "@angular/common/http";
import { Observable } from "rxjs";




export function loggingIntercepter(req: HttpRequest<unknown>, next:HttpHandlerFn):Observable<HttpEvent<unknown>> {

    console.log('Interceptador'+req.url);

    return next(req);
    

}