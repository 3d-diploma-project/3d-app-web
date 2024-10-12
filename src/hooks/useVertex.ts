export function useVertex() { 
    // const verice = { id: 1, x: 0.5, y: 1, z: 0.5 }
    
    const positions = new Float32Array(
        [
            0.5, 1, 0.5,
            1, 0.5, 0.5,
            0.5, 0.5, 1,
            0.499983877, 0.499983877, 0.499983877,
        ]
    )

    return positions
}