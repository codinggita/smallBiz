import React, { useState } from 'react';
import DashboardSidebar from '../components/dashboard/DashboardSidebar';
import {
  FiSearch, FiFilter, FiPlus, FiEye, FiDownload, FiSend,
  FiMoreVertical, FiX, FiArrowLeft, FiCheck, FiClock,
  FiAlertCircle, FiMessageCircle, FiChevronDown
} from 'react-icons/fi';

const fmt = (v) => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(v);

const mockInvoices = [
  { id: 'INV-0001', client: 'Priya Mehta', company: 'Freelance', amount: 45000, issued: '2024-04-01', due: '2024-04-16', status: 'Paid', sentVia: 'whatsapp', initials: 'PM' },
  { id: 'INV-0002', client: 'Amit Singh', company: 'Tech Solutions Inc.', amount: 120000, issued: '2024-04-05', due: '2024-04-20', status: 'Overdue', sentVia: 'email', initials: 'AS' },
  { id: 'INV-0003', client: 'Neha Gupta', company: 'Sharma Enterprises', amount: 85000, issued: '2024-04-10', due: '2024-04-25', status: 'Sent', sentVia: 'whatsapp', initials: 'NG' },
  { id: 'INV-0004', client: 'Suresh Patel', company: 'Patel & Sons', amount: 15000, issued: '2024-04-12', due: '2024-04-27', status: 'Draft', sentVia: null, initials: 'SP' },
  { id: 'INV-0005', client: 'Ravi Kumar', company: 'Rajan Textiles', amount: 65000, issued: '2024-04-15', due: '2024-04-30', status: 'Sent', sentVia: 'whatsapp', initials: 'RK' },
  { id: 'INV-0006', client: 'John Doe', company: 'JD Corp', amount: 55000, issued: '2024-04-18', due: '2024-05-03', status: 'Paid', sentVia: 'email', initials: 'JD' },
];

const statusStyles = {
  Draft: 'bg-[#DBE2EF] text-[#112D4E]',
  Sent: 'bg-blue-100 text-[#3F72AF]',
  Paid: 'bg-[#3F72AF] text-white',
  Overdue: 'bg-[#112D4E] text-white',
  Cancelled: 'bg-[#DBE2EF] text-[#3F72AF]/50',
};

const summaryCards = [
  { label: 'Total Billed', value: 385000, sub: '+12% vs last month', color: '#112D4E' },
  { label: 'Collected', value: 100000, sub: '+8% vs last month', color: '#3F72AF' },
  { label: 'Pending', value: 150000, sub: '3 invoices', color: '#112D4E' },
  { label: 'Overdue', value: 120000, sub: '1 invoice', color: '#112D4E', accent: true },
];

const InvoicesPage = () => {
  const [selected, setSelected] = useState(null);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [showCreate, setShowCreate] = useState(false);
  const [checked, setChecked] = useState([]);

  const filtered = mockInvoices.filter(inv => {
    const matchSearch = inv.client.toLowerCase().includes(search.toLowerCase()) || inv.id.toLowerCase().includes(search.toLowerCase());
    const matchStatus = statusFilter === 'All' || inv.status === statusFilter;
    return matchSearch && matchStatus;
  });

  const toggleCheck = (id) => setChecked(p => p.includes(id) ? p.filter(x => x !== id) : [...p, id]);

  const fmtDate = (d) => new Date(d).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
  const isOverdue = (inv) => inv.status !== 'Paid' && new Date(inv.due) < new Date();

  return (
    <div className="flex h-screen bg-[#F9F7F7] overflow-hidden">
      <DashboardSidebar />

      <div className="flex-1 ml-[240px] flex flex-col min-h-0 overflow-hidden">
        {/* Top Bar */}
        <div className="bg-white border-b border-slate-200 px-8 py-5 flex-shrink-0">
          <div className="flex justify-between items-center mb-5">
            <div className="flex items-center gap-3">
              <h1 className="text-[22px] font-bold text-[#112D4E]">Invoices</h1>
              <span className="text-[12px] font-bold text-[#3F72AF] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">{fmt(385000)} billed this month</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="relative">
                <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
                <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search invoices..." className="pl-9 pr-4 py-2 border border-slate-200 rounded-lg text-[13px] w-56 bg-slate-50 focus:outline-none focus:border-[#3F72AF] focus:bg-white transition-all" />
              </div>
              <button className="flex items-center gap-1.5 px-3 py-2 border border-slate-200 rounded-lg text-[13px] font-bold text-[#112D4E] bg-white hover:bg-slate-50 shadow-sm">
                <FiFilter className="w-4 h-4 text-slate-400" /> Filter
              </button>
              <button onClick={() => setShowCreate(true)} className="flex items-center gap-1.5 px-4 py-2 bg-[#3F72AF] text-white rounded-lg text-[13px] font-bold hover:bg-blue-700 shadow-sm">
                <FiPlus className="w-4 h-4" /> Create invoice
              </button>
            </div>
          </div>

          {/* Summary Cards */}
          <div className="grid grid-cols-4 gap-4">
            {summaryCards.map((c, i) => (
              <div key={i} className={`bg-white border border-slate-200 rounded-xl p-4 shadow-sm ${c.accent ? 'border-l-4 border-l-[#112D4E]' : ''}`}>
                <p className="text-[11px] font-bold text-[#3F72AF] uppercase tracking-wider mb-2">{c.label}</p>
                <p className="text-[22px] font-bold leading-none mb-1.5" style={{ color: c.color }}>{fmt(c.value)}</p>
                <p className="text-[11px] text-slate-400 font-medium">{c.sub}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Status Filter Pills */}
        <div className="px-8 py-4 bg-white border-b border-slate-100 flex gap-2 flex-shrink-0">
          {['All', 'Draft', 'Sent', 'Paid', 'Overdue'].map(s => (
            <button key={s} onClick={() => setStatusFilter(s)}
              className={`px-4 py-1.5 rounded-full text-[13px] font-bold transition-colors ${statusFilter === s ? 'bg-[#112D4E] text-white' : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'}`}>
              {s}
            </button>
          ))}
        </div>

        {/* Table + Detail Panel */}
        <div className="flex flex-1 overflow-hidden">
          {/* Table */}
          <div className={`flex-1 overflow-auto p-6 ${selected ? 'pr-3' : ''}`}>
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
              <table className="w-full text-left border-collapse min-w-[900px]">
                <thead>
                  <tr className="bg-[#112D4E] text-[#F9F7F7] text-[12px] font-semibold uppercase tracking-wider">
                    <th className="px-4 py-3.5 w-10"><input type="checkbox" className="w-4 h-4 rounded" onChange={e => setChecked(e.target.checked ? filtered.map(i => i.id) : [])} /></th>
                    <th className="px-4 py-3.5">Invoice #</th>
                    <th className="px-4 py-3.5">Client</th>
                    <th className="px-4 py-3.5">Amount</th>
                    <th className="px-4 py-3.5">Issue Date</th>
                    <th className="px-4 py-3.5">Due Date</th>
                    <th className="px-4 py-3.5">Status</th>
                    <th className="px-4 py-3.5">Sent Via</th>
                    <th className="px-4 py-3.5 w-28">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {filtered.map((inv, idx) => (
                    <tr key={inv.id} onClick={() => setSelected(selected?.id === inv.id ? null : inv)}
                      className={`group cursor-pointer transition-colors ${idx % 2 === 0 ? 'bg-white' : 'bg-[#F9F7F7]'} ${selected?.id === inv.id ? 'bg-blue-50 border-l-4 border-l-[#3F72AF]' : 'hover:bg-[#DBE2EF]/30'}`}>
                      <td className="px-4 py-4" onClick={e => { e.stopPropagation(); toggleCheck(inv.id); }}>
                        <input type="checkbox" checked={checked.includes(inv.id)} onChange={() => {}} className="w-4 h-4 rounded" />
                      </td>
                      <td className="px-4 py-4">
                        <span className="text-[#3F72AF] text-[14px] font-bold hover:underline">{inv.id}</span>
                      </td>
                      <td className="px-4 py-4">
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-full bg-[#3F72AF] text-white flex items-center justify-center text-[11px] font-bold shrink-0">{inv.initials}</div>
                          <div>
                            <p className="text-[#112D4E] text-[14px] font-semibold">{inv.client}</p>
                            <p className="text-slate-400 text-[12px]">{inv.company}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-4">
                        <span className="text-[#112D4E] text-[14px] font-bold">{fmt(inv.amount)}</span>
                      </td>
                      <td className="px-4 py-4 text-[#112D4E] text-[13px]">{fmtDate(inv.issued)}</td>
                      <td className="px-4 py-4">
                        {isOverdue(inv) ? (
                          <span className="bg-[#112D4E] text-white text-[12px] font-bold px-2.5 py-1 rounded-lg">{fmtDate(inv.due)}</span>
                        ) : (
                          <span className="text-[#112D4E] text-[13px]">{fmtDate(inv.due)}</span>
                        )}
                      </td>
                      <td className="px-4 py-4">
                        <span className={`px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wide ${statusStyles[inv.status]}`}>{inv.status}</span>
                      </td>
                      <td className="px-4 py-4">
                        {inv.sentVia === 'whatsapp' && <span className="text-green-500 text-[12px] font-bold flex items-center gap-1"><FiMessageCircle className="w-4 h-4" /> WA</span>}
                        {inv.sentVia === 'email' && <span className="text-[#3F72AF] text-[12px] font-bold flex items-center gap-1"><FiSend className="w-3.5 h-3.5" /> Email</span>}
                        {!inv.sentVia && <span className="text-slate-300 text-[12px]">—</span>}
                      </td>
                      <td className="px-4 py-4" onClick={e => e.stopPropagation()}>
                        <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button className="p-1.5 text-slate-400 hover:text-[#3F72AF] hover:bg-blue-50 rounded-md"><FiEye className="w-4 h-4" /></button>
                          <button className="p-1.5 text-slate-400 hover:text-[#112D4E] hover:bg-slate-100 rounded-md"><FiDownload className="w-4 h-4" /></button>
                          <button className="p-1.5 text-slate-400 hover:text-green-600 hover:bg-green-50 rounded-md"><FiSend className="w-4 h-4" /></button>
                          <button className="p-1.5 text-slate-400 hover:bg-slate-100 rounded-md"><FiMoreVertical className="w-4 h-4" /></button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Bulk Bar */}
            {checked.length > 0 && (
              <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-[#112D4E] text-white rounded-2xl px-6 py-3 flex items-center gap-4 shadow-2xl z-50">
                <span className="text-[13px] font-bold">{checked.length} selected</span>
                <div className="w-px h-4 bg-white/20" />
                <button className="text-[13px] font-bold text-[#3F72AF] hover:text-blue-300">Send</button>
                <button className="text-[13px] font-bold text-[#3F72AF] hover:text-blue-300">Download PDF</button>
                <button className="text-[13px] font-bold text-green-400 hover:text-green-300 flex items-center gap-1"><FiCheck className="w-3.5 h-3.5" /> Mark Paid</button>
                <button onClick={() => setChecked([])} className="p-1 hover:bg-white/10 rounded-full"><FiX className="w-4 h-4" /></button>
              </div>
            )}
          </div>

          {/* Detail Panel */}
          {selected && (
            <div className="w-[400px] flex-shrink-0 bg-white border-l border-slate-200 flex flex-col overflow-hidden">
              {/* Panel Header */}
              <div className="px-6 py-5 border-b border-slate-100 flex items-start justify-between flex-shrink-0">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[18px] font-bold text-[#112D4E]">{selected.id}</span>
                    <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold ${statusStyles[selected.status]}`}>{selected.status}</span>
                  </div>
                  <p className="text-[#3F72AF] text-[13px] font-medium">{selected.client} · {selected.company}</p>
                </div>
                <button onClick={() => setSelected(null)} className="p-2 hover:bg-slate-100 rounded-full text-slate-400"><FiX className="w-5 h-5" /></button>
              </div>

              <div className="flex-1 overflow-y-auto">
                {/* Amount */}
                <div className="px-6 py-5 border-b border-slate-100 bg-slate-50">
                  <p className="text-[11px] font-bold text-[#3F72AF] uppercase tracking-wider mb-1">Invoice Total</p>
                  <p className="text-[32px] font-extrabold text-[#112D4E] leading-none">{fmt(selected.amount)}</p>
                </div>

                {/* Payment Status */}
                <div className="px-6 py-5 border-b border-slate-100">
                  <p className="text-[12px] font-bold text-[#3F72AF] uppercase tracking-wider mb-3">Payment Status</p>
                  {selected.status === 'Paid' ? (
                    <div className="flex items-center gap-2 text-green-600 bg-green-50 rounded-xl px-4 py-3 border border-green-200">
                      <FiCheck className="w-5 h-5" />
                      <span className="text-[14px] font-bold">Paid on {fmtDate(selected.due)}</span>
                    </div>
                  ) : (
                    <div>
                      {isOverdue(selected) ? (
                        <div className="flex items-center gap-2 text-[#112D4E] bg-red-50 rounded-xl px-4 py-3 border border-red-200 mb-3">
                          <FiAlertCircle className="w-5 h-5" />
                          <span className="text-[14px] font-bold">Overdue</span>
                        </div>
                      ) : (
                        <div className="flex items-center gap-2 text-[#3F72AF] bg-blue-50 rounded-xl px-4 py-3 border border-blue-100 mb-3">
                          <FiClock className="w-5 h-5" />
                          <span className="text-[14px] font-bold">Due {fmtDate(selected.due)}</span>
                        </div>
                      )}
                      <button className="w-full py-2.5 bg-[#3F72AF] text-white rounded-xl text-[14px] font-bold hover:bg-blue-700 transition-colors shadow-sm">
                        <FiCheck className="inline w-4 h-4 mr-1.5" /> Mark as Paid
                      </button>
                    </div>
                  )}
                </div>

                {/* Details */}
                <div className="px-6 py-5 border-b border-slate-100">
                  <p className="text-[12px] font-bold text-[#3F72AF] uppercase tracking-wider mb-3">Details</p>
                  <div className="space-y-3">
                    {[
                      { label: 'Issue Date', value: fmtDate(selected.issued) },
                      { label: 'Due Date', value: fmtDate(selected.due) },
                      { label: 'Client', value: selected.client },
                      { label: 'Company', value: selected.company },
                    ].map(row => (
                      <div key={row.label} className="flex justify-between items-center">
                        <span className="text-slate-400 text-[13px] font-medium">{row.label}</span>
                        <span className="text-[#112D4E] text-[13px] font-semibold">{row.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Send Reminder */}
                <div className="px-6 py-5 border-b border-slate-100">
                  <p className="text-[12px] font-bold text-[#3F72AF] uppercase tracking-wider mb-3">Send Reminder</p>
                  <textarea
                    rows={3}
                    defaultValue={`Hi ${selected.client}, just a reminder that ${selected.id} for ${fmt(selected.amount)} is due on ${fmtDate(selected.due)}. Please let us know if you have any questions.`}
                    className="w-full border border-slate-200 rounded-xl p-3 text-[13px] text-[#112D4E] focus:outline-none focus:border-[#3F72AF] resize-none mb-3"
                  />
                  <div className="grid grid-cols-2 gap-2">
                    <button className="py-2.5 bg-green-500 text-white rounded-xl text-[13px] font-bold hover:bg-green-600 flex items-center justify-center gap-1.5">
                      <FiMessageCircle className="w-4 h-4" /> WhatsApp
                    </button>
                    <button className="py-2.5 border border-[#3F72AF] text-[#3F72AF] rounded-xl text-[13px] font-bold hover:bg-blue-50 flex items-center justify-center gap-1.5">
                      <FiSend className="w-4 h-4" /> Email
                    </button>
                  </div>
                </div>

                {/* Activity */}
                <div className="px-6 py-5">
                  <p className="text-[12px] font-bold text-[#3F72AF] uppercase tracking-wider mb-3">Activity</p>
                  <div className="space-y-3">
                    {[
                      { icon: '📄', text: 'Invoice created', time: fmtDate(selected.issued) },
                      { icon: '📤', text: `Sent via ${selected.sentVia || 'not sent'}`, time: fmtDate(selected.issued) },
                      selected.status === 'Paid' && { icon: '✅', text: 'Payment received', time: fmtDate(selected.due) },
                    ].filter(Boolean).map((ev, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <span className="text-[16px]">{ev.icon}</span>
                        <div>
                          <p className="text-[#112D4E] text-[13px] font-medium">{ev.text}</p>
                          <p className="text-slate-400 text-[11px]">{ev.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Panel Footer */}
              <div className="px-6 py-4 border-t border-slate-100 flex gap-3 flex-shrink-0 bg-white">
                <button className="flex-1 py-2.5 bg-[#3F72AF] text-white rounded-xl text-[13px] font-bold hover:bg-blue-700 flex items-center justify-center gap-2">
                  <FiDownload className="w-4 h-4" /> Download PDF
                </button>
                <button className="flex-1 py-2.5 border border-slate-200 text-[#112D4E] rounded-xl text-[13px] font-bold hover:bg-slate-50 flex items-center justify-center gap-2">
                  <FiSend className="w-4 h-4" /> Resend
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Create Invoice Modal */}
      {showCreate && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl w-full max-w-[500px] shadow-2xl">
            <div className="px-6 py-5 border-b border-slate-100 flex justify-between items-center">
              <h2 className="text-[18px] font-bold text-[#112D4E]">New Invoice</h2>
              <button onClick={() => setShowCreate(false)} className="p-2 hover:bg-slate-100 rounded-full text-slate-400"><FiX className="w-5 h-5" /></button>
            </div>
            <div className="px-6 py-5 space-y-4">
              <div>
                <label className="text-[12px] font-bold text-[#3F72AF] uppercase tracking-wider block mb-1.5">Client</label>
                <input placeholder="Search or select a contact..." className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-[14px] focus:outline-none focus:border-[#3F72AF]" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-[12px] font-bold text-[#3F72AF] uppercase tracking-wider block mb-1.5">Issue Date</label>
                  <input type="date" className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-[14px] focus:outline-none focus:border-[#3F72AF]" defaultValue={new Date().toISOString().split('T')[0]} />
                </div>
                <div>
                  <label className="text-[12px] font-bold text-[#3F72AF] uppercase tracking-wider block mb-1.5">Due Date</label>
                  <input type="date" className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-[14px] focus:outline-none focus:border-[#3F72AF]" />
                </div>
              </div>
              <div>
                <label className="text-[12px] font-bold text-[#3F72AF] uppercase tracking-wider block mb-1.5">Amount (₹)</label>
                <input type="number" placeholder="0" className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-[14px] focus:outline-none focus:border-[#3F72AF]" />
              </div>
              <div>
                <label className="text-[12px] font-bold text-[#3F72AF] uppercase tracking-wider block mb-1.5">Description</label>
                <textarea rows={3} placeholder="What is this invoice for?" className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-[14px] focus:outline-none focus:border-[#3F72AF] resize-none" />
              </div>
            </div>
            <div className="px-6 py-4 border-t border-slate-100 flex gap-3">
              <button onClick={() => setShowCreate(false)} className="px-4 py-2.5 text-slate-500 text-[13px] font-bold hover:text-[#112D4E]">Cancel</button>
              <button className="flex-1 py-2.5 border border-slate-200 text-[#112D4E] rounded-xl text-[13px] font-bold hover:bg-slate-50">Save as Draft</button>
              <button className="flex-1 py-2.5 bg-[#3F72AF] text-white rounded-xl text-[13px] font-bold hover:bg-blue-700 shadow-sm">Create & Send</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InvoicesPage;
