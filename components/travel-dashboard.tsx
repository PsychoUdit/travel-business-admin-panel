'use client'

import { useMemo, useState } from 'react'
import {
  Activity,
  ArrowDownRight,
  ArrowUpRight,
  Bell,
  CalendarDays,
  ChevronDown,
  CircleDollarSign,
  Compass,
  Download,
  Ellipsis,
  Globe2,
  LayoutDashboard,
  LifeBuoy,
  MapPin,
  Menu,
  MessageCircle,
  Plane,
  Plus,
  Search,
  Settings2,
  Sparkles,
  Ticket,
  Users,
  X,
} from 'lucide-react'

const navItems = [
  { label: 'Overview', icon: LayoutDashboard },
  { label: 'Bookings', icon: Ticket, count: '24' },
  { label: 'Trips & tours', icon: Compass },
  { label: 'Customers', icon: Users },
  { label: 'Destinations', icon: Globe2 },
]

const bookings = [
  { id: '#TR-2841', guest: 'Sofia Martinez', route: 'Lisbon → Marrakech', date: 'Oct 22 – 29', amount: '$2,840', status: 'Confirmed', initials: 'SM', color: 'coral' },
  { id: '#TR-2840', guest: 'James Wilson', route: 'Tokyo city escape', date: 'Nov 03 – 10', amount: '$4,120', status: 'Payment due', initials: 'JW', color: 'blue' },
  { id: '#TR-2839', guest: 'Amara Okafor', route: 'Cape Town explorer', date: 'Nov 12 – 18', amount: '$3,680', status: 'Confirmed', initials: 'AO', color: 'purple' },
  { id: '#TR-2838', guest: 'Leo Tanaka', route: 'Iceland ring road', date: 'Dec 01 – 08', amount: '$2,195', status: 'Draft', initials: 'LT', color: 'green' },
]

const activity = [
  { title: 'New booking received', detail: 'Sofia Martinez · Lisbon', time: '2m ago', icon: Ticket, tone: 'peach' },
  { title: 'Payment completed', detail: 'TR-2837 · $1,920.00', time: '18m ago', icon: CircleDollarSign, tone: 'mint' },
  { title: 'New customer added', detail: 'Noah Williams · via website', time: '42m ago', icon: Users, tone: 'lavender' },
  { title: 'Trip itinerary updated', detail: 'Iceland Ring Road · admin', time: '1h ago', icon: MapPin, tone: 'sky' },
]

function StatCard({ label, value, change, positive, icon: Icon, accent }: { label: string; value: string; change: string; positive?: boolean; icon: typeof Activity; accent: string }) {
  return (
    <div className="stat-card">
      <div className="stat-topline">
        <div className={`icon-box ${accent}`}><Icon aria-hidden="true" /></div>
        <span className={`trend ${positive ? 'positive' : 'negative'}`}>{positive ? <ArrowUpRight aria-hidden="true" /> : <ArrowDownRight aria-hidden="true" />}{change}</span>
      </div>
      <div className="stat-value">{value}</div>
      <div className="stat-label">{label}</div>
    </div>
  )
}

export function TravelDashboard() {
  const [active, setActive] = useState('Overview')
  const [mobileNav, setMobileNav] = useState(false)
  const [range, setRange] = useState('Last 7 days')
  const [showAll, setShowAll] = useState(false)
  const [live, setLive] = useState(true)
  const visibleBookings = useMemo(() => showAll ? bookings : bookings.slice(0, 3), [showAll])

  return (
    <main className="dashboard-shell">
      <aside className={`sidebar ${mobileNav ? 'open' : ''}`}>
        <div className="brand-row"><div className="brand-mark"><Plane aria-hidden="true" /></div><span>atlas<span className="brand-dot">.</span></span><button className="mobile-close" onClick={() => setMobileNav(false)} aria-label="Close navigation"><X /></button></div>
        <div className="workspace-switcher"><div className="workspace-avatar">A</div><div><strong>Atlas Travel Co.</strong><span>Admin workspace</span></div><ChevronDown aria-hidden="true" /></div>
        <div className="nav-group-label">Workspace</div>
        <nav aria-label="Main navigation" className="main-nav">
          {navItems.map(({ label, icon: Icon, count }) => <button key={label} className={`nav-item ${active === label ? 'active' : ''}`} onClick={() => { setActive(label); setMobileNav(false) }}><Icon aria-hidden="true" /><span>{label}</span>{count && <em>{count}</em>}</button>)}
        </nav>
        <div className="nav-group-label">Manage</div>
        <nav aria-label="Management navigation" className="main-nav">
          <button className="nav-item"><MessageCircle aria-hidden="true" /><span>Inbox</span><em className="unread">8</em></button>
          <button className="nav-item"><LifeBuoy aria-hidden="true" /><span>Support</span></button>
          <button className="nav-item"><Settings2 aria-hidden="true" /><span>Settings</span></button>
        </nav>
        <div className="sidebar-bottom"><div className="help-card"><div className="help-orb"><Sparkles aria-hidden="true" /></div><strong>Need a hand?</strong><span>Explore our quick guide to get started.</span><button>Open guide <ArrowUpRight aria-hidden="true" /></button></div><div className="profile"><div className="profile-avatar">JD</div><div><strong>Jordan Davis</strong><span>Administrator</span></div><Ellipsis aria-hidden="true" /></div></div>
      </aside>

      <section className="content-area">
        <header className="topbar"><button className="menu-toggle" onClick={() => setMobileNav(true)} aria-label="Open navigation"><Menu /></button><div className="breadcrumb"><span>Workspace</span><span>/</span><strong>{active}</strong></div><div className="top-actions"><div className="search-box"><Search aria-hidden="true" /><input aria-label="Search" placeholder="Search anything..." /><kbd>⌘ K</kbd></div><button className="icon-button has-dot" aria-label="Notifications"><Bell aria-hidden="true" /></button><button className="top-avatar" aria-label="Open profile">JD</button></div></header>
        <div className="page-content">
          <div className="welcome-row"><div><p className="eyebrow"><span className="live-dot" /> Live workspace</p><h1>Good morning, Jordan <span>✦</span></h1><p className="subtitle">Here&apos;s what&apos;s happening with your travel business today.</p></div><div className="header-actions"><button className="secondary-button"><Download aria-hidden="true" /> Export</button><button className="primary-button"><Plus aria-hidden="true" /> New booking</button></div></div>
          <div className="stats-grid"><StatCard label="Total revenue" value="$84,290" change="12.8%" positive icon={CircleDollarSign} accent="peach" /><StatCard label="Active bookings" value="128" change="8.4%" positive icon={Ticket} accent="lavender" /><StatCard label="New customers" value="2,840" change="3.2%" positive icon={Users} accent="mint" /><StatCard label="Avg. booking value" value="$1,246" change="2.1%" icon={Activity} accent="sky" /></div>
          <div className="main-grid"><section className="panel revenue-panel"><div className="panel-header"><div><h2>Revenue overview</h2><p>Track your revenue performance over time</p></div><div className="range-select"><CalendarDays aria-hidden="true" /><select value={range} onChange={(e) => setRange(e.target.value)} aria-label="Revenue range"><option>Last 7 days</option><option>Last 30 days</option><option>Last 90 days</option></select><ChevronDown aria-hidden="true" /></div></div><div className="chart-legend"><span><i className="legend-dot orange" /> Revenue</span><span><i className="legend-dot gray" /> Bookings</span></div><div className="chart-wrap"><div className="y-labels"><span>$20k</span><span>$15k</span><span>$10k</span><span>$5k</span><span>$0</span></div><div className="chart"><div className="grid-lines"><i /><i /><i /><i /><i /></div><svg viewBox="0 0 700 220" preserveAspectRatio="none" role="img" aria-label="Revenue trending upward through the week"><defs><linearGradient id="area" x1="0" x2="0" y1="0" y2="1"><stop offset="0%" stopColor="#ff9065" stopOpacity=".25" /><stop offset="100%" stopColor="#ff9065" stopOpacity="0" /></linearGradient></defs><path className="area-path" d="M0 168 C50 145, 78 158, 112 142 S171 110, 207 127 S255 145, 300 108 S350 76, 389 95 S440 112, 472 77 S525 53, 560 70 S610 42, 655 36 S684 26, 700 18 L700 220 L0 220 Z" fill="url(#area)" /><path className="line-path" d="M0 168 C50 145, 78 158, 112 142 S171 110, 207 127 S255 145, 300 108 S350 76, 389 95 S440 112, 472 77 S525 53, 560 70 S610 42, 655 36 S684 26, 700 18" fill="none" stroke="#f47d55" strokeWidth="3" vectorEffect="non-scaling-stroke" /><circle cx="560" cy="70" r="5" fill="#fff" stroke="#f47d55" strokeWidth="3" vectorEffect="non-scaling-stroke" /></svg><div className="x-labels"><span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span></div></div></div></section>
          <section className="panel activity-panel"><div className="panel-header"><div><h2>Live activity</h2><p>Real-time updates from your workspace</p></div><button className={`live-toggle ${live ? 'on' : ''}`} onClick={() => setLive(!live)}><span /> {live ? 'Live' : 'Paused'}</button></div><div className="activity-list">{activity.map(({ title, detail, time, icon: Icon, tone }) => <div className="activity-item" key={title}><div className={`activity-icon ${tone}`}><Icon aria-hidden="true" /></div><div className="activity-copy"><strong>{title}</strong><span>{detail}</span></div><time>{time}</time></div>)}</div><button className="text-button">View all activity <ArrowUpRight aria-hidden="true" /></button></section></div>
          <section className="panel bookings-panel"><div className="panel-header"><div><h2>Recent bookings</h2><p>Stay on top of your latest reservations</p></div><button className="text-button" onClick={() => setShowAll(!showAll)}>{showAll ? 'Show less' : 'View all bookings'} <ArrowUpRight aria-hidden="true" /></button></div><div className="table-scroll"><table><thead><tr><th>Booking</th><th>Guest</th><th>Trip</th><th>Travel dates</th><th>Amount</th><th>Status</th><th aria-label="Actions" /></tr></thead><tbody>{visibleBookings.map((booking) => <tr key={booking.id}><td><span className="booking-id">{booking.id}</span></td><td><div className="guest"><span className={`guest-avatar ${booking.color}`}>{booking.initials}</span><strong>{booking.guest}</strong></div></td><td>{booking.route}</td><td>{booking.date}</td><td><strong>{booking.amount}</strong></td><td><span className={`status ${booking.status.toLowerCase().replace(' ', '-')}`}>{booking.status}</span></td><td><button className="row-more" aria-label={`More options for ${booking.id}`}><Ellipsis aria-hidden="true" /></button></td></tr>)}</tbody></table></div></section>
          <footer><span>Atlas Travel Co. · Operations dashboard</span><span><span className="footer-pulse" /> Systems operational</span></footer>
        </div>
      </section>
    </main>
  )
}
