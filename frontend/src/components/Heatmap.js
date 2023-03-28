import React from 'react';
import Tooltip from '@uiw/react-tooltip';
import HeatMap from '@uiw/react-heat-map';

const value = [
]

const Heatmapc = () => {
  return (
    <div style={{
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
    }}>
    <HeatMap
      value={value}
      style={{ color: '#fff' }}
      width={'70vw'}
      startDate={new Date('2016/01/01')}
      rectSize={14}
      legendCellSize={0}
      weekLabels={[' ', 'Mon', ' ', 'Wed', ' ', 'Sat', ' ']}
      panelColors={{0:'#262c36'}}
      space={4}
      rectRender={(props, data) => {
        //   if (!data.count) return <rect {...props} />;
          return (
              <Tooltip key={props.key} placement="top" content={`date: ${data.date}`}>
            <rect {...props} />
          </Tooltip>
        );
    }}
    />
    </div>
  )
};
export default Heatmapc