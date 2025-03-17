"use client"
import React from "react"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/customInput"
import { Loader2 } from "lucide-react"
import { useAuth } from "@/hooks/useAuth"

const Form = () => {
  const { loginMutation } = useAuth();
  const [form, setForm] = useState({
    employee_id: "",
    password: "",
  })
  


  const handleUpdateChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value.trim() })
  }
  
  return (
    <div className="text-left bg-[#ffffff] w-full px-8 md:p-8 md:w-[400px] mx-auto rounded-lg z-10 border border-gray-200">
      <form className="flex flex-col gap-2" onSubmit={(e) => {
        e.preventDefault();
        loginMutation.mutate(form);
      }}>
        <Input
          label="Employee Id"
          name="employee_id"
          type="text"
          value={form.employee_id}
          placeholder="Enter your employee id"
          onChange={handleUpdateChange}
          required
        />
        <Input
          label="Password"
          name="password"
          type="password"
          value={form.password}
          placeholder="Enter your password"
          onChange={handleUpdateChange}
          required
        />
        <Button type="submit" className="w-full mt-4 h-12 " variant="brand">
          {loginMutation.isPending ? (
            <div className="animate-spin">
              <Loader2 size={18} color="white" />
            </div>
          ) : (
            "Sign In"
          )}
          
        </Button>
      </form>
      <span className="text-xs text-red-600">{loginMutation.error?.message}</span>
    </div>
  )
}

export default Form
