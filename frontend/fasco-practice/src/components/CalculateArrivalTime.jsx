const CalculateArrivalTime = () => {
    const today = new Date()

    const minDays = 8
    const maxDays = 12

    let startDay = new Date()
    startDay.setDate(today.getDate() + minDays)

    let lastDay = new Date()
    lastDay.setDate(today.getDate() + maxDays)

    const option = { month: 'short', day: '2-digit' }
    const startFormat = startDay.toLocaleDateString('en-US', option)
    const lastFormat = lastDay.toLocaleDateString('en-US', option)


    return `${startFormat} - ${lastFormat}`
}

export default CalculateArrivalTime