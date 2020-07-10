import React from 'react';
import SVG from 'react-inlinesvg';

export const Coco = () => <SVG src={require('./assert/coco.svg')} />;
export const CLOSE = (params: any) => <SVG {...params} src={require('./assert/close.svg')} />;