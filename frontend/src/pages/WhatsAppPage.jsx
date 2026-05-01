import React, { useState, useRef, useEffect } from 'react';
import DashboardLayout from '../layouts/DashboardLayout';
import {
  FiSearch, FiMoreVertical, FiSend, FiPaperclip, FiFileText,
  FiTag, FiUser, FiBriefcase, FiClock, FiPlus, FiChevronRight,
  FiPhone, FiMail, FiX, FiStar, FiMessageCircle, FiEdit2,
  FiBell, FiChevronLeft
} from 'react-icons/fi';

const fmt = (v) => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(v);

const conversations = [
  { id: 1, name: 'Priya Mehta', phone: '+91 98200 11111', initials: 'PM', lastMsg: 'Yes, please send the invoice!', time: '10:42 AM', unread: 2, tag: 'Hot leads', deal: 45000, hasInvoice: true },
  { id: 2, name: 'Amit Singh', phone: '+91 97300 22222', initials: 'AS', lastMsg: 'You: Will check and get back.', time: '9:15 AM', unread: 0, tag: 'Payment', deal: 120000, hasInvoice: true },
  { id: 3, name: 'Neha Gupta', phone: '+91 96400 33333', initials: 'NG', lastMsg: 'When can we schedule a call?', time: 'Yesterday', unread: 5, tag: 'Support', deal: 0, hasInvoice: false },
  { id: 4, name: '+91 95500 44444', phone: '+91 95500 44444', initials: '?', lastMsg: 'Hi, I saw your ad online.', time: 'Yesterday', unread: 1, tag: null, deal: 0, hasInvoice: false, unknown: true },
  { id: 5, name: 'Suresh Patel', phone: '+91 94600 55555', initials: 'SP', lastMsg: 'You: Invoice has been sent.', time: 'Mon', unread: 0, tag: 'Payment', deal: 15000, hasInvoice: true },
  { id: 6, name: 'Ravi Kumar', phone: '+91 93700 66666', initials: 'RK', lastMsg: 'Thanks for the quick reply!', time: 'Mon', unread: 0, tag: 'Hot leads', deal: 65000, hasInvoice: false },
];

const threadMessages = {
  1: [
    { id: 1, type: 'received', text: 'Hi! I wanted to ask about the website redesign project.', time: '10:30 AM', date: 'Today' },
    { id: 2, type: 'sent', text: 'Hello Priya! Yes, we can start next week. The total would be ₹45,000.', time: '10:33 AM' },
    { id: 3, type: 'system', text: 'Deal "Website Redesign" moved to Proposal Sent', time: '10:35 AM' },
    { id: 4, type: 'received', text: 'That sounds good. Can you send me a formal invoice?', time: '10:40 AM' },
    { id: 5, type: 'sent', text: 'Sure, I will send it right away!', time: '10:41 AM' },
    { id: 6, type: 'system', text: 'Invoice INV-0001 sent via WhatsApp', time: '10:41 AM' },
    { id: 7, type: 'received', text: 'Yes, please send the invoice!', time: '10:42 AM' },
  ],
  2: [
    { id: 1, type: 'received', text: 'The bulk order is confirmed. When can you deliver?', time: '9:00 AM', date: 'Today' },
    { id: 2, type: 'sent', text: 'We can deliver by Thursday. Will check and get back.', time: '9:15 AM' },
  ],
};

const templates = ['Send invoice', 'Confirm meeting', 'Payment reminder', 'Follow up', 'Thank you'];

const TABS = ['All', 'Unread', 'Mine', 'Unassigned', 'Hot leads', 'Payment', 'Support'];

const WhatsAppPage = () => {
  const [activeConv, setActiveConv] = useState(conversations[0]);
  const [tab, setTab] = useState('All');
  const [search, setSearch] = useState('');
  const [message, setMessage] = useState('');
  const [rightPanel, setRightPanel] = useState(true);
  const [msgs, setMsgs] = useState(threadMessages);
  const bottomRef = useRef(null);

  useEffect(() => { bottomRef.current?.scrollIntoView({ behavior: 'smooth' }); }, [activeConv]);

  const filtered = conversations.filter(c => {
    const matchSearch = c.name.toLowerCase().includes(search.toLowerCase());
    const matchTab = tab === 'All' || (tab === 'Unread' && c.unread > 0) || c.tag === tab;
    return matchSearch && matchTab;
  });

  const sendMsg = () => {
    if (!message.trim()) return;
    const newMsg = { id: Date.now(), type: 'sent', text: message, time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }) };
    setMsgs(prev => ({ ...prev, [activeConv.id]: [...(prev[activeConv.id] || []), newMsg] }));
    setMessage('');
    setTimeout(() => bottomRef.current?.scrollIntoView({ behavior: 'smooth' }), 50);
  };

  const thread = msgs[activeConv.id] || [];

  return (
    <DashboardLayout>
      <div className="flex-1 flex flex-col md:flex-row min-h-0 overflow-hidden w-full relative">

        {/* ── Panel 1: Conversation List ── */}
        <div className="w-full md:w-[320px] flex-shrink-0 bg-white border-r border-[#DBE2EF] flex flex-col">
          {/* Header */}
          <div className="px-4 pt-4 pb-3 flex-shrink-0">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <span className="text-[15px] font-bold text-[#112D4E]">WhatsApp</span>
                <span className="w-2.5 h-2.5 rounded-full bg-green-500 shadow-sm shadow-green-200" />
              </div>
              <button className="p-1.5 hover:bg-slate-100 rounded-lg text-slate-400"><FiMoreVertical className="w-4 h-4" /></button>
            </div>
            <div className="relative mb-3">
              <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-300 w-4 h-4" />
              <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search conversations" className="w-full pl-9 pr-4 py-2 bg-[#F9F7F7] border border-[#DBE2EF] rounded-full text-[13px] focus:outline-none focus:border-[#3F72AF] transition-colors" />
            </div>
            {/* Tabs */}
            <div className="flex gap-1.5 overflow-x-auto pb-1 no-scrollbar">
              {TABS.map(t => (
                <button key={t} onClick={() => setTab(t)} className={`px-3 py-1 rounded-full text-[11px] font-bold whitespace-nowrap transition-colors ${tab === t ? 'bg-[#3F72AF] text-white' : 'bg-[#DBE2EF] text-[#112D4E] hover:bg-[#c9d4e8]'}`}>{t}</button>
              ))}
            </div>
          </div>

          {/* Conversation List */}
          <div className="flex-1 overflow-y-auto divide-y divide-[#DBE2EF]/50">
            {filtered.map(conv => (
              <div key={conv.id} onClick={() => setActiveConv(conv)}
                className={`px-4 py-3 cursor-pointer transition-colors flex items-center gap-3 ${activeConv.id === conv.id ? 'bg-[#DBE2EF] border-l-[3px] border-l-[#3F72AF]' : 'hover:bg-[#F9F7F7]'}`}>
                <div className={`w-11 h-11 rounded-full bg-[#3F72AF] text-white flex items-center justify-center text-[13px] font-bold shrink-0 ${conv.unread > 0 ? 'ring-2 ring-[#3F72AF] ring-offset-1' : ''}`}>
                  {conv.initials}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-center mb-0.5">
                    <span className={`text-[14px] truncate ${conv.unknown ? 'text-[#3F72AF]' : 'text-[#112D4E] font-semibold'}`}>{conv.name}</span>
                    <span className="text-[10px] text-slate-400 shrink-0 ml-1">{conv.time}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-[12px] text-[#3F72AF] truncate flex-1">{conv.lastMsg}</p>
                    <div className="flex items-center gap-1 ml-1 shrink-0">
                      {conv.unread > 0 && <span className="bg-[#112D4E] text-white text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center">{conv.unread}</span>}
                      {conv.deal > 0 && <span className="text-[10px] text-[#3F72AF] font-bold">{fmt(conv.deal)}</span>}
                    </div>
                  </div>
                  {conv.unknown && <span className="text-[10px] bg-[#3F72AF] text-white px-1.5 py-0.5 rounded-full font-bold mt-0.5 inline-block">New contact</span>}
                </div>
              </div>
            ))}
          </div>

          {/* Broadcast button */}
          <div className="p-4 border-t border-[#DBE2EF] flex-shrink-0">
            <button className="w-full py-2 bg-[#112D4E] text-white rounded-xl text-[13px] font-bold hover:bg-[#0d2240] flex items-center justify-center gap-2 transition-colors">
              <FiSend className="w-4 h-4" /> Broadcast message
            </button>
          </div>
        </div>

        {/* ── Panel 2: Message Thread ── */}
        <div className="hidden md:flex flex-1 flex-col min-w-0 overflow-hidden">
          {/* Thread Top Bar */}
          <div className="h-[60px] bg-white border-b border-[#DBE2EF] px-5 flex items-center justify-between flex-shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#3F72AF] text-white flex items-center justify-center text-[12px] font-bold">{activeConv.initials}</div>
              <div>
                <p className="text-[15px] font-bold text-[#112D4E] leading-none">{activeConv.name}</p>
                <p className="text-[12px] text-[#3F72AF]">{activeConv.phone}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              {[FiTag, FiUser, FiBriefcase, FiSearch].map((Icon, i) => (
                <button key={i} className="p-2 text-slate-400 hover:text-[#3F72AF] hover:bg-blue-50 rounded-lg transition-colors"><Icon className="w-4 h-4" /></button>
              ))}
              <button onClick={() => setRightPanel(p => !p)} className="p-2 text-slate-400 hover:text-[#3F72AF] hover:bg-blue-50 rounded-lg transition-colors">
                {rightPanel ? <FiChevronRight className="w-4 h-4" /> : <FiChevronLeft className="w-4 h-4" />}
              </button>
              <button className="p-2 text-slate-400 hover:bg-slate-100 rounded-lg"><FiMoreVertical className="w-4 h-4" /></button>
            </div>
          </div>

          {/* CRM Status Strip */}
          <div className="px-5 py-1.5 bg-white border-b border-slate-100 flex-shrink-0">
            <p className="text-[11px] text-[#3F72AF] font-medium">
              <span className="font-bold text-[#112D4E]">Lead</span>
              {activeConv.deal > 0 && <> · <span className="hover:underline cursor-pointer">1 open deal ({fmt(activeConv.deal)})</span></>}
              {activeConv.hasInvoice && <> · <span className="hover:underline cursor-pointer">Invoice pending</span></>}
            </p>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-6 py-4 bg-[#F9F7F7] space-y-3">
            {thread.map((msg, i) => {
              const showDate = msg.date && (i === 0 || thread[i - 1]?.date !== msg.date);
              return (
                <React.Fragment key={msg.id}>
                  {showDate && (
                    <div className="flex justify-center">
                      <span className="bg-[#DBE2EF] text-[#112D4E] text-[11px] px-3 py-1 rounded-full font-medium">{msg.date}</span>
                    </div>
                  )}
                  {msg.type === 'system' ? (
                    <div className="flex justify-center">
                      <span className="text-[#3F72AF] text-[11px] italic bg-white border border-[#DBE2EF] px-3 py-1 rounded-full">{msg.text}</span>
                    </div>
                  ) : msg.type === 'received' ? (
                    <div className="flex items-end gap-2 max-w-[72%]">
                      <div className="w-7 h-7 rounded-full bg-[#3F72AF] text-white text-[10px] font-bold flex items-center justify-center shrink-0 mb-1">{activeConv.initials}</div>
                      <div>
                        <div className="bg-white border border-[#DBE2EF] rounded-[12px_12px_12px_0] px-4 py-2.5 shadow-sm">
                          <p className="text-[#112D4E] text-[14px] leading-relaxed">{msg.text}</p>
                        </div>
                        <p className="text-[10px] text-slate-400 mt-1 ml-1">{msg.time}</p>
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-end gap-2 max-w-[72%] ml-auto flex-row-reverse">
                      <div>
                        <div className="bg-[#3F72AF] rounded-[12px_12px_0_12px] px-4 py-2.5 shadow-sm">
                          <p className="text-[#F9F7F7] text-[14px] leading-relaxed">{msg.text}</p>
                        </div>
                        <p className="text-[10px] text-slate-400 mt-1 text-right mr-1">{msg.time} ✓✓</p>
                      </div>
                    </div>
                  )}
                </React.Fragment>
              );
            })}
            <div ref={bottomRef} />
          </div>

          {/* Input Area */}
          <div className="bg-white border-t border-[#DBE2EF] px-4 py-3 flex-shrink-0">
            {/* Templates */}
            <div className="flex gap-2 overflow-x-auto pb-2 mb-2 no-scrollbar">
              {templates.map(t => (
                <button key={t} onClick={() => setMessage(t)} className="px-3 py-1 bg-[#DBE2EF] text-[#112D4E] text-[11px] font-bold rounded-full whitespace-nowrap hover:bg-[#3F72AF] hover:text-white transition-colors">{t}</button>
              ))}
              <button className="px-3 py-1 bg-[#DBE2EF] text-[#3F72AF] text-[11px] font-bold rounded-full whitespace-nowrap hover:bg-[#3F72AF] hover:text-white transition-colors flex items-center gap-1"><FiPlus className="w-3 h-3" /> Template</button>
            </div>
            <div className="flex items-end gap-3">
              <div className="flex gap-1">
                {[FiPaperclip, FiFileText, FiEdit2].map((Icon, i) => (
                  <button key={i} className="p-2 text-slate-400 hover:text-[#3F72AF] hover:bg-blue-50 rounded-full transition-colors"><Icon className="w-4 h-4" /></button>
                ))}
              </div>
              <div className="flex-1 relative">
                <textarea
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                  onKeyDown={e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMsg(); } }}
                  placeholder="Type a message..."
                  rows={1}
                  className="w-full border border-[#DBE2EF] rounded-2xl px-4 py-2.5 text-[14px] text-[#112D4E] focus:outline-none focus:border-[#3F72AF] resize-none leading-relaxed placeholder:text-slate-300 transition-colors"
                  style={{ minHeight: '42px', maxHeight: '120px' }}
                />
              </div>
              <button onClick={sendMsg} className="w-10 h-10 bg-[#3F72AF] hover:bg-blue-700 text-white rounded-full flex items-center justify-center shadow-md transition-colors flex-shrink-0">
                <FiSend className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* ── Panel 3: Contact Context ── */}
        {rightPanel && (
          <div className="hidden xl:flex w-[300px] flex-shrink-0 bg-white border-l border-[#DBE2EF] flex-col overflow-hidden">
            <div className="px-5 py-4 border-b border-[#DBE2EF] flex justify-between items-center flex-shrink-0">
              <span className="text-[14px] font-bold text-[#112D4E]">Contact info</span>
              <button onClick={() => setRightPanel(false)} className="p-1 hover:bg-slate-100 rounded-full text-slate-400"><FiX className="w-4 h-4" /></button>
            </div>

            <div className="flex-1 overflow-y-auto">
              {/* Contact Card */}
              <div className="px-5 py-5 border-b border-[#DBE2EF] text-center">
                {activeConv.unknown ? (
                  <div>
                    <div className="w-14 h-14 rounded-full bg-slate-200 text-slate-400 flex items-center justify-center text-2xl mx-auto mb-3">?</div>
                    <p className="text-[13px] text-slate-400 mb-3">Unknown contact</p>
                    <button className="w-full py-2 bg-[#3F72AF] text-white rounded-xl text-[13px] font-bold hover:bg-blue-700 transition-colors">Add to CRM</button>
                  </div>
                ) : (
                  <div>
                    <div className="w-14 h-14 rounded-full bg-[#3F72AF] text-white flex items-center justify-center text-[18px] font-bold mx-auto mb-2">{activeConv.initials}</div>
                    <p className="text-[16px] font-bold text-[#112D4E]">{activeConv.name}</p>
                    <p className="text-[13px] text-[#3F72AF] mb-1">Rajan Textiles</p>
                    <span className="text-[11px] bg-[#DBE2EF] text-[#112D4E] px-2.5 py-0.5 rounded-full font-bold">Lead</span>
                    <div className="mt-3">
                      <button className="text-[12px] text-[#3F72AF] font-bold hover:underline">View full profile →</button>
                    </div>
                  </div>
                )}
              </div>

              {/* Quick Info */}
              <div className="px-5 py-4 border-b border-[#DBE2EF]">
                <p className="text-[12px] font-bold text-[#112D4E] mb-3 uppercase tracking-wider">Details</p>
                <div className="space-y-2.5">
                  {[
                    { icon: FiPhone, label: activeConv.phone },
                    { icon: FiMail, label: 'contact@email.com' },
                    { icon: FiUser, label: 'Assigned to Ravi K.' },
                  ].map(({ icon: Icon, label }, i) => (
                    <div key={i} className="flex items-center gap-2.5">
                      <Icon className="w-4 h-4 text-[#3F72AF] shrink-0" />
                      <span className="text-[13px] text-[#112D4E] font-medium">{label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Deals */}
              <div className="px-5 py-4 border-b border-[#DBE2EF]">
                <div className="flex justify-between items-center mb-3">
                  <p className="text-[13px] font-bold text-[#112D4E]">Deals <span className="bg-[#DBE2EF] text-[#3F72AF] px-1.5 py-0.5 rounded-full text-[10px] ml-1">1</span></p>
                </div>
                {activeConv.deal > 0 ? (
                  <div className="bg-[#F9F7F7] border border-[#DBE2EF] rounded-xl px-3 py-2.5 mb-2">
                    <p className="text-[#112D4E] text-[13px] font-semibold">Website Redesign</p>
                    <div className="flex items-center justify-between mt-1">
                      <span className="text-[11px] bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full font-bold">Proposal Sent</span>
                      <span className="text-[#3F72AF] text-[12px] font-bold">{fmt(activeConv.deal)}</span>
                    </div>
                  </div>
                ) : (
                  <p className="text-[12px] text-slate-400 mb-2">No open deals</p>
                )}
                <button className="text-[12px] text-[#3F72AF] font-bold hover:underline flex items-center gap-1"><FiPlus className="w-3 h-3" /> Create deal</button>
              </div>

              {/* Invoices */}
              <div className="px-5 py-4 border-b border-[#DBE2EF]">
                <p className="text-[13px] font-bold text-[#112D4E] mb-3">Invoices <span className="bg-[#DBE2EF] text-[#3F72AF] px-1.5 py-0.5 rounded-full text-[10px] ml-1">{activeConv.hasInvoice ? 1 : 0}</span></p>
                {activeConv.hasInvoice ? (
                  <div className="bg-[#F9F7F7] border border-[#DBE2EF] rounded-xl px-3 py-2.5 mb-2">
                    <div className="flex justify-between items-center">
                      <span className="text-[#3F72AF] text-[13px] font-bold">INV-0001</span>
                      <span className="text-[11px] bg-[#3F72AF] text-white px-2 py-0.5 rounded-full font-bold">Sent</span>
                    </div>
                    <p className="text-[#112D4E] text-[13px] font-bold mt-1">{fmt(activeConv.deal || 45000)}</p>
                  </div>
                ) : (
                  <p className="text-[12px] text-slate-400 mb-2">No invoices yet</p>
                )}
                <button className="w-full py-2 bg-[#3F72AF] text-white rounded-xl text-[12px] font-bold hover:bg-blue-700 transition-colors flex items-center justify-center gap-1.5">
                  <FiFileText className="w-3.5 h-3.5" /> Send invoice
                </button>
              </div>

              {/* Follow-up */}
              <div className="px-5 py-4 border-b border-[#DBE2EF]">
                <p className="text-[13px] font-bold text-[#112D4E] mb-3">Follow-up</p>
                <button className="w-full py-2 border border-dashed border-[#a3b8d7] text-[#3F72AF] rounded-xl text-[12px] font-bold hover:bg-blue-50 transition-colors flex items-center justify-center gap-1.5">
                  <FiClock className="w-3.5 h-3.5" /> Set follow-up
                </button>
              </div>

              {/* CRM Notes */}
              <div className="px-5 py-4">
                <p className="text-[13px] font-bold text-[#112D4E] mb-3">CRM Notes</p>
                <textarea placeholder="Add a note about this contact..." rows={3} className="w-full border border-[#DBE2EF] rounded-xl px-3 py-2.5 text-[13px] text-[#112D4E] focus:outline-none focus:border-[#3F72AF] resize-none placeholder:text-slate-300 transition-colors" />
              </div>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default WhatsAppPage;
