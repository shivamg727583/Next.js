"use client"

interface ErrorProps {
  message?: string
  code?: number | string
}

function ErrorPage({ message = "An unexpected error has occurred. Please try refreshing the page or come back later.", code }: ErrorProps) {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #ff6a00 0%, #ee0979 100%)',
      color: '#fff',
      fontFamily: 'Segoe UI, sans-serif',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <svg width="120" height="120" viewBox="0 0 120 120" style={{ marginBottom: 24, animation: 'shake 0.8s infinite alternate' }}>
        <circle cx="60" cy="60" r="55" fill="#fff2" stroke="#fff" strokeWidth="4"/>
        <text x="60" y="75" textAnchor="middle" fontSize="60" fill="#fff" fontWeight="bold">!</text>
      </svg>
      <h1 style={{ fontSize: '2.5rem', marginBottom: 12 }}>Oops! Something went wrong.</h1>
      {code && <h2 style={{ fontSize: '1.5rem', marginBottom: 8 }}>Error Code: {code}</h2>}
      <p style={{ fontSize: '1.2rem', marginBottom: 32 }}>{message}</p>
      <button
        onClick={() => window.location.reload()}
        style={{
          padding: '12px 32px',
          fontSize: '1rem',
          borderRadius: '24px',
          border: 'none',
          background: 'rgba(255,255,255,0.2)',
          color: '#fff',
          cursor: 'pointer',
          boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
          transition: 'background 0.2s'
        }}
      >
        Refresh
      </button>
      <style>{`
        @keyframes shake {
          0% { transform: rotate(-8deg); }
          100% { transform: rotate(8deg); }
        }
      `}</style>
    </div>
  )
}

export default ErrorPage