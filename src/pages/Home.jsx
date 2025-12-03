// src/pages/Home.jsx
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()

  // ✅ FAQAT BU 4 QATOR QO'SHILADI
  useEffect(() => {
    const user = sessionStorage.getItem("currentUser")
    if (!user) {
      navigate("/", { replace: true })
    }
  }, [navigate])

  return (
    <div>Home</div>
  )
}

export default Home