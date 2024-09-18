import {useValidatedBody, z} from "h3-zod";
import {useDrizzle} from "~/server/utils/drizzle";
import {consola} from "consola";


export default defineEventHandler(async event => {
    consola.log("User trying to signup for waitlist...")

    const {email} = await useValidatedBody(event, z.object({
        email: z.string().email(),
    }))

    const entry = await useDrizzle().query.waitlist.findFirst({
        where: (waitlist, { eq }) => (eq(waitlist.email, email)),
    })

    if(entry) {
        // TODO THROW ERROR EMAIL ALREADY EXISTS

        consola.error("E-Mail already exists in database.")

        return
    }


    consola.log("User joining waitlist...")

    const waitlist = await useDrizzle().insert(tables.waitlist).values({
        email,
        createdAt: new Date(),
    }).returning().get()



    consola.log(`User ${waitlist.email} is now on waitlist...`)

    return waitlist

})
