/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

import { useFrame } from 'react-three-fiber';

export default function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/Boccale.gltf')
  const { actions } = useAnimations(animations, group)
 

  

  useFrame(() => {
    group.current.rotation.y += 0.01;
  });
  return (
    <group ref={group} {...props} dispose={null} position={[-1.4,-1, 0]} scale={[40, 40, 40]}>
      <mesh
        geometry={nodes.mug_low.geometry}
        material={materials.lambert1}
        rotation={[Math.PI / 2.2, 0, 0]}
        scale={[0.01, 0.01, 0.01]}
      />
    </group>
  )
}

useGLTF.preload('/Boccale.gltf')