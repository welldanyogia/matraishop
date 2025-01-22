import ApexCharts from 'apexcharts';
import 'preline'; // If you're using Preline, ensure you import its assets
import { useEffect } from 'react';

export default function TransactionChart() {
    useEffect(() => {
        // ApexCharts Configuration
        const options = {
            chart: {
                height: 500,
                type: 'area',
                toolbar: {
                    show: false,
                },
                zoom: {
                    enabled: false,
                },
            },
            colors: ['#2563eb', '#9333ea'],
            series: [
                {
                    name: 'Income',
                    data: [
                        18000, 51000, 60000, 38000, 88000, 50000, 40000, 52000,
                        88000, 80000, 60000, 70000,
                    ],
                },
                {
                    name: 'Outcome',
                    data: [
                        27000, 38000, 60000, 77000, 40000, 50000, 49000, 29000,
                        42000, 27000, 42000, 50000,
                    ],
                },
            ],
            legend: {
                show: false,
            },
            dataLabels: {
                enabled: false,
            },
            stroke: {
                curve: 'smooth',
                width: 2,
            },
            grid: {
                strokeDashArray: 2,
            },
            fill: {
                type: 'gradient',
                gradient: {
                    type: 'vertical',
                    shadeIntensity: 1,
                    opacityFrom: 0.1,
                    opacityTo: 0.8,
                },
            },
            xaxis: {
                type: 'category',
                tickPlacement: 'on',
                categories: [
                    '25 January 2023',
                    '26 January 2023',
                    '27 January 2023',
                    '28 January 2023',
                    '29 January 2023',
                    '30 January 2023',
                    '31 January 2023',
                    '1 February 2023',
                    '2 February 2023',
                    '3 February 2023',
                    '4 February 2023',
                    '5 February 2023',
                ],
                axisBorder: {
                    show: false,
                },
                axisTicks: {
                    show: false,
                },
                crosshairs: {
                    stroke: {
                        dashArray: 0,
                    },
                    dropShadow: {
                        show: false,
                    },
                },
                tooltip: {
                    enabled: false,
                },
                labels: {
                    style: {
                        colors: '#9ca3af',
                        fontSize: '13px',
                        fontFamily: 'Inter, ui-sans-serif',
                        fontWeight: 400,
                    },
                    formatter: (title) => {
                        if (title) {
                            const [date, month] = title.split(' ');
                            return `${date} ${month.slice(0, 3)}`;
                        }
                        return title;
                    },
                },
            },
            yaxis: {
                labels: {
                    align: 'left',
                    style: {
                        colors: '#9ca3af',
                        fontSize: '13px',
                        fontFamily: 'Inter, ui-sans-serif',
                        fontWeight: 400,
                    },
                    formatter: (value) =>
                        value >= 1000 ? `${value / 1000}k` : value,
                },
            },
            tooltip: {
                x: {
                    format: 'MMMM yyyy',
                },
                y: {
                    formatter: (value) =>
                        `$${value >= 1000 ? `${value / 1000}k` : value}`,
                },
                custom: function (props) {
                    console.log(props);
                    const { categories } = props.ctx.opts.xaxis;
                    const { dataPointIndex } = props;
                    const [date, month] = categories[dataPointIndex].split(' ');
                    return `
            <div class="tooltip p-2">
              <strong>${date} ${month}</strong>
              <hr class="border-gray-500">
              <div class="inline-flex items-center">
                  <span className="text-[13px] text-gray-600 dark:text-neutral-400">
                  ${props.w.globals.seriesNames[0]}: ${props.series[0][dataPointIndex]}
                  </span>
                  <span className="me-2 inline-block size-2.5 rounded-sm bg-blue-600"></span>
              </div>
              <div>${props.w.globals.seriesNames[1]}: ${props.series[1][dataPointIndex]}</div>
            </div>
          `;
                },
            },
            responsive: [
                {
                    breakpoint: 568,
                    options: {
                        chart: {
                            height: 300,
                        },
                        labels: {
                            style: {
                                colors: '#9ca3af',
                                fontSize: '11px',
                                fontFamily: 'Inter, ui-sans-serif',
                                fontWeight: 400,
                            },
                            offsetX: -2,
                            formatter: (title) => title.slice(0, 3),
                        },
                        yaxis: {
                            labels: {
                                align: 'left',
                                minWidth: 0,
                                maxWidth: 140,
                                style: {
                                    colors: '#9ca3af',
                                    fontSize: '11px',
                                    fontFamily: 'Inter, ui-sans-serif',
                                    fontWeight: 400,
                                },
                                formatter: (value) =>
                                    value >= 1000 ? `${value / 1000}k` : value,
                            },
                        },
                    },
                },
            ],
        };

        const chart = new ApexCharts(
            document.querySelector('#hs-curved-area-charts'),
            options,
        );
        chart.render();

        return () => {
            chart.destroy();
        };
    }, []);

    return (
        <div>
            {/* Legend Indicator */}
            {/*<div className="mb-3 flex items-center justify-center gap-x-4 sm:mb-6 sm:justify-between">*/}
            {/*    <div>Transactions</div>*/}
            {/*    <div>*/}
            {/*        <div className="inline-flex items-center">*/}
            {/*            <span className="me-2 inline-block size-2.5 rounded-sm bg-blue-600"></span>*/}
            {/*            <span className="text-[13px] text-gray-600 dark:text-neutral-400">*/}
            {/*                Income*/}
            {/*            </span>*/}
            {/*        </div>*/}
            {/*        <div className="inline-flex items-center">*/}
            {/*            <span className="me-2 inline-block size-2.5 rounded-sm bg-purple-600"></span>*/}
            {/*            <span className="text-[13px] text-gray-600 dark:text-neutral-400">*/}
            {/*                Outcome*/}
            {/*            </span>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
            <div className="mb-3 flex items-center justify-center gap-x-4 sm:mb-6 sm:justify-between">
                <div>Transactions</div>
                <div
                    className={'mb-3 flex items-center justify-center gap-x-4'}
                >
                    <div className="inline-flex items-center">
                        <span className="me-2 inline-block size-2.5 rounded-sm bg-blue-600"></span>
                        <span className="text-[13px] text-gray-600 dark:text-neutral-400">
                            Income
                        </span>
                    </div>
                    <div className="inline-flex items-center">
                        <span className="me-2 inline-block size-2.5 rounded-sm bg-purple-600"></span>
                        <span className="text-[13px] text-gray-600 dark:text-neutral-400">
                            Outcome
                        </span>
                    </div>
                </div>
            </div>
            {/* Chart Container */}
            <div id="hs-curved-area-charts"></div>
        </div>
    );
}
