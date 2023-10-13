import { initContract } from "@ts-rest/core";
import { z } from "zod";

export const makeTestContract = (c: ReturnType<typeof initContract>) =>
    c.router(
        {
            whatever: {
                method: "POST",
                path: "/whatever",
                body: z.object({
                    id: z.number()
                }),
                responses: {
                    201: z.object({
                        id: z.number()
                    })
                }
            }
        },
        {
            pathPrefix: "/test"
        }
    );
