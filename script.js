const wheels = document.querySelectorAll('.wheel')
const output = document.getElementById('output')
const ITEM_HEIGHT = window.innerWidth < 768 ? 56 : 44
const SNAP_DURATION = 260
const SNAP_EASE = 'cubic-bezier(0.22, 1, 0.36, 1)' // iOS-like


const now = new Date()

const data = {
  day: Array.from({ length: 31 }, (_, i) => i + 1),
  month: Array.from({ length: 12 }, (_, i) =>
    new Date(0, i).toLocaleString('default', { month: 'short' })
  ),
  year: Array.from({ length: 81 }, (_, i) => 1970 + i),
}

const state = {
  day: now.getDate(),
  month: now.getMonth(),
  year: now.getFullYear(),
}

wheels.forEach(wheel => {
  const type = wheel.dataset.type

  data[type].forEach(value => {
    const div = document.createElement('div')
    div.className = 'item'
    div.textContent = value
    wheel.appendChild(div)
  })

  wheel.scrollTop =
    (type === 'day'
      ? state.day - 1
      : type === 'month'
      ? state.month
      : data.year.indexOf(state.year)) * ITEM_HEIGHT

  let scrollTimeout

wheel.addEventListener('scroll', () => {
  updateWheel(wheel)

  clearTimeout(scrollTimeout)
  scrollTimeout = setTimeout(() => {
    snapWheel(wheel)
  }, 80) // 👈 momentum settle time
})

  updateWheel(wheel)
})

function updateWheel(wheel) {
  const items = wheel.querySelectorAll('.item')
  const index = Math.round(wheel.scrollTop / ITEM_HEIGHT)
  const type = wheel.dataset.type

  items.forEach((item, i) => {
    const distance = Math.abs(i - index)

    // Apple-like falloff
    const opacity = Math.max(0.15, 1 - distance * 0.25)
    const scale = Math.max(0.82, 1 - distance * 0.06)
    const blur = Math.min(6, distance * 1.5)

    item.style.opacity = opacity
    item.style.transform = `scale(${scale})`
    item.style.filter = `blur(${blur}px)`
    item.classList.toggle('active', i === index)
  })

  // 🔥 STATE FIX (this is the key)
  if (type === 'day') state.day = index + 1
  if (type === 'month') state.month = index
  if (type === 'year') state.year = data.year[index]

  // ✅ Correct output
  output.textContent = `${state.day} ${data.month[state.month]} ${state.year}`
}

function snapWheel(wheel) {
  const index = Math.round(wheel.scrollTop / ITEM_HEIGHT)
  const target = index * ITEM_HEIGHT

  wheel.scrollTo({
    top: target,
    behavior: 'smooth',
  })
}

