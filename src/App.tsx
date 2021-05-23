import React from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, PolarSeries, ColumnSeries, Category,
Tooltip } from '@syncfusion/ej2-react-charts';
import { sampleData } from './data';
import './App.css';
function App() {
  return (
   <ChartComponent title="Weather Statistics" primaryXAxis={{valueType:"Category", labelPlacement:"OnTicks", startAngle: 45, coefficient: 75}}
   primaryYAxis={{minimum:-20, maximum: 20, interval: 5, labelFormat:"{value}°C"}}
   tooltip={{enable:true}}> 
     <Inject services={[PolarSeries, ColumnSeries, Category, Tooltip]}></Inject>
     <SeriesCollectionDirective>
       <SeriesDirective type="Polar" drawType="Column" name="Temperature" dataSource={sampleData} xName="x" yName="y"
       marker={{visible:false}} isClosed={false}></SeriesDirective>
     </SeriesCollectionDirective>
   </ChartComponent>
  );
}

export default App;
