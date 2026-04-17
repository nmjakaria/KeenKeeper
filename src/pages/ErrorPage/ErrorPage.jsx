import { useState, useEffect } from 'react';
import { useRouteError, useNavigate, useLocation } from 'react-router'; // Added hooks

const PARTICLES = Array.from({ length: 18 }, (_, i) => ({
    id: i,
    size: Math.random() * 6 + 3,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 6 + 4,
    delay: Math.random() * 4,
    opacity: Math.random() * 0.4 + 0.1,
    tx: (Math.random() - 0.5) * 40,
    ty: (Math.random() - 0.5) * 40,
}));

export default function ErrorPage() {
    const error = useRouteError(); // Get the error object
    const navigate = useNavigate(); // For SPA navigation
    const location = useLocation(); // To show the failed path
    
    const [timestamp] = useState(new Date().toISOString());
    const [mouse, setMouse] = useState({ x: 0.5, y: 0.5 });

    useEffect(() => {
        const move = (e) => setMouse({ x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight });
        window.addEventListener('mousemove', move);
        return () => window.removeEventListener('mousemove', move);
    }, []);

    const glowX = (mouse.x * 100).toFixed(1);
    const glowY = (mouse.y * 100).toFixed(1);

    return (
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Mono:wght@400;500&display=swap');

                .err-root {
                    min-height: 100vh;
                    background: #060608;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    overflow: hidden;
                    position: relative;
                    font-family: 'DM Mono', monospace;
                }

                /* ... Keep all your existing CSS animations and classes here ... */
                .err-grid { position: absolute; inset: 0; background-image: linear-gradient(rgba(99,102,241,.07) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,.07) 1px, transparent 1px); background-size: 48px 48px; mask-image: radial-gradient(ellipse 80% 70% at 50% 50%, black 30%, transparent 100%); }
                .err-glow { position: absolute; inset: 0; pointer-events: none; background: radial-gradient(ellipse 55% 45% at var(--gx) var(--gy), rgba(99,102,241,.18) 0%, rgba(168,85,247,.09) 40%, transparent 70%); transition: background .12s linear; }
                .err-404 { font-family: 'Bebas Neue', sans-serif; font-size: clamp(160px, 28vw, 260px); line-height: .85; letter-spacing: -.02em; background: linear-gradient(135deg, #fff 0%, #a5b4fc 40%, #818cf8 70%, #6366f1 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; filter: drop-shadow(0 0 60px rgba(99,102,241,.5)); user-select: none; animation: float 6s ease-in-out infinite; }
                @keyframes float { 0%, 100% { transform: translateY(0px) rotate(-.3deg); } 50% { transform: translateY(-14px) rotate(.3deg); } }
                .err-line { height: 1px; background: linear-gradient(90deg, transparent, #6366f1, #a855f7, transparent); opacity: .5; }
                .err-card { background: rgba(255,255,255,.03); border: 1px solid rgba(99,102,241,.2); border-radius: 20px; backdrop-filter: blur(16px); padding: 2rem 2.5rem; position: relative; overflow: hidden; }
                .err-card::before { content: ''; position: absolute; top: 0; left: 50%; transform: translateX(-50%); width: 60%; height: 1px; background: linear-gradient(90deg, transparent, rgba(99,102,241,.8), transparent); }
                .err-title { font-family: 'Bebas Neue', sans-serif; font-size: 1.8rem; letter-spacing: .05em; color: #e0e7ff; }
                .err-sub { font-size: .78rem; color: rgba(224,231,255,.35); line-height: 1.8; }
                .err-code { background: rgba(0,0,0,.5); border: 1px solid rgba(99,102,241,.15); border-radius: 10px; padding: .75rem 1rem; font-size: .72rem; color: rgba(165,180,252,.7); }
                .err-code span { color: #818cf8; }
                .err-btn-primary { background: linear-gradient(135deg, #6366f1, #8b5cf6); color: #fff; border: none; border-radius: 12px; padding: .75rem 1.75rem; font-family: 'DM Mono', monospace; font-size: .8rem; font-weight: 500; letter-spacing: .05em; cursor: pointer; box-shadow: 0 0 30px rgba(99,102,241,.4); transition: all .2s; }
                .err-btn-primary:hover { transform: translateY(-2px); box-shadow: 0 0 50px rgba(99,102,241,.65); }
                .err-btn-outline { background: transparent; color: #818cf8; border: 1px solid rgba(99,102,241,.4); border-radius: 12px; padding: .75rem 1.75rem; font-family: 'DM Mono', monospace; font-size: .8rem; cursor: pointer; transition: all .2s; }
                .err-btn-outline:hover { background: rgba(99,102,241,.08); border-color: rgba(99,102,241,.7); transform: translateY(-2px); }
                .err-btn-ghost { background: transparent; color: rgba(224,231,255,.3); border: 1px solid rgba(255,255,255,.07); border-radius: 12px; padding: .75rem 1.5rem; font-family: 'DM Mono', monospace; font-size: .8rem; cursor: pointer; transition: all .2s; }
                .err-btn-ghost:hover { color: rgba(224,231,255,.6); border-color: rgba(255,255,255,.18); }
                .err-particle { position: absolute; border-radius: 50%; background: radial-gradient(circle, #818cf8, transparent); pointer-events: none; animation: drift var(--dur) ease-in-out var(--delay) infinite alternate; }
                @keyframes drift { from { transform: translate(0, 0) scale(1); opacity: var(--op); } to { transform: translate(var(--tx), var(--ty)) scale(1.4); opacity: calc(var(--op) * .3); } }
                .err-bar { position: absolute; top: 0; left: 0; right: 0; display: flex; align-items: center; gap: 8px; padding: 12px 24px; border-bottom: 1px solid rgba(99,102,241,.1); background: rgba(99,102,241,.03); z-index: 20; }
                .err-dot { width: 10px; height: 10px; border-radius: 50%; }
                .err-ping { position: relative; display: flex; align-items: center; justify-content: center; width: 8px; height: 8px; }
                .err-ping::before { content: ''; position: absolute; inset: 0; border-radius: 50%; background: #6366f1; animation: ping 1.5s ease-out infinite; }
                .err-ping::after { content: ''; position: relative; width: 8px; height: 8px; border-radius: 50%; background: #818cf8; z-index: 1; }
                @keyframes ping { 0% { transform: scale(1); opacity: .8; } 100% { transform: scale(2.5); opacity: 0; } }
                .err-badge { font-size: .65rem; letter-spacing: .12em; color: rgba(165,180,252,.4); }
                .err-footer { font-size: .65rem; color: rgba(224,231,255,.14); letter-spacing: .03em; }
            `}</style>

            <div
                className="err-root"
                style={{ '--gx': `${glowX}%`, '--gy': `${glowY}%` }}
            >
                <div className="err-grid" />
                <div className="err-glow" />

                {PARTICLES.map(p => (
                    <div
                        key={p.id}
                        className="err-particle"
                        style={{
                            width: p.size, height: p.size,
                            left: `${p.x}%`, top: `${p.y}%`,
                            '--dur': `${p.duration}s`,
                            '--delay': `${p.delay}s`,
                            '--op': p.opacity,
                            '--tx': `${p.tx}px`,
                            '--ty': `${p.ty}px`,
                        }}
                    />
                ))}

                <div className="err-bar">
                    <div className="err-dot" style={{ background: '#ef4444' }} />
                    <div className="err-dot" style={{ background: '#eab308' }} />
                    <div className="err-dot" style={{ background: '#22c55e' }} />
                    <span className="err-badge ml-3">system@kernel ~ /ERROR_HANDLER</span>
                    <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 8 }}>
                        <div className="err-ping" />
                        <span className="err-badge">ACTIVE</span>
                    </div>
                </div>

                <div style={{ position: 'relative', zIndex: 10, width: '100%', maxWidth: 560, margin: '0 auto', padding: '0 1.5rem', textAlign: 'center' }}>
                    
                    {/* Dynamic Status Code */}
                    <div className="err-404">{error?.status || "404"}</div>

                    <div className="err-line" style={{ margin: '-.5rem 0 1.5rem' }} />

                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: '1.5rem' }}>
                        <div style={{ flex: 1, height: 1, background: 'linear-gradient(90deg, transparent, rgba(99,102,241,.3))' }} />
                        <span style={{ fontSize: '.65rem', letterSpacing: '.15em', color: 'rgba(165,180,252,.5)', textTransform: 'uppercase' }}>
                            {error?.statusText || "route_undefined"}
                        </span>
                        <div style={{ flex: 1, height: 1, background: 'linear-gradient(90deg, rgba(99,102,241,.3), transparent)' }} />
                    </div>

                    <div className="err-card" style={{ marginBottom: '1.75rem' }}>
                        <div className="err-title" style={{ marginBottom: '.5rem' }}>You wandered too far.</div>
                        <p className="err-sub">
                            The page you're after has vanished into the void —<br />
                            it may have moved, or the link is broken.
                        </p>
                        
                        {/* Dynamic Path Display */}
                        <div className="err-code" style={{ marginTop: '1.25rem', textAlign: 'left' }}>
                            <span style={{ color: 'rgba(239,68,68,.7)' }}>ERR</span>
                            {' › '}
                            Cannot GET <span>{location.pathname}</span>
                            <span style={{ color: 'rgba(165,180,252,.3)' }}> — {error?.message || "unresolved_request"}</span>
                        </div>
                    </div>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, justifyContent: 'center', marginBottom: '2rem' }}>
                        <button className="err-btn-primary" onClick={() => navigate(-1)}>← Go Back</button>
                        <button className="err-btn-outline" onClick={() => navigate('/')}>Home</button>
                        <button className="err-btn-ghost" onClick={() => navigate('/support')}>Report Issue</button>
                    </div>

                    <p className="err-footer">error_code: 0x{error?.status || '404'} &nbsp;·&nbsp; {timestamp}</p>
                </div>
            </div>
        </>
    );
}