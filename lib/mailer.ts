import nodemailer from 'nodemailer'

type ContactSubmission = {
  name: string
  email: string
  company: string
  service: string
  budget: string
  message: string
}

export async function sendContactNotification(submission: ContactSubmission) {
  const host = process.env.SMTP_HOST
  const port = process.env.SMTP_PORT
  const user = process.env.SMTP_USER
  const pass = process.env.SMTP_PASS
  const recipients = process.env.CONTACT_NOTIFY_EMAILS

  if (!host || !port || !user || !pass || !recipients) {
    throw new Error('Missing SMTP environment variables')
  }

  const transporter = nodemailer.createTransport({
    host,
    port: Number(port),
    secure: Number(port) === 465,
    auth: { user, pass },
  })

  const to = recipients.split(',').map((e) => e.trim())

  await transporter.sendMail({
    from: `"Peak Agency Website" <${user}>`,
    to,
    replyTo: submission.email,
    subject: `New project request from ${submission.name}`,
    text: [
      `Name: ${submission.name}`,
      `Email: ${submission.email}`,
      `Company: ${submission.company || '-'}`,
      `Service: ${submission.service || '-'}`,
      `Budget: ${submission.budget || '-'}`,
      '',
      'Message:',
      submission.message,
    ].join('\n'),
  })
}
