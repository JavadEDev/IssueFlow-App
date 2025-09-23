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


export interface PricingFeature {
  name: string
  included: boolean
}

export interface PricingCardProps {
  title: string
  price: string
  period?: string
  description: string
  features: PricingFeature[]
  buttonText: string
  buttonLink: string
  highlighted?: boolean
  badge?: string
}

export interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  children: React.ReactNode
}

export interface FormGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export interface FormLabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode
}

export type FormInputProps = React.InputHTMLAttributes<HTMLInputElement>

export type FormTextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>

export interface FormSelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options?: Array<{ label: string; value: string }>
}

export interface FormErrorProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode
}

export interface FormDescriptionProps
  extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode
}

export interface JWTPayload {
  userId: string
  [key: string]: string | number | boolean | null | undefined
}

// Auth action types
export type ActionResponse = {
  success: boolean
  message: string
  errors?: Record<string, string[]>
  error?: string
}

export interface NavLinkProps {
  href: string
  icon: React.ReactNode
  label: string
  isActive?: boolean
}

export interface IssueFormProps {
  issue?: Issue
  userId: string
  isEditing?: boolean
}

export interface DeleteIssueButtonProps {
  id: number
}