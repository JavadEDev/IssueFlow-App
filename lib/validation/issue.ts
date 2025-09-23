import { z } from 'zod'

// Define Zod schema for issue validation
export const IssueSchema = z.object({
    title: z
      .string()
      .min(3, 'Title must be at least 3 characters')
      .max(100, 'Title must be less than 100 characters'),
  
    description: z.string().optional().nullable(),
  
    status: z.enum(['backlog', 'todo', 'in_progress', 'done'], {
      message: 'Please select a valid status',
    }),
  
    priority: z.enum(['low', 'medium', 'high'], {
      message: 'Please select a valid priority',
    }),
    userId: z.string().min(1, 'User ID is required'),
  })
  
  export type IssueData = z.infer<typeof IssueSchema>