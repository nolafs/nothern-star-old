import { z } from 'zod';

export interface IContactFormInput {
  name: string;
  email: string;
  enquiryType: string;
  message: string;
  agreeToTerms: boolean;
}


export const emailSchema = z.object({
  'form-name': z.string().optional(),
  name: z.string().min(1, 'Please enter your name'),
  email: z.string().email('Please enter a valid email address'),
  message: z.string().min(1, 'Please enter your message'),
});
