'use client'

import { useActionState, useState } from 'react'
import { useRouter } from 'next/navigation'
import Button from '@/app/components/ui/Button'
import {
  Form,
  FormGroup,
  FormLabel,
  FormInput,
  FormError,
} from '@/app/components/ui/Form'
import Link from 'next/link'
import toast from 'react-hot-toast'
import { signUp } from '@/app/actions/auth'
import { ActionResponse } from '@/lib/types'
import { EyeClosed,Eye } from 'lucide-react'

const initialState: ActionResponse = {
  success: false,
  message: '',
  errors: undefined,
}

const SignUpPage = () => {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  // Use useActionState hook for the form submission action
  const [state, formAction, isPending] = useActionState<
    ActionResponse,
    FormData
  >(async (prevState: ActionResponse, formData: FormData) => {
    try {
      const result = await signUp(formData)

      // Handle successful submission
      if (result.success) {
        toast.success('Account created successfully')
        router.push('/dashboard')
      }

      return result
    } catch (err) {
      return {
        success: false,
        message: (err as Error).message || 'An error occurred',
        errors: undefined,
      }
    }
  }, initialState)

  return (
    <div className="min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8 bg-slate-50 dark:bg-[#121212]">
    <div className="sm:mx-auto sm:w-full sm:max-w-md">
      <div className="flex justify-center mb-4">
        <img
          src="/issueflow-logo.svg"
          alt="Logo"
          className="h-28 w-auto"
        />
      </div>
      <h2 className="mt-2 text-center text-2xl font-bold text-slate-900 dark:text-white">
        Create a new account
      </h2>
    </div>

    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div className="bg-white dark:bg-[#1A1A1A] py-8 px-4 shadow sm:rounded-lg sm:px-10 border border-slate-100 dark:border-dark-border-subtle">
        <Form action={formAction} className="space-y-6">
          {state?.message && !state.success && (
            <FormError>{state.message}</FormError>
          )}

          <FormGroup>
            <FormLabel htmlFor="email">Email</FormLabel>
            <FormInput
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              disabled={isPending}
              aria-describedby="email-error"
              className={state?.errors?.email ? 'border-red-500' : ''}
            />
            {state?.errors?.email && (
              <p id="email-error" className="text-sm text-red-500">
                {state.errors.email[0]}
              </p>
            )}
          </FormGroup>

          <FormGroup>
            <FormLabel htmlFor="password">Password</FormLabel>
            <div className="relative">
            <FormInput
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              autoComplete="new-password"
              required
              disabled={isPending}
              aria-describedby="password-error"
              className={state?.errors?.password ? 'border-red-500  pr-10' : 'pr-10'}
            />
              <button
                type="button"
                tabIndex={-1}
                onClick={() => setShowPassword((v) => !v)}
                className="absolute inset-y-0 right-0 flex items-center px-2 text-slate-500 dark:text-slate-400"
                aria-label={showPassword ? "Hide password" : "Show password"}
                disabled={isPending}
              >
                {showPassword ? <Eye /> :  <EyeClosed />}
              </button>
            </div>
            {state?.errors?.password && (
              <p id="password-error" className="text-sm text-red-500">
                {state.errors.password[0]}
              </p>
            )}
          </FormGroup>

          <FormGroup>
              <FormLabel htmlFor="confirmPassword">Confirm Password</FormLabel>
              <FormInput
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                autoComplete="new-password"
                required
                disabled={isPending}
                aria-describedby="confirmPassword-error"
                className={
                  state?.errors?.confirmPassword ? 'border-red-500' : ''
                }
              />
              {state?.errors?.confirmPassword && (
                <p id="confirmPassword-error" className="text-sm text-red-500">
                  {state.errors.confirmPassword[0]}
                </p>
              )}
            </FormGroup>

          <div>
            <Button type="submit" className="w-full" isLoading={isPending}>
              Sign up
            </Button>
          </div>
        </Form>

        <div className="mt-6 text-center">
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Already have an account?{' '}
            <Link
              href="/signin"
              className="font-medium text-slate-900 hover:text-slate-700 dark:text-slate-300 dark:hover:text-slate-100"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default SignUpPage