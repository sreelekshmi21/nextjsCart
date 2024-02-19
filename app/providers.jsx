import React from 'react'

export default function Providers({children}) {
  return (
    <ThemeProvider>
        {children}
    </ThemeProvider>
  )
}
