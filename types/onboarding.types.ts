import { z } from "zod"

export const personalInfoSchema = z.object({
  // firstName: z.string().min(2, { message: "First name must be at least 2 characters." }),
  // lastName: z.string().min(2, { message: "Last name must be at least 2 characters." }),
  // dateOfBirth: z.date({ required_error: "Date of birth is required." }),
  // gender: z.string({ required_error: "Please select a gender." }),
  // contactNumber: z.string().min(10, { message: "Contact number must be at least 10 digits." }),
  // email: z.string().email({ message: "Please enter a valid email address." }),
  // address: z.string().min(5, { message: "Address must be at least 5 characters." }),
  // image: z.string().min(1, "Image is required"),
  // emergencyName: z.string().min(2, { message: "Last name must be at least 2 characters." }),
  // emergencyRelation: z.string().min(2, { message: "Last name must be at least 2 characters." }),
  // emergencyNumber: z.string().min(10, { message: "Contact number must be at least 10 digits." }),
})

export const legalDetailsSchema = z.object({
  // pan: z.string().min(5, "Registration number must be at least 5 characters"),
  // Aadhar: z.string().min(5, "Tax ID must be at least 5 characters"),
  // accountNumber: z.string().min(5, "License number must be at least 5 characters"),
  // ifsc: z.string().min(5, "License number must be at least 5 characters"),
  // bankName: z.string().min(5, "License number must be at least 5 characters"),
  // cheque: z.string().min(1, "License number must be at least 5 characters"),
  // passport: z.string().min(1, "License number must be at least 5 characters"),
  // drivingLicence: z.string().min(1, "License number must be at least 5 characters"),
})
export const workExperienceSchema = z.object({
  // pan: z.string().min(5, "Registration number must be at least 5 characters"),
  // Aadhar: z.string().min(5, "Tax ID must be at least 5 characters"),
  // accountNumber: z.string().min(5, "License number must be at least 5 characters"),
  // ifsc: z.string().min(5, "License number must be at least 5 characters"),
  // bankName: z.string().min(5, "License number must be at least 5 characters"),
  // cheque: z.string().min(1, "License number must be at least 5 characters"),
  // passport: z.string().min(1, "License number must be at least 5 characters"),
  // drivingLicence: z.string().min(1, "License number must be at least 5 characters"),
})

export const onboardingSchema = z.object({
  ...personalInfoSchema.shape,
  ...legalDetailsSchema.shape,
  ...workExperienceSchema.shape,
})

export type onboardingData = z.infer<typeof onboardingSchema>
