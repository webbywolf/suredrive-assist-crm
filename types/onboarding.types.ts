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
    .min(10, "Phone number must be at least 10 digits long")
    .max(10, "Phone number must be at most 10 digits long")
    .regex(/^\d+$/, "Phone number must contain only digits"),
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
    .min(10, "Phone number must be at least 10 digits long")
    .max(10, "Phone number must be at most 10 digits long")
    .regex(/^\d+$/, "Phone number must contain only digits"),
});

export const legalDetailsSchema = z.object({
  pan: z.string().length(7, "PAN must be greater than 7 characters"),
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
  ifscCode: z.string().min(5, "IFSC code must be greater than 5 characters"),
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
    .nullable()
    .optional(),
  uanNumber: z
    .string()
    .length(12, "UAN number must be exactly 12 digits")
    .regex(/^\d{12}$/, "UAN number must contain only digits")
    .optional(),
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
    .nullable()
    .optional(),
});

export const workExperienceBaseSchema = z.object({
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
  noticePeriod: z.number().optional(),
  role: z.string().optional(),
  experienceSummary: z.string().optional(),
  hasReference: z.boolean().default(false).optional(),

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

export const workExperienceSchema = workExperienceBaseSchema.superRefine(
  (data, ctx) => {
    if (data.experienceType === "experienced") {
      if (
        !data.experienceSummary ||
        data.experienceSummary.trim().length < 10
      ) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message:
            "Experience summary is required and must be at least 10 characters",
          path: ["experienceSummary"],
        });
      }

      if (!data.role || data.role.trim().length < 2) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Role is required and must be at least 2 characters",
          path: ["role"],
        });
      }

      if (data.noticePeriod === undefined || data.noticePeriod < 0) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Notice period is required and cannot be negative",
          path: ["noticePeriod"],
        });
      }

      if (!data.relievingLetter) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Relieving letter is required for experienced candidates",
          path: ["relievingLetter"],
        });
      }
    }

    if (data.hasReference === true) {
      if (!data.referenceName || data.referenceName.trim().length < 2) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Reference name is required when has reference is checked",
          path: ["referenceName"],
        });
      }

      if (!data.referenceLetter) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Reference letter is required when has reference is checked",
          path: ["referenceLetter"],
        });
      }
    }
  },
);

export const onboardingSchema = z.object({
  ...personalInfoSchema.shape,
  ...legalDetailsSchema.shape,
  ...workExperienceBaseSchema.shape,
});
