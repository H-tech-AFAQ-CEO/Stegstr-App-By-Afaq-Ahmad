'use client'

import { useState } from 'react'
import {
  Activity,
  Archive,
  AudioLines,
  Check,
  ChevronDown,
  CircleHelp,
  CloudUpload,
  Copy,
  Cpu,
  FileImage,
  Fingerprint,
  Gauge,
  KeyRound,
  Layers3,
  LockKeyhole,
  Menu,
  MessageSquareText,
  Network,
  Play,
  Radio,
  ScanLine,
  Send,
  Settings2,
  ShieldCheck,
  Sparkles,
  Upload,
  Wifi,
  X,
} from 'lucide-react'

const platforms = ['WhatsApp', 'Telegram', 'Instagram', 'Direct relay']

function Metric({ label, value, detail, tone = 'default' }: { label: string; value: string; detail: string; tone?: 'default' | 'cyan' | 'green' }) {
  return (
    <div className="metric">
      <div className="metric-label">{label}</div>
      <div className={`metric-value ${tone}`}>{value}</div>
      <div className="metric-detail">{detail}</div>
    </div>
  )
}

export default function Page() {
  const [activeTab, setActiveTab] = useState<'encode' | 'decode' | 'resilience'>('encode')
  const [platform, setPlatform] = useState('WhatsApp')
  const [uploaded, setUploaded] = useState(false)
  const [aiOpen, setAiOpen] = useState(true)
  const [message, setMessage] = useState('')
  const [sent, setSent] = useState(false)

  return (
    <main className="stegstr-app">
      <aside className="sidebar">
        <div className="brand-lockup">
          <div className="brand-mark"><ScanLine size={23} /></div>
          <div><div className="brand-name">stegstr<span>.sh</span></div><div className="brand-sub">FOSS steganography</div></div>
        </div>

        <nav className="nav-stack" aria-label="Primary navigation">
          <div className="nav-kicker">WORKBENCH</div>
          {[
            ['encode', LockKeyhole, 'Encode message'],
            ['decode', Archive, 'Decode carrier'],
            ['resilience', Activity, 'Resilience lab'],
          ].map(([id, Icon, label]) => (
            <button key={id as string} className={`nav-item ${activeTab === id ? 'active' : ''}`} onClick={() => setActiveTab(id as typeof activeTab)}>
              <Icon size={17} /><span>{label as string}</span>{id === 'encode' && <span className="nav-hot">LIVE</span>}
            </button>
          ))}
          <div className="nav-kicker nav-kicker-spaced">NETWORK</div>
          <button className="nav-item"><Network size={17} /><span>Nostr relays</span><span className="status-dot" /></button>
          <button className="nav-item"><Fingerprint size={17} /><span>My identity</span></button>
        </nav>

        <div className="sidebar-bottom">
          <div className="relay-mini"><div className="relay-top"><span className="status-dot" /> Relay mesh <span>3/3</span></div><div className="relay-url">wss://relay.damus.io</div></div>
          <button className="profile-chip"><div className="avatar">K</div><div><strong>keystrider</strong><small>npub1...7k9a</small></div><ChevronDown size={14} /></button>
          <div className="sidebar-footer"><span>v0.4.2-alpha</span><span>MIT License</span></div>
        </div>
      </aside>

      <section className="workspace">
        <header className="topbar">
          <div className="mobile-brand"><Menu size={18} /><span>stegstr<span>.sh</span></span></div>
          <div className="breadcrumb"><span>WORKBENCH</span><span>/</span><strong>{activeTab === 'encode' ? 'ENCODE MESSAGE' : activeTab === 'decode' ? 'DECODE CARRIER' : 'RESILIENCE LAB'}</strong></div>
          <div className="top-actions"><span className="secure-status"><Wifi size={14} /> LOCAL-FIRST <span className="status-dot" /></span><button className="icon-button" aria-label="Help"><CircleHelp size={17} /></button><button className="icon-button" aria-label="Settings"><Settings2 size={17} /></button></div>
        </header>

        <div className="content-scroll">
          <div className="page-heading"><div><div className="eyebrow"><span className="eyebrow-line" />MESSAGE WORKBENCH</div><h1>{activeTab === 'encode' ? 'Hide a message in plain sight.' : activeTab === 'decode' ? 'Read what the carrier carries.' : 'Break it before they do.'}</h1><p>{activeTab === 'encode' ? 'Encode encrypted payloads inside ordinary media. Built for the messy reality of platform compression.' : activeTab === 'decode' ? 'Inspect a carrier, recover its payload, and verify its cryptographic signature.' : 'Simulate platform processing and measure whether your payload survives.'}</p></div><div className="heading-actions"><button className="ghost-button"><CloudUpload size={15} /> Import session</button><button className="primary-button"><Play size={14} /> Quick start</button></div></div>

          {activeTab === 'encode' && <>
            <div className="workspace-grid">
              <section className="panel carrier-panel">
                <div className="panel-header"><div><div className="panel-index">01 / CARRIER</div><h2>Choose your carrier</h2></div><span className="panel-badge"><FileImage size={13} /> IMAGE</span></div>
                <button className={`dropzone ${uploaded ? 'uploaded' : ''}`} onClick={() => setUploaded(!uploaded)}>
                  {uploaded ? <><div className="preview-thumb"><FileImage size={22} /></div><div className="drop-title">night-train.png</div><div className="drop-meta">PNG · 2400 × 1600 · 3.8 MB</div><span className="remove-upload"><X size={14} /></span></> : <><div className="upload-orbit"><Upload size={22} /></div><div className="drop-title">Drop an image here</div><div className="drop-meta">or click to browse your files</div><div className="format-row"><span>PNG</span><span>JPG</span><span>WEBP</span><span>MAX 50MB</span></div></>}
                </button>
                <div className="carrier-details"><div><span>CAPACITY</span><strong>{uploaded ? '148.2 KB' : '—'}</strong></div><div><span>EST. PAYLOAD</span><strong>{uploaded ? '12.7 KB' : '—'}</strong></div><div><span>QUALITY LOSS</span><strong className="good">{uploaded ? '< 0.2%' : '—'}</strong></div></div>
                <div className="divider-label"><span>OR USE A DEMO CARRIER</span></div><div className="demo-row"><button className="demo-tile active"><div className="demo-image train" /><span>night-train.png</span></button><button className="demo-tile"><div className="demo-image desert" /><span>dry-land.jpg</span></button><button className="demo-tile"><div className="demo-image waves" /><span>low-tide.webp</span></button></div>
              </section>

              <section className="panel payload-panel">
                <div className="panel-header"><div><div className="panel-index">02 / PAYLOAD</div><h2>Compose your message</h2></div><button className="mini-tool"><KeyRound size={14} /> Encrypt</button></div>
                <label className="field-label" htmlFor="payload">SECRET MESSAGE <span>0 / 1,024 CHARS</span></label><textarea id="payload" className="payload-input" placeholder="Write something only your recipient should see..." />
                <div className="payload-tools"><button><LockKeyhole size={14} /> End-to-end encrypted</button><button><Fingerprint size={14} /> Sign with keystrider</button></div>
                <div className="field-label platform-label">OPTIMIZE FOR <span>PLATFORM SURVIVAL</span></div><div className="platform-grid">{platforms.map((item) => <button key={item} className={`platform-option ${platform === item ? 'selected' : ''}`} onClick={() => setPlatform(item)}><span className={`platform-icon ${item.toLowerCase().replace(' ', '-')}`}>{item === 'Direct relay' ? <Radio size={14} /> : item.slice(0, 1)}</span><span>{item}</span>{platform === item && <Check size={14} />}</button>)}</div>
                <div className="encode-action"><button className="primary-button wide"><Sparkles size={15} /> {uploaded ? 'Encode payload' : 'Choose a carrier first'} <span>⌘ ↵</span></button><div className="encode-note"><ShieldCheck size={14} /> Your original file never leaves this device.</div></div>
              </section>
            </div>

            <section className="signal-strip"><div className="signal-title"><Gauge size={17} /><div><strong>PAYLOAD READINESS</strong><span>AI-assisted carrier analysis</span></div></div><div className="readiness-bar"><div className="readiness-fill" style={{ width: uploaded ? '78%' : '0%' }} /></div><div className="readiness-score">{uploaded ? '78' : '—'}<span>/100</span></div><div className="signal-note"><span className="status-dot" /> {uploaded ? 'Good candidate for WhatsApp' : 'Upload a carrier to analyze'}</div></section>
          </>}

          {activeTab === 'decode' && <section className="single-panel panel decode-state"><div className="panel-header"><div><div className="panel-index">01 / INSPECT</div><h2>Drop a carrier to decode</h2></div><span className="panel-badge"><ScanLine size={13} /> SCANNER READY</span></div><div className="decode-drop"><div className="upload-orbit"><ScanLine size={25} /></div><h3>Drop an encoded image here</h3><p>Stegstr will detect the payload, verify its signature, and decrypt locally.</p><button className="primary-button"><Upload size={15} /> Select carrier</button></div></section>}
          {activeTab === 'resilience' && <section className="single-panel panel"><div className="panel-header"><div><div className="panel-index">01 / SURVIVAL MATRIX</div><h2>Platform survival test</h2></div><span className="panel-badge"><Activity size={13} /> READY</span></div><div className="test-list">{platforms.map((item, i) => <div className="test-row" key={item}><div className="test-name"><span className="test-number">0{i + 1}</span><strong>{item}</strong></div><span className="test-desc">{i === 0 ? 'JPEG recompression · resize to 1080px' : i === 1 ? 'Media pipeline · quality factor 82' : i === 2 ? 'Image transform · progressive JPEG' : 'No transform · Nostr event'}</span><span className={`test-result ${i === 3 ? 'cyan-text' : 'muted-result'}`}>{i === 3 ? '100%' : '—'}</span><button className="ghost-button small">Run test <Play size={12} /></button></div>)}</div></section>}

          <div className="bottom-grid">
            <section className="panel activity-panel"><div className="panel-header compact"><div><div className="panel-index">RECENT ACTIVITY</div><h2>Session trail</h2></div><button className="text-button">View all <span>→</span></button></div><div className="activity-list"><div className="activity-item"><div className="activity-icon green"><Check size={14} /></div><div><strong>Identity verified</strong><span>keystrider signed in locally</span></div><time>2m ago</time></div><div className="activity-item"><div className="activity-icon"><Layers3 size={14} /></div><div><strong>Relay mesh connected</strong><span>3 relays available for sync</span></div><time>4m ago</time></div><div className="activity-item"><div className="activity-icon"><Cpu size={14} /></div><div><strong>AI engine ready</strong><span>Local heuristics loaded</span></div><time>5m ago</time></div></div></section>
            <section className={`panel ai-panel ${aiOpen ? 'open' : ''}`}><button className="ai-heading" onClick={() => setAiOpen(!aiOpen)}><div className="ai-spark"><Sparkles size={15} /></div><div><strong>stegstr assistant</strong><span>carrier intelligence</span></div><ChevronDown size={16} className={aiOpen ? 'rotate' : ''} /></button>{aiOpen && <div className="ai-content"><div className="ai-message"><span className="ai-avatar"><Sparkles size={13} /></span><p>Your carrier looks healthy. For <strong>{platform}</strong>, I recommend PNG with adaptive LSB and a payload under 12 KB.</p></div><div className="suggestion-row"><button onClick={() => setMessage('How does adaptive LSB work?')}>How does this work?</button><button onClick={() => setMessage('Optimize for survival')}>Optimize for survival</button></div><div className="assistant-input"><input value={message} onChange={(e) => { setMessage(e.target.value); setSent(false) }} placeholder="Ask about your carrier..." aria-label="Ask stegstr assistant" /><button onClick={() => setSent(true)} aria-label="Send message">{sent ? <Check size={15} /> : <Send size={15} />}</button></div></div>}</section>
          </div>
          <footer className="workspace-footer"><span><span className="status-dot" /> ALL SYSTEMS NOMINAL</span><span>NO TELEMETRY · OPEN SOURCE · BUILT FOR SURVIVAL</span><span>GITHUB ↗</span></footer>
        </div>
      </section>
    </main>
  )
}
