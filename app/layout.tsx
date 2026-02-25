export const metadata = {
  title: 'Skill MCP Platform',
  description: 'Model Context Protocol Skill Management Platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  )
}
