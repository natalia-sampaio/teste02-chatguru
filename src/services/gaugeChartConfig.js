export const data = {
    datasets: [
        {
            backgroundColor: ['#1DB67B', '#fbcd54', '#F7617D'],
            borderColor: '#333333',
            borderWidth: 20,
            data: [33,33,33],
            needleValue: 94,
        }
    ]
}

export const options = {
    responsive: true,
    maintainAspectRatio: true,
    cutout: 50,
    rotation: -90,
    circumference: 180

}

const gaugeNeedle = {
    id: 'gaugeNeedle',
    afterDatasetDraw() {}
}

export const plugins = [gaugeNeedle];