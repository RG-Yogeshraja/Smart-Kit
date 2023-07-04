import React, { useState } from "react"
import '../../../src/@core/scss/base/adminDashboard/groupsmenu/groupsmainsection.css'
import "../../../src/@core/scss/base/adminDashboard/usermenu/userfriends.scss"
import barryeventimagesmall from "../../../src/assets/images/dashboardimg/barryeventimagesmall.png"
import morehorizontal from "../../../src/assets/images/dashboardimg/morehorizontal.png"
import dot from "../../../src/assets/images/dashboardimg/Ellipse11.png"
import location from "../../../src/assets/images/dashboardimg/location.png"
import barryeventlogo from "../../../src/assets/images/dashboardimg/barryeventlogo.png"
import { PieChart } from "react-minimal-pie-chart"
import '../../../src/@core/scss/base/adminDashboard/sponsorshipsmenu/sponsorgroupsmenu/sponsereventmain.scss'

import Chart from 'react-apexcharts'
import 'chart.js/auto'
import SponsorshipPasteventDialog from "./sponsorship-pastevent-dialog"
// import { PieChart } from "react-minimal-pie-chart"

const SponsorshipEventPastTab = () => {

    const [analyticsCollectedData] = useState([
        { id: '1', value: "354", dataName: "Unique Viewers" },
        { id: '2', value: "354", dataName: "Impressions" },
        { id: '3', value: "443", dataName: "Event Clicks" },
        { id: '4', value: "354", dataName: "Cost per Unique Viewer" },
        { id: '5', value: "354", dataName: "Cost per Impression" },
        { id: '6', value: "$5.50", dataName: "Cost Per Event Click" },
        { id: '7', value: "443", dataName: "Event Link Clicks" },
        { id: '8', value: "443", dataName: "Sponsor Link Clicks" },
        { id: '9', value: "443", dataName: "Members Attending" },
        { id: '10', value: "$5.50", dataName: "Cost Per Event Link Click" },
        { id: '11', value: "$5.50", dataName: "Cost Per Sponsor Link Click" },
        { id: '12', value: "$554", dataName: "Total Spent" }
    ]);

    const data1 = [
        { title: "Yes", value: 100, color: "#d7f2e6" },
        { title: "No", value: 104, color: "#95E1BF" }
    ]

    const series1 = [{ data: [15, 12, 10, 8, 6] }]
    const series2 = [{ data: [15, 12, 10, 8, 6] }]
    const series3 = [{ data: [30, 20, 10] }]
    const series4 = [{ data: [50, 40, 10] }]
    const series5 = [{ data: [60, 30, 10] }]
    const series6 = [{ data: [60, 40, 10] }]
    const series7 = [{ data: [60, 30, 10] }]
    const series8 = [{ data: [60, 40, 10] }]
    const series9 = [{ data: [60, 30, 10] }]
    const series10 = [{ data: [50, 40, 10] }]
    const series11 = [{ data: [50, 50] }]
    const series12 = [{ data: [60, 40] }]
    const series13 = [{ data: [60, 30, 10] }]



    const options1 = {
        chart: {
            width: '100%',
            parentHeightOffset: 0,
            type: 'bar',
            // height: '250px',
            toolbar: { show: false },
            sparkline: {
                enabled: false
            },
        },

        plotOptions: {
            bar: {
                horizontal: true, barHeight: '40%', borderRadius: 6, columnWidth: '%', borderRadiusApplication: 'end', dataLabels: {
                    position: 'top'
                }
            }
        },
        yAxes: [{ gridLines: { tickMarkLength: 0 } }, { ticks: { display: false } }],
        xAxes: [{ gridLines: { tickMarkLength: 0 } }, { ticks: { display: false } }],
        // xAxes: [{ gridLines: { zeroLineColor: 'transparent' } }],
        grid: {
            // show: true,
            drawBorder: false, display: false,
            xaxis: { lines: { show: false } },
            yaxis: { lines: { show: false } }
        },
        // padding: {
        //     top: 0,
        //     right: 0,
        //     bottom: 0,
        //     left: 0
        // },
        colors: "#003B4A",
        dataLabels: {
            enabled: true,
            formatter(val) {
                if (val === 15) {
                    return val + '%'
                }
                if (val === 12) {
                    return val + '%'
                }
                if (val === 10) {
                    return val + '%'
                }
                if (val === 8) {
                    return val + '%'
                }
                if (val === 6) {
                    return val + '%'
                }
            },
            offsetX: 25,
            style: { fontFamily: 'Asap', fontStyle: 'normal', fontWeight: 500, fontSize: "14px", lineHeight: "16px", colors: ['#677E84'] }
        },
        tooltip: { enabled: false },
        xaxis: {
            range: 10,
            categories: [['Miami, FL'], ['New York, NY'], ['Boston, MA'], ['Austin, TX'], ['Denver, CO']],
            labels: {
                position: 'bottom',
                style: {
                    colors: ['#000000'], fontSize: '0px', fontFamily: 'Asap', fontWeight: 500
                }
            }
        },
        axisBorder: { show: true, color: '#78909C', height: 1, width: '100%', offsetX: 0, offsetY: 0 },
        axisTicks: { show: true, borderType: 'solid', color: '#78909C', height: 6, offsetX: 0, offsetY: 0 },
        yaxis: {
            // alignTicks: false,
            // opposite: false,
            forceNiceScale: true, position: 'top', labels: {
                align: 'left',
                style: {
                    colors: ['#677E84'], fontSize: '16px', lineHeight: '18', fontFamily: 'Asap', fontWeight: 500, fontStyle: 'normal'
                }
            }
        }
    }

    const options2 = {
        chart: {
            // width: '100%', parentHeightOffset: 0,
            toolbar: { show: false }
        },
        plotOptions: {
            bar: {
                horizontal: true, barHeight: '40%', borderRadius: 6, columnWidth: '%', borderRadiusApplication: 'end', dataLabels: {
                    position: 'top'
                }
            }
        },
        // yAxes: [{ gridLines: { tickMarkLength: 0 }, }],
        // xAxes: [{ gridLines: { tickMarkLength: 0 }, }],
        xAxes: [{ gridLines: { zeroLineColor: 'transparent' } }],
        grid: {
            drawBorder: false, display: false,
            xaxis: { lines: { show: false } },
            yaxis: { lines: { show: false } }
        },
        colors: "#003B4A",
        dataLabels: {
            enabled: true,
            formatter(val) {
                if (val === 15) {
                    return val + '%'
                }
                if (val === 12) {
                    return val + '%'
                }
                if (val === 10) {
                    return val + '%'
                }
                if (val === 8) {
                    return val + '%'
                }
                if (val === 6) {
                    return val + '%'
                }
            },
            offsetX: 25,
            style: { fontFamily: 'Asap', fontStyle: 'normal', fontWeight: 500, fontSize: "14px", lineHeight: "16px", colors: ['#677E84'] }
        },
        tooltip: { enabled: false },
        xaxis: {
            range: 10,
            categories: [['TV Shows'], ['Music'], ['Pets'], ['Sports'], ['Fitness']],
            labels: {
                position: 'bottom',
                style: {
                    colors: ['#000000'], fontSize: '0px', fontFamily: 'Asap', fontWeight: 500
                }
            }
        },
        axisBorder: { show: true, color: '#78909C', height: 1, width: '100%', offsetX: 0, offsetY: 0 },
        axisTicks: { show: true, borderType: 'solid', color: '#78909C', height: 6, offsetX: 0, offsetY: 0 },
        yaxis: {
            forceNiceScale: true, position: 'top', labels: {
                align: 'left',
                style: {
                    colors: ['#677E84'], fontSize: '16px', lineHeight: '18', fontFamily: 'Asap', fontWeight: 500, fontStyle: 'normal'
                }
            }
        }
    }

    const options3 = {
        chart: {
            // width: '100%', parentHeightOffset: 0,
            toolbar: { show: false }
        },
        plotOptions: {
            bar: {
                horizontal: true, barHeight: '40%', borderRadius: 6, columnWidth: '%', borderRadiusApplication: 'end', dataLabels: {
                    position: 'top'
                }
            }
        },
        // yAxes: [{ gridLines: { tickMarkLength: 0 }, }],
        // xAxes: [{ gridLines: { tickMarkLength: 0 }, }],
        xAxes: [{ gridLines: { zeroLineColor: 'transparent' } }],
        grid: {
            drawBorder: false, display: false,
            xaxis: { lines: { show: false } },
            yaxis: { lines: { show: false } }
        },
        colors: "#003B4A",
        dataLabels: {
            enabled: true,
            formatter(val) {
                // if (val === 4) {
                //     return val + '%'
                // }
                if (val === 30) {
                    return val + '%'
                }
                if (val === 20) {
                    return val + '%'
                }
                if (val === 10) {
                    return val + '%'
                }
            },
            offsetX: 25,
            style: { fontFamily: 'Asap', fontStyle: 'normal', fontWeight: 500, fontSize: "14px", lineHeight: "16px", colors: ['#677E84'] }
        },
        tooltip: { enabled: false },
        xaxis: {
            range: 10,
            categories: [['10-20'], ['20-30'], ['35-40']],
            labels: {
                position: 'bottom',
                style: {
                    colors: ['#000000'], fontSize: '0px', fontFamily: 'Asap', fontWeight: 500
                }
            }
        },
        axisBorder: { show: true, color: '#78909C', height: 1, width: '100%', offsetX: 0, offsetY: 0 },
        axisTicks: { show: true, borderType: 'solid', color: '#78909C', height: 6, offsetX: 0, offsetY: 0 },
        yaxis: {
            forceNiceScale: true, position: 'top', labels: {
                align: 'left',
                style: {
                    colors: ['#677E84'], fontSize: '16px', lineHeight: '18', fontFamily: 'Asap', fontWeight: 500, fontStyle: 'normal'
                }
            }
        }
    }

    const options4 = {
        chart: {
            // width: '100%', parentHeightOffset: 0,
            toolbar: { show: false }
        },
        plotOptions: {
            bar: {
                horizontal: true, barHeight: '40%', borderRadius: 6, columnWidth: '%', borderRadiusApplication: 'end', dataLabels: {
                    position: 'top'
                }
            }
        },
        // yAxes: [{ gridLines: { tickMarkLength: 0 }, }],
        // xAxes: [{ gridLines: { tickMarkLength: 0 }, }],
        xAxes: [{ gridLines: { zeroLineColor: 'transparent' } }],
        grid: {
            drawBorder: false, display: false,
            xaxis: { lines: { show: false } },
            yaxis: { lines: { show: false } }
        },
        colors: "#003B4A",
        dataLabels: {
            enabled: true,
            formatter(val) {
                if (val === 50) {
                    return val + '%'
                }
                if (val === 40) {
                    return val + '%'
                }
                if (val === 10) {
                    return val + '%'
                }
            },
            offsetX: 25,
            style: { fontFamily: 'Asap', fontStyle: 'normal', fontWeight: 500, fontSize: "14px", lineHeight: "16px", colors: ['#677E84'] }
        },
        tooltip: { enabled: false },
        xaxis: {
            range: 10,
            categories: [['Male'], ['Female'], ['Non-binary']],
            labels: {
                position: 'bottom',
                style: {
                    colors: ['#000000'], fontSize: '0px', fontFamily: 'Asap', fontWeight: 500
                }
            }
        },
        axisBorder: { show: true, color: '#78909C', height: 1, width: '100%', offsetX: 0, offsetY: 0 },
        axisTicks: { show: true, borderType: 'solid', color: '#78909C', height: 6, offsetX: 0, offsetY: 0 },
        yaxis: {
            forceNiceScale: true, position: 'top', labels: {
                align: 'left',
                style: {
                    colors: ['#677E84'], fontSize: '16px', lineHeight: '18', fontFamily: 'Asap', fontWeight: 500, fontStyle: 'normal'
                }
            }
        }
    }

    const options5 = {
        chart: {
            // width: '100%', parentHeightOffset: 0,
            toolbar: { show: false }
        },
        plotOptions: {
            bar: {
                horizontal: true, barHeight: '40%', borderRadius: 6, columnWidth: '%', borderRadiusApplication: 'end', dataLabels: {
                    position: 'top'
                }
            }
        },
        // yAxes: [{ gridLines: { tickMarkLength: 0 }, }],
        // xAxes: [{ gridLines: { tickMarkLength: 0 }, }],
        xAxes: [{ gridLines: { zeroLineColor: 'transparent' } }],
        grid: {
            drawBorder: false, display: false,
            xaxis: { lines: { show: false } },
            yaxis: { lines: { show: false } }
        },
        colors: "#003B4A",
        dataLabels: {
            enabled: true,
            formatter(val) {
                if (val === 60) {
                    return val + '%'
                }
                if (val === 30) {
                    return val + '%'
                }
                if (val === 10) {
                    return val + '%'
                }
            },
            offsetX: 25,
            style: { fontFamily: 'Asap', fontStyle: 'normal', fontWeight: 500, fontSize: "14px", lineHeight: "16px", colors: ['#677E84'] }
        },
        tooltip: { enabled: false },
        xaxis: {
            range: 10,
            categories: [['Single'], ['In a', 'Relationship'], ['Married']],
            labels: {
                position: 'bottom',
                style: {
                    colors: ['#000000'], fontSize: '0px', fontFamily: 'Asap', fontWeight: 500
                }
            }
        },
        axisBorder: { show: true, color: '#78909C', height: 1, width: '100%', offsetX: 0, offsetY: 0 },
        axisTicks: { show: true, borderType: 'solid', color: '#78909C', height: 6, offsetX: 0, offsetY: 0 },
        yaxis: {
            forceNiceScale: true, position: 'top', labels: {
                align: 'left',
                style: {
                    colors: ['#677E84'], fontSize: '16px', lineHeight: '18', fontFamily: 'Asap', fontWeight: 500, fontStyle: 'normal'
                }
            }
        }
    }

    const options6 = {
        chart: {
            // width: '100%', parentHeightOffset: 0,
            toolbar: { show: false }
        },
        plotOptions: {
            bar: {
                horizontal: true, barHeight: '40%', borderRadius: 6, columnWidth: '%', borderRadiusApplication: 'end', dataLabels: {
                    position: 'top'
                }
            }
        },
        // yAxes: [{ gridLines: { tickMarkLength: 0 }, }],
        // xAxes: [{ gridLines: { tickMarkLength: 0 }, }],
        xAxes: [{ gridLines: { zeroLineColor: 'transparent' } }],
        grid: {
            drawBorder: false, display: false,
            xaxis: { lines: { show: false } },
            yaxis: { lines: { show: false } }
        },
        colors: "#003B4A",
        dataLabels: {
            enabled: true,
            formatter(val) {
                if (val === 60) {
                    return val + '%'
                }
                if (val === 40) {
                    return val + '%'
                }
                if (val === 10) {
                    return val + '%'
                }
            },
            offsetX: 25,
            style: { fontFamily: 'Asap', fontStyle: 'normal', fontWeight: 500, fontSize: "14px", lineHeight: "16px", colors: ['#677E84'] }
        },
        tooltip: { enabled: false },
        xaxis: {
            range: 10,
            categories: [['Women'], ['Men'], ['Non-binary']],
            labels: {
                position: 'bottom',
                style: {
                    colors: ['#000000'], fontSize: '0px', fontFamily: 'Asap', fontWeight: 500
                }
            }
        },
        axisBorder: { show: true, color: '#78909C', height: 1, width: '100%', offsetX: 0, offsetY: 0 },
        axisTicks: { show: true, borderType: 'solid', color: '#78909C', height: 6, offsetX: 0, offsetY: 0 },
        yaxis: {
            forceNiceScale: true, position: 'top', labels: {
                align: 'left',
                style: {
                    colors: ['#677E84'], fontSize: '16px', lineHeight: '18', fontFamily: 'Asap', fontWeight: 500, fontStyle: 'normal'
                }
            }
        }
    }

    const options7 = {
        chart: {
            // width: '100%', parentHeightOffset: 0,
            toolbar: { show: false }
        },
        plotOptions: {
            bar: {
                horizontal: true, barHeight: '40%', borderRadius: 6, columnWidth: '%', borderRadiusApplication: 'end', dataLabels: {
                    position: 'top'
                }
            }
        },
        // yAxes: [{ gridLines: { tickMarkLength: 0 }, }],
        // xAxes: [{ gridLines: { tickMarkLength: 0 }, }],
        xAxes: [{ gridLines: { zeroLineColor: 'transparent' } }],
        grid: {
            drawBorder: false, display: false,
            xaxis: { lines: { show: false } },
            yaxis: { lines: { show: false } }
        },
        colors: "#003B4A",
        dataLabels: {
            enabled: true,
            formatter(val) {
                if (val === 60) {
                    return val + '%'
                }
                if (val === 30) {
                    return val + '%'
                }
                if (val === 10) {
                    return val + '%'
                }
            },
            offsetX: 25,
            style: { fontFamily: 'Asap', fontStyle: 'normal', fontWeight: 500, fontSize: "14px", lineHeight: "16px", colors: ['#677E84'] }
        },
        tooltip: { enabled: false },
        xaxis: {
            range: 10,
            categories: [['Agnostic'], ['Catholic'], ['Christian']],
            labels: {
                position: 'bottom',
                style: {
                    colors: ['#000000'], fontSize: '0px', fontFamily: 'Asap', fontWeight: 500
                }
            }
        },
        axisBorder: { show: true, color: '#78909C', height: 1, width: '100%', offsetX: 0, offsetY: 0 },
        axisTicks: { show: true, borderType: 'solid', color: '#78909C', height: 6, offsetX: 0, offsetY: 0 },
        yaxis: {
            forceNiceScale: true, position: 'top', labels: {
                align: 'left',
                style: {
                    colors: ['#677E84'], fontSize: '16px', lineHeight: '18', fontFamily: 'Asap', fontWeight: 500, fontStyle: 'normal'
                }
            }
        }
    }

    const options8 = {
        chart: {
            // width: '100%', parentHeightOffset: 0,
            toolbar: { show: false }
        },
        plotOptions: {
            bar: {
                horizontal: true, barHeight: '40%', borderRadius: 6, columnWidth: '%', borderRadiusApplication: 'end', dataLabels: {
                    position: 'top'
                }
            }
        },
        // yAxes: [{ gridLines: { tickMarkLength: 0 }, }],
        // xAxes: [{ gridLines: { tickMarkLength: 0 }, }],
        xAxes: [{ gridLines: { zeroLineColor: 'transparent' } }],
        grid: {
            drawBorder: false, display: false,
            xaxis: { lines: { show: false } },
            yaxis: { lines: { show: false } }
        },
        colors: "#003B4A",
        dataLabels: {
            enabled: true,
            formatter(val) {
                if (val === 60) {
                    return val + '%'
                }
                if (val === 40) {
                    return val + '%'
                }
                if (val === 10) {
                    return val + '%'
                }
            },
            offsetX: 25,
            style: { fontFamily: 'Asap', fontStyle: 'normal', fontWeight: 500, fontSize: "14px", lineHeight: "16px", colors: ['#677E84'] }
        },
        tooltip: { enabled: false },
        xaxis: {
            range: 10,
            categories: [['White'], ['Hispanic'], ['Latin X']],
            labels: {
                position: 'bottom',
                style: {
                    colors: ['#000000'], fontSize: '0px', fontFamily: 'Asap', fontWeight: 500
                }
            }
        },
        axisBorder: { show: true, color: '#78909C', height: 1, width: '100%', offsetX: 0, offsetY: 0 },
        axisTicks: { show: true, borderType: 'solid', color: '#78909C', height: 6, offsetX: 0, offsetY: 0 },
        yaxis: {
            forceNiceScale: true, position: 'top', labels: {
                align: 'left',
                style: {
                    colors: ['#677E84'], fontSize: '16px', lineHeight: '18', fontFamily: 'Asap', fontWeight: 500, fontStyle: 'normal'
                }
            }
        }
    }

    const options9 = {
        chart: {
            // width: '100%', parentHeightOffset: 0,
            toolbar: { show: false }
        },
        plotOptions: {
            bar: {
                horizontal: true, barHeight: '40%', borderRadius: 6, columnWidth: '%', borderRadiusApplication: 'end', dataLabels: {
                    position: 'top'
                }
            }
        },
        // yAxes: [{ gridLines: { tickMarkLength: 0 }, }],
        // xAxes: [{ gridLines: { tickMarkLength: 0 }, }],
        xAxes: [{ gridLines: { zeroLineColor: 'transparent' } }],
        grid: {
            drawBorder: false, display: false,
            xaxis: { lines: { show: false } },
            yaxis: { lines: { show: false } }
        },
        colors: "#003B4A",
        dataLabels: {
            enabled: true,
            formatter(val) {
                if (val === 60) {
                    return val + '%'
                }
                if (val === 30) {
                    return val + '%'
                }
                if (val === 10) {
                    return val + '%'
                }
            },
            offsetX: 25,
            style: { fontFamily: 'Asap', fontStyle: 'normal', fontWeight: 500, fontSize: "14px", lineHeight: "16px", colors: ['#677E84'] }
        },
        tooltip: { enabled: false },
        xaxis: {
            range: 10,
            categories: [['Liberal'], ['Moderate'], ['Conservative']],
            labels: {
                position: 'bottom',
                style: {
                    colors: ['#000000'], fontSize: '0px', fontFamily: 'Asap', fontWeight: 500
                }
            }
        },
        axisBorder: { show: true, color: '#78909C', height: 1, width: '100%', offsetX: 0, offsetY: 0 },
        axisTicks: { show: true, borderType: 'solid', color: '#78909C', height: 6, offsetX: 0, offsetY: 0 },
        yaxis: {
            forceNiceScale: true, position: 'top', labels: {
                align: 'left',
                style: {
                    colors: ['#677E84'], fontSize: '16px', lineHeight: '18', fontFamily: 'Asap', fontWeight: 500, fontStyle: 'normal'
                }
            }
        }
    }

    const options10 = {
        chart: {
            // width: '100%', parentHeightOffset: 0,
            toolbar: { show: false }
        },
        plotOptions: {
            bar: {
                horizontal: true, barHeight: '40%', borderRadius: 6, columnWidth: '%', borderRadiusApplication: 'end', dataLabels: {
                    position: 'top'
                }
            }
        },
        // yAxes: [{ gridLines: { tickMarkLength: 0 }, }],
        // xAxes: [{ gridLines: { tickMarkLength: 0 }, }],
        xAxes: [{ gridLines: { zeroLineColor: 'transparent' } }],
        grid: {
            drawBorder: false, display: false,
            xaxis: { lines: { show: false } },
            yaxis: { lines: { show: false } }
        },
        colors: "#003B4A",
        dataLabels: {
            enabled: true,
            formatter(val) {
                if (val === 50) {
                    return val + '%'
                }
                if (val === 40) {
                    return val + '%'
                }
                if (val === 10) {
                    return val + '%'
                }
            },
            offsetX: 25,
            style: { fontFamily: 'Asap', fontStyle: 'normal', fontWeight: 500, fontSize: "14px", lineHeight: "16px", colors: ['#677E84'] }
        },
        tooltip: { enabled: false },
        xaxis: {
            range: 10,
            categories: [['English'], ['Spanish'], ['German']],
            labels: {
                position: 'bottom',
                style: {
                    colors: ['#000000'], fontSize: '0px', fontFamily: 'Asap', fontWeight: 500
                }
            }
        },
        axisBorder: { show: true, color: '#78909C', height: 1, width: '100%', offsetX: 0, offsetY: 0 },
        axisTicks: { show: true, borderType: 'solid', color: '#78909C', height: 6, offsetX: 0, offsetY: 0 },
        yaxis: {
            forceNiceScale: true, position: 'top', labels: {
                align: 'left',
                style: {
                    colors: ['#677E84'], fontSize: '16px', lineHeight: '18', fontFamily: 'Asap', fontWeight: 500, fontStyle: 'normal'
                }
            }
        }
    }

    const options11 = {
        chart: {
            // width: '100%', parentHeightOffset: 0,
            toolbar: { show: false }
        },
        plotOptions: {
            bar: {
                horizontal: true, barHeight: '40%', borderRadius: 6, columnWidth: '%', borderRadiusApplication: 'end', dataLabels: {
                    position: 'top'
                }
            }
        },
        // yAxes: [{ gridLines: { tickMarkLength: 0 }, }],
        // xAxes: [{ gridLines: { tickMarkLength: 0 }, }],
        xAxes: [{ gridLines: { zeroLineColor: 'transparent' } }],
        grid: {
            drawBorder: false, display: false,
            xaxis: { lines: { show: false } },
            yaxis: { lines: { show: false } }
        },
        colors: "#003B4A",
        dataLabels: {
            enabled: true,
            formatter(val) {
                if (val === 50) {
                    return val + '%'
                }
                if (val === 50) {
                    return val + '%'
                }
            },
            offsetX: 25,
            style: { fontFamily: 'Asap', fontStyle: 'normal', fontWeight: 500, fontSize: "14px", lineHeight: "16px", colors: ['#677E84'] }
        },
        tooltip: { enabled: false },
        xaxis: {
            range: 10,
            categories: [['Have Kids'], ['Dont', 'Have Kids']],
            labels: {
                position: 'bottom',
                style: {
                    colors: ['#000000'], fontSize: '0px', fontFamily: 'Asap', fontWeight: 500
                }
            }
        },
        axisBorder: { show: true, color: '#78909C', height: 1, width: '100%', offsetX: 0, offsetY: 0 },
        axisTicks: { show: true, borderType: 'solid', color: '#78909C', height: 6, offsetX: 0, offsetY: 0 },
        yaxis: {
            forceNiceScale: true, position: 'top', labels: {
                align: 'left',
                style: {
                    colors: ['#677E84'], fontSize: '16px', lineHeight: '18', fontFamily: 'Asap', fontWeight: 500, fontStyle: 'normal'
                }
            }
        }
    }

    const options12 = {
        chart: {
            // width: '100%', parentHeightOffset: 0,
            toolbar: { show: false }
        },
        plotOptions: {
            bar: {
                horizontal: true, barHeight: '40%', borderRadius: 6, columnWidth: '%', borderRadiusApplication: 'end', dataLabels: {
                    position: 'top'
                }
            }
        },
        // yAxes: [{ gridLines: { tickMarkLength: 0 }, }],
        // xAxes: [{ gridLines: { tickMarkLength: 0 }, }],
        xAxes: [{ gridLines: { zeroLineColor: 'transparent' } }],
        grid: {
            drawBorder: false, display: false,
            xaxis: { lines: { show: false } },
            yaxis: { lines: { show: false } }
        },
        colors: "#003B4A",
        dataLabels: {
            enabled: true,
            formatter(val) {
                if (val === 60) {
                    return val + '%'
                }
                if (val === 40) {
                    return val + '%'
                }
            },
            offsetX: 25,
            style: { fontFamily: 'Asap', fontStyle: 'normal', fontWeight: 500, fontSize: "14px", lineHeight: "16px", colors: ['#677E84'] }
        },
        tooltip: { enabled: false },
        xaxis: {
            range: 10,
            categories: [['Frequently'], ['Sober']],
            labels: {
                position: 'bottom',
                style: {
                    colors: ['#000000'], fontSize: '0px', fontFamily: 'Asap', fontWeight: 500
                }
            }
        },
        axisBorder: { show: true, color: '#78909C', height: 1, width: '100%', offsetX: 0, offsetY: 0 },
        axisTicks: { show: true, borderType: 'solid', color: '#78909C', height: 6, offsetX: 0, offsetY: 0 },
        yaxis: {
            forceNiceScale: true, position: 'top', labels: {
                align: 'left',
                style: {
                    colors: ['#677E84'], fontSize: '16px', lineHeight: '18', fontFamily: 'Asap', fontWeight: 500, fontStyle: 'normal'
                }
            }
        }
    }

    const options13 = {
        chart: {
            // width: '100%', parentHeightOffset: 0,
            toolbar: { show: false }
        },
        plotOptions: {
            bar: {
                horizontal: true, barHeight: '40%', borderRadius: 6, columnWidth: '%', borderRadiusApplication: 'end', dataLabels: {
                    position: 'top'
                }
            }
        },
        // yAxes: [{ gridLines: { tickMarkLength: 0 }, }],
        // xAxes: [{ gridLines: { tickMarkLength: 0 }, }],
        xAxes: [{ gridLines: { zeroLineColor: 'transparent' } }],
        grid: {
            drawBorder: false, display: false,
            xaxis: { lines: { show: false } },
            yaxis: { lines: { show: false } }
        },
        colors: "#003B4A",
        dataLabels: {
            enabled: true,
            formatter(val) {
                if (val === 60) {
                    return val + '%'
                }
                if (val === 30) {
                    return val + '%'
                }
                if (val === 10) {
                    return val + '%'
                }
            },
            offsetX: 25,
            style: { fontFamily: 'Asap', fontStyle: 'normal', fontWeight: 500, fontSize: "14px", lineHeight: "16px", colors: ['#677E84'] }
        },
        tooltip: { enabled: false },
        xaxis: {
            range: 10,
            categories: [['Active'], ['Sometimes'], ['Almost', 'Never']],
            labels: {
                position: 'bottom',
                style: {
                    colors: ['#000000'], fontSize: '0px', fontFamily: 'Asap', fontWeight: 500
                }
            }
        },
        axisBorder: { show: true, color: '#78909C', height: 1, width: '100%', offsetX: 0, offsetY: 0 },
        axisTicks: { show: true, borderType: 'solid', color: '#78909C', height: 6, offsetX: 0, offsetY: 0 },
        yaxis: {
            forceNiceScale: true, position: 'top', labels: {
                align: 'left',
                style: {
                    colors: ['#677E84'], fontSize: '16px', lineHeight: '18', fontFamily: 'Asap', fontWeight: 500, fontStyle: 'normal'
                }
            }
        }
    }

    return (
        <>
            <div>
                
            </div>
        </>
    )

}

export default SponsorshipEventPastTab