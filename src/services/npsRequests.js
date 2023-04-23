import { npsUrl, itemUrl, metricsUrl, answersListUrl } from "../config";

export async function getMetrics() {
    const request = metricsUrl;
    const fetchResponse = await fetch(request);
    const response = await fetchResponse.json();
    return response;
}

export function getMetricScore(metricValue, totalAnswered) {
    let metricScore = 0;
    metricScore = (metricValue/totalAnswered * 100);
    return metricScore.toFixed(1);
}

export async function getAnswersList() {
    const request = answersListUrl;
    const fetchResponse = await fetch(request);
    const response = await fetchResponse.json();
    return response;
}