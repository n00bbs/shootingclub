import { createHash } from 'crypto';

export function hashDate(date?: Date): string {
  if (!date) {
    return '';
  }
  return createHash('sha256').update(date.toISOString()).digest('hex');
}
