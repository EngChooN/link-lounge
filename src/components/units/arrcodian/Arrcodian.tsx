"use client"

import { DocumentData } from "firebase/firestore";
import { useState } from "react";

export default function Accordion({ label, list }: { label: string; list: DocumentData[] }) {
  const [isHidden, setIsHidden] = useState(false)

  return (
    <div>
      <span onClick={() => { setIsHidden(!isHidden) }}>
        {isHidden ? <span>⬇️</span> : <span>➡️</span>}
        {label}
      </span>
      {isHidden && (
        <ul>
          {list.map((el, idx) => (
            <li key={idx}>{el}</li>
          ))}
        </ul>
      )}
    </div>
  )
}