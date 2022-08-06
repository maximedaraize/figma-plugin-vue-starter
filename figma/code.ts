/// <reference types="@figma/plugin-typings" />

figma.showUI(__html__); // you can update canvas dimension here
figma.ui.onmessage = prop => {
  if (prop.type === 'apply-code') {
    console.log('✅','code was applied');
    if (prop.triggerOne) {
      console.log('🔥','triggerOne was applied', prop.triggerOne);
    }
      figma.notify('notification after execution');
  }

  figma.closePlugin(); // Plugin is done, close it
};
