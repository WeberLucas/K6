import http from 'k6/http';
//import {check} from 'k6';
import {Counter} from 'k6/metrics';
import {Gauge} from 'k6/metrics';
import {Rate} from 'k6/metrics';
import{Trend} from 'k6/metrics';

export const options = {
    vus: 1,
    duration: '3s',
    
}

const chamadas = new Counter ('quandidade de chamadas');
const myGauge = new Gauge('tempo bloqueado');
const myRate = new Rate('taxa req 200');
const myTrend = new Trend('taxa de espera ');

export default function(){
    const req = http.get('http://test.k6.io/');
    chamadas.add(1);
    myGauge.add(req.timings.blocked);
    myRate.add(req.status===200)
    myTrend.add(req.timings.waiting);
}
