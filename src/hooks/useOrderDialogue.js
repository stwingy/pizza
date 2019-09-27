import { useState } from 'react'

export function useOrderDialogue() {
    const [openOrderDialogue, setOpenOrderDialogue] = useState(false)
    return {
        openOrderDialogue,
        setOpenOrderDialogue
    }
}