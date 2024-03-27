import { ConnectionsProvider } from '@/providers/connections-provider'
import EditorProvider from '@/providers/editor-provider'
import React from 'react'
import EditorCanvas from './_components/editor-canvas'

type Props = {}

const WorkflowIdPage = (props: Props) => {
  return (
    <div className='h-full'>
        <EditorProvider>
          <ConnectionsProvider>
            <EditorCanvas/>
          </ConnectionsProvider>
        </EditorProvider>
    </div>
  )
}

export default WorkflowIdPage