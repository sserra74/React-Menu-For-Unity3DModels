/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useFrame } from 'react-three-fiber';
export default function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/beast.gltf')
  const { actions } = useAnimations(animations, group)
 

  

  useFrame(() => {
    group.current.rotation.y += 0.01;
  });
  return (
    <group ref={group} {...props} dispose={null} position={[-1.4,-2, 0]}>
      <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.01, 0.01]}>
        <primitive object={nodes.mixamorigHips} />
        <skinnedMesh
          geometry={nodes.Object001mesh002.geometry}
          material={materials.material000mat}
          skeleton={nodes.Object001mesh002.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Object001mesh002_1.geometry}
          material={materials.material001mat}
          skeleton={nodes.Object001mesh002_1.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Object001mesh002_2.geometry}
          material={materials.material002mat}
          skeleton={nodes.Object001mesh002_2.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Object001mesh002_3.geometry}
          material={materials.material003mat}
          skeleton={nodes.Object001mesh002_3.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Object001mesh002_4.geometry}
          material={materials.material004mat}
          skeleton={nodes.Object001mesh002_4.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Object001mesh002_5.geometry}
          material={materials.material005mat}
          skeleton={nodes.Object001mesh002_5.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Object001mesh002_6.geometry}
          material={materials.material006mat}
          skeleton={nodes.Object001mesh002_6.skeleton}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/beast.gltf')
