import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpEventType
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { LoadingService } from 'src/app/services/loading.service';
var penddingRequest=0;
@Injectable()
export class LoadingInterceptor implements HttpInterceptor {

  constructor(private loadingService:LoadingService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.loadingService.showLoading();
    penddingRequest = penddingRequest +1;
    return next.handle(request).pipe(
      tap({
        next:(event)=>{
          if(event.type === HttpEventType.Response){
            this.handleHideLoading();
          }
        },
        error: (_) => {
          this.handleHideLoading();
        }
      })
    )
  }

  handleHideLoading(){
penddingRequest = penddingRequest - 1;
if(penddingRequest === 0)
this.loadingService.hideLoading();
  }
}
