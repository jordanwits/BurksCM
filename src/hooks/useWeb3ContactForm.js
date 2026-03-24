import { useCallback, useState } from 'react'
import { submitWeb3Form } from '../lib/web3formsSubmit'

export function useWeb3ContactForm(formSource = 'Website') {
  const [status, setStatus] = useState(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault()
      const form = e.currentTarget
      if (!form.checkValidity()) {
        form.reportValidity()
        return
      }

      setStatus(null)
      setIsSubmitting(true)

      try {
        const fd = new FormData(form)
        const firstName = (fd.get('firstName') || '').toString().trim()
        const lastName = (fd.get('lastName') || '').toString().trim()
        const email = (fd.get('email') || '').toString().trim()
        const phone = (fd.get('phone') || '').toString().trim()
        const message = (fd.get('message') || '').toString().trim()
        const name = [firstName, lastName].filter(Boolean).join(' ') || 'Website visitor'

        const result = await submitWeb3Form(
          {
            name,
            firstName,
            lastName,
            email,
            phone,
            message,
            form_source: formSource,
          },
          { subject: `Burks CM — contact (${formSource})` }
        )

        if (result.success) {
          setStatus({ type: 'success', text: result.message })
          form.reset()
        } else {
          setStatus({ type: 'error', text: result.message })
        }
      } catch {
        setStatus({
          type: 'error',
          text: 'Network error. Please try again.',
        })
      } finally {
        setIsSubmitting(false)
      }
    },
    [formSource]
  )

  return { status, isSubmitting, handleSubmit }
}
