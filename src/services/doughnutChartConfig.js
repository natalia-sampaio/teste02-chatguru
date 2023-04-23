export const options = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: 95,
    plugins: {
        legend: {
            position: 'bottom',
            labels: {
                boxWidth: 0,
                font: {
                    family: "'Lato', 'sans-serif'",
                    size: 18,
                    weight: '700'
                }
            }
        }
    }
}

const doughnutLabel = {
    id: 'doughnutLabel',
    beforeDatasetDraw(chart, args, pluginOptions) {
        const { ctx, data } = chart;
        
        ctx.save();
        const xCoord = chart.getDatasetMeta(0).data[0].x;
        const yCoord = chart.getDatasetMeta(0).data[0].y;
        ctx.font = 'bold 30px Lato';
        ctx.fillStyle = '#646D82';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(data.datasets[0].data[0], xCoord, yCoord);
    }
}

export const plugins = [doughnutLabel];