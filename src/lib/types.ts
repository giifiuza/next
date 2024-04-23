import { z } from "zod";

export const createTaskSchema = z.object({
    title: z.string().min(2),
    description: z.string(),
    responsible: z.string().min(4),
    status: z.enum(['A fazer', 'Em desenvolvimento', 'Finalizado']),
    date_due: z.string().max(10).min(10, "Preencha o campo de data corretamente"),
    project: z.string().min(4)
})

export type TCreateTaskSchema = z.infer<typeof createTaskSchema>;