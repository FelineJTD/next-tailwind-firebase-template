/** @type {import('next').NextConfig} */
const path = require('path')
const { parsed: localEnv } = require('dotenv').config({
  allowEmptyValues: false,
  path: path.resolve(process.cwd(), '.env.local'),
})

const nextConfig = {
  reactStrictMode: true,
  env: localEnv,
}

module.exports = nextConfig
