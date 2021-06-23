import React, { useRef, useState } from 'react'
import { useFrame, useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { useSpring, animated, config } from '@react-spring/three'

function Box(props) {
  // This reference will give us direct access to the THREE.Mesh object
  const mesh = useRef()
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  const { scale } = useSpring({
    scale: active ? 1.5 : 1,
    config: config.wobbly
  })
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (mesh.current.rotation.x += 0.01))

  const texture_1 = useLoader(TextureLoader, 'textures/coffee.jpg');
  const texture_2 = useLoader(TextureLoader, 'textures/coffee.jpg');
  const texture_3 = useLoader(TextureLoader, 'textures/coffee.jpg');
  const texture_4 = useLoader(TextureLoader, 'textures/coffee.jpg');
  const texture_5 = useLoader(TextureLoader, 'textures/coffee.jpg');
  const texture_6 = useLoader(TextureLoader, 'textures/coffee.jpg');

  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <animated.mesh
      {...props}
      ref={mesh}
      scale={scale}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}>
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshStandardMaterial map={texture_1} attachArray="material" />
      <meshStandardMaterial map={texture_2} attachArray="material" />
      <meshStandardMaterial map={texture_3} attachArray="material" />
      <meshStandardMaterial map={texture_4} attachArray="material" />
      <meshStandardMaterial map={texture_5} attachArray="material" />
      <meshStandardMaterial map={texture_6} attachArray="material" />
    </animated.mesh>
  )
}
export default Box