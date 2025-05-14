import { envs } from "@config"

export const authConfig = {
  user: {
    access: {
      secret: envs.jwtUserAccessSecret as string,
      expiration: envs.jwtUserAccessExpiration as string,
      algorithm: envs.jwtUserAccessAlgorithm as string,
      issuer: envs.jwtUserAccessIssuer as string,
    },
    refresh: {
      secret: envs.jwtUserRefreshSecret as string,
      expiration: envs.jwtUserRefreshExpiration as string,
      algorithm: envs.jwtUserRefreshAlgorithm as string,
      issuer: envs.jwtUserRefreshIssuer as string,
    },
  }
}
