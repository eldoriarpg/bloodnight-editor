import { z } from "zod";

// TODO
const dataTypeSchema = z.string();

const inputSchema = z.object({
  name: z.string(),
  type: dataTypeSchema,
  struct: z.string(),
});

const outputSchema = z.object({
  name: z.string(),
  dataType: dataTypeSchema,
  link: z.string(),
  struct: z.string(),
});

const executionSchema = z.object({});

export const schema = z.array(
  z.object({
    nodeClass: z.string(),
    meta: z.object({
      name: z.string(),
      description: z.string(),
      nodeType: z.string(),
      category: z.string(),
    }),
    inputs: z.array(inputSchema),
    outputs: z.array(outputSchema),
    executions: z.array(executionSchema),
  })
);

export type Input = z.infer<typeof inputSchema>;
export type Output = z.infer<typeof outputSchema>;

export function parseSchema(obj: unknown) {
  return schema.safeParse(obj);
}
