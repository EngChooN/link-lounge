"use client"

import { useEffect, useRef, useState } from "react";
import Accordion from "@/components/units/arrcodian/Arrcodian";
import { getChannels } from "@/api/firebase";
import { DocumentData } from "firebase/firestore";

export default function HomeTapSidebar() {
  const [channels, setChannels] = useState<DocumentData[]>([])
  const [channelsName, setChannelsName] = useState<DocumentData[]>([])

  const [width, setWidth] = useState(200) // 초기 너비 설정
  const ref = useRef(null)
  const dragHandleRef = useRef(null)

  const startDrag = (e: React.MouseEvent) => {
    e.preventDefault();
    window.addEventListener('mousemove', doDrag)
    window.addEventListener('mouseup', stopDrag)
  };

  const doDrag = (e: any) => {
    const newWidth = e.clientX - ref.current.getBoundingClientRect().left
    setWidth(newWidth);
  };

  const stopDrag = () => {
    window.removeEventListener('mousemove', doDrag)
    window.removeEventListener('mouseup', stopDrag)
  };

  useEffect(() => {
    const fetchChannels = async () => {
      try {
        const channels = await getChannels()
        setChannels(channels)
      }
      catch(error) {
        console.log(error)
      }
    }

    fetchChannels()
  }, [])
  
  useEffect(() => {
    const filterChannelsName = () => {
      const filteredChannelsName = channels.map((el) => { return el.ch_name })
      setChannelsName(filteredChannelsName)
    }
    
    filterChannelsName()
  }, [channels])

  return (
    <section
      className="relative h-full rounded-l bg-rose-900"
      ref={ref}
      style={{ width: `${width}px`, minWidth: '200px', maxWidth: '500px' }}>
      <Accordion label="Channel" list={channelsName} />
      <div
        ref={dragHandleRef}
        onMouseDown={startDrag}
        style={{ 
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          width: '5px',
          cursor: 'ew-resize',
          backgroundColor: 'rgba(0,0,0,0.2)' // 드래그 핸들의 시각적 표시
        }}>
      </div>
    </section>
  );
}