/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

import { useFrame } from 'react-three-fiber';

export default function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/Sofà2.gltf')
  const { actions } = useAnimations(animations, group)
 

  

  useFrame(() => {
    group.current.rotation.y += 0.01;
  });
  return (
    <group ref={group} {...props} dispose={null}  position={[-1.0,-1, 0]} scale={[2, 2, 2]}>
      <mesh
        geometry={nodes.Cushion_Seats_002.geometry}
        material={nodes.Cushion_Seats_002.material}
        position={[0.72, 0.32, 0.1]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[0.35, 0.02, 0.33]}
      />
      <mesh
        geometry={nodes.Cushion_Seats_003.geometry}
        material={nodes.Cushion_Seats_003.material}
        position={[0, 0.32, 0.08]}
        rotation={[0, 1.57, 0]}
        scale={[0.35, 0.02, 0.33]}
      />
      <mesh
        geometry={nodes.Cushion_Seats001.geometry}
        material={nodes.Cushion_Seats001.material}
        position={[-0.69, 0.32, 0.06]}
        scale={[0.35, 0.02, 0.33]}
      />
      <mesh
        geometry={nodes.William_302_Zanotta003.geometry}
        material={nodes.William_302_Zanotta003.material}
        position={[0.03, 0.25, -0.45]}>
        <mesh
          geometry={nodes.William_302_Zanotta_Legs001.geometry}
          material={materials.Metal}
          position={[-0.03, -0.25, 0.43]}
          rotation={[0, -0.79, 0]}
          scale={[0.03, 0.03, 0.03]}
        />
        <mesh
          geometry={nodes.William_302_Zanotta004.geometry}
          material={nodes.William_302_Zanotta004.material}
          position={[-0.03, 0, 0.5]}
        />
        <mesh
          geometry={nodes.William_302_Zanotta005.geometry}
          material={nodes.William_302_Zanotta005.material}
          position={[-0.03, -0.07, 0.43]}
        />
      </mesh>
      <mesh
        geometry={nodes.William_Cushion_side.geometry}
        material={nodes.William_Cushion_side.material}
        position={[-1.01, 0.6, 0.06]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        geometry={nodes.William_Cushion_side001.geometry}
        material={nodes.William_Cushion_side001.material}
        position={[0.99, 0.59, 0.04]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        geometry={nodes.William_Cushion003.geometry}
        material={nodes.William_Cushion003.material}
        position={[0.7, 0.63, -0.36]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        geometry={nodes.William_Cushion004.geometry}
        material={nodes.William_Cushion004.material}
        position={[0.01, 0.62, -0.36]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        geometry={nodes.William_Cushion005.geometry}
        material={nodes.William_Cushion005.material}
        position={[-0.71, 0.64, -0.36]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        geometry={nodes.Blanket_001.geometry}
        material={nodes.Blanket_001.material}
        position={[1.01, 0.55, -0.05]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        geometry={nodes.William_Small_Cushion005.geometry}
        material={nodes.William_Small_Cushion005.material}
        position={[-0.75, 0.58, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        geometry={nodes.William_Small_Cushion004.geometry}
        material={materials['Fabric Upholstery']}
        position={[0.05, 0.59, -0.04]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        geometry={nodes.William_Small_Cushion003.geometry}
        material={materials['Fabric Upholstery Pyramids']}
        position={[0.67, 0.59, -0.04]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.01, 0.01, 0.01]}
      />
    </group>
  )
}

useGLTF.preload('/Sofà2.gltf')
