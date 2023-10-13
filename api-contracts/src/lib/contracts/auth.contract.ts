import { initContract } from "@ts-rest/core";
import { z } from "zod";

export const makeAuthContract = (c: ReturnType<typeof initContract>) =>
    c.router(
        {
            login: {
                method: "POST",
                path: "/sign-in",
                body: z.object({
                    email: z.string().email(),
                    password: z.string()
                }),
                responses: {
                    201: z.object({
                        organizations: z.array(
                            z.object({
                                id: z.string().uuid(),
                                name: z.string()
                            })
                        )
                    })
                }
            },
            switchOrganization: {
                method: "GET",
                path: "/:organizationId/token",
                responses: {
                    200: z.object({
                        organizationId: z.string(),
                        name: z.string(),
                        logo: z.string().nullable().optional(),
                        role: z.string()
                    })
                }
            }
        },
        {
            pathPrefix: "/auth"
        }
    );
