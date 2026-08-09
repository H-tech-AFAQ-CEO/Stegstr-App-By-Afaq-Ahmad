import { notFound } from 'next/navigation'
import StegstrApp from '@/components/stegstr-app'

type PageId = 'encode' | 'decode' | 'resilience' | 'relays' | 'identity' | 'activity' | 'settings' | 'help'
const pages = new Set<PageId>(['encode', 'decode', 'resilience', 'relays', 'identity', 'activity', 'settings', 'help'])

export default async function RoutePage({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params
  if (slug.length !== 1 || !pages.has(slug[0] as PageId)) notFound()
  return <StegstrApp initialPage={slug[0] as PageId} />
}
