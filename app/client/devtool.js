import React from 'react';
import {createDevTools} from 'redux-devtools';
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';
import Dispatcher from 'redux-devtools-dispatch';
import SliderMonitor from 'redux-slider-monitor';
/**
 * Create the DevTools component and export it.
 */
export default createDevTools(
  <DockMonitor
    toggleVisibilityKey='ctrl-h'
    changePositionKey='ctrl-q'
    changeMonitorKey="ctrl-m"
    defaultIsVisible={true}
  >
    <LogMonitor theme='tomorrow' />
    <Dispatcher />
    <SliderMonitor keyboardEnabled />
  </DockMonitor>
);