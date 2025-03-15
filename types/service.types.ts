import { z } from "zod"

export const formSchema = z.object({
  serviceName: z.string().min(2, { message: "First name must be at least 2 characters." }),
  serviceCategory: z.string().min(2, { message: "Last name must be at least 2 characters." }),
  description: z.date({ required_error: "Date of birth is required." }),
  price: z.string({ required_error: "Please select a gender." }),
  duration: z.string().min(10, { message: "Contact number must be at least 10 digits." }),
  coverage: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "You have to select at least one item.",
  }),
  exclusion: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "You have to select at least one item.",
  }),
  commission: z.string().min(5, { message: "Address must be at least 5 characters." }),
})
