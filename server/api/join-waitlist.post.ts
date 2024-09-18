import {useValidatedBody} from "h3-zod";
import {tables, useDrizzle} from "~/server/utils/drizzle";


export default defineEventHandler(async event => {
    consola.log("User trying to signup for waitlist...")


    const {email} = await useValidatedBody(event, z.object({
        email: z.string().email(),
    }))

    await useDrizzle().insert(tables.waitlist).values({
        email,
        createdAt: new Date(),
    }).returning().get()



})
