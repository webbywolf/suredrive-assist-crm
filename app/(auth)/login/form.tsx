"use client"
import React from "react"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/my-custom"
import { Loader2 } from "lucide-react"

const Form = () => {
  const router = useRouter()
  const [form, setForm] = useState({
    username: "",
    password: "",
  })
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const handleUpdateChange = (e: any) => {
    e.preventDefault()
    setForm({ ...form, [e.target.name]: e.target.value.trim() })
  }
  console.log(form)
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
  }
  return (
    <div className="text-left bg-[#ffffff] border border-[#e9e9e9]/30  w-full px-8 md:p-8 md:w-[400px] mx-auto rounded-lg">
      <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
        <Input
          label="Username"
          name="username"
          type="text"
          value={form.username}
          placeholder="Enter your username"
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
          {loading ? (
            <div className="animate-spin">
              <Loader2 size={18} color="white" />
            </div>
          ) : (
            "Sign In"
          )}
        </Button>
      </form>
    </div>
  )
}

export default Form
