import { HttpEvent, HttpHandlerFn, HttpRequest, HttpResponse } from "@angular/common/http";
import { Observable } from "rxjs";




export function loggingIntercepter(req: HttpRequest<unknown>, next:HttpHandlerFn):Observable<HttpEvent<unknown>> {

    console.log('Interceptador'+req.url);

    let newReq = req.clone(
        {
            headers: req.headers.set('Authorization','Bearer'+'')
        }
    );

  
    return next(newReq);
    

}