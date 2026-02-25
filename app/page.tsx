export default function Home() {
  return (
    <main style={{
      fontFamily: 'system-ui, sans-serif',
      maxWidth: '800px',
      margin: '0 auto',
      padding: '40px 20px'
    }}>
      <h1 style={{ fontSize: '2rem', color: '#0070f3' }}>
        Skill MCP Platform
      </h1>
      <p style={{ fontSize: '1.2rem', color: '#666' }}>
        Model Context Protocol スキル管理プラットフォーム
      </p>
      <div style={{
        background: '#f0f9ff',
        border: '1px solid #0070f3',
        borderRadius: '8px',
        padding: '20px',
        marginTop: '20px'
      }}>
        <h2>デプロイ成功</h2>
        <p>このプラットフォームはVercel上で正常に動作しています。</p>
      </div>
    </main>
  );
}
