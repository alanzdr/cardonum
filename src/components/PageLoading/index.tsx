import React from 'react'

//h-[calc(100vh-3rem)]

function PageLoading() {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="relative w-16 h-16 animate-spin border-solid border-[transparent] border-t-primary rounded-full border-[5px] " />
    </div>
  )
}

export default PageLoading
