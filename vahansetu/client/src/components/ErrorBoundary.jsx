import React from 'react';
import { AlertCircle, RotateCcw, Home } from 'lucide-react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("🛡️ ErrorBoundary caught an exception:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="vs-error-boundary-wrap" style={{
          height: '100vh',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'var(--bg-deep)',
          color: '#fff',
          fontFamily: 'Inter, sans-serif',
          textAlign: 'center',
          padding: 20
        }}>
          <div className="vs-glass" style={{
            maxWidth: 500,
            padding: 40,
            borderRadius: 32,
            border: '1px solid rgba(255, 61, 107, 0.2)',
            background: 'rgba(255, 61, 107, 0.02)',
            backdropFilter: 'blur(40px)'
          }}>
            <div style={{
              width: 80,
              height: 80,
              borderRadius: '50%',
              background: 'rgba(255, 61, 107, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 24px',
              color: 'var(--red)'
            }}>
              <AlertCircle size={40} />
            </div>
            
            <h1 style={{
              fontFamily: 'Syne, sans-serif',
              fontSize: '2rem',
              fontWeight: 800,
              marginBottom: 16,
              letterSpacing: '-1px'
            }}>Neural Link Disrupted</h1>
            
            <p style={{
              color: 'var(--text-muted)',
              fontSize: '0.95rem',
              lineHeight: 1.6,
              marginBottom: 32
            }}>
              A critical exception occurred in the VahanSetu interface layer. 
              The subsystem has been isolated to prevent further cascade.
            </p>

            <div style={{ display: 'flex', gap: 12, justifyContent: 'center' }}>
              <button 
                onClick={() => window.location.reload()}
                className="vs-btn vs-btn-primary vs-icon-text"
                style={{ background: 'var(--red)', boxShadow: '0 0 20px rgba(255, 61, 107, 0.3)' }}
              >
                <RotateCcw size={18} /> Re-initialize
              </button>
              <button 
                onClick={() => window.location.href = '/'}
                className="vs-btn vs-btn-secondary vs-icon-text"
              >
                <Home size={18} /> Home Nexus
              </button>
            </div>
            
            {process.env.NODE_ENV === 'development' && (
              <pre style={{
                marginTop: 32,
                padding: 16,
                background: 'rgba(0,0,0,0.3)',
                borderRadius: 12,
                fontSize: '0.7rem',
                color: 'var(--red)',
                textAlign: 'left',
                overflowX: 'auto',
                fontFamily: 'monospace'
              }}>
                {this.state.error && this.state.error.toString()}
              </pre>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
