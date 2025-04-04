import { z } from "zod";
type FileType = {
  size: number;
  type: string;
};
export const companyInfoSchema = z.object({
  companyName: z.string().min(2, "Company name must be at least 2 characters"),
  businessType: z.string({
    required_error: "Please select a business type",
  }),
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  title: z.string({
    required_error: "Please select a title",
  }),
  contactNumber: z
    .string()
    .min(10, "Phone number must be at least 10 digits long")
    .max(10, "Phone number must be at most 10 digits long")
    .regex(/^\d+$/, "Phone number must contain only digits"),
  email: z.string().email("Please enter a valid email address"),
  fullAddress: z.string().min(5, "Address must be at least 5 characters"),
});

export const governmentDetailsSchema = z.object({
  registrationNumber: z
    .string()
    .min(5, "Registration number must be at least 5 characters"),
  gstNumber: z.string().min(5, "GST number must be at least 5 characters"),
  licenseNumber: z
    .string()
    .min(5, "License number must be at least 5 characters"),
  incorporationDate: z.date({
    required_error: "Incorporation date is required",
  }),
});

export const bankDetailsSchema = z.object({
  accountHolderName: z
    .string()
    .min(2, "Account holder name must be at least 2 characters"),
  accountNumber: z
    .string()
    .min(8, "Account number must be at least 8 characters"),
  bankName: z.string().min(2, "Bank name must be at least 2 characters"),
  branchName: z.string().min(4, "Branch name must be at least 4 characters"),
  ifscCode: z.string().min(8, "IFSC code must be at least 8 characters"),
});

export const documentSchema = z.object({
  businessRegistration: z
    .any()
    .refine(
      (file): file is FileType =>
        typeof window === "undefined" || file instanceof File,
      "Expected a file",
    )
    .refine(
      (file) => !file || file.size <= 5000000,
      "File size must be less than 5MB",
    )
    .refine(
      (file) =>
        !file ||
        [
          "application/pdf",
          "application/msword",
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        ].includes(file.type),
      "Only .pdf, .doc and .docx formats are supported",
    )
    .nullable(),
  taxRegistration: z
    .any()
    .refine(
      (file): file is FileType =>
        typeof window === "undefined" || file instanceof File,
      "Expected a file",
    )
    .refine(
      (file) => !file || file.size <= 5000000,
      "File size must be less than 5MB",
    )
    .refine(
      (file) =>
        !file ||
        [
          "application/pdf",
          "application/msword",
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        ].includes(file.type),
      "Only .pdf, .doc and .docx formats are supported",
    )
    .nullable(),
  bankStatement: z
    .any()
    .refine(
      (file): file is FileType =>
        typeof window === "undefined" || file instanceof File,
      "Expected a file",
    )
    .refine(
      (file) => !file || file.size <= 5000000,
      "File size must be less than 5MB",
    )
    .refine(
      (file) =>
        !file ||
        [
          "application/pdf",
          "application/msword",
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        ].includes(file.type),
      "Only .pdf, .doc and .docx formats are supported",
    )
    .nullable(),
});

export const credentialsBaseSchema = z.object({
  username: z.string().min(3, "Username must be at least 3 characters"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter")
    .regex(/[0-9]/, "Password must contain at least one number"),
  confirmPassword: z.string(),
});

export const credentialsSchema = credentialsBaseSchema.superRefine(
  (data, ctx) => {
    if (data.password !== data.confirmPassword) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Passwords do not match",
        path: ["confirmPassword"],
      });
    }
  },
);

export const companyRegistrationSchema = z.object({
  ...companyInfoSchema.shape,
  ...governmentDetailsSchema.shape,
  ...bankDetailsSchema.shape,
  ...documentSchema.shape,
  ...credentialsBaseSchema.shape,
});

export type CompanyRegistrationData = z.infer<typeof companyRegistrationSchema>;
