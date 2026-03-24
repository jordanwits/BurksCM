const WEB3FORMS_URL = 'https://api.web3forms.com/submit'

/**
 * @param {Record<string, string>} fields — name, email, phone, message, plus optional custom keys
 * @param {{ subject?: string }} [options]
 */
export async function submitWeb3Form(fields, options = {}) {
  const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY
  if (!accessKey) {
    return {
      success: false,
      message: 'Form is not configured. Add VITE_WEB3FORMS_ACCESS_KEY to your environment.',
    }
  }

  const subject =
    options.subject ?? 'Burks CM — website contact'

  const res = await fetch(WEB3FORMS_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      access_key: accessKey,
      subject,
      ...fields,
    }),
  })

  let data
  try {
    data = await res.json()
  } catch {
    return { success: false, message: 'Invalid response from form service.' }
  }

  if (data.success) {
    return {
      success: true,
      message: data.message || 'Thank you! Your message has been sent.',
    }
  }

  return {
    success: false,
    message: data.message || 'Something went wrong. Please try again.',
  }
}
