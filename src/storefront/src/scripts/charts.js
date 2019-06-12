import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/graph';
import 'echarts/lib/chart/bar';
import 'echarts/lib/chart/custom';

// import 'echarts/lib/component/axisPointer';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/legend';

// ensure global
import { addGlobal } from './util/window';
import { ECHARTS_GLOBAL } from './util/constants';
addGlobal(ECHARTS_GLOBAL, echarts);

export default echarts;