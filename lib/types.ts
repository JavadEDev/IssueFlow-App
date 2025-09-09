import { Issue } from '@/db/schema'

export type Status = 'backlog' | 'todo' | 'in_progress' | 'done'
export type Priority = 'low' | 'medium' | 'high'

export type IssueWithUser = Issue & {
  user: {
    id: string
    email: string
  }
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'
  size?: 'sm' | 'md' | 'lg'
  isLoading?: boolean
}

