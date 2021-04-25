import ReactDOM from 'react-dom'
import React, { useRef, useState } from 'react'
import { Canvas, useFrame, useThree} from 'react-three-fiber'

function Box(props) {
  // This reference will give us direct access to the mesh
  const mesh = useRef()

  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)

  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => {
    mesh.current.rotation.x = mesh.current.rotation.y += 0.002;
  })

  return (
    <mesh
      {...props}
      ref={mesh}
      // scale={active ? [1.5, 1.5, 1.5] : [1, 1, 1]}
      scale={hovered ? [1.5, 1.5, 0.1] : [1, 1, 0.1]}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}>
      <boxBufferGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'pink' : 'yellow'} />
    </mesh>
  )
}

export default Box;
