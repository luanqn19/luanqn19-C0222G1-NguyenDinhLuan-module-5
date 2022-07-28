import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Todo} from "./todo";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private API_URL = "http://localhost:3000/todos";

  constructor(private httpClient : HttpClient) { }

  findAll () : Observable<Todo[]> {
    return this.httpClient.get<Todo[]>(this.API_URL);
  }

  findById (id : number | undefined) : Observable<Todo> {
    return this.httpClient.get<Todo>(this.API_URL + "/" + id);
  }

  edit (todo : Todo) : Observable<void>  {
    return this.httpClient.patch<void>(this.API_URL + "/" + todo.id, todo);
  }

  delete (id : number | undefined) : Observable<void> {
    return this.httpClient.delete<void>(this.API_URL + "/" + id);
  }

  save (todo : Todo) : Observable<void> {
    return this.httpClient.post<void>(this.API_URL, todo);
  }
}
