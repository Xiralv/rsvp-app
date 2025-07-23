import { NgModule } from '@angular/core';
import { APOLLO_OPTIONS } from 'apollo-angular';
import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client/core';

// const uri = 'http://192.168.0.31:4000/graphql'; // Replace with your GraphQL API URL
const uri = 'http://localhost:4000/graphql'; // Replace with your GraphQL API URL

export function createApollo() {
    return new ApolloClient({
        link: new HttpLink({ uri }),
        cache: new InMemoryCache(),
    });
}

@NgModule({
    providers: [
        {
            provide: APOLLO_OPTIONS,
            useFactory: createApollo,
        },
    ],
})
export class GraphQLModule { }
