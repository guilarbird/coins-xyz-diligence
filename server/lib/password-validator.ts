import { DEFAULT_PASSWORD } from "../../drizzle/schema";

/**
 * Password validation rules
 */
export interface PasswordValidationResult {
  valid: boolean;
  errors: string[];
}

/**
 * Validate password strength
 * Requirements:
 * - Minimum 8 characters
 * - At least one letter
 * - At least one number
 * - Cannot be the default password
 */
export function validatePassword(password: string): PasswordValidationResult {
  const errors: string[] = [];

  if (password.length < 8) {
    errors.push("A senha deve ter no mínimo 8 caracteres");
  }

  if (!/[a-zA-Z]/.test(password)) {
    errors.push("A senha deve conter pelo menos uma letra");
  }

  if (!/[0-9]/.test(password)) {
    errors.push("A senha deve conter pelo menos um número");
  }

  if (password === DEFAULT_PASSWORD) {
    errors.push("Você não pode usar a senha padrão. Escolha uma senha diferente");
  }

  return {
    valid: errors.length === 0,
    errors,
  };
}

/**
 * Generate a 6-digit verification code
 */
export function generateVerificationCode(): string {
  return Math.floor(100000 + Math.random() * 900000).toString();
}
