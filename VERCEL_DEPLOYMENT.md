# Vercel Deployment & Contact Form Setup

## 🚀 **Deploying to Vercel**

Vercel is perfect for React apps! Here's how to deploy your portfolio and set up the contact form.

### **Option 1: Deploy via Vercel CLI (Recommended)**

**Step 1: Install Vercel CLI**
```bash
npm i -g vercel
```

**Step 2: Login to Vercel**
```bash
vercel login
```

**Step 3: Deploy**
```bash
vercel
```

**Step 4: Follow the prompts**
- Set up and deploy? `Y`
- Which scope? Choose your account
- Link to existing project? `N`
- Project name: `caroline-sarkki-portfolio`
- Directory: `./`
- Override settings? `N`

**Step 5: Production deployment**
```bash
vercel --prod
```

### **Option 2: Deploy via GitHub (Easiest)**

**Step 1: Push to GitHub**
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/yourusername/caroline-sarkki-portfolio.git
git push -u origin main
```

**Step 2: Connect to Vercel**
1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository
4. Vercel will auto-detect it's a Vite React app
5. Click "Deploy"

**Step 3: Automatic deployments**
- Every push to main branch = automatic deployment
- Preview deployments for pull requests

---

## 📧 **Contact Form Options for Vercel**

Since Vercel doesn't have built-in form handling like Netlify, here are the best free options:

### **Option 1: EmailJS (Recommended)**

**Benefits:**
- ✅ 200 emails/month free
- ✅ Works with any hosting
- ✅ No server needed
- ✅ Easy setup

**Setup Steps:**

1. **Install EmailJS:**
   ```bash
   npm install @emailjs/browser
   ```

2. **Create EmailJS Account:**
   - Go to [emailjs.com](https://emailjs.com)
   - Sign up for free
   - Create email service (Gmail, Outlook, etc.)
   - Create email template

3. **Update Contact Component:**
   ```tsx
   import emailjs from '@emailjs/browser'
   
   const handleSubmit = async (e: React.FormEvent) => {
     e.preventDefault()
     setIsSubmitting(true)
   
     try {
       const result = await emailjs.send(
         'YOUR_SERVICE_ID',        // From EmailJS dashboard
         'YOUR_TEMPLATE_ID',       // From EmailJS dashboard
         {
           from_name: formData.name,
           from_email: formData.email,
           subject: formData.subject,
           message: formData.message,
         },
         'YOUR_PUBLIC_KEY'         // From EmailJS dashboard
       )
       
       setNotification({ message: 'Message sent successfully!', type: 'success' })
       setFormData({ name: '', email: '', subject: '', message: '' })
     } catch (error) {
       setNotification({ message: 'Error sending message', type: 'error' })
     } finally {
       setIsSubmitting(false)
     }
   }
   ```

4. **Add environment variables:**
   ```bash
   # In your .env.local file
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

---

### **Option 2: Formspree**

**Benefits:**
- ✅ 50 submissions/month free
- ✅ Very simple setup
- ✅ Works with any hosting

**Setup Steps:**

1. **Sign up at [formspree.io](https://formspree.io)**
2. **Create a new form**
3. **Update your form:**
   ```tsx
   <form 
     action="https://formspree.io/f/YOUR_FORM_ID"
     method="POST"
     onSubmit={handleSubmit}
   >
     <input type="hidden" name="_subject" value="New contact form submission" />
     <input type="hidden" name="_replyto" value={formData.email} />
     {/* Your form fields */}
   </form>
   ```

---

### **Option 3: Web3Forms**

**Benefits:**
- ✅ Completely free
- ✅ No signup required
- ✅ Simple implementation

**Setup Steps:**

1. **Go to [web3forms.com](https://web3forms.com)**
2. **Get your access key**
3. **Update form:**
   ```tsx
   <form 
     action="https://api.web3forms.com/submit"
     method="POST"
   >
     <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY" />
     <input type="hidden" name="subject" value="New Contact Form Submission" />
     {/* Your form fields */}
   </form>
   ```

---

### **Option 4: Vercel Serverless Function**

**Benefits:**
- ✅ Complete control
- ✅ Custom email templates
- ✅ Works with any email service

**Setup Steps:**

1. **Create API route:**
   ```typescript
   // pages/api/contact.ts or app/api/contact/route.ts
   import { NextRequest, NextResponse } from 'next/server'
   import nodemailer from 'nodemailer'
   
   export async function POST(request: NextRequest) {
     const { name, email, subject, message } = await request.json()
   
     // Configure your email service
     const transporter = nodemailer.createTransporter({
       service: 'gmail',
       auth: {
         user: process.env.EMAIL_USER,
         pass: process.env.EMAIL_PASS
       }
     })
   
     await transporter.sendMail({
       from: email,
       to: process.env.EMAIL_USER,
       subject: `Portfolio Contact: ${subject}`,
       html: `
         <h3>New Contact Form Submission</h3>
         <p><strong>Name:</strong> ${name}</p>
         <p><strong>Email:</strong> ${email}</p>
         <p><strong>Subject:</strong> ${subject}</p>
         <p><strong>Message:</strong></p>
         <p>${message}</p>
       `
     })
   
     return NextResponse.json({ success: true })
   }
   ```

2. **Update form submission:**
   ```tsx
   const handleSubmit = async (e: React.FormEvent) => {
     e.preventDefault()
     setIsSubmitting(true)
   
     try {
       const response = await fetch('/api/contact', {
         method: 'POST',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify(formData)
       })
   
       if (response.ok) {
         setNotification({ message: 'Message sent successfully!', type: 'success' })
         setFormData({ name: '', email: '', subject: '', message: '' })
       } else {
         throw new Error('Form submission failed')
       }
     } catch (error) {
       setNotification({ message: 'Error sending message', type: 'error' })
     } finally {
       setIsSubmitting(false)
     }
   }
   ```

---

## 🎯 **My Recommendation: EmailJS**

**Why EmailJS is perfect for Vercel:**

1. **Easy Setup**: Just install package and configure
2. **No Server Needed**: Works entirely client-side
3. **Free Tier**: 200 emails/month is plenty for a portfolio
4. **Reliable**: Used by thousands of developers
5. **Professional**: Clean email templates

## 🚀 **Quick EmailJS Setup**

**Step 1: Install EmailJS**
```bash
npm install @emailjs/browser
```

**Step 2: Set up EmailJS account**
1. Go to [emailjs.com](https://emailjs.com)
2. Sign up for free
3. Create email service (Gmail recommended)
4. Create email template
5. Get your Service ID, Template ID, and Public Key

**Step 3: Update your Contact component**
Replace the TODO comment in your Contact.tsx with the actual EmailJS code:

```tsx
import emailjs from '@emailjs/browser'

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  setIsSubmitting(true)

  try {
    const result = await emailjs.send(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
      },
      'YOUR_PUBLIC_KEY'
    )
    
    setNotification({ message: 'Message sent successfully!', type: 'success' })
    setFormData({ name: '', email: '', subject: '', message: '' })
  } catch (error) {
    setNotification({ message: 'Error sending message', type: 'error' })
  } finally {
    setIsSubmitting(false)
  }
}
```

**Step 4: Deploy to Vercel**
```bash
vercel --prod
```

## 🎉 **That's It!**

Your portfolio will be live on Vercel with a fully functional contact form sending emails directly to your inbox!

**Your Vercel URL will be:**
`https://caroline-sarkki-portfolio.vercel.app`

Would you like me to help you set up EmailJS or explain any of the other options?
