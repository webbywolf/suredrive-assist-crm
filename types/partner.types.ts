import { z } from "zod"

export const companyInfoSchema = z.object({
  // companyName: z.string().min(2, "Company name must be at least 2 characters"),
  // businessType: z.string({
  //   required_error: "Please select a business type",
  // }),
  // fullName: z.string().min(2, "Full name must be at least 2 characters"),
  // title: z.string({
  //   required_error: "Please select a title",
  // }),
  // contactNumber: z.string().min(10, "Contact number must be at least 10 digits"),
  // email: z.string().email("Please enter a valid email address"),
  // fullAddress: z.string().min(5, "Address must be at least 5 characters"),
})

export const governmentDetailsSchema = z.object({
  // registrationNumber: z.string().min(5, "Registration number must be at least 5 characters"),
  // taxId: z.string().min(5, "Tax ID must be at least 5 characters"),
  // licenseNumber: z.string().min(5, "License number must be at least 5 characters"),
  // incorporationDate: z.date({
  //   required_error: "Incorporation date is required",
  // }),
})

export const bankDetailsSchema = z.object({
  // accountHolderName: z.string().min(2, "Account holder name must be at least 2 characters"),
  // accountNumber: z.string().min(8, "Account number must be at least 8 characters"),
  // bankName: z.string().min(2, "Bank name must be at least 2 characters"),
  // branchCode: z.string().min(4, "Branch code must be at least 4 characters"),
  // ifscCode: z.string().min(8, "IFSC code must be at least 8 characters"),
})

export const documentSchema = z.object({
  // businessRegistration: z.string().min(1, "Business registration document is required"),
  // taxCertificate: z.string().min(1, "Tax certificate is required"),
  // bankStatement: z.string().min(1, "Bank statement is required"),
})

export const credentialsSchema = z.object({
  //   username: z.string().min(3, "Username must be at least 3 characters"),
  //   password: z
  //     .string()
  //     .min(8, "Password must be at least 8 characters")
  //     .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
  //     .regex(/[a-z]/, "Password must contain at least one lowercase letter")
  //     .regex(/[0-9]/, "Password must contain at least one number"),
  //   confirmPassword: z.string(),
  // })
  // .refine((data) => data.password === data.confirmPassword, {
  //   message: "Passwords do not match",
  //   path: ["confirmPassword"],
})

export const companyRegistrationSchema = z.object({
  ...companyInfoSchema.shape,
  ...governmentDetailsSchema.shape,
  ...bankDetailsSchema.shape,
  ...documentSchema.shape,
  ...credentialsSchema.shape,
})

export type CompanyRegistrationData = z.infer<typeof companyRegistrationSchema>
