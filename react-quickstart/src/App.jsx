import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function MyButton() {
  return (
    <button>Click Me.</button>
  );
}

export default function MyApp() {
  return (
    <div>
      <h1><i>Welcome to my App!</i></h1>
      <MyButton />
    </div>
  )
}

