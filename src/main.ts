import { EdyoucatedSDK, edyoucatedSDK } from "./edyoucated";

import {
  username,
  password,
  userPoolID,
  clientID,
  apiURL,
  organizationID,
} from "./environment";

const GetTeamsByOrganizationId = async (
  sdk: EdyoucatedSDK,
  organizationID: string
) => {
  const teams = [];
  let nextToken: string | null = null;

  do {
    const resp = await sdk.ListTeamsByTeamTeamOrganizationId({
      teamTeamOrganizationId: organizationID,
      limit: 25,
      nextToken,
    });

    teams.push(...(resp.listTeamsByTeamTeamOrganizationId?.items ?? []));

    nextToken = resp.listTeamsByTeamTeamOrganizationId?.nextToken ?? null;
  } while (nextToken !== null);

  return teams;
};

const GetTrackProgressByUserIDs = async (
  sdk: EdyoucatedSDK,
  userIDs: string[],
  organizationID: string
) => {
  const progress = [];
  let nextToken: [string, string] | null = null;

  do {
    const resp = await sdk.SearchPersonalizedLearningPaths_v2({
      filter: {
        and: [
          {
            or: userIDs.map((id) => ({ userId: { eq: id } })),
          },
          {
            contextOrganizationId: { eq: organizationID },
          },
        ],
      },
      nextToken,
      sort: [
        {
          field: "lastProgressMadeAt",
          direction: "desc",
        },
      ],
    });

    progress.push(...(resp.searchPersonalizedLearningPaths_v2?.items ?? []));

    nextToken = resp.searchPersonalizedLearningPaths_v2?.nextToken as
      | [string, string]
      | null;
  } while (nextToken !== null);

  return progress;
};

async function main() {
  const sdk = await edyoucatedSDK({
    username: username,
    password: password,
    userPoolID: userPoolID,
    clientID: clientID,
    apiURL: apiURL,
  });

  const teams = await GetTeamsByOrganizationId(sdk, organizationID);
  const ruhrBatch9Team = teams
    .filter((t) => t !== null)
    .find((t) => t.name === "Ruhr Batch 9");
  if (!ruhrBatch9Team) {
    throw new Error("Ruhr Batch 9 team not found");
  }

  const memberIds = ruhrBatch9Team.members?.items
    ?.filter((memberItems) => memberItems !== null)
    .map((memberItems) => memberItems.user?.id)
    .filter((userId) => userId !== null && userId !== undefined);
  if (!memberIds) {
    throw new Error("No members found in team");
  }

  const trackProgress = await GetTrackProgressByUserIDs(
    sdk,
    memberIds,
    organizationID
  );
  console.log(trackProgress);
}
main();
