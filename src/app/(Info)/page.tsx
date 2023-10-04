import * as React from 'react'
import QA from '@/components/ui/QA'
import Title from '@/components/ui/Title'
import type { Metadata } from 'next'

const qas = [
  { q: 'Who are you ?', a: 'Plumbiu(Guo Xingjun).', emoji: '😀' },
  { q: "what's your job ?", a: 'A front-end programmer.', emoji: '🥵' },
  {
    q: 'Introduce yourself ?',
    a: 'Studied at Hangzhou Dianzi University(杭州电子科技大学)(HDU), a junior.',
    emoji: '🥰',
  },
]

export default function Home() {
  return (
    <div className="myself-container">
      <Title>🎉 我的个人介绍！ 🎉</Title>
      {qas.map(({ q, a, emoji }) => (
        <QA key={q} q={q} a={a} emoji={emoji} />
      ))}
    </div>
  )
}

export const metadata: Metadata = {
  title: 'Plumbiu | 首页',
  description: '这里是 Plumbiu 的个人介绍首页',
}
