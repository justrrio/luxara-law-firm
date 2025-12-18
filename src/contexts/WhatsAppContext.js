'use client';

import { createContext, useCallback, useContext } from 'react';
import {
  createWhatsAppURL,
  // Import data access functions from unified utility
  getWhatsAppConfig,
  getWhatsAppContactInfo,
  getWhatsAppTemplates,
  openHubungiKami,
  openKebijakanPengembalian,
  openSistemBantuan,
  openTentangKami,
  openWhatsApp
} from '../utils/whatsapp.js';

// Create WhatsApp Context
const WhatsAppContext = createContext(null);

/**
 * WhatsApp Provider Component - SIMPLIFIED VERSION
 */
export function WhatsAppProvider({ children }) {

  // IMPROVEMENT: Add basic error handling
  const hubungiKami = useCallback(() => {
    try {
      return openHubungiKami();
    } catch (error) {
      console.error('Error in hubungiKami:', error);
      return false;
    }
  }, []);

  const sistemBantuan = useCallback(() => {
    try {
      return openSistemBantuan();
    } catch (error) {
      console.error('Error in sistemBantuan:', error);
      return false;
    }
  }, []);

  const kebijakanPengembalian = useCallback(() => {
    try {
      return openKebijakanPengembalian();
    } catch (error) {
      console.error('Error in kebijakanPengembalian:', error);
      return false;
    }
  }, []);

  const tentangKami = useCallback(() => {
    try {
      return openTentangKami();
    } catch (error) {
      console.error('Error in tentangKami:', error);
      return false;
    }
  }, []);

  // Generic functions for custom usage
  const createURL = useCallback((options = {}) => {
    return createWhatsAppURL(options);
  }, []);

  const openChat = useCallback((options = {}) => {
    return openWhatsApp(options);
  }, []);

  const getContactInfo = useCallback((templateKey = null) => {
    return getWhatsAppContactInfo(templateKey);
  }, []);

  // FIXED: Context value focused on working functions
  const contextValue = {
    // Template functions - MAIN USAGE
    hubungiKami,
    sistemBantuan,
    kebijakanPengembalian,
    tentangKami,

    // Generic functions for custom use
    createURL,
    openChat,
    getContactInfo,

    // Configuration
    config: getWhatsAppConfig(),
    templates: getWhatsAppTemplates()
  };

  return (
    <WhatsAppContext.Provider value={contextValue}>
      {children}
    </WhatsAppContext.Provider>
  );
}

/**
 * Custom hook to use WhatsApp Context
 */
export function useWhatsApp() {
  const context = useContext(WhatsAppContext);

  if (!context) {
    throw new Error('useWhatsApp must be used within a WhatsAppProvider');
  }

  return context;
}

export default WhatsAppContext;
