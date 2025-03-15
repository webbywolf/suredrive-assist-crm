import { z } from "zod";
type FileType = {
  size: number;
  type: string;
};

export const personalInfoSchema = z.object({
  firstName: z
    .string()
    .min(2, "First name must be at least 2 characters")
    .max(50, "First name cannot exceed 50 characters")
    .regex(
      /^[a-zA-Z\s]+$/,
      "First name should only contain letters and spaces",
    ),
  lastName: z
    .string()
    .min(2, "Last name must be at least 2 characters")
    .max(50, "Last name cannot exceed 50 characters")
    .regex(/^[a-zA-Z\s]+$/, "Last name should only contain letters and spaces"),
  dateOfBirth: z.date().refine((date) => {
    const age = new Date().getFullYear() - date.getFullYear();
    return age >= 18;
  }, "Employee must be at least 18 years old"),
  gender: z.enum(["male", "female", "other"], {
    required_error: "Please select a gender",
  }),
  contactNumber: z
    .string()
    .regex(/^\+?[1-9]\d{9,14}$/, "Please enter a valid contact number")
    .min(10, "Contact number must be at least 10 digits"),
  email: z
    .string()
    .email("Please enter a valid email address")
    .min(5, "Email is too short")
    .max(100, "Email cannot exceed 100 characters"),
  address: z
    .string()
    .min(5, "Address must be at least 5 characters")
    .max(200, "Address cannot exceed 200 characters"),
  image: z
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
        !file || ["image/jpeg", "image/jpg", "image/png"].includes(file.type),
      "Only .jpg, .jpeg, and .png formats are supported",
    )
    .nullable(),
  // Emergency Contact
  emergencyName: z
    .string()
    .min(2, "Emergency contact name must be at least 2 characters")
    .max(50, "Emergency contact name cannot exceed 50 characters")
    .regex(/^[a-zA-Z\s]+$/, "Name should only contain letters and spaces"),
  emergencyRelation: z
    .string()
    .min(2, "Relationship must be at least 2 characters")
    .max(30, "Relationship cannot exceed 30 characters"),
  emergencyNumber: z
    .string()
    .regex(
      /^\+?[1-9]\d{9,14}$/,
      "Please enter a valid emergency contact number",
    )
    .min(10, "Emergency contact number must be at least 10 digits"),
});

// Legal Details Schema
export const legalDetailsSchema = z.object({
  pan: z
    .string()
    .length(10, "PAN must be exactly 10 characters")
    .regex(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/, "Invalid PAN format"),
  aadharNumber: z
    .string()
    .length(12, "Aadhar number must be exactly 12 digits")
    .regex(/^\d{12}$/, "Aadhar number must contain only digits"),
  accountHolderName: z
    .string()
    .min(2, "Account holder name must be at least 2 characters")
    .max(50, "Account holder name cannot exceed 50 characters")
    .regex(/^[a-zA-Z\s]+$/, "Name should only contain letters and spaces"),
  accountNumber: z
    .string()
    .min(9, "Account number must be at least 9 digits")
    .max(18, "Account number cannot exceed 18 digits")
    .regex(/^\d+$/, "Account number must contain only digits"),
  bankName: z
    .string()
    .min(3, "Bank name must be at least 3 characters")
    .max(50, "Bank name cannot exceed 50 characters"),
  ifscCode: z
    .string()
    .length(11, "IFSC code must be exactly 11 characters")
    .regex(/^[A-Z]{4}0[A-Z0-9]{6}$/, "Invalid IFSC code format"),
  cancelledCheque: z
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
        !file || ["image/jpeg", "image/jpg", "image/png"].includes(file.type),
      "Only .jpg, .jpeg, and .png formats are supported",
    )
    .nullable(),
  uanNumber: z
    .string()
    .length(12, "UAN number must be exactly 12 digits")
    .regex(/^\d{12}$/, "UAN number must contain only digits"),
  uanCard: z
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
        !file || ["image/jpeg", "image/jpg", "image/png"].includes(file.type),
      "Only .jpg, .jpeg, and .png formats are supported",
    )
    .nullable(),
});

// Work Experience Schema
export const workExperienceSchema = z.object({
  experienceType: z.enum(["fresher", "experienced", "intern"], {
    required_error: "Please select experience type",
  }),

  resume: z
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
      (file) => !file || ["application/pdf"].includes(file.type),
      "Only PDF format is supported",
    )
    .nullable(),

  // hasExperience: z.boolean().default(false),

  relievingLetter: z
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
      (file) => !file || ["application/pdf"].includes(file.type),
      "Only PDF format is supported",
    )
    .nullable()
    .optional(),
  // .superRefine((val, ctx) => {
  //   if (ctx.parent.experienceType === "experienced" && !val) {
  //     ctx.addIssue({
  //       code: z.ZodIssueCode.custom,
  //       message: "Relieving letter is required for experienced candidates",
  //     });
  //   }
  // })
  noticePeriod: z
    .number()
    .min(0, "Notice period cannot be negative")
    .max(180, "Notice period cannot exceed 180 days")
    .optional(),

  role: z
    .string()
    .min(2, "Role must be at least 2 characters")
    .max(50, "Role cannot exceed 50 characters")
    .optional(),

  experienceSummary: z
    .string()
    .min(10, "Experience summary must be at least 10 characters")
    .max(1000, "Experience summary cannot exceed 1000 characters")
    .optional(),

  // Reference
  hasReference: z.boolean().default(false),

  referenceName: z
    .string()
    .min(2, "Reference name must be at least 2 characters")
    .max(50, "Reference name cannot exceed 50 characters")
    .optional(),

  referenceLetter: z
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
        ["image/jpeg", "image/jpg", "image/png", "application/pdf"].includes(
          file.type,
        ),
      "Only .jpg, .jpeg, .png, and .pdf formats are supported",
    )
    .nullable()
    .optional(),
});

// Combined Onboarding Schema
export const onboardingSchema = z.object({
  ...personalInfoSchema.shape,
  ...legalDetailsSchema.shape,
  ...workExperienceSchema.shape,
});
