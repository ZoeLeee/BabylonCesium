import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { execBJS } from './main/babylon'
import { Engine } from '@babylonjs/core'
import { execCesium } from './main/cesium'
import { Viewer, createWorldTerrainAsync } from 'cesium'

function App() {
  const cRef=useRef<any>()
  const canvasRef=useRef(null)

  useEffect(()=>{
    let engine:Engine;
    let viewer:Viewer
    (async()=>{
      if(cRef.current){
        viewer= execCesium(cRef.current)
        engine=await execBJS(viewer.canvas,viewer)
      }
    })()

    return ()=>{
      if(viewer){
        viewer.destroy()
      }
      if(engine){
        engine.dispose()
      }
    }
   
  },[])

  return (
    <div ref={cRef} style={{background:"#ccc",width:"100vw",height:"100vh"}}>
     {/* <canvas id="canvas" ref={canvasRef}></canvas> */}
    </div>
  )
}1

export default App
