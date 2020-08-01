import React from "react"
import headerStyles from "./header.module.css"
export default function Header ({ children }) {
  return <div className={headerStyles.header}>{children}</div>
}