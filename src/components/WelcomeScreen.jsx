import { useEffect, useState } from 'react'

function WelcomeScreen() {
    const [visible, setVisible] = useState(() => {
        return !sessionStorage.getItem('welcomeShown')
    })

    const [exiting, setExiting] = useState(false)

    useEffect(() => {
        if (!visible) return

        sessionStorage.setItem('welcomeShown', 'true')

        const exitTimer = setTimeout(() => {
            setExiting(true)
        }, 4500)
        const removeTimer = setTimeout(() => {
            setVisible(false)
        }, 5000)

        return () => {
            clearTimeout(exitTimer)
            clearTimeout(removeTimer)
        }
    }, [visible])

    if (!visible) return null

    return (
        <div
            className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#080b12] text-white transition-opacity duration-500 ${exiting ? 'pointer-events-none opacity-0' : 'opacity-100'
                }`}
        >
            <div className="text-center">
                <div className="mb-5 flex items-center justify-center gap-3">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 text-2xl font-bold shadow-lg shadow-blue-500/30">
                        F
                    </div>

                    <h1 className="text-3xl font-extrabold tracking-tight md:text-5xl">
                        Dev.<span className="text-blue-500">FiroyyeAB</span>
                    </h1>
                </div>

                <p className="animate-pulse text-sm tracking-[0.3em] text-gray-400 md:text-base">
                    BUILDING DIGITAL EXPERIENCES
                </p>

                <div className="mx-auto mt-8 h-1 w-40 overflow-hidden rounded-full bg-gray-800">
                    <div
                        className="h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                        style={{
                            animation: 'welcomeProgress 4.5s ease-in-out forwards',
                        }}
                    />
                </div>
            </div>

            <style>{`
        @keyframes welcomeProgress {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
        </div>
    )
}

export default WelcomeScreen