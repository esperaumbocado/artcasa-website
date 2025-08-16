# EmailJS Setup Guide

This guide will help you set up EmailJS for the contact form on your ArtCasa website.

## Step 1: Create EmailJS Account

1. Go to [EmailJS](https://www.emailjs.com/) and create a free account
2. **With Gmail**: You get Gmail's generous sending limits (much higher than 200/month)

## Step 2: Set Up Gmail Service (Recommended)

### For Higher Quotas - Use Gmail Directly:

1. In your EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. **Choose "Gmail"** (not "EmailJS" service)
4. Click **Connect Account** and sign in with your Gmail account
5. Grant EmailJS permission to send emails on your behalf
6. Note down your **Service ID** (will be something like `service_xxxxxxx`)

### Gmail Benefits:
- ✅ **Higher quotas**: Gmail's sending limits (500-2000+ emails/day depending on account)
- ✅ **Better deliverability**: Emails come from your actual Gmail account
- ✅ **Professional**: Recipients see your real email address as sender
- ✅ **Free**: No additional cost beyond EmailJS free plan

### Alternative Email Providers:
- **Outlook/Hotmail**: Similar setup, good quotas
- **Yahoo Mail**: Also supported
- **Custom Domain Email**: Works with G Suite, Office 365, etc.

## Step 3: Create Email Template

1. Go to **Email Templates** in your dashboard
2. Click **Create New Template**
3. Set the **Subject** to: `🏡 Novo contacto ArtCasa - {{from_name}}`
4. Use this beautiful HTML template for the **Content**:

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contacto ArtCasa</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f8f9fa;">
    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
        <tr>
            <td style="padding: 20px 0;">
                <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="600" style="margin: 0 auto; background-color: #ffffff; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); overflow: hidden;">
                    
                    <!-- Header -->
                    <tr>
                        <td style="background: linear-gradient(135deg, #B5720A 0%, #9A5D07 100%); padding: 30px; text-align: center;">
                            <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: bold; letter-spacing: 2px;">
                                🏡 ARTCASA
                            </h1>
                            <p style="margin: 10px 0 0 0; color: rgba(255,255,255,0.9); font-size: 14px; text-transform: uppercase; letter-spacing: 1px;">
                                Decoração de Interiores
                            </p>
                        </td>
                    </tr>
                    
                    <!-- Content -->
                    <tr>
                        <td style="padding: 40px 30px;">
                            <div style="border-left: 4px solid #B5720A; padding-left: 20px; margin-bottom: 30px;">
                                <h2 style="margin: 0 0 10px 0; color: #333333; font-size: 24px; font-weight: bold;">
                                    Nova Mensagem de Contacto
                                </h2>
                                <p style="margin: 0; color: #666666; font-size: 16px;">
                                    Recebeu uma nova mensagem através do website
                                </p>
                            </div>
                            
                            <!-- Contact Details -->
                            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin-bottom: 30px;">
                                <tr>
                                    <td style="padding: 20px; background-color: #f8f9fa; border-radius: 8px;">
                                        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                                            <tr>
                                                <td style="padding: 8px 0; border-bottom: 1px solid #e9ecef;">
                                                    <strong style="color: #333333; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">👤 Nome:</strong>
                                                    <span style="color: #666666; font-size: 16px; margin-left: 10px;">{{from_name}}</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style="padding: 8px 0; border-bottom: 1px solid #e9ecef;">
                                                    <strong style="color: #333333; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">✉️ Email:</strong>
                                                    <a href="mailto:{{from_email}}" style="color: #B5720A; font-size: 16px; margin-left: 10px; text-decoration: none;">{{from_email}}</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style="padding: 8px 0; border-bottom: 1px solid #e9ecef;">
                                                    <strong style="color: #333333; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">📞 Telefone:</strong>
                                                    <a href="tel:{{phone}}" style="color: #B5720A; font-size: 16px; margin-left: 10px; text-decoration: none;">{{phone}}</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style="padding: 8px 0;">
                                                    <strong style="color: #333333; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">📍 Localidade:</strong>
                                                    <span style="color: #666666; font-size: 16px; margin-left: 10px;">{{location}}</span>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>
                            
                            <!-- Message -->
                            <div style="margin-bottom: 30px;">
                                <h3 style="margin: 0 0 15px 0; color: #333333; font-size: 18px; font-weight: bold;">
                                    💬 Mensagem:
                                </h3>
                                <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; border-left: 4px solid #B5720A;">
                                    <p style="margin: 0; color: #555555; font-size: 16px; line-height: 1.6;">
                                        {{message}}
                                    </p>
                                </div>
                            </div>
                            
                            <!-- Call to Action -->
                            <div style="text-align: center; margin: 30px 0;">
                                <a href="mailto:{{from_email}}" style="display: inline-block; background-color: #B5720A; color: #ffffff; padding: 15px 30px; text-decoration: none; border-radius: 6px; font-weight: bold; text-transform: uppercase; letter-spacing: 1px; font-size: 14px;">
                                    Responder Agora
                                </a>
                            </div>
                        </td>
                    </tr>
                    
                    <!-- Footer -->
                    <tr>
                        <td style="background-color: #333333; padding: 30px; text-align: center;">
                            <p style="margin: 0 0 10px 0; color: #ffffff; font-size: 18px; font-weight: bold;">
                                ArtCasa - Decoração de Interiores
                            </p>
                            <p style="margin: 0 0 15px 0; color: #cccccc; font-size: 14px;">
                                Transformamos a sua casa num lar de sonho
                            </p>
                            <div style="border-top: 1px solid #555555; padding-top: 15px; margin-top: 15px;">
                                <p style="margin: 0; color: #999999; font-size: 12px;">
                                    Esta mensagem foi enviada através do formulário de contacto do website ArtCasa
                                </p>
                            </div>
                        </td>
                    </tr>
                    
                </table>
            </td>
        </tr>
    </table>
</body>
</html>
```

5. **Important**: In EmailJS, make sure to set the template format to **HTML** (not plain text)
6. **Note**: If phone or location fields are empty, they will still show in the email but with empty values. This is normal for EmailJS templates.
7. Save the template and note down your **Template ID**

## Step 4: Get Your Public Key

1. Go to **Account** in your EmailJS dashboard
2. Find your **Public Key** in the API Keys section

## Step 5: Configure Your Website

1. **Create/Update your `.env` file** in the root of your project:
```bash
# EmailJS Configuration
GATSBY_EMAILJS_SERVICE_ID=service_xyz123
GATSBY_EMAILJS_TEMPLATE_ID=template_abc456
GATSBY_EMAILJS_PUBLIC_KEY=user_def789
```

2. **Important Notes**:
   - Replace the example values with your actual EmailJS credentials
   - The `GATSBY_` prefix is required for Gatsby to make these available in the browser
   - Never commit your actual `.env` file to version control (it's already in `.gitignore`)
   - Use `.env.example` as a template for other developers

3. **Alternative**: You can also set these in your hosting platform's environment variables:
   - Netlify: Site settings > Environment variables
   - Vercel: Project settings > Environment Variables
   - Other platforms: Check their documentation for environment variables

## Step 6: Test Your Setup

1. Run your website locally: `npm run develop`
2. Navigate to the contact form
3. Fill out and submit the form
4. Check your email to confirm you received the message
5. Check the browser console for any errors

## Template Variables

The following variables are sent to your EmailJS template:

- `{{from_name}}` - The sender's name
- `{{from_email}}` - The sender's email
- `{{phone}}` - The sender's phone number (optional)
- `{{location}}` - The sender's location (optional)
- `{{message}}` - The message content
- `{{to_name}}` - Set to "ArtCasa" (your business name)

## Email Quotas Comparison

| Service | Monthly Limit | Daily Estimate | Cost |
|---------|---------------|----------------|------|
| EmailJS Default | 200/month | ~7/day | Free |
| **Gmail via EmailJS** | **15,000-60,000/month** | **500-2000/day** | **Free** |
| Outlook via EmailJS | 9,000-30,000/month | 300-1000/day | Free |
| **Netlify Forms** | **100/month** | **~3/day** | **Free** |
| Netlify Forms Pro | 1,000/month | ~33/day | $19/month |

**Recommendation**: 
- **Small sites**: Netlify Forms (100/month) - simplest setup
- **Business sites**: Gmail + EmailJS (15,000+/month) - best quotas
- **High volume**: Consider paid solutions

## Alternative: Netlify Forms (No EmailJS needed)

If you want to avoid EmailJS entirely and your site is hosted on Netlify:

### Netlify Forms Quotas:
- ✅ **Free Plan**: 100 form submissions per month
- ✅ **Pro Plan** ($19/month): 1,000 form submissions per month
- ✅ **Business Plan** ($99/month): 10,000 form submissions per month

### Setup Instructions:
1. **Replace the form in `src/pages/index.js`** with Netlify Forms:
```html
<form name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
  <input type="hidden" name="bot-field" />
  <input type="hidden" name="form-name" value="contact" />
  <!-- Your existing form fields -->
</form>
```

2. **Benefits**:
   - ✅ No JavaScript required
   - ✅ Built into Netlify hosting
   - ✅ Spam protection included
   - ✅ Form submissions dashboard
   - ✅ Email notifications
   - ✅ Webhook integrations

3. **Limitations**:
   - ❌ Only works on Netlify hosting
   - ❌ Lower quota (100/month vs 15,000+ with Gmail)
   - ❌ Less email customization options
   - ❌ No custom HTML email templates

## Troubleshooting

- **Form not submitting**: 
  - Check browser console for errors
  - Verify your EmailJS credentials in the `.env` file
  - Make sure environment variables start with `GATSBY_`
  - Restart your development server after changing environment variables
- **Emails not arriving**: Check spam folder and verify email template is properly configured
- **Rate limiting/Quota exceeded**: 
  - Users will see an error message with direct contact information (email/phone)
  - Consider upgrading to Gmail + EmailJS for higher quotas
  - Monitor your usage in EmailJS dashboard
- **Environment variables not working**: 
  - Ensure they start with `GATSBY_` prefix
  - Restart your development server (`npm run develop`)
  - Check that `.env` file is in the project root directory

## Error Handling

When the contact form encounters any error (including quota limits), users see:
- ❌ Clear error message in Portuguese
- 📧 Direct email contact option
- 📞 Phone contact option
- This ensures no potential customers are lost due to technical issues

## Security Note

The Public Key is safe to use in frontend code as it's designed for client-side use. Your Service ID and Template ID are also safe to be public.
