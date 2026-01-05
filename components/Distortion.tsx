
'use client'
import { useEffect } from 'react'
import * as THREE from 'three'

export default function Distortion() {
  useEffect(() => {
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ alpha: true })
    renderer.setSize(window.innerWidth, window.innerHeight)
    document.body.appendChild(renderer.domElement)

    const geometry = new THREE.PlaneGeometry(5,5,32,32)
    const material = new THREE.MeshBasicMaterial({ wireframe: true, color: 0xffffff })
    const mesh = new THREE.Mesh(geometry, material)
    scene.add(mesh)
    camera.position.z = 3

    function animate() {
      requestAnimationFrame(animate)
      mesh.rotation.z += 0.002
      renderer.render(scene, camera)
    }
    animate()
  }, [])

  return null
}
