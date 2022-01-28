/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useFrame } from 'react-three-fiber';
export default function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/Luigi.gltf')
 
  const { actions } = useAnimations(animations, group)
 

  

  useFrame(() => {
    group.current.rotation.y += 0.01;
  });

  return (
    <group ref={group} {...props} dispose={null} position={[-1.4,-2, 0]} >
      <group rotation={[Math.PI / 2, 0, 0]} scale={[0.03, 0.03, 0.03]}>
        <primitive object={nodes.nw4f_root} />
        <skinnedMesh
          geometry={nodes.Cap__CapMT.geometry}
          material={materials.CapMT}
          skeleton={nodes.Cap__CapMT.skeleton}
        />
        <skinnedMesh
          geometry={nodes.CapHair__HairMT.geometry}
          material={nodes.CapHair__HairMT.material}
          skeleton={nodes.CapHair__HairMT.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Eyeball__EyeMT.geometry}
          material={materials.EyeBallMT}
          skeleton={nodes.Eyeball__EyeMT.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Eyeball__EyePupilLeftMT.geometry}
          material={materials.EyePupilLeftMT}
          skeleton={nodes.Eyeball__EyePupilLeftMT.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Eyeball__EyePupilRightMT.geometry}
          material={materials.EyePupilRightMT}
          skeleton={nodes.Eyeball__EyePupilRightMT.skeleton}
        />
        <skinnedMesh
          geometry={nodes.face__FaceMT.geometry}
          material={nodes.face__FaceMT.material}
          skeleton={nodes.face__FaceMT.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Hair__HairMT.geometry}
          material={nodes.Hair__HairMT.material}
          skeleton={nodes.Hair__HairMT.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Mario__BodyMT.geometry}
          material={materials.BodyMT}
          skeleton={nodes.Mario__BodyMT.skeleton}
        />
        <skinnedMesh
          geometry={nodes.mario_brow_l__HairMT.geometry}
          material={nodes.mario_brow_l__HairMT.material}
          skeleton={nodes.mario_brow_l__HairMT.skeleton}
        />
        <skinnedMesh
          geometry={nodes.mario_brow_r__HairMT.geometry}
          material={nodes.mario_brow_r__HairMT.material}
          skeleton={nodes.mario_brow_r__HairMT.skeleton}
        />
        <skinnedMesh
          geometry={nodes.mario_mustache__HairMT.geometry}
          material={nodes.mario_mustache__HairMT.material}
          skeleton={nodes.mario_mustache__HairMT.skeleton}
        />
        <skinnedMesh
          geometry={nodes.mario_tongue__FaceMT.geometry}
          material={nodes.mario_tongue__FaceMT.material}
          skeleton={nodes.mario_tongue__FaceMT.skeleton}
        />
        <skinnedMesh
          geometry={nodes.mario_tooth_bottom__FaceMT.geometry}
          material={nodes.mario_tooth_bottom__FaceMT.material}
          skeleton={nodes.mario_tooth_bottom__FaceMT.skeleton}
        />
        <skinnedMesh
          geometry={nodes.mario_tooth_up__FaceMT.geometry}
          material={nodes.mario_tooth_up__FaceMT.material}
          skeleton={nodes.mario_tooth_up__FaceMT.skeleton}
        />
        <skinnedMesh
          geometry={nodes.MarioHandL__HandMT.geometry}
          material={nodes.MarioHandL__HandMT.material}
          skeleton={nodes.MarioHandL__HandMT.skeleton}
        />
        <skinnedMesh
          geometry={nodes.MarioHandR__HandMT.geometry}
          material={nodes.MarioHandR__HandMT.material}
          skeleton={nodes.MarioHandR__HandMT.skeleton}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/Luigi.gltf')
