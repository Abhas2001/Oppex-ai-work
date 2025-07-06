export const validateEmail = (email: string): boolean => {

    const validEmailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com)$/;
  
    const isInvalid =
      !validEmailRegex.test(email) ||
      email.includes('..') ||
      email.startsWith('.') ||
      email.endsWith('.') ||
      email.startsWith('@');
  
    return !isInvalid;
  };
  