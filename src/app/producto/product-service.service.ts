import { Injectable } from '@angular/core';
import { ClProducto } from './model/ClProducto';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';

const apiUrl = "https://sumativa2.onrender.com/api/productos/";
const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  constructor(private http: HttpClient) { }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error("handleError Harrys", error);
      return of(result as T);
    };
  }

  addProduct(producto: ClProducto): Observable<ClProducto> {
    return this.http.post<ClProducto>(apiUrl, producto, httpOptions)
      .pipe(
        tap((producto: ClProducto) => console.log('added product w/:', producto)),
        catchError(this.handleError<ClProducto>('addProduct'))
      );
  }

  getProducts(): Observable<ClProducto[]> {
    return this.http.get<ClProducto[]>(apiUrl)
      .pipe(
        tap(products => console.log('fetched products')),
        catchError(this.handleError('getProducts', []))
      );
  }

  getProduct(idProducto: number): Observable<ClProducto> {
    return this.http.get<ClProducto>(apiUrl + "/" + idProducto) // Cambio aquí
      .pipe(
        tap(_ => console.log('fetched product id=${idProducto}')), // Cambio aquí
        catchError(this.handleError<ClProducto>('getProduct id=${idProducto}')) // Cambio aquí
      );
  }

  deleteProduct(idProducto: number): Observable<ClProducto> {
    return this.http.delete<ClProducto>(apiUrl + "/" + idProducto, httpOptions) // Cambio aquí
      .pipe(
        tap(_ => console.log('deleted product id=${idProducto}')), // Cambio aquí
        catchError(this.handleError<ClProducto>('deleteProduct'))
      );
  }

  updateProduct(idProducto: number, producto: ClProducto): Observable<ClProducto> {
    return this.http.put<ClProducto>(apiUrl + "/" + idProducto, producto, httpOptions) // Cambio aquí
      .pipe(
        tap(_ => console.log('updated product id=${idProducto}')), // Cambio aquí
        catchError(this.handleError<any>('updateProduct'))
      );
  }
}

