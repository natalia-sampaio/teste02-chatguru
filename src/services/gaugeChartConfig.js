import { getMetrics } from "./npsRequests";

const metrics = await getMetrics();

export const data = {
    datasets: [
        {
            backgroundColor: ['#F7617D', '#fbcd54', '#1DB67B'],
            borderColor: '#333333',
            borderWidth: 15,
            data: [33,33,33],
            needleValue: metrics.score,
        }
    ]
}

export const options = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: 50,
    rotation: -90,
    circumference: 180,
    plugins: {
        tooltip: {
            enabled: false
        }
    }
}

const gaugeNeedle = {
    id: 'gaugeNeedle',
    afterDatasetDraw(chart, args, options) {
        const { ctx, config, chartArea: { top, bottom, left, right, width, height } } = chart;

        ctx.save();
        
        const needleValue = data.datasets[0].needleValue;
        const topScore = 100;
        const angle = Math.PI + (1 / topScore * needleValue * Math.PI);
        const chartX = width/2;
        const chartY = chart._metasets[0].data[0].y;
        const needleSize = height/2;

        //needle
        ctx.translate(chartX, chartY);
        ctx.rotate(angle);
        ctx.beginPath();
        ctx.moveTo(0, -2);
        ctx.lineTo(needleSize, 0);
        ctx.lineTo(0, 2);
        ctx.fillStyle = '#EBEBEB';
        ctx.fill();

        //needle dot
        ctx.translate(-chartX, -chartY);
        ctx.beginPath();
        ctx.arc(chartX, chartY, 5, 0, 10);
        ctx.fill();
        ctx.restore();

    }
}

export const plugins = [gaugeNeedle];