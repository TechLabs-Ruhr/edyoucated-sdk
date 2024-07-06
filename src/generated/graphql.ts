import { GraphQLClient, RequestOptions } from 'graphql-request';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
type GraphQLClientRequestHeaders = RequestOptions['requestHeaders'];
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type ListTeamsByTeamTeamOrganizationIdItem = {
  __typename?: 'ListTeamsByTeamTeamOrganizationIdItem';
  id: Scalars['ID']['output'];
  members?: Maybe<MemberType>;
  name: Scalars['String']['output'];
  teamTeamOrganizationId: Scalars['String']['output'];
};

export type ListTeamsByTeamTeamOrganizationIdResult = {
  __typename?: 'ListTeamsByTeamTeamOrganizationIdResult';
  items?: Maybe<Array<Maybe<ListTeamsByTeamTeamOrganizationIdItem>>>;
  nextToken?: Maybe<Scalars['String']['output']>;
};

export type ListTrackProgresss = {
  __typename?: 'ListTrackProgresss';
  items?: Maybe<Array<Maybe<ModelTrackProgress>>>;
  nextToken?: Maybe<Scalars['String']['output']>;
};

export type Member = {
  __typename?: 'Member';
  id: Scalars['ID']['output'];
  roles?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  user?: Maybe<User>;
};

export type MemberType = {
  __typename?: 'MemberType';
  items?: Maybe<Array<Maybe<Member>>>;
};

export type ModelTrackProgress = {
  __typename?: 'ModelTrackProgress';
  duration_finished: Scalars['Int']['output'];
  user: Scalars['String']['output'];
};

export type ModelTrackProgressFilterInput = {
  and?: InputMaybe<Array<InputMaybe<ModelTrackProgressFilterInput>>>;
  contextOrganizationId?: InputMaybe<ModelTrackProgressFilterInput>;
  eq?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<InputMaybe<ModelTrackProgressFilterInput>>>;
  user?: InputMaybe<ModelTrackProgressFilterInput>;
};

export type Organization = {
  __typename?: 'Organization';
  teams?: Maybe<TeamItem>;
};

export type Query = {
  __typename?: 'Query';
  listTeamsByTeamTeamOrganizationId?: Maybe<ListTeamsByTeamTeamOrganizationIdResult>;
  searchPersonalizedLearningPaths_v2?: Maybe<SearchablePersonalizedLearningPathResult_V2>;
};


export type QueryListTeamsByTeamTeamOrganizationIdArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextToken?: InputMaybe<Scalars['String']['input']>;
  teamTeamOrganizationId?: InputMaybe<Scalars['String']['input']>;
};


export type QuerySearchPersonalizedLearningPaths_V2Args = {
  filter?: InputMaybe<SearchablePersonalizedLearningPathFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextToken?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sort?: InputMaybe<Array<InputMaybe<SearchablePersonalizedLearningPathSortInput>>>;
};

export type SearchablePersonalizedLearningPathFilterInput = {
  and?: InputMaybe<Array<InputMaybe<SearchablePersonalizedLearningPathFilterInput>>>;
  contextOrganizationId?: InputMaybe<SearchablePersonalizedLearningPathFilterInput>;
  eq?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<InputMaybe<SearchablePersonalizedLearningPathFilterInput>>>;
  userId?: InputMaybe<SearchablePersonalizedLearningPathFilterInput>;
};

export type SearchablePersonalizedLearningPathProgress_V2 = {
  __typename?: 'SearchablePersonalizedLearningPathProgress_v2';
  materialCountCompleted?: Maybe<Scalars['String']['output']>;
  materialCountCompletedPercentage?: Maybe<Scalars['String']['output']>;
  materialCountTotal?: Maybe<Scalars['String']['output']>;
  materialDurationCompletedPercentage?: Maybe<Scalars['String']['output']>;
  materialDurationMinutesCompleted?: Maybe<Scalars['String']['output']>;
  materialDurationMinutesTotal?: Maybe<Scalars['String']['output']>;
  skillCountMastered?: Maybe<Scalars['String']['output']>;
  skillCountMasteredPercentage?: Maybe<Scalars['String']['output']>;
  skillCountTotal?: Maybe<Scalars['String']['output']>;
};

export type SearchablePersonalizedLearningPathResult_V2 = {
  __typename?: 'SearchablePersonalizedLearningPathResult_v2';
  items?: Maybe<Array<Maybe<SearchablePersonalizedLearningPath_V2>>>;
  nextToken?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  total?: Maybe<Scalars['String']['output']>;
};

export type SearchablePersonalizedLearningPathSortInput = {
  direction?: InputMaybe<Scalars['String']['input']>;
  field?: InputMaybe<Scalars['String']['input']>;
};

export type SearchablePersonalizedLearningPath_V2 = {
  __typename?: 'SearchablePersonalizedLearningPath_v2';
  lastProgressMadeAt?: Maybe<Scalars['String']['output']>;
  originId?: Maybe<Scalars['String']['output']>;
  progress?: Maybe<SearchablePersonalizedLearningPathProgress_V2>;
  title?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type Team = {
  __typename?: 'Team';
  id: Scalars['ID']['output'];
  members?: Maybe<Array<Maybe<MemberType>>>;
  name: Scalars['String']['output'];
};

export type TeamItem = {
  __typename?: 'TeamItem';
  items?: Maybe<Array<Maybe<Team>>>;
};

export type User = {
  __typename?: 'User';
  email?: Maybe<Scalars['String']['output']>;
  familyName?: Maybe<Scalars['String']['output']>;
  givenName?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  picture?: Maybe<Scalars['String']['output']>;
};

export type ListTeamsByTeamTeamOrganizationIdQueryVariables = Exact<{
  teamTeamOrganizationId?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextToken?: InputMaybe<Scalars['String']['input']>;
}>;


export type ListTeamsByTeamTeamOrganizationIdQuery = { __typename?: 'Query', listTeamsByTeamTeamOrganizationId?: { __typename?: 'ListTeamsByTeamTeamOrganizationIdResult', nextToken?: string | null, items?: Array<{ __typename?: 'ListTeamsByTeamTeamOrganizationIdItem', id: string, name: string, teamTeamOrganizationId: string, members?: { __typename?: 'MemberType', items?: Array<{ __typename?: 'Member', id: string, roles?: Array<string | null> | null, user?: { __typename?: 'User', id: string, givenName?: string | null, familyName?: string | null } | null } | null> | null } | null } | null> | null } | null };

export type SearchPersonalizedLearningPaths_V2QueryVariables = Exact<{
  filter?: InputMaybe<SearchablePersonalizedLearningPathFilterInput>;
  sort?: InputMaybe<Array<InputMaybe<SearchablePersonalizedLearningPathSortInput>> | InputMaybe<SearchablePersonalizedLearningPathSortInput>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextToken?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
}>;


export type SearchPersonalizedLearningPaths_V2Query = { __typename?: 'Query', searchPersonalizedLearningPaths_v2?: { __typename?: 'SearchablePersonalizedLearningPathResult_v2', nextToken?: Array<string | null> | null, total?: string | null, items?: Array<{ __typename?: 'SearchablePersonalizedLearningPath_v2', title?: string | null, userId?: string | null, originId?: string | null, lastProgressMadeAt?: string | null, user?: { __typename?: 'User', id: string, name: string, givenName?: string | null, familyName?: string | null, picture?: string | null, email?: string | null } | null, progress?: { __typename?: 'SearchablePersonalizedLearningPathProgress_v2', skillCountTotal?: string | null, skillCountMastered?: string | null, skillCountMasteredPercentage?: string | null, materialDurationMinutesTotal?: string | null, materialDurationMinutesCompleted?: string | null, materialDurationCompletedPercentage?: string | null, materialCountTotal?: string | null, materialCountCompleted?: string | null, materialCountCompletedPercentage?: string | null } | null } | null> | null } | null };


export const ListTeamsByTeamTeamOrganizationIdDocument = gql`
    query ListTeamsByTeamTeamOrganizationId($teamTeamOrganizationId: String, $limit: Int, $nextToken: String) {
  listTeamsByTeamTeamOrganizationId(
    teamTeamOrganizationId: $teamTeamOrganizationId
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      teamTeamOrganizationId
      members {
        items {
          id
          roles
          user {
            id
            givenName
            familyName
          }
        }
      }
    }
    nextToken
  }
}
    `;
export const SearchPersonalizedLearningPaths_V2Document = gql`
    query SearchPersonalizedLearningPaths_v2($filter: SearchablePersonalizedLearningPathFilterInput, $sort: [SearchablePersonalizedLearningPathSortInput], $limit: Int, $nextToken: [String]) {
  searchPersonalizedLearningPaths_v2(
    filter: $filter
    sort: $sort
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      title
      userId
      user {
        id
        name
        givenName
        familyName
        picture
        email
      }
      originId
      lastProgressMadeAt
      progress {
        skillCountTotal
        skillCountMastered
        skillCountMasteredPercentage
        materialDurationMinutesTotal
        materialDurationMinutesCompleted
        materialDurationCompletedPercentage
        materialCountTotal
        materialCountCompleted
        materialCountCompletedPercentage
      }
    }
    nextToken
    total
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: any) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    ListTeamsByTeamTeamOrganizationId(variables?: ListTeamsByTeamTeamOrganizationIdQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ListTeamsByTeamTeamOrganizationIdQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ListTeamsByTeamTeamOrganizationIdQuery>(ListTeamsByTeamTeamOrganizationIdDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'ListTeamsByTeamTeamOrganizationId', 'query', variables);
    },
    SearchPersonalizedLearningPaths_v2(variables?: SearchPersonalizedLearningPaths_V2QueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<SearchPersonalizedLearningPaths_V2Query> {
      return withWrapper((wrappedRequestHeaders) => client.request<SearchPersonalizedLearningPaths_V2Query>(SearchPersonalizedLearningPaths_V2Document, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'SearchPersonalizedLearningPaths_v2', 'query', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;