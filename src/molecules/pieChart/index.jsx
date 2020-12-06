import { useSelector } from 'react-redux';
import { ResponsivePie } from '@nivo/pie'

const PieChart = () => {
   const state = useSelector(state => state);
   const valuesPresent = state.tasks.todo.length || state.tasks.inProgress.length || state.tasks.done.length || state.stickyNotes.length;
   const data = [
        {
           id: "To Do",
           label: "To Do",
           value: state.tasks.todo.length
        },
        {
            id: "In Progress",
            label: "In Progress",
            value: state.tasks.inProgress.length
        },
        {
            id: "Done",
            label: "Done",
            value: state.tasks.done.length
        },
        {
            id: "Sticky Notes",
            label: "Sticky Notes",
            value: state.stickyNotes.length
        },
        {
            id: "Empty",
            label: "Empty",
            value: valuesPresent ? 0 : 1
        }
   ];

   const colors = ['rgb(216, 156, 52)', 'rgb(224, 210, 85)', 'rgb(90, 191, 174)', 'rgb(227, 109, 89)', 'rgb(155, 192, 211)' ]
   return (
        <ResponsivePie
            data={data}
            margin={{ top: 40, right: 80, bottom: 0, left: 0 }}
            innerRadius={0.5}
            padAngle={0.7}
            cornerRadius={3}
            colors={colors}
            borderWidth={1}
            borderColor={{ from: 'color', modifiers: [ [ 'darker', 0.2 ] ] }}
            enableRadialLabels={false}
            sliceLabelsSkipAngle={10}
            sliceLabelsTextColor="#333333"
            legends={[
                {
                    anchor: 'right',
                    direction: 'column',
                    justify: false,
                    translateX: 60,
                    itemsSpacing: 10,
                    itemWidth: 100,
                    itemHeight: 18,
                    itemTextColor: '#999',
                    itemDirection: 'left-to-right',
                    itemOpacity: 1,
                    symbolSize: 18,
                    symbolShape: 'circle',
                    effects: [
                        {
                            on: 'hover',
                            style: {
                                itemTextColor: '#000'
                            }
                        }
                    ]
                }
            ]}
        />
    )
};

export default PieChart;
