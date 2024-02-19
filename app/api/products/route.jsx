import { NextResponse } from 'next/server'
import React from 'react'

export async function GET(req) {
  return NextResponse.json({'msg': 'Hello SSS API'})
  
}


export async function POST(req) {
  console.log('POST',req)
  return NextResponse.json({'msg': 'POST success'})
  
}