# Ecart

A simple React + Vite shopping cart application for a vegetable store.

## Features

- Product listing with add/remove quantity controls
- Shopping cart summary with item count and total price
- Redux Toolkit state management via 
eact-redux
- Fast Vite development and production build

## Tech Stack

- React 18
- Vite
- Redux Toolkit
- React Redux
- JavaScript

## Installation

`ash
cd e:/prgt/ECART/ecart
npm install
`

## Development

`ash
npm run dev
`

Open the local URL shown in the terminal to view the app.

## Production Build

`ash
npm run build
`

## Project Structure

- src/main.jsx — app entry point and Redux provider setup
- src/App.jsx — main layout and product list
- src/components/ProductCard.jsx — individual product card UI
- src/components/Cart.jsx — cart sidebar UI
- src/components/cartSlice.js — Redux slice for cart actions and selectors
- src/components/store.js — Redux store configuration
- src/components/product.js — sample product data

## Notes

This repository is built as a small demo of React and Redux Toolkit working together with Vite.
