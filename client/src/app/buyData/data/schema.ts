import { z } from "zod"

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const taskSchema = z.object({
  temperature: z.number(),
  pressure: z.number(),
  mositure: z.number(),
  altitude: z.number(),
  area: z.number(),
  crop_price: z.number(),
  name: z.string(),
  state: z.string(),
})

export type Task = z.infer<typeof taskSchema>
