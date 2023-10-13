import { initContract } from "@ts-rest/core";
import { z } from "zod";

import { makeAuthContract } from "./contracts/auth.contract";
import { makeTestContract } from "./contracts/test.contract";

// If you remove this object you'll notice
// the typescript error at line 13 (contract variable)
const placeHolderSchema = z.object({});

// Or if you try to export this, you'll notice an error
const c = initContract();

export const contract = c.router(
  {
    auth: makeAuthContract(c),
    layers: makeTestContract(c)
  },
  {
    pathPrefix: "/api/v2"
  }
);
