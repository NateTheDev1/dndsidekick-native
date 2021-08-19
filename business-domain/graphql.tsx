import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};


export type Article = {
  id: Scalars['Int'];
  title: Scalars['String'];
  url?: Maybe<Scalars['String']>;
  author: Scalars['String'];
  views: Scalars['Int'];
  content?: Maybe<Array<Maybe<ArticleContent>>>;
};

export type ArticleContent = {
  id: Scalars['Int'];
  articleId: Scalars['Int'];
  type: Scalars['String'];
  fontSize: Scalars['String'];
  imageURL?: Maybe<Scalars['String']>;
  order: Scalars['Int'];
};

export type ArticleOrder =
  | 'TOP'
  | 'ALL';

export type CacheControlScope =
  | 'PUBLIC'
  | 'PRIVATE';

export type Character = {
  id: Scalars['Int'];
  userId: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['String']>;
  race?: Maybe<Scalars['Int']>;
  class?: Maybe<Scalars['Int']>;
  background?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  languages?: Maybe<Array<Maybe<Scalars['Int']>>>;
  stats?: Maybe<Scalars['String']>;
  hp?: Maybe<Scalars['Int']>;
  maxHP?: Maybe<Scalars['Int']>;
  tempHP?: Maybe<Scalars['Int']>;
  deathSaves?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  conditions?: Maybe<Array<Maybe<Scalars['Int']>>>;
  level?: Maybe<Scalars['Int']>;
  xp?: Maybe<Scalars['Int']>;
  proficiencies?: Maybe<Array<Maybe<Scalars['Int']>>>;
  eyes?: Maybe<Scalars['String']>;
  skin?: Maybe<Scalars['String']>;
  hair?: Maybe<Scalars['String']>;
  backstory?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['String']>;
  age?: Maybe<Scalars['String']>;
  alignment?: Maybe<Scalars['Int']>;
  gender?: Maybe<Scalars['String']>;
  personalityTraits?: Maybe<Scalars['Int']>;
  ideals?: Maybe<Scalars['Int']>;
  bonds?: Maybe<Scalars['Int']>;
  flaws?: Maybe<Scalars['Int']>;
  faith?: Maybe<Scalars['String']>;
  lifestyle?: Maybe<Scalars['Int']>;
  backgroundFeatures?: Maybe<Array<Maybe<Scalars['Int']>>>;
  characterStep?: Maybe<Scalars['Int']>;
};

export type CharacterInput = {
  name?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['String']>;
  race?: Maybe<Scalars['Int']>;
  class?: Maybe<Scalars['Int']>;
  background?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  languages?: Maybe<Array<Maybe<Scalars['Int']>>>;
  stats?: Maybe<Scalars['String']>;
  hp?: Maybe<Scalars['Int']>;
  maxHP?: Maybe<Scalars['Int']>;
  tempHP?: Maybe<Scalars['Int']>;
  deathSaves?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  conditions?: Maybe<Array<Maybe<Scalars['Int']>>>;
  level?: Maybe<Scalars['Int']>;
  xp?: Maybe<Scalars['Int']>;
  proficiencies?: Maybe<Array<Maybe<Scalars['Int']>>>;
  eyes?: Maybe<Scalars['String']>;
  skin?: Maybe<Scalars['String']>;
  hair?: Maybe<Scalars['String']>;
  backstory?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['String']>;
  age?: Maybe<Scalars['String']>;
  alignment?: Maybe<Scalars['Int']>;
  gender?: Maybe<Scalars['String']>;
  personalityTraits?: Maybe<Scalars['Int']>;
  ideals?: Maybe<Scalars['Int']>;
  bonds?: Maybe<Scalars['Int']>;
  flaws?: Maybe<Scalars['Int']>;
  faith?: Maybe<Scalars['String']>;
  lifestyle?: Maybe<Scalars['Int']>;
  backgroundFeatures?: Maybe<Array<Maybe<Scalars['Int']>>>;
  characterStep?: Maybe<Scalars['Int']>;
};

export type CharacterStepInput = {
  characterId: Scalars['Int'];
  character: CharacterInput;
};

export type CreateArticleContentBlock = {
  articleId: Scalars['Int'];
  type: Scalars['String'];
  fontSize: Scalars['String'];
  imageURL?: Maybe<Scalars['String']>;
  order: Scalars['Int'];
};

export type CreateArticleInput = {
  title: Scalars['String'];
  url?: Maybe<Scalars['String']>;
  author: Scalars['String'];
  views: Scalars['Int'];
  content?: Maybe<Array<Maybe<CreateArticleContentBlock>>>;
};

export type DevUpdate = {
  id: Scalars['Int'];
  title: Scalars['String'];
  version?: Maybe<Scalars['String']>;
  releaseDate?: Maybe<Scalars['String']>;
  tags: Array<Maybe<Scalars['String']>>;
  paragraphs: Array<Maybe<Scalars['String']>>;
};

export type DevUpdateInput = {
  title: Scalars['String'];
  version?: Maybe<Scalars['String']>;
  releaseDate?: Maybe<Scalars['String']>;
  tags: Array<Maybe<Scalars['String']>>;
  paragraphs: Array<Maybe<Scalars['String']>>;
};

export type DevUpdatePatchInput = {
  title?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  releaseDate?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  paragraphs?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type InitCharacterInput = {
  userId: Scalars['Int'];
  character: CharacterInput;
};

export type Inventory = {
  id: Scalars['Int'];
  characterId: Scalars['Int'];
  equipmentId: Scalars['Int'];
  quantity: Scalars['Int'];
};

export type LoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type Mutation = {
  initializeCharacter: Character;
  characterStep: Character;
  finalizeCharacter: Character;
  createSoundboard: Soundboard;
  deleteSoundboard: Scalars['Boolean'];
  deleteSoundboardLink: Scalars['Boolean'];
  addSoundboardLink: Scalars['Boolean'];
  publishUpdate?: Maybe<DevUpdate>;
  deleteUpdate: Scalars['Boolean'];
  editUpdate: DevUpdate;
  createArticle: Article;
  deleteArticle: Scalars['Boolean'];
  signup: User;
  login: User;
  appleLogin: User;
  waitListSignup: Scalars['Boolean'];
  resetPasswordFromCode: Scalars['Boolean'];
  sendPasswordReset: Scalars['Boolean'];
  updateUser: User;
};


export type MutationInitializeCharacterArgs = {
  input: InitCharacterInput;
};


export type MutationCharacterStepArgs = {
  input: CharacterStepInput;
};


export type MutationFinalizeCharacterArgs = {
  input: CharacterStepInput;
};


export type MutationCreateSoundboardArgs = {
  title: Scalars['String'];
};


export type MutationDeleteSoundboardArgs = {
  soundboardId: Scalars['Int'];
};


export type MutationDeleteSoundboardLinkArgs = {
  linkId: Scalars['Int'];
};


export type MutationAddSoundboardLinkArgs = {
  link: SoundboardLinkInput;
};


export type MutationPublishUpdateArgs = {
  update: DevUpdateInput;
};


export type MutationDeleteUpdateArgs = {
  id: Scalars['Int'];
};


export type MutationEditUpdateArgs = {
  update: DevUpdatePatchInput;
  id: Scalars['Int'];
};


export type MutationCreateArticleArgs = {
  article: CreateArticleInput;
};


export type MutationDeleteArticleArgs = {
  id: Scalars['Int'];
};


export type MutationSignupArgs = {
  user: SignupInput;
};


export type MutationLoginArgs = {
  credentials: LoginInput;
};


export type MutationAppleLoginArgs = {
  email: Scalars['String'];
};


export type MutationWaitListSignupArgs = {
  email: Scalars['String'];
};


export type MutationResetPasswordFromCodeArgs = {
  credentials: PasswordResetInput;
};


export type MutationSendPasswordResetArgs = {
  email: Scalars['String'];
};


export type MutationUpdateUserArgs = {
  fullName: Scalars['String'];
  id: Scalars['Int'];
};

export type PasswordResetInput = {
  code: Scalars['String'];
  newPassword: Scalars['String'];
};

export type Query = {
  getCharacter: Character;
  getCharacters: Array<Maybe<Character>>;
  getInventory: Inventory;
  getSoundboards: Array<Maybe<Soundboard>>;
  getSoundboard: Soundboard;
  getLatestUpdate?: Maybe<DevUpdate>;
  getArticle: Article;
  getArticles: Array<Maybe<Article>>;
  getUser: User;
};


export type QueryGetCharacterArgs = {
  id: Scalars['Int'];
};


export type QueryGetCharactersArgs = {
  userId: Scalars['Int'];
};


export type QueryGetInventoryArgs = {
  characterId: Scalars['Int'];
};


export type QueryGetSoundboardArgs = {
  soundboardId: Scalars['Int'];
};


export type QueryGetArticleArgs = {
  id: Scalars['Int'];
};


export type QueryGetArticlesArgs = {
  params: ArticleOrder;
};


export type QueryGetUserArgs = {
  id: Scalars['Int'];
};

export type SignupInput = {
  name: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
};

export type Soundboard = {
  id: Scalars['Int'];
  title: Scalars['String'];
  userId: Scalars['Int'];
  links: Array<Maybe<SoundboardLink>>;
};

export type SoundboardLink = {
  id: Scalars['Int'];
  title: Scalars['String'];
  url: Scalars['String'];
  soundboardId: Scalars['Int'];
};

export type SoundboardLinkInput = {
  title: Scalars['String'];
  url: Scalars['String'];
  soundboardId: Scalars['Int'];
};


export type User = {
  id: Scalars['Int'];
  name: Scalars['String'];
  email: Scalars['String'];
  token?: Maybe<Scalars['String']>;
  createdAt: Scalars['String'];
};

export type GetCharactersQueryVariables = Exact<{
  userId: Scalars['Int'];
}>;


export type GetCharactersQuery = { getCharacters: Array<Maybe<{ id: number, userId: number, name?: Maybe<string>, avatar?: Maybe<string>, race?: Maybe<number>, class?: Maybe<number>, background?: Maybe<number>, status?: Maybe<string>, languages?: Maybe<Array<Maybe<number>>>, stats?: Maybe<string>, hp?: Maybe<number>, maxHP?: Maybe<number>, tempHP?: Maybe<number>, deathSaves?: Maybe<Array<Maybe<boolean>>>, conditions?: Maybe<Array<Maybe<number>>>, level?: Maybe<number>, xp?: Maybe<number>, proficiencies?: Maybe<Array<Maybe<number>>>, eyes?: Maybe<string>, skin?: Maybe<string>, hair?: Maybe<string>, backstory?: Maybe<string>, height?: Maybe<string>, weight?: Maybe<string>, age?: Maybe<string>, alignment?: Maybe<number>, gender?: Maybe<string>, personalityTraits?: Maybe<number>, ideals?: Maybe<number>, bonds?: Maybe<number>, flaws?: Maybe<number>, faith?: Maybe<string>, lifestyle?: Maybe<number>, backgroundFeatures?: Maybe<Array<Maybe<number>>>, characterStep?: Maybe<number> }>> };

export type GetLatestUpdateQueryVariables = Exact<{ [key: string]: never; }>;


export type GetLatestUpdateQuery = { getLatestUpdate?: Maybe<{ id: number, title: string, version?: Maybe<string>, releaseDate?: Maybe<string>, tags: Array<Maybe<string>>, paragraphs: Array<Maybe<string>> }> };

export type GetUserQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetUserQuery = { getUser: { id: number, name: string, email: string, createdAt: string } };

export type InitializeCharacterMutationVariables = Exact<{
  input: InitCharacterInput;
}>;


export type InitializeCharacterMutation = { initializeCharacter: { id: number, userId: number, name?: Maybe<string>, avatar?: Maybe<string>, race?: Maybe<number>, class?: Maybe<number>, background?: Maybe<number>, status?: Maybe<string>, languages?: Maybe<Array<Maybe<number>>>, stats?: Maybe<string>, hp?: Maybe<number>, maxHP?: Maybe<number>, tempHP?: Maybe<number>, deathSaves?: Maybe<Array<Maybe<boolean>>>, conditions?: Maybe<Array<Maybe<number>>>, level?: Maybe<number>, xp?: Maybe<number>, proficiencies?: Maybe<Array<Maybe<number>>>, eyes?: Maybe<string>, skin?: Maybe<string>, hair?: Maybe<string>, backstory?: Maybe<string>, height?: Maybe<string>, weight?: Maybe<string>, age?: Maybe<string>, alignment?: Maybe<number>, gender?: Maybe<string>, personalityTraits?: Maybe<number>, ideals?: Maybe<number>, bonds?: Maybe<number>, flaws?: Maybe<number>, faith?: Maybe<string>, lifestyle?: Maybe<number>, backgroundFeatures?: Maybe<Array<Maybe<number>>>, characterStep?: Maybe<number> } };

export type LoginMutationVariables = Exact<{
  credentials: LoginInput;
}>;


export type LoginMutation = { login: { id: number, token?: Maybe<string> } };

export type ResetPasswordFromCodeMutationVariables = Exact<{
  credentials: PasswordResetInput;
}>;


export type ResetPasswordFromCodeMutation = { resetPasswordFromCode: boolean };

export type SendPasswordResetMutationVariables = Exact<{
  email: Scalars['String'];
}>;


export type SendPasswordResetMutation = { sendPasswordReset: boolean };

export type SignupMutationVariables = Exact<{
  user: SignupInput;
}>;


export type SignupMutation = { signup: { id: number, token?: Maybe<string> } };

export type UpdateUserMutationVariables = Exact<{
  fullName: Scalars['String'];
  id: Scalars['Int'];
}>;


export type UpdateUserMutation = { updateUser: { id: number } };


export const GetCharactersDocument = gql`
    query getCharacters($userId: Int!) {
  getCharacters(userId: $userId) {
    id
    userId
    name
    avatar
    race
    class
    background
    status
    languages
    stats
    hp
    maxHP
    tempHP
    deathSaves
    conditions
    level
    xp
    proficiencies
    eyes
    skin
    hair
    backstory
    height
    weight
    age
    alignment
    gender
    personalityTraits
    ideals
    bonds
    flaws
    faith
    lifestyle
    backgroundFeatures
    characterStep
  }
}
    `;

/**
 * __useGetCharactersQuery__
 *
 * To run a query within a React component, call `useGetCharactersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCharactersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCharactersQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useGetCharactersQuery(baseOptions: Apollo.QueryHookOptions<GetCharactersQuery, GetCharactersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCharactersQuery, GetCharactersQueryVariables>(GetCharactersDocument, options);
      }
export function useGetCharactersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCharactersQuery, GetCharactersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCharactersQuery, GetCharactersQueryVariables>(GetCharactersDocument, options);
        }
export type GetCharactersQueryHookResult = ReturnType<typeof useGetCharactersQuery>;
export type GetCharactersLazyQueryHookResult = ReturnType<typeof useGetCharactersLazyQuery>;
export type GetCharactersQueryResult = Apollo.QueryResult<GetCharactersQuery, GetCharactersQueryVariables>;
export const GetLatestUpdateDocument = gql`
    query GetLatestUpdate {
  getLatestUpdate {
    id
    title
    version
    releaseDate
    tags
    paragraphs
  }
}
    `;

/**
 * __useGetLatestUpdateQuery__
 *
 * To run a query within a React component, call `useGetLatestUpdateQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLatestUpdateQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLatestUpdateQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetLatestUpdateQuery(baseOptions?: Apollo.QueryHookOptions<GetLatestUpdateQuery, GetLatestUpdateQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetLatestUpdateQuery, GetLatestUpdateQueryVariables>(GetLatestUpdateDocument, options);
      }
export function useGetLatestUpdateLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetLatestUpdateQuery, GetLatestUpdateQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetLatestUpdateQuery, GetLatestUpdateQueryVariables>(GetLatestUpdateDocument, options);
        }
export type GetLatestUpdateQueryHookResult = ReturnType<typeof useGetLatestUpdateQuery>;
export type GetLatestUpdateLazyQueryHookResult = ReturnType<typeof useGetLatestUpdateLazyQuery>;
export type GetLatestUpdateQueryResult = Apollo.QueryResult<GetLatestUpdateQuery, GetLatestUpdateQueryVariables>;
export const GetUserDocument = gql`
    query GetUser($id: Int!) {
  getUser(id: $id) {
    id
    name
    email
    createdAt
  }
}
    `;

/**
 * __useGetUserQuery__
 *
 * To run a query within a React component, call `useGetUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetUserQuery(baseOptions: Apollo.QueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
      }
export function useGetUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
        }
export type GetUserQueryHookResult = ReturnType<typeof useGetUserQuery>;
export type GetUserLazyQueryHookResult = ReturnType<typeof useGetUserLazyQuery>;
export type GetUserQueryResult = Apollo.QueryResult<GetUserQuery, GetUserQueryVariables>;
export const InitializeCharacterDocument = gql`
    mutation InitializeCharacter($input: InitCharacterInput!) {
  initializeCharacter(input: $input) {
    id
    userId
    name
    avatar
    race
    class
    background
    status
    languages
    stats
    hp
    maxHP
    tempHP
    deathSaves
    conditions
    level
    xp
    proficiencies
    eyes
    skin
    hair
    backstory
    height
    weight
    age
    alignment
    gender
    personalityTraits
    ideals
    bonds
    flaws
    faith
    lifestyle
    backgroundFeatures
    characterStep
  }
}
    `;
export type InitializeCharacterMutationFn = Apollo.MutationFunction<InitializeCharacterMutation, InitializeCharacterMutationVariables>;

/**
 * __useInitializeCharacterMutation__
 *
 * To run a mutation, you first call `useInitializeCharacterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInitializeCharacterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [initializeCharacterMutation, { data, loading, error }] = useInitializeCharacterMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useInitializeCharacterMutation(baseOptions?: Apollo.MutationHookOptions<InitializeCharacterMutation, InitializeCharacterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<InitializeCharacterMutation, InitializeCharacterMutationVariables>(InitializeCharacterDocument, options);
      }
export type InitializeCharacterMutationHookResult = ReturnType<typeof useInitializeCharacterMutation>;
export type InitializeCharacterMutationResult = Apollo.MutationResult<InitializeCharacterMutation>;
export type InitializeCharacterMutationOptions = Apollo.BaseMutationOptions<InitializeCharacterMutation, InitializeCharacterMutationVariables>;
export const LoginDocument = gql`
    mutation Login($credentials: LoginInput!) {
  login(credentials: $credentials) {
    id
    token
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      credentials: // value for 'credentials'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const ResetPasswordFromCodeDocument = gql`
    mutation ResetPasswordFromCode($credentials: PasswordResetInput!) {
  resetPasswordFromCode(credentials: $credentials)
}
    `;
export type ResetPasswordFromCodeMutationFn = Apollo.MutationFunction<ResetPasswordFromCodeMutation, ResetPasswordFromCodeMutationVariables>;

/**
 * __useResetPasswordFromCodeMutation__
 *
 * To run a mutation, you first call `useResetPasswordFromCodeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useResetPasswordFromCodeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [resetPasswordFromCodeMutation, { data, loading, error }] = useResetPasswordFromCodeMutation({
 *   variables: {
 *      credentials: // value for 'credentials'
 *   },
 * });
 */
export function useResetPasswordFromCodeMutation(baseOptions?: Apollo.MutationHookOptions<ResetPasswordFromCodeMutation, ResetPasswordFromCodeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ResetPasswordFromCodeMutation, ResetPasswordFromCodeMutationVariables>(ResetPasswordFromCodeDocument, options);
      }
export type ResetPasswordFromCodeMutationHookResult = ReturnType<typeof useResetPasswordFromCodeMutation>;
export type ResetPasswordFromCodeMutationResult = Apollo.MutationResult<ResetPasswordFromCodeMutation>;
export type ResetPasswordFromCodeMutationOptions = Apollo.BaseMutationOptions<ResetPasswordFromCodeMutation, ResetPasswordFromCodeMutationVariables>;
export const SendPasswordResetDocument = gql`
    mutation SendPasswordReset($email: String!) {
  sendPasswordReset(email: $email)
}
    `;
export type SendPasswordResetMutationFn = Apollo.MutationFunction<SendPasswordResetMutation, SendPasswordResetMutationVariables>;

/**
 * __useSendPasswordResetMutation__
 *
 * To run a mutation, you first call `useSendPasswordResetMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSendPasswordResetMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sendPasswordResetMutation, { data, loading, error }] = useSendPasswordResetMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useSendPasswordResetMutation(baseOptions?: Apollo.MutationHookOptions<SendPasswordResetMutation, SendPasswordResetMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SendPasswordResetMutation, SendPasswordResetMutationVariables>(SendPasswordResetDocument, options);
      }
export type SendPasswordResetMutationHookResult = ReturnType<typeof useSendPasswordResetMutation>;
export type SendPasswordResetMutationResult = Apollo.MutationResult<SendPasswordResetMutation>;
export type SendPasswordResetMutationOptions = Apollo.BaseMutationOptions<SendPasswordResetMutation, SendPasswordResetMutationVariables>;
export const SignupDocument = gql`
    mutation Signup($user: SignupInput!) {
  signup(user: $user) {
    id
    token
  }
}
    `;
export type SignupMutationFn = Apollo.MutationFunction<SignupMutation, SignupMutationVariables>;

/**
 * __useSignupMutation__
 *
 * To run a mutation, you first call `useSignupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signupMutation, { data, loading, error }] = useSignupMutation({
 *   variables: {
 *      user: // value for 'user'
 *   },
 * });
 */
export function useSignupMutation(baseOptions?: Apollo.MutationHookOptions<SignupMutation, SignupMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignupMutation, SignupMutationVariables>(SignupDocument, options);
      }
export type SignupMutationHookResult = ReturnType<typeof useSignupMutation>;
export type SignupMutationResult = Apollo.MutationResult<SignupMutation>;
export type SignupMutationOptions = Apollo.BaseMutationOptions<SignupMutation, SignupMutationVariables>;
export const UpdateUserDocument = gql`
    mutation UpdateUser($fullName: String!, $id: Int!) {
  updateUser(fullName: $fullName, id: $id) {
    id
  }
}
    `;
export type UpdateUserMutationFn = Apollo.MutationFunction<UpdateUserMutation, UpdateUserMutationVariables>;

/**
 * __useUpdateUserMutation__
 *
 * To run a mutation, you first call `useUpdateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserMutation, { data, loading, error }] = useUpdateUserMutation({
 *   variables: {
 *      fullName: // value for 'fullName'
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUpdateUserMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserMutation, UpdateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateUserMutation, UpdateUserMutationVariables>(UpdateUserDocument, options);
      }
export type UpdateUserMutationHookResult = ReturnType<typeof useUpdateUserMutation>;
export type UpdateUserMutationResult = Apollo.MutationResult<UpdateUserMutation>;
export type UpdateUserMutationOptions = Apollo.BaseMutationOptions<UpdateUserMutation, UpdateUserMutationVariables>;