import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const base_url = "http://localhost:8080/api/v1";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  /**
   * 
   * @returns Get all categories
   */
getCategories(){

  const endpoint = `${base_url}/categories`;
  return this.http.get(endpoint);
}

/**
 * save categories
 **/
saveCategories(body: any){
  const endpoint= `${base_url}/categories`;
  return this.http.post(endpoint, body);
}

/**
 * actualizar categories
 **/
updateCategories(body: any, id: any){
    const endpoint = `${base_url}/categories/${id}`;
    return this.http.post(endpoint, body);
  }


/**
 * delete categories
 **/

deleteCategories(id: any){
  const endpoint = `${base_url}/categories/${id}`;
  return this.http.delete(endpoint);
}





}

