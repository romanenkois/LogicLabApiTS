import { envs } from "@config"

export const authConfig = {
  userSecret: envs.jwtUserSecret as string,
  userExpiration: envs.jwtUserExpiration as string,
  userAlgorithm: envs.jwtUserAlgorithm as string,
  userIssuer: envs.jwtUserIssuer as string,
}
