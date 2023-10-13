import { Injectable } from '@angular/core';
import { ClProducto } from './model/ClProducto';
import { HttpClientModule } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';


// Importamos  las librerías necesarias
// creamos Constantes que utilizaremos en el envio
const apiUrl = "http://localhost:3000/productos";
const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  // Injectamos HttpClient, para poder consular una página
  constructor(private http: HttpClient) { }

  // Controla y enviará un mensaje a consola para todos los errores
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error("handleError Harrys", error); // log to console instead
      return of(result as T);
    };
  }


  addProduct(producto: ClProducto): Observable<ClProducto> {
    console.log("Res-api Enviando AddProducto : ", producto);

    return this.http.post<ClProducto>(apiUrl, producto, httpOptions)
      .pipe(  // Tubería
        // tap intersecta la respuesta si no hay error
        tap((producto: ClProducto) => console.log('added product w/:', producto)),
        // En caso de que ocurra Error
        catchError(this.handleError<ClProducto>('addProduct'))
      );
  }

  // Obtenemos todos los Productos
  getProducts(): Observable<ClProducto[]> {
    console.log("getProducts ()");
    return this.http.get<ClProducto[]>(apiUrl)
      .pipe(
        tap(heroes => console.log('fetched products')),
        catchError(this.handleError('getProducts', []))
      );
  }


  //  Obtener un Producto
  getProduct(id: String): Observable<ClProducto> {
    //const url = '${apiUrl}/${id}';
    //return this.http.get<Producto>(url).pipe(
    console.log("getProduct ID:" + id);
    return this.http.get<ClProducto>(apiUrl + "/" + id)
      .pipe(
        tap(_ => console.log('fetched product id=${id}')),
        catchError(this.handleError<ClProducto>('getProduct id=${id}'))
      );
  }

  deleteProduct(id: number): Observable<ClProducto> {
   
    return this.http.delete<ClProducto>(apiUrl + "/" + id, httpOptions)
      .pipe(
        tap(_ => console.log('deleted product id=${id}')),
        catchError(this.handleError<ClProducto>('deleteProduct'))
      );
  }

  updateProduct(id: number, producto: ClProducto): Observable<ClProducto> {
    return this.http.put<ClProducto>(apiUrl + "/" + id, producto, httpOptions)
      .pipe(
        tap(_ => console.log('updated product id=${id}')),
        catchError(this.handleError<any>('updateProduct'))
      );
  }


}