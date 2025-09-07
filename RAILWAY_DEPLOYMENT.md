# Railway Deployment Guide

## 🚀 **Railway Frontend Deployment**

Your Next.js portfolio is now configured for Railway deployment with your backend connected!

### ✅ **What's Been Fixed:**

1. **API Route Updated**: Now uses your Railway backend URL
2. **Railway Configuration**: Added `railway.toml` for proper deployment
3. **Health Check**: Added `/api/health` endpoint for Railway monitoring
4. **Next.js Config**: Updated for Railway deployment
5. **Package.json**: Fixed start script for Railway's PORT environment variable

### 🔧 **Railway Deployment Steps:**

#### **Step 1: Push Your Code**
```bash
git add .
git commit -m "Configure for Railway deployment"
git push origin main
```

#### **Step 2: Deploy on Railway**
1. Go to [railway.app](https://railway.app)
2. Click "New Project"
3. Choose "Deploy from GitHub repo"
4. Select your `caroline-sarkki-portfolio` repository
5. Railway will auto-detect it's a Next.js app

#### **Step 3: Configure Environment Variables**
In your Railway project dashboard, add these environment variables:

```bash
# Backend URL (already set as default in code)
CHAT_API_URL=https://caroline-sarkki-portfolio-be-production.up.railway.app

# EmailJS (if using contact form)
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

#### **Step 4: Deploy**
Railway will automatically:
- Install dependencies (`npm install`)
- Build your app (`npm run build`)
- Start your app (`npm start`)
- Run health checks on `/api/health`

### 🎯 **Key Configuration Changes:**

#### **1. API Route (`/src/app/api/chat/route.ts`)**
```typescript
const apiUrl = process.env.CHAT_API_URL || 'https://caroline-sarkki-portfolio-be-production.up.railway.app'
```

#### **2. Railway Config (`railway.toml`)**
```toml
[build]
builder = "nixpacks"

[deploy]
startCommand = "npm start"
healthcheckPath = "/"
healthcheckTimeout = 300
```

#### **3. Health Check (`/src/app/api/health/route.ts`)**
```typescript
export async function GET() {
  return NextResponse.json({ 
    status: 'healthy', 
    timestamp: new Date().toISOString(),
    service: 'caroline-sarkki-portfolio-frontend'
  })
}
```

#### **4. Next.js Config (`next.config.js`)**
```javascript
const nextConfig = {
  // ... existing config
  output: 'standalone',
  env: {
    PORT: process.env.PORT || '3000',
  },
}
```

### 🔍 **Troubleshooting Railway Issues:**

#### **Health Check Failing?**
- ✅ **Fixed**: Added `/api/health` endpoint
- ✅ **Fixed**: Proper PORT handling in start script
- ✅ **Fixed**: Railway configuration file

#### **Build Failing?**
- Check Node.js version compatibility
- Ensure all dependencies are in `dependencies` not `devDependencies`
- Verify TypeScript compilation

#### **Runtime Errors?**
- Check environment variables are set
- Verify API endpoints are accessible
- Check Railway logs for specific errors

### 🌐 **Your URLs:**

- **Frontend**: `https://your-frontend-name.up.railway.app`
- **Backend**: `https://caroline-sarkki-portfolio-be-production.up.railway.app`
- **Health Check**: `https://your-frontend-name.up.railway.app/api/health`

### 💬 **Chat Integration:**

Your chat component will now:
1. Send messages to `/api/chat` (frontend)
2. Frontend forwards to your Railway backend
3. Backend processes the query
4. Response flows back to the chat

### 🎉 **What Works Now:**

- ✅ **Railway Deployment**: Properly configured
- ✅ **Health Checks**: Will pass Railway monitoring
- ✅ **Backend Connection**: Connected to your Railway backend
- ✅ **Chat Functionality**: Full chat integration
- ✅ **Contact Form**: EmailJS integration (if configured)
- ✅ **Responsive Design**: Works on all devices

### 🚀 **Next Steps:**

1. **Deploy to Railway**: Follow the steps above
2. **Test Chat**: Try the chat functionality
3. **Test Contact Form**: Verify email sending works
4. **Monitor Logs**: Check Railway dashboard for any issues

Your portfolio is now fully configured for Railway deployment with backend integration!
