<script setup lang="ts">
  onMounted(() => {
    const canvas = document.getElementById('canvas') as HTMLCanvasElement
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let w: number, h: number
    resizeCanvas()

    // 滑鼠位置只在 canvas 內才有效
    const mouse = { x: null as number | null, y: null as number | null }

    const particles: Particle[] = []
    const maxDistance = 100
    const repelForce = 5

    // --------------------
    // Canvas 滿足需求 1：依據內容高度調整
    // --------------------
    function resizeCanvas() {
      const rect = canvas.getBoundingClientRect()
      w = canvas.width = window.innerWidth
      h = canvas.height = rect.height
    }

    // --------------------
    // 粒子類別
    // --------------------
    class Particle {
      x: number
      y: number
      ox: number
      oy: number
      vx: number
      vy: number

      constructor(x: number, y: number) {
        this.x = this.ox = x
        this.y = this.oy = y
        this.vx = 0
        this.vy = 0
      }

      update() {
        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - this.x
          const dy = mouse.y - this.y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < maxDistance) {
            const angle = Math.atan2(dy, dx)
            const force = (maxDistance - dist) / maxDistance
            const fx = Math.cos(angle) * force * repelForce
            const fy = Math.sin(angle) * force * repelForce

            this.vx -= fx
            this.vy -= fy
          }
        }

        const spring = 0.05
        this.vx += (this.ox - this.x) * spring
        this.vy += (this.oy - this.y) * spring

        this.vx *= 0.9
        this.vy *= 0.9

        this.x += this.vx
        this.y += this.vy
      }

      draw() {
        if (!ctx) return
        ctx.beginPath()
        ctx.arc(this.x, this.y, 3, 0, Math.PI * 2)
        ctx.fillStyle = '#0ff'
        ctx.fill()
      }
    }

    // --------------------
    // 初始化粒子（格子排列）
    // --------------------
    function initParticles() {
      particles.length = 0
      const spacing = 40

      for (let x = spacing / 2; x < w; x += spacing) {
        for (let y = spacing / 2; y < h; y += spacing) {
          particles.push(new Particle(x, y))
        }
      }
    }

    initParticles()

    // --------------------
    // 滑鼠事件（需求 2）
    // --------------------
    canvas.addEventListener('mousemove', (e) => {
      const rect = canvas.getBoundingClientRect()
      mouse.x = e.clientX - rect.left
      mouse.y = e.clientY - rect.top
    })

    canvas.addEventListener('mouseleave', () => {
      mouse.x = null
      mouse.y = null
    })

    // --------------------
    // 主動畫迴圈
    // --------------------
    function animate() {
      if (!ctx) return
      requestAnimationFrame(animate)
      ctx.clearRect(0, 0, w, h)

      particles.forEach((p) => {
        p.update()
        p.draw()
      })
    }

    animate()

    // --------------------
    // Resize 時重新配置
    // --------------------
    window.addEventListener('resize', () => {
      resizeCanvas()
      initParticles()
    })
  })
</script>

<template>
  <div>
    <canvas id="canvas"></canvas>
  </div>
</template>

<style scoped>
  #canvas {
    width: 100%;
    height: 100%;
    display: block;
  }
</style>
