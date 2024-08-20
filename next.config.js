/** @type {import('next').NextConfig} */


const isTest = process.env.NODE_ENV === 'test';

const nextConfig = {
  swcMinify: !isTest, // Usar SWC a menos que estés corriendo pruebas
};

module.exports = nextConfig;