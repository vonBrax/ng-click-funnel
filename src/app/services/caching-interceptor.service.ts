import { Injectable } from '@angular/core';
import {
    HttpInterceptor, HttpRequest, HttpHandler,
    HttpEvent, HttpHeaders, HttpResponse
} from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { tap } from 'rxjs/operators';
// import { startWith } from 'rxjs/operators';

import { RequestCache } from './request-cache.service';

/**
 * If request is cachable and response is in cache
 * return the cached response as observable. If
 * has 'x-refresh' header that is true, then
 * also re-run the "package search" (example tutorial)
 * using response from next(), returning an observable
 * that emits the cached response first.
 *
 * If not in cache or not cachable,
 * pass request through the next()
 */
@Injectable()
export class CachingInterceptorService implements HttpInterceptor {

    constructor (private cache: RequestCache ) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // continue if not cachable
        if (!isCachable(req)) {
            return next.handle(req);
        }

        const cachedResponse = this.cache.get(req);

        // cache-then-refresh
        // if (req.headers.get('x-refresh')) {
        //     const result$ = sendRequest(req, next, this.cache);
        //     return cachedResponse ?
        //         result$.pipe( startWith(cachedResponse) ) :
        //         result$;
        // }

        // cache-or-fetch
        return cachedResponse ?
            of(cachedResponse) : sendRequest(req, next, this.cache);
    }
}

/** Is this request cachable?  */
function isCachable(req: HttpRequest<any>) {
    // Only GET requests are cachable
    return req.method === 'GET' || req.method === 'JSONP'; // &&
        // Only npm package search is cachable in this app --> NOT TRUE HUA HUA HUA. REMOVE THIS LATER!
        // -1 < req.url.indexOf('https://npmsearch.com/query');
}

/**
 * Get server response observable by sending requests to `next()`
 * Will add the response to the cache on the way out.
 */
function sendRequest(
    req: HttpRequest<any>,
    next: HttpHandler,
    cache: RequestCache ): Observable<HttpEvent<any>> {

    // No headers allowed in npm search request --> WE WILL PROBABLY NOT NEED THIS ANYWAY
    // const noHeaderReq = req.clone({headers: new HttpHeaders() });

    return next.handle( req /*noHeaderReq*/ ).pipe(
        tap(event => {
            // There may be other events besides the response.
            if (event instanceof HttpResponse) {
                cache.put(req, event); // Update the cache
            }
        })
    );
}
