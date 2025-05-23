/**
 * medienVerwaltungWeb.Server
 *
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpParams,
  HttpResponse,
  HttpEvent,
  HttpParameterCodec,
  HttpContext,
} from '@angular/common/http';
import { CustomHttpParameterCodec } from '../encoder';
import { Observable } from 'rxjs';

// @ts-ignore
import { Actor } from '../model/actor';

// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS } from '../variables';
import { Configuration } from '../configuration';
import { BaseService } from '../api.base.service';

@Injectable({
  providedIn: 'root',
})
export class ActorAPIService extends BaseService {
  constructor(
    protected httpClient: HttpClient,
    @Optional() @Inject(BASE_PATH) basePath: string | string[],
    @Optional() configuration?: Configuration
  ) {
    super(basePath, configuration);
  }

  /**
   * @param page
   * @param pageSize
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public apiActorActorPaginationPagepageSizeGet(
    page: number,
    pageSize: number,
    observe?: 'body',
    reportProgress?: boolean,
    options?: {
      httpHeaderAccept?: 'text/plain' | 'application/json' | 'text/json';
      context?: HttpContext;
      transferCache?: boolean;
    }
  ): Observable<Array<Actor>>;
  public apiActorActorPaginationPagepageSizeGet(
    page: number,
    pageSize: number,
    observe?: 'response',
    reportProgress?: boolean,
    options?: {
      httpHeaderAccept?: 'text/plain' | 'application/json' | 'text/json';
      context?: HttpContext;
      transferCache?: boolean;
    }
  ): Observable<HttpResponse<Array<Actor>>>;
  public apiActorActorPaginationPagepageSizeGet(
    page: number,
    pageSize: number,
    observe?: 'events',
    reportProgress?: boolean,
    options?: {
      httpHeaderAccept?: 'text/plain' | 'application/json' | 'text/json';
      context?: HttpContext;
      transferCache?: boolean;
    }
  ): Observable<HttpEvent<Array<Actor>>>;
  public apiActorActorPaginationPagepageSizeGet(
    page: number,
    pageSize: number,
    observe: any = 'body',
    reportProgress: boolean = false,
    options?: {
      httpHeaderAccept?: 'text/plain' | 'application/json' | 'text/json';
      context?: HttpContext;
      transferCache?: boolean;
    }
  ): Observable<any> {
    if (page === null || page === undefined) {
      throw new Error(
        'Required parameter page was null or undefined when calling apiActorActorPaginationPagepageSizeGet.'
      );
    }
    if (pageSize === null || pageSize === undefined) {
      throw new Error(
        'Required parameter pageSize was null or undefined when calling apiActorActorPaginationPagepageSizeGet.'
      );
    }

    let localVarHeaders = this.defaultHeaders;

    const localVarHttpHeaderAcceptSelected: string | undefined =
      options?.httpHeaderAccept ??
      this.configuration.selectHeaderAccept([
        'text/plain',
        'application/json',
        'text/json',
      ]);
    if (localVarHttpHeaderAcceptSelected !== undefined) {
      localVarHeaders = localVarHeaders.set(
        'Accept',
        localVarHttpHeaderAcceptSelected
      );
    }

    const localVarHttpContext: HttpContext =
      options?.context ?? new HttpContext();

    const localVarTransferCache: boolean = options?.transferCache ?? true;

    let responseType_: 'text' | 'json' | 'blob' = 'json';
    if (localVarHttpHeaderAcceptSelected) {
      if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
        responseType_ = 'text';
      } else if (
        this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)
      ) {
        responseType_ = 'json';
      } else {
        responseType_ = 'blob';
      }
    }

    let localVarPath = `/api/Actor/ActorPagination/${this.configuration.encodeParam(
      {
        name: 'page',
        value: page,
        in: 'path',
        style: 'simple',
        explode: false,
        dataType: 'number',
        dataFormat: 'int32',
      }
    )},${this.configuration.encodeParam({
      name: 'pageSize',
      value: pageSize,
      in: 'path',
      style: 'simple',
      explode: false,
      dataType: 'number',
      dataFormat: 'int32',
    })}`;
    return this.httpClient.request<Array<Actor>>(
      'get',
      `${this.configuration.basePath}${localVarPath}`,
      {
        context: localVarHttpContext,
        responseType: <any>responseType_,
        withCredentials: this.configuration.withCredentials,
        headers: localVarHeaders,
        observe: observe,
        transferCache: localVarTransferCache,
        reportProgress: reportProgress,
      }
    );
  }

  /**
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public apiActorGet(
    observe?: 'body',
    reportProgress?: boolean,
    options?: {
      httpHeaderAccept?: 'text/plain' | 'application/json' | 'text/json';
      context?: HttpContext;
      transferCache?: boolean;
    }
  ): Observable<Array<Actor>>;
  public apiActorGet(
    observe?: 'response',
    reportProgress?: boolean,
    options?: {
      httpHeaderAccept?: 'text/plain' | 'application/json' | 'text/json';
      context?: HttpContext;
      transferCache?: boolean;
    }
  ): Observable<HttpResponse<Array<Actor>>>;
  public apiActorGet(
    observe?: 'events',
    reportProgress?: boolean,
    options?: {
      httpHeaderAccept?: 'text/plain' | 'application/json' | 'text/json';
      context?: HttpContext;
      transferCache?: boolean;
    }
  ): Observable<HttpEvent<Array<Actor>>>;
  public apiActorGet(
    observe: any = 'body',
    reportProgress: boolean = false,
    options?: {
      httpHeaderAccept?: 'text/plain' | 'application/json' | 'text/json';
      context?: HttpContext;
      transferCache?: boolean;
    }
  ): Observable<any> {
    let localVarHeaders = this.defaultHeaders;

    const localVarHttpHeaderAcceptSelected: string | undefined =
      options?.httpHeaderAccept ??
      this.configuration.selectHeaderAccept([
        'text/plain',
        'application/json',
        'text/json',
      ]);
    if (localVarHttpHeaderAcceptSelected !== undefined) {
      localVarHeaders = localVarHeaders.set(
        'Accept',
        localVarHttpHeaderAcceptSelected
      );
    }

    const localVarHttpContext: HttpContext =
      options?.context ?? new HttpContext();

    const localVarTransferCache: boolean = options?.transferCache ?? true;

    let responseType_: 'text' | 'json' | 'blob' = 'json';
    if (localVarHttpHeaderAcceptSelected) {
      if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
        responseType_ = 'text';
      } else if (
        this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)
      ) {
        responseType_ = 'json';
      } else {
        responseType_ = 'blob';
      }
    }

    let localVarPath = `/api/Actor`;
    return this.httpClient.request<Array<Actor>>(
      'get',
      `${this.configuration.basePath}${localVarPath}`,
      {
        context: localVarHttpContext,
        responseType: <any>responseType_,
        withCredentials: this.configuration.withCredentials,
        headers: localVarHeaders,
        observe: observe,
        transferCache: localVarTransferCache,
        reportProgress: reportProgress,
      }
    );
  }

  /**
   * @param id
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public apiActorIdDelete(
    id: number,
    observe?: 'body',
    reportProgress?: boolean,
    options?: {
      httpHeaderAccept?: undefined;
      context?: HttpContext;
      transferCache?: boolean;
    }
  ): Observable<any>;
  public apiActorIdDelete(
    id: number,
    observe?: 'response',
    reportProgress?: boolean,
    options?: {
      httpHeaderAccept?: undefined;
      context?: HttpContext;
      transferCache?: boolean;
    }
  ): Observable<HttpResponse<any>>;
  public apiActorIdDelete(
    id: number,
    observe?: 'events',
    reportProgress?: boolean,
    options?: {
      httpHeaderAccept?: undefined;
      context?: HttpContext;
      transferCache?: boolean;
    }
  ): Observable<HttpEvent<any>>;
  public apiActorIdDelete(
    id: number,
    observe: any = 'body',
    reportProgress: boolean = false,
    options?: {
      httpHeaderAccept?: undefined;
      context?: HttpContext;
      transferCache?: boolean;
    }
  ): Observable<any> {
    if (id === null || id === undefined) {
      throw new Error(
        'Required parameter id was null or undefined when calling apiActorIdDelete.'
      );
    }

    let localVarHeaders = this.defaultHeaders;

    const localVarHttpHeaderAcceptSelected: string | undefined =
      options?.httpHeaderAccept ?? this.configuration.selectHeaderAccept([]);
    if (localVarHttpHeaderAcceptSelected !== undefined) {
      localVarHeaders = localVarHeaders.set(
        'Accept',
        localVarHttpHeaderAcceptSelected
      );
    }

    const localVarHttpContext: HttpContext =
      options?.context ?? new HttpContext();

    const localVarTransferCache: boolean = options?.transferCache ?? true;

    let responseType_: 'text' | 'json' | 'blob' = 'json';
    if (localVarHttpHeaderAcceptSelected) {
      if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
        responseType_ = 'text';
      } else if (
        this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)
      ) {
        responseType_ = 'json';
      } else {
        responseType_ = 'blob';
      }
    }

    let localVarPath = `/api/Actor/${this.configuration.encodeParam({
      name: 'id',
      value: id,
      in: 'path',
      style: 'simple',
      explode: false,
      dataType: 'number',
      dataFormat: 'int32',
    })}`;
    return this.httpClient.request<any>(
      'delete',
      `${this.configuration.basePath}${localVarPath}`,
      {
        context: localVarHttpContext,
        responseType: <any>responseType_,
        withCredentials: this.configuration.withCredentials,
        headers: localVarHeaders,
        observe: observe,
        transferCache: localVarTransferCache,
        reportProgress: reportProgress,
      }
    );
  }

  /**
   * @param id
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public apiActorIdGet(
    id: number,
    observe?: 'body',
    reportProgress?: boolean,
    options?: {
      httpHeaderAccept?: 'text/plain' | 'application/json' | 'text/json';
      context?: HttpContext;
      transferCache?: boolean;
    }
  ): Observable<Actor>;
  public apiActorIdGet(
    id: number,
    observe?: 'response',
    reportProgress?: boolean,
    options?: {
      httpHeaderAccept?: 'text/plain' | 'application/json' | 'text/json';
      context?: HttpContext;
      transferCache?: boolean;
    }
  ): Observable<HttpResponse<Actor>>;
  public apiActorIdGet(
    id: number,
    observe?: 'events',
    reportProgress?: boolean,
    options?: {
      httpHeaderAccept?: 'text/plain' | 'application/json' | 'text/json';
      context?: HttpContext;
      transferCache?: boolean;
    }
  ): Observable<HttpEvent<Actor>>;
  public apiActorIdGet(
    id: number,
    observe: any = 'body',
    reportProgress: boolean = false,
    options?: {
      httpHeaderAccept?: 'text/plain' | 'application/json' | 'text/json';
      context?: HttpContext;
      transferCache?: boolean;
    }
  ): Observable<any> {
    if (id === null || id === undefined) {
      throw new Error(
        'Required parameter id was null or undefined when calling apiActorIdGet.'
      );
    }

    let localVarHeaders = this.defaultHeaders;

    const localVarHttpHeaderAcceptSelected: string | undefined =
      options?.httpHeaderAccept ??
      this.configuration.selectHeaderAccept([
        'text/plain',
        'application/json',
        'text/json',
      ]);
    if (localVarHttpHeaderAcceptSelected !== undefined) {
      localVarHeaders = localVarHeaders.set(
        'Accept',
        localVarHttpHeaderAcceptSelected
      );
    }

    const localVarHttpContext: HttpContext =
      options?.context ?? new HttpContext();

    const localVarTransferCache: boolean = options?.transferCache ?? true;

    let responseType_: 'text' | 'json' | 'blob' = 'json';
    if (localVarHttpHeaderAcceptSelected) {
      if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
        responseType_ = 'text';
      } else if (
        this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)
      ) {
        responseType_ = 'json';
      } else {
        responseType_ = 'blob';
      }
    }

    let localVarPath = `/api/Actor/${this.configuration.encodeParam({
      name: 'id',
      value: id,
      in: 'path',
      style: 'simple',
      explode: false,
      dataType: 'number',
      dataFormat: 'int32',
    })}`;
    return this.httpClient.request<Actor>(
      'get',
      `${this.configuration.basePath}${localVarPath}`,
      {
        context: localVarHttpContext,
        responseType: <any>responseType_,
        withCredentials: this.configuration.withCredentials,
        headers: localVarHeaders,
        observe: observe,
        transferCache: localVarTransferCache,
        reportProgress: reportProgress,
      }
    );
  }

  /**
   * @param id
   * @param actor
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public apiActorIdPut(
    id: number,
    actor?: Actor,
    observe?: 'body',
    reportProgress?: boolean,
    options?: {
      httpHeaderAccept?: undefined;
      context?: HttpContext;
      transferCache?: boolean;
    }
  ): Observable<any>;
  public apiActorIdPut(
    id: number,
    actor?: Actor,
    observe?: 'response',
    reportProgress?: boolean,
    options?: {
      httpHeaderAccept?: undefined;
      context?: HttpContext;
      transferCache?: boolean;
    }
  ): Observable<HttpResponse<any>>;
  public apiActorIdPut(
    id: number,
    actor?: Actor,
    observe?: 'events',
    reportProgress?: boolean,
    options?: {
      httpHeaderAccept?: undefined;
      context?: HttpContext;
      transferCache?: boolean;
    }
  ): Observable<HttpEvent<any>>;
  public apiActorIdPut(
    id: number,
    actor?: Actor,
    observe: any = 'body',
    reportProgress: boolean = false,
    options?: {
      httpHeaderAccept?: undefined;
      context?: HttpContext;
      transferCache?: boolean;
    }
  ): Observable<any> {
    if (id === null || id === undefined) {
      throw new Error(
        'Required parameter id was null or undefined when calling apiActorIdPut.'
      );
    }

    let localVarHeaders = this.defaultHeaders;

    const localVarHttpHeaderAcceptSelected: string | undefined =
      options?.httpHeaderAccept ?? this.configuration.selectHeaderAccept([]);
    if (localVarHttpHeaderAcceptSelected !== undefined) {
      localVarHeaders = localVarHeaders.set(
        'Accept',
        localVarHttpHeaderAcceptSelected
      );
    }

    const localVarHttpContext: HttpContext =
      options?.context ?? new HttpContext();

    const localVarTransferCache: boolean = options?.transferCache ?? true;

    // to determine the Content-Type header
    const consumes: string[] = [
      'application/json',
      'text/json',
      'application/*+json',
    ];
    const httpContentTypeSelected: string | undefined =
      this.configuration.selectHeaderContentType(consumes);
    if (httpContentTypeSelected !== undefined) {
      localVarHeaders = localVarHeaders.set(
        'Content-Type',
        httpContentTypeSelected
      );
    }

    let responseType_: 'text' | 'json' | 'blob' = 'json';
    if (localVarHttpHeaderAcceptSelected) {
      if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
        responseType_ = 'text';
      } else if (
        this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)
      ) {
        responseType_ = 'json';
      } else {
        responseType_ = 'blob';
      }
    }

    let localVarPath = `/api/Actor/${this.configuration.encodeParam({
      name: 'id',
      value: id,
      in: 'path',
      style: 'simple',
      explode: false,
      dataType: 'number',
      dataFormat: 'int32',
    })}`;
    return this.httpClient.request<any>(
      'put',
      `${this.configuration.basePath}${localVarPath}`,
      {
        context: localVarHttpContext,
        body: actor,
        responseType: <any>responseType_,
        withCredentials: this.configuration.withCredentials,
        headers: localVarHeaders,
        observe: observe,
        transferCache: localVarTransferCache,
        reportProgress: reportProgress,
      }
    );
  }

  /**
   * @param actor
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public apiActorPost(
    actor?: Actor,
    observe?: 'body',
    reportProgress?: boolean,
    options?: {
      httpHeaderAccept?: 'text/plain' | 'application/json' | 'text/json';
      context?: HttpContext;
      transferCache?: boolean;
    }
  ): Observable<Actor>;
  public apiActorPost(
    actor?: Actor,
    observe?: 'response',
    reportProgress?: boolean,
    options?: {
      httpHeaderAccept?: 'text/plain' | 'application/json' | 'text/json';
      context?: HttpContext;
      transferCache?: boolean;
    }
  ): Observable<HttpResponse<Actor>>;
  public apiActorPost(
    actor?: Actor,
    observe?: 'events',
    reportProgress?: boolean,
    options?: {
      httpHeaderAccept?: 'text/plain' | 'application/json' | 'text/json';
      context?: HttpContext;
      transferCache?: boolean;
    }
  ): Observable<HttpEvent<Actor>>;
  public apiActorPost(
    actor?: Actor,
    observe: any = 'body',
    reportProgress: boolean = false,
    options?: {
      httpHeaderAccept?: 'text/plain' | 'application/json' | 'text/json';
      context?: HttpContext;
      transferCache?: boolean;
    }
  ): Observable<any> {
    let localVarHeaders = this.defaultHeaders;

    const localVarHttpHeaderAcceptSelected: string | undefined =
      options?.httpHeaderAccept ??
      this.configuration.selectHeaderAccept([
        'text/plain',
        'application/json',
        'text/json',
      ]);
    if (localVarHttpHeaderAcceptSelected !== undefined) {
      localVarHeaders = localVarHeaders.set(
        'Accept',
        localVarHttpHeaderAcceptSelected
      );
    }

    const localVarHttpContext: HttpContext =
      options?.context ?? new HttpContext();

    const localVarTransferCache: boolean = options?.transferCache ?? true;

    // to determine the Content-Type header
    const consumes: string[] = [
      'application/json',
      'text/json',
      'application/*+json',
    ];
    const httpContentTypeSelected: string | undefined =
      this.configuration.selectHeaderContentType(consumes);
    if (httpContentTypeSelected !== undefined) {
      localVarHeaders = localVarHeaders.set(
        'Content-Type',
        httpContentTypeSelected
      );
    }

    let responseType_: 'text' | 'json' | 'blob' = 'json';
    if (localVarHttpHeaderAcceptSelected) {
      if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
        responseType_ = 'text';
      } else if (
        this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)
      ) {
        responseType_ = 'json';
      } else {
        responseType_ = 'blob';
      }
    }

    let localVarPath = `/api/Actor`;
    return this.httpClient.request<Actor>(
      'post',
      `${this.configuration.basePath}${localVarPath}`,
      {
        context: localVarHttpContext,
        body: actor,
        responseType: <any>responseType_,
        withCredentials: this.configuration.withCredentials,
        headers: localVarHeaders,
        observe: observe,
        transferCache: localVarTransferCache,
        reportProgress: reportProgress,
      }
    );
  }

  /**
   * @param firstName
   * @param count
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public apiActorSearchActorByFullNameFirstNamecountGet(
    firstName: string,
    count: number,
    observe?: 'body',
    reportProgress?: boolean,
    options?: {
      httpHeaderAccept?: 'text/plain' | 'application/json' | 'text/json';
      context?: HttpContext;
      transferCache?: boolean;
    }
  ): Observable<Array<Actor>>;
  public apiActorSearchActorByFullNameFirstNamecountGet(
    firstName: string,
    count: number,
    observe?: 'response',
    reportProgress?: boolean,
    options?: {
      httpHeaderAccept?: 'text/plain' | 'application/json' | 'text/json';
      context?: HttpContext;
      transferCache?: boolean;
    }
  ): Observable<HttpResponse<Array<Actor>>>;
  public apiActorSearchActorByFullNameFirstNamecountGet(
    firstName: string,
    count: number,
    observe?: 'events',
    reportProgress?: boolean,
    options?: {
      httpHeaderAccept?: 'text/plain' | 'application/json' | 'text/json';
      context?: HttpContext;
      transferCache?: boolean;
    }
  ): Observable<HttpEvent<Array<Actor>>>;
  public apiActorSearchActorByFullNameFirstNamecountGet(
    firstName: string,
    count: number,
    observe: any = 'body',
    reportProgress: boolean = false,
    options?: {
      httpHeaderAccept?: 'text/plain' | 'application/json' | 'text/json';
      context?: HttpContext;
      transferCache?: boolean;
    }
  ): Observable<any> {
    if (firstName === null || firstName === undefined) {
      throw new Error(
        'Required parameter firstName was null or undefined when calling apiActorSearchActorByFullNameFirstNamecountGet.'
      );
    }
    if (count === null || count === undefined) {
      throw new Error(
        'Required parameter count was null or undefined when calling apiActorSearchActorByFullNameFirstNamecountGet.'
      );
    }

    let localVarHeaders = this.defaultHeaders;

    const localVarHttpHeaderAcceptSelected: string | undefined =
      options?.httpHeaderAccept ??
      this.configuration.selectHeaderAccept([
        'text/plain',
        'application/json',
        'text/json',
      ]);
    if (localVarHttpHeaderAcceptSelected !== undefined) {
      localVarHeaders = localVarHeaders.set(
        'Accept',
        localVarHttpHeaderAcceptSelected
      );
    }

    const localVarHttpContext: HttpContext =
      options?.context ?? new HttpContext();

    const localVarTransferCache: boolean = options?.transferCache ?? true;

    let responseType_: 'text' | 'json' | 'blob' = 'json';
    if (localVarHttpHeaderAcceptSelected) {
      if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
        responseType_ = 'text';
      } else if (
        this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)
      ) {
        responseType_ = 'json';
      } else {
        responseType_ = 'blob';
      }
    }

    let localVarPath = `/api/Actor/SearchActorByFullName/${this.configuration.encodeParam(
      {
        name: 'firstName',
        value: firstName,
        in: 'path',
        style: 'simple',
        explode: false,
        dataType: 'string',
        dataFormat: undefined,
      }
    )},${this.configuration.encodeParam({
      name: 'count',
      value: count,
      in: 'path',
      style: 'simple',
      explode: false,
      dataType: 'number',
      dataFormat: 'int32',
    })}`;
    return this.httpClient.request<Array<Actor>>(
      'get',
      `${this.configuration.basePath}${localVarPath}`,
      {
        context: localVarHttpContext,
        responseType: <any>responseType_,
        withCredentials: this.configuration.withCredentials,
        headers: localVarHeaders,
        observe: observe,
        transferCache: localVarTransferCache,
        reportProgress: reportProgress,
      }
    );
  }
}
