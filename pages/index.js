import { useState } from 'react'

export default function Home() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAsk = async () => {
    setLoading(true);
    const res = await fetch('/api/ask', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ question })
    });
    const data = await res.json();
    setAnswer(data.answer);
    setLoading(false);
  };

  return (
    <main style={{ maxWidth: 600, margin: '2rem auto', fontFamily: 'sans-serif' }}>
      <h1>VENTOQ 智能说明书助手</h1>
      <input 
        style={{ width: '100%', padding: '10px', fontSize: '16px' }} 
        placeholder='请输入你的问题...' 
        value={question} 
        onChange={e => setQuestion(e.target.value)} />
      <button 
        style={{ marginTop: '1rem', padding: '10px 20px' }} 
        onClick={handleAsk}>
        提问
      </button>
      <div style={{ marginTop: '2rem' }}>
        {loading ? '正在思考中...' : <p><strong>回答：</strong>{answer}</p>}
      </div>
    </main>
  )
}
