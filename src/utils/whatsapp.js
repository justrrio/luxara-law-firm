/**
 * ====================================================================
 * UNIFIED WHATSAPP UTILITY
 * Complete WhatsApp integration utility with JSON data management
 * ====================================================================
 */

// Import JSON data
import whatsappConfig from '../data/whatsapp-config.json';
import whatsappTemplates from '../data/whatsapp-templates.json';

// Extract config and templates from JSON
const WHATSAPP_CONFIG = {
  BUSINESS_NUMBER: whatsappConfig.business.number,
  BUSINESS_NAME: whatsappConfig.business.name,
  FALLBACK_NUMBER: whatsappConfig.business.fallbackNumber
};
const WHATSAPP_TEMPLATES = whatsappTemplates.templates;
const DEFAULT_TEMPLATE = whatsappTemplates.defaultTemplate;

// ====================================================================
// DATA ACCESS FUNCTIONS
// ====================================================================

/**
 * Get WhatsApp configuration
 */
export function getWhatsAppConfig() {
  return whatsappConfig.business;
}

/**
 * Get WhatsApp templates
 */
export function getWhatsAppTemplates() {
  return whatsappTemplates.templates;
}

/**
 * Get default template
 */
export function getDefaultTemplate() {
  return whatsappTemplates.defaultTemplate;
}

/**
 * Get specific template by key
 */
export function getTemplate(templateKey) {
  const templates = getWhatsAppTemplates();
  return templates[templateKey] || getDefaultTemplate();
}

/**
 * Get all available template keys
 */
export function getAvailableTemplates() {
  const templates = getWhatsAppTemplates();
  return Object.keys(templates);
}

/**
 * Validate if template exists
 */
export function templateExists(templateKey) {
  const templates = getWhatsAppTemplates();
  return templateKey in templates;
}

// ====================================================================
// CORE WHATSAPP FUNCTIONS
// ====================================================================

/**
 * Format phone number for WhatsApp API
 */
export function formatPhoneForWhatsApp(phoneNumber) {
  if (!phoneNumber) {
    return WHATSAPP_CONFIG.BUSINESS_NUMBER.replace(/[^\d]/g, '');
  }

  let cleanNumber = phoneNumber.replace(/[^\d]/g, '');

  if (cleanNumber.startsWith('0')) {
    cleanNumber = '62' + cleanNumber.substring(1);
  } else if (cleanNumber.startsWith('8')) {
    cleanNumber = '62' + cleanNumber;
  } else if (!cleanNumber.startsWith('62')) {
    cleanNumber = '62' + cleanNumber;
  }

  return cleanNumber;
}

/**
 * Encode message for WhatsApp URL
 */
export function encodeMessageForWhatsApp(message) {
  if (!message) return '';

  let cleanMessage = message.trim();
  cleanMessage = cleanMessage.replace(/[""]/g, '"');
  cleanMessage = cleanMessage.replace(/['']/g, "'");

  return encodeURIComponent(cleanMessage);
}

/**
 * Create WhatsApp click-to-chat URL
 */
export function createWhatsAppURL(options = {}) {
  const {
    templateKey = null,
    customMessage = null,
    phoneNumber = null
  } = options;

  let message = DEFAULT_TEMPLATE.message;
  if (templateKey && WHATSAPP_TEMPLATES[templateKey]) {
    message = WHATSAPP_TEMPLATES[templateKey].message;
  }
  if (customMessage) {
    message = customMessage;
  }

  const formattedPhone = formatPhoneForWhatsApp(
    phoneNumber || WHATSAPP_CONFIG.BUSINESS_NUMBER
  );
  const encodedMessage = encodeMessageForWhatsApp(message);

  return `https://wa.me/${formattedPhone}?text=${encodedMessage}`;
}

/**
 * Open WhatsApp in a new tab
 */
export function openWhatsApp(options = {}) {
  try {
    const url = createWhatsAppURL(options);
    const success = openInNewTab(url);

    if (!success) {
      handleFallback(url, options);
    }

    return success;
  } catch (error) {
    console.error('Error opening WhatsApp:', error);
    handleFallback(createWhatsAppURL(options), options);
    return false;
  }
}

/**
 * Open URL in new tab
 */
function openInNewTab(url) {
  try {
    const link = document.createElement('a');
    link.href = url;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    return true;
  } catch (error) {
    try {
      const newTab = window.open(url, '_blank', 'noopener,noreferrer');
      return !!newTab;
    } catch (fallbackError) {
      return false;
    }
  }
}

/**
 * Handle fallback when opening WhatsApp fails
 */
function handleFallback(url, options = {}) {
  const phoneNumber = formatPhoneForWhatsApp(WHATSAPP_CONFIG.BUSINESS_NUMBER);
  const displayPhone = '+' + phoneNumber;

  let message = DEFAULT_TEMPLATE.message;
  if (options.templateKey && WHATSAPP_TEMPLATES[options.templateKey]) {
    message = WHATSAPP_TEMPLATES[options.templateKey].message;
  }
  if (options.customMessage) {
    message = options.customMessage;
  }

  const instructions = `WhatsApp could not be opened automatically.

Please choose one option:
1. Copy the WhatsApp link (click OK)
2. Manually open WhatsApp and message ${displayPhone}

The link will be copied to your clipboard.`;

  if (confirm(instructions)) {
    copyToClipboard(url, displayPhone, message);
  }
}

/**
 * Copy text to clipboard
 */
function copyToClipboard(url, phoneNumber, message) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(url)
      .then(() => {
        alert(`✅ Link copied to clipboard!

Paste in browser: ${url}

Or manually chat: ${phoneNumber}`);
      })
      .catch(() => {
        fallbackCopy(url, phoneNumber, message);
      });
  } else {
    fallbackCopy(url, phoneNumber, message);
  }
}

/**
 * Fallback copy method for older browsers
 */
function fallbackCopy(url, phoneNumber, message) {
  const textArea = document.createElement('textarea');
  textArea.value = url;
  textArea.style.position = 'fixed';
  textArea.style.left = '-999999px';
  textArea.style.top = '-999999px';

  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  try {
    const successful = document.execCommand('copy');
    if (successful) {
      alert(`✅ Link copied!

${url}

Manual option: Chat ${phoneNumber}`);
    } else {
      alert(`📋 Manual Instructions:

Link: ${url}

Alternative:
1. Open WhatsApp
2. Message: ${phoneNumber}`);
    }
  } catch (err) {
    alert(`📋 Manual Instructions:

Link: ${url}

Alternative:
1. Open WhatsApp
2. Message: ${phoneNumber}`);
  }

  document.body.removeChild(textArea);
}

// ====================================================================
// TEMPLATE FUNCTIONS - Pre-configured WhatsApp Actions
// ====================================================================

/**
 * Open specific template conversations
 */
export function openHubungiKami() {
  return openWhatsApp({ templateKey: 'HUBUNGI_KAMI' });
}

export function openSistemBantuan() {
  return openWhatsApp({ templateKey: 'SISTEM_BANTUAN' });
}

export function openKebijakanPengembalian() {
  return openWhatsApp({ templateKey: 'KEBIJAKAN_PENGEMBALIAN' });
}

export function openTentangKami() {
  return openWhatsApp({ templateKey: 'TENTANG_KAMI' });
}

// ====================================================================
// UTILITY FUNCTIONS
// ====================================================================

/**
 * Get contact information
 */
export function getWhatsAppContactInfo(templateKey = null) {
  const phoneNumber = formatPhoneForWhatsApp(WHATSAPP_CONFIG.BUSINESS_NUMBER);
  const displayPhone = '+' + phoneNumber;

  let message = DEFAULT_TEMPLATE.message;
  if (templateKey && WHATSAPP_TEMPLATES[templateKey]) {
    message = WHATSAPP_TEMPLATES[templateKey].message;
  }

  const url = createWhatsAppURL({ templateKey });

  return {
    businessName: WHATSAPP_CONFIG.BUSINESS_NAME,
    phoneNumber: displayPhone,
    rawNumber: phoneNumber,
    message: message,
    url: url
  };
}

// ====================================================================
// EXPORT SUMMARY
// ====================================================================

/*
UNIFIED WHATSAPP UTILITY - Complete Export List:

📊 DATA ACCESS:
- getWhatsAppConfig()
- getWhatsAppTemplates()
- getDefaultTemplate()
- getTemplate(templateKey)
- getAvailableTemplates()
- templateExists(templateKey)

🔧 CORE FUNCTIONS:
- formatPhoneForWhatsApp(phoneNumber)
- encodeMessageForWhatsApp(message)
- createWhatsAppURL(options)
- openWhatsApp(options)

📱 TEMPLATE ACTIONS:
- openHubungiKami()
- openSistemBantuan()
- openKebijakanPengembalian()
- openTentangKami()

ℹ️ UTILITY:
- getWhatsAppContactInfo(templateKey)

📁 DATA FILES:
- /src/data/whatsapp-config.json
- /src/data/whatsapp-templates.json
*/
