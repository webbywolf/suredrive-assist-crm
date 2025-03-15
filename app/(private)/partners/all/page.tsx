import { Metadata } from "next"
import React from "react"
import Data from "./data"

export const metadata: Metadata = {
  title: "Partners",
  description: "Partners",
}

const page = () => {
  return <Data />
}

export default page
