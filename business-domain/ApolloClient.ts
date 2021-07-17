import {
  ApolloClient,
  ApolloLink,
  concat,
  HttpLink,
  InMemoryCache,
  split,
} from "@apollo/client";
import { WebSocketLink } from "@apollo/client/link/ws";
import { getMainDefinition } from "@apollo/client/utilities";
import AsyncStorage from "@react-native-async-storage/async-storage";

const httpLink = new HttpLink({
  uri: "https://five-e-server.herokuapp.com/graphql",
});

const wsLink = new WebSocketLink({
  uri: "wss://five-e-server.herokuapp.com/subscriptions",
  options: {
    reconnect: true,
  },
});

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  httpLink
);

const authMiddleware = new ApolloLink((operation, forward) => {
  // add the authorization to the headers

  AsyncStorage.getItem("@FIVE_E_TOKEN").then((token) => {
    if (token !== null && token !== undefined && token.length > 0) {
      operation.setContext({
        headers: {
          Authorization: token,
        },
      });
    } else {
      operation.setContext({});
    }
  });
  return forward(operation);
});

export const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  defaultOptions: {
    mutate: { errorPolicy: "all" },
    query: { errorPolicy: "all" },
  },
  link: concat(authMiddleware, splitLink),
});
