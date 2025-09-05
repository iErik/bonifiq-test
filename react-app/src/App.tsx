import { useState, useEffect } from 'react'
import { AnimatePresence } from 'motion/react'

import Widget from '@components/Widget'
import TriggerButton from '@components/TriggerButton'


export default function App() {
  const [ userId, setUserId ] = useState<number | null>(null)
  const [ showWidget, setShowWidget ] = useState<boolean>(false)

  const onIframeMsg = (ev: MessageEvent) => {
    if (ev.data !== userId && !Number.isNaN(+ev.data))
      setUserId(+ev.data)
  }

  useEffect(() => {
    window.addEventListener('message', onIframeMsg)

    return () => {
      window.removeEventListener('message', onIframeMsg)
    }
  }, [ ])

  const toggleWidget = () => {
    setShowWidget(!showWidget)

    if (!window.parent) return

    // Delay it a little bit so it doesn't affect the
    // css transition
    setTimeout(() => {
      window.parent.postMessage({
        action: 'showWidget',
        value: !showWidget
      }, '*')
    }, showWidget ? 300 : 0)
  }

  return (
    <>
      <AnimatePresence>
        { showWidget &&
          <Widget
            userId={userId}
            onClose={toggleWidget}
          />
        }
      </AnimatePresence>

      <TriggerButton
        onClick={toggleWidget}
        opened={showWidget}
      />
    </>
  )
}
