import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserData } from 'src/app/interfaces/common-interface';

@Injectable({
  providedIn: 'root'
})
export class GraphqlService {

  constructor(private apollo: Apollo) { }


  getUsers(name: string): Observable<any> {
    return this.apollo
      .watchQuery({
        query: gql`
        query user($name: String!) {
          user(name: $name) {
            id
            attend
            name
          }
        }
        `,
        variables: { name: name }
      })
      .valueChanges.pipe(map((result: any) => result.data));
  }



  save(data: UserData): Observable<any> {
    return this.apollo
      .mutate({
        mutation: gql`
          mutation Mutation($data: UserAnswer!) {
            save(data: $data)
          }
        `,
        variables: { data: data }
      });
  }

}
